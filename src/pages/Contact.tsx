import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { FAQ } from "@/components/ui/FAQ";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    workflow: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form data
    const validation = contactSchema.safeParse({
      name: formData.name,
      email: formData.email,
      company: formData.company || undefined,
      message: formData.workflow,
    });

    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast({
        title: "Validation error",
        description: firstError.message,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Save to database
    const { error } = await supabase.from("contact_submissions").insert({
      name: validation.data.name,
      email: validation.data.email,
      company: validation.data.company || null,
      message: validation.data.message,
    });

    if (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    toast({
      title: "Request received",
      description: "We'll review your workflow and get back to you within 24 hours.",
    });
    
    setFormData({ name: "", company: "", email: "", workflow: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 gradient-hero-bg" />
        
        {/* Floating orbs */}
        <div className="floating-orb w-[600px] h-[600px] bg-primary/20 -top-40 -left-40" />
        <div className="floating-orb w-[500px] h-[500px] bg-accent/15 -top-20 right-0" style={{ animationDelay: "-5s" }} />
        <div className="floating-orb w-[350px] h-[350px] bg-periwinkle/20 bottom-10 left-1/2" style={{ animationDelay: "-10s" }} />
        
        <div className="container-wide px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span variants={fadeInUp} className="pill-accent mb-8 inline-flex">
              Contact
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8"
            >
              Let's discuss your operations.
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Every engagement starts with understanding your workflows. Tell us about your operational challenges and we'll determine if we're the right fit.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-periwinkle/5 to-accent/5">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-accent rounded-xl h-12"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-accent rounded-xl h-12"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/50 border-border focus:border-accent rounded-xl h-12"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="workflow" className="text-sm font-medium">
                  Describe your workflow pain
                </Label>
                <Textarea
                  id="workflow"
                  name="workflow"
                  required
                  value={formData.workflow}
                  onChange={handleChange}
                  className="bg-background/50 border-border focus:border-accent rounded-xl min-h-[150px] resize-none"
                  placeholder="What manual processes are consuming your team's time? What workflows would you like to automate?"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Request
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-xl font-semibold mb-6">What happens next</h2>
              <div className="space-y-6">
                {[
                  { step: 1, title: "We review your workflow", desc: "Within 24 hours, we'll analyze your submission and identify potential automation opportunities." },
                  { step: 2, title: "Strategy call scheduled", desc: "If there's a potential fit, we'll schedule a 30-minute call to discuss your operations in detail." },
                  { step: 3, title: "Clear next steps", desc: "You'll leave the call knowing exactly whether QETA can help and what that engagement would look like." }
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-accent text-sm font-semibold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-medium mb-1">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card !bg-gradient-to-br !from-accent/10 !to-primary/5 !border-accent/20">
              <h3 className="font-semibold mb-3">Who this is for</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We work with teams serious about automation at scale. If you're looking for a quick demo or a proof of concept, we're probably not the right fit. If you're ready to invest in operational infrastructure that delivers measurable results, we should talk.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-background">
        <FAQ />
      </Section>
    </PageLayout>
  );
};

export default Contact;
