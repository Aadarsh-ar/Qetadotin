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

      result = await supabase.from('contact_submissions').insert({
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        company: data.company?.trim() || null,
        message: data.message.trim(),
      });
      
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
