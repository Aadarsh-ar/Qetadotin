import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const emailSchema = z.string().trim().email("Please enter a valid email address").max(255);

export const NewsletterForm = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      toast({
        title: "Invalid email",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    let submitSuccess = false;
    let fallbackUsed = false;

    // Try rate-limited Edge Function first
    try {
      const { data, error } = await supabase.functions.invoke("submit-form", {
        body: {
          formType: "newsletter",
          data: {
            email: validation.data,
          },
        },
      });

      if (!error && !data?.error) {
        submitSuccess = true;
      } else if (data?.error) {
        if (data.error === "already_subscribed") {
          toast({
            title: "Already subscribed",
            description: "This email is already on our newsletter list.",
          });
          setEmail("");
          setIsSubmitting(false);
          return;
        } else if (data.retryAfter) {
          toast({
            title: "Too many requests",
            description: `Please wait ${data.retryAfter} minutes before trying again.`,
            variant: "destructive",
          });
          setIsSubmitting(false);
          return;
        }
      }
    } catch (err) {
      console.warn("Edge function invocation failed, trying direct database insert...", err);
    }

    // Direct database fallback if edge function fails/is not deployed
    if (!submitSuccess) {
      fallbackUsed = true;
      
      // Perform local subscription existence check to replicate unique constraint handling
      const { data: existing, error: checkError } = await supabase
        .from('newsletter_subscriptions')
        .select('id')
        .eq('email', validation.data.toLowerCase())
        .maybeSingle();
        
      if (!checkError && existing) {
        toast({
          title: "Already subscribed",
          description: "This email is already on our newsletter list.",
        });
        setEmail("");
        setIsSubmitting(false);
        return;
      }

      const { error: dbError } = await supabase
        .from('newsletter_subscriptions')
        .insert({
          email: validation.data.toLowerCase(),
        });

      if (dbError) {
        toast({
          title: "Subscription failed",
          description: "There was an error. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
    }

    toast({
      title: fallbackUsed ? "Subscribed! (Direct)" : "Subscribed!",
      description: "You'll receive our latest updates and insights.",
    });
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full"
    >
      <h4 className="text-[10px] uppercase tracking-[0.25em] mb-4 text-primary font-semibold">
        Stay Updated
      </h4>
      <p className="text-xs text-foreground/50 mb-4 font-light leading-relaxed">
        Get AI automation insights delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-background/50 border-border focus:border-primary focus-visible:ring-1 focus-visible:ring-primary rounded-none h-10 flex-1 text-xs"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-none h-10 w-10 bg-primary text-primary-foreground hover:bg-accent flex items-center justify-center flex-shrink-0 transition-colors"
          aria-label="Subscribe"
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </button>
      </form>
    </motion.div>
  );
};
