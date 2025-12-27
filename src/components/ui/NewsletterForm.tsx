import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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

    // Submit via rate-limited edge function
    const { data, error } = await supabase.functions.invoke("submit-form", {
      body: {
        formType: "newsletter",
        data: {
          email: validation.data,
        },
      },
    });

    if (error) {
      toast({
        title: "Subscription failed",
        description: "There was an error. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (data?.error) {
      if (data.error === "already_subscribed") {
        toast({
          title: "Already subscribed",
          description: "This email is already on our newsletter list.",
        });
      } else if (data.retryAfter) {
        toast({
          title: "Too many requests",
          description: `Please wait ${data.retryAfter} minutes before trying again.`,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Subscription failed",
          description: data.message || "There was an error. Please try again.",
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
      return;
    }

    toast({
      title: "Subscribed!",
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
      <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-foreground/50">
        Stay Updated
      </h4>
      <p className="text-sm text-foreground/60 mb-4">
        Get AI automation insights delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/50 border-border/30 focus:border-primary rounded-xl h-10 flex-1"
        />
        <Button
          type="submit"
          size="sm"
          disabled={isSubmitting}
          className="rounded-xl h-10 px-4 bg-primary hover:bg-primary/90"
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </form>
    </motion.div>
  );
};
