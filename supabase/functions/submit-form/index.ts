import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// In-memory rate limit store (resets when function restarts)
// For production, consider using Redis or a database table
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_CONTACT = 5; // 5 contact submissions per 15 minutes
const MAX_REQUESTS_NEWSLETTER = 3; // 3 newsletter subscriptions per 15 minutes

function getClientIP(req: Request): string {
  // Try to get real IP from various headers
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  const realIP = req.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }
  // Fallback to a default identifier
  return 'unknown';
}

function checkRateLimit(identifier: string, maxRequests: number): { allowed: boolean; remainingRequests: number; resetIn: number } {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  if (!record || now > record.resetTime) {
    // Create new rate limit record
    rateLimitStore.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remainingRequests: maxRequests - 1, resetIn: RATE_LIMIT_WINDOW_MS };
  }

  if (record.count >= maxRequests) {
    return { 
      allowed: false, 
      remainingRequests: 0, 
      resetIn: record.resetTime - now 
    };
  }

  // Increment counter
  record.count++;
  rateLimitStore.set(identifier, record);
  return { 
    allowed: true, 
    remainingRequests: maxRequests - record.count, 
    resetIn: record.resetTime - now 
  };
}

// Clean up expired entries periodically
function cleanupExpiredEntries() {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formType, data } = await req.json();
    
    if (!formType || !data) {
      return new Response(
        JSON.stringify({ error: 'Missing formType or data' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const clientIP = getClientIP(req);
    const rateLimitKey = `${formType}:${clientIP}`;
    const maxRequests = formType === 'contact' ? MAX_REQUESTS_CONTACT : MAX_REQUESTS_NEWSLETTER;

    console.log(`Form submission attempt - Type: ${formType}, IP: ${clientIP}`);

    // Check rate limit
    const rateLimit = checkRateLimit(rateLimitKey, maxRequests);
    
    if (!rateLimit.allowed) {
      const resetInMinutes = Math.ceil(rateLimit.resetIn / 60000);
      console.log(`Rate limit exceeded for ${rateLimitKey}`);
      return new Response(
        JSON.stringify({ 
          error: 'Too many requests. Please try again later.',
          retryAfter: resetInMinutes
        }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
            'Retry-After': String(Math.ceil(rateLimit.resetIn / 1000))
          } 
        }
      );
    }

    // Create Supabase client with service role
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    let result;
    
    if (formType === 'contact') {
      // Validate contact form data
      if (!data.name || !data.email || !data.message) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields: name, email, message' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Input length validation
      if (data.name.length > 100 || data.email.length > 255 || data.message.length > 2000) {
        return new Response(
          JSON.stringify({ error: 'Input exceeds maximum length' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Format message with service interest and phone number if present
      const phoneStr = data.phone ? `[Phone: ${data.phone}] ` : '';
      const serviceStr = data.service ? `[Service Interest: ${data.service}] ` : '';
      const fullMessage = `${phoneStr}${serviceStr}${data.message}`;

      result = await supabase.from('contact_submissions').insert({
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        company: data.service || null,
        message: fullMessage.trim(),
      });

      if (!result.error) {
        const resendApiKey = Deno.env.get('RESEND_API_KEY');
        if (resendApiKey) {
          console.log('RESEND_API_KEY found, triggering emails...');
          
          // 1. Send immediate email to admin (inqeta@gmail.com)
          try {
            const adminEmailBody = {
              from: 'QETADOTIN Inquiry <onboarding@resend.dev>',
              to: 'inqeta@gmail.com',
              subject: `New Lead Inquiry: ${data.name.trim()}`,
              html: `
                <div style="font-family: sans-serif; max-width: 600px; color: #222; line-height: 1.6; border: 1px solid #eee; padding: 20px; border-radius: 12px;">
                  <h2 style="color: #ff7633; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 0;">New Inquiry</h2>
                  <p><strong>Name:</strong> ${data.name.trim()}</p>
                  <p><strong>Email:</strong> ${data.email.trim()}</p>
                  <p><strong>Phone:</strong> ${data.phone ? data.phone.trim() : 'N/A'}</p>
                  <p><strong>Service Interest:</strong> ${data.service ? data.service.trim() : 'N/A'}</p>
                  <p><strong>Message / Workflow Bottlenecks:</strong></p>
                  <blockquote style="border-left: 3px solid #ff7633; padding-left: 12px; margin-left: 0; color: #555;">
                    ${data.message.trim().replace(/\n/g, '<br />')}
                  </blockquote>
                  <p style="font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 10px; margin-top: 20px;">
                    Sent from QETADOTIN Lead Pipeline System
                  </p>
                </div>
              `
            };

            const adminRes = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${resendApiKey}`,
              },
              body: JSON.stringify(adminEmailBody),
            });
            
            console.log('Admin email dispatch status:', adminRes.status);
          } catch (e) {
            console.error('Failed to dispatch admin email:', e);
          }

          // 2. Schedule thank you email to visitor (5 minutes delay)
          try {
            const scheduledTime = new Date(Date.now() + 5 * 60 * 1000).toISOString();
            
            const visitorEmailBody = {
              from: 'QETADOTIN Operations <onboarding@resend.dev>',
              to: data.email.trim().toLowerCase(),
              subject: 'Thank you for reaching out to QETADOTIN',
              scheduled_at: scheduledTime,
              html: `
                <div style="font-family: sans-serif; max-width: 600px; color: #222; line-height: 1.6; border: 1px solid #eee; padding: 25px; border-radius: 12px; border-top: 4px solid #ff7633;">
                  <h2 style="color: #111; margin: 0; font-family: serif;">QETADOTIN</h2>
                  <span style="font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #ff7633; font-weight: bold;">Systems that scale your brand</span>
                  
                  <p style="margin-top: 20px;">Hi ${data.name.split(' ')[0]},</p>
                  
                  <p>Thank you for submitting your workflow parameters and connecting with us. We have successfully registered your inquiry regarding <strong>${data.service || 'our content systems'}</strong>.</p>
                  
                  <p>Our team is reviewing the manual bottlenecks you highlighted to prepare a custom diagnostics audit. We want to ensure our session delivers immediately actionable strategies for your pipelines.</p>
                  
                  <p>If you haven't booked a specific time slot yet, we invite you to synchronize directly on our interactive calendar:</p>
                  
                  <p style="margin: 25px 0;">
                    <a href="https://calendly.com/qetadotin/strategy-call" target="_blank" style="background-color: #ff7633; color: white; padding: 12px 24px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; display: inline-block;">Schedule Strategy Call</a>
                  </p>
                  
                  <p>We look forward to speaking soon and engineering the engines behind your brand.</p>
                  
                  <p style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px; font-size: 12px; color: #777;">
                    Best regards,<br />
                    <strong>The QETADOTIN Team</strong><br />
                    <a href="mailto:inqeta@gmail.com" style="color: #ff7633; text-decoration: none;">inqeta@gmail.com</a>
                  </p>
                </div>
              `
            };

            const visitorRes = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${resendApiKey}`,
              },
              body: JSON.stringify(visitorEmailBody),
            });

            console.log('Visitor thank you email scheduled status:', visitorRes.status);
          } catch (e) {
            console.error('Failed to schedule visitor thank-you email:', e);
          }
        } else {
          console.warn('RESEND_API_KEY is not defined. Email skip diagnostics triggered.');
        }
      }
      
    } else if (formType === 'newsletter') {
      // Validate newsletter data
      if (!data.email) {
        return new Response(
          JSON.stringify({ error: 'Missing required field: email' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (data.email.length > 255) {
        return new Response(
          JSON.stringify({ error: 'Email exceeds maximum length' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      result = await supabase.from('newsletter_subscriptions').insert({
        email: data.email.trim().toLowerCase(),
      });
      
    } else {
      return new Response(
        JSON.stringify({ error: 'Invalid form type' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (result.error) {
      console.error('Database error:', result.error);
      
      // Handle duplicate email for newsletter
      if (result.error.code === '23505') {
        return new Response(
          JSON.stringify({ error: 'already_subscribed', message: 'This email is already subscribed.' }),
          { status: 409, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: 'Failed to submit form' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Periodic cleanup
    cleanupExpiredEntries();

    console.log(`Form submitted successfully - Type: ${formType}, Remaining requests: ${rateLimit.remainingRequests}`);
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        remainingRequests: rateLimit.remainingRequests 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in submit-form function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
