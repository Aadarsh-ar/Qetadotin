import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
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
      <section className="bg-background pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container-wide px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-6">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
              Let's discuss your operations.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Every engagement starts with understanding your workflows. Tell us about your operational challenges and we'll determine if we're the right fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <Section className="border-t border-border">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                    className="bg-card border-border focus:border-primary rounded-none h-12"
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
                    className="bg-card border-border focus:border-primary rounded-none h-12"
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
                  className="bg-card border-border focus:border-primary rounded-none h-12"
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
                  className="bg-card border-border focus:border-primary rounded-none min-h-[150px] resize-none"
                  placeholder="What manual processes are consuming your team's time? What workflows would you like to automate?"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full sm:w-auto"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-xl font-semibold mb-4">What happens next</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center flex-shrink-0">1</span>
                  <div>
                    <p className="font-medium mb-1">We review your workflow</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours, we'll analyze your submission and identify potential automation opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center flex-shrink-0">2</span>
                  <div>
                    <p className="font-medium mb-1">Strategy call scheduled</p>
                    <p className="text-sm text-muted-foreground">If there's a potential fit, we'll schedule a 30-minute call to discuss your operations in detail.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center flex-shrink-0">3</span>
                  <div>
                    <p className="font-medium mb-1">Clear next steps</p>
                    <p className="text-sm text-muted-foreground">You'll leave the call knowing exactly whether QETA can help and what that engagement would look like.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border">
              <h3 className="font-semibold mb-3">Who this is for</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We work with teams serious about automation at scale. If you're looking for a quick demo or a proof of concept, we're probably not the right fit. If you're ready to invest in operational infrastructure that delivers measurable results, we should talk.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Contact;
