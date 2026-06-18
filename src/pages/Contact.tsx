import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/ui/Section";
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
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
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

    let submitSuccess = false;
    let fallbackUsed = false;

    try {
      const { data, error } = await supabase.functions.invoke("submit-form", {
        body: {
          formType: "contact",
          data: {
            name: validation.data.name,
            email: validation.data.email,
            company: validation.data.company || null,
            message: validation.data.message,
          },
        },
      });

      if (!error && !data?.error) {
        submitSuccess = true;
      } else if (data?.error && data.retryAfter) {
        toast({
          title: "Too many requests",
          description: `Please wait ${data.retryAfter} minutes before submitting again.`,
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
    } catch (err) {
      console.warn("Edge function failed, attempting direct insert...", err);
    }

    if (!submitSuccess) {
      fallbackUsed = true;
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          name: validation.data.name.trim(),
          email: validation.data.email.trim().toLowerCase(),
          company: validation.data.company?.trim() || null,
          message: validation.data.message.trim(),
        });

      if (dbError) {
        toast({
          title: "Submission failed",
          description: "There was an error submitting your request. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
    }
    
    toast({
      title: fallbackUsed ? "Request received (Direct)" : "Request received",
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
    <div className="bg-white text-black min-h-screen relative overflow-hidden font-sans">
      <PageLayout>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-white pt-32 pb-16 overflow-hidden">
          <div className="container-wide text-center relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-3xl mx-auto space-y-6"
            >
              <motion.p
                variants={fadeInUp}
                className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#ff7633] font-bold"
              >
                Get in touch
              </motion.p>
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-serif leading-[1.05] tracking-tight text-black"
              >
                Let's discuss your operations.
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-[#251B18]/75 leading-relaxed font-light font-sans max-w-2xl mx-auto"
              >
                Every engagement starts with understanding your workflows. Tell us about your operational challenges and we'll determine if we're the right fit.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <Section className="border-t border-black/5 py-20 bg-white">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Contact Form Box in warm off-white card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 bg-[#f8f6f1] border border-black/10 rounded-[30px] shadow-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold text-[#251B18]/70">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white border-black/10 focus:border-[#ff7633] focus-visible:ring-1 focus-visible:ring-[#ff7633] rounded-[10px] h-12 text-sm text-black"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs uppercase tracking-widest font-semibold text-[#251B18]/70">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white border-black/10 focus:border-[#ff7633] focus-visible:ring-1 focus-visible:ring-[#ff7633] rounded-[10px] h-12 text-sm text-black"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold text-[#251B18]/70">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white border-black/10 focus:border-[#ff7633] focus-visible:ring-1 focus-visible:ring-[#ff7633] rounded-[10px] h-12 text-sm text-black"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workflow" className="text-xs uppercase tracking-widest font-semibold text-[#251B18]/70">
                    Describe your workflow pain
                  </Label>
                  <Textarea
                    id="workflow"
                    name="workflow"
                    required
                    value={formData.workflow}
                    onChange={handleChange}
                    className="bg-white border-black/10 focus:border-[#ff7633] focus-visible:ring-1 focus-visible:ring-[#ff7633] rounded-[12px] min-h-[150px] resize-none text-sm text-black"
                    placeholder="What manual processes are consuming your team's time? What workflows would you like to automate?"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full btn-gold justify-center flex gap-2.5 items-center h-12 py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Context and Steps */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="space-y-6">
                <h2 className="text-3xl font-serif text-black font-semibold">What happens next</h2>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "We review your workflow", desc: "Within 24 hours, we'll analyze your submission and identify potential automation opportunities." },
                    { step: 2, title: "Strategy call scheduled", desc: "If there's a potential fit, we'll schedule a 30-minute call to discuss your operations in detail." },
                    { step: 3, title: "Clear next steps", desc: "You'll leave the call knowing exactly whether QETADOTIN can help and what that engagement would look like." }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 group">
                      <span className="w-10 h-10 rounded-full bg-[#ff7633]/10 border border-[#ff7633]/25 text-[#ff7633] text-sm font-semibold flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-serif text-lg mb-1 text-black font-bold">{item.title}</p>
                        <p className="text-sm text-[#251B18]/70 font-light leading-relaxed font-sans">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-6 bg-[#ff7633]/5 border border-[#ff7633]/20 rounded-[20px]">
                <h3 className="font-serif text-lg mb-2 text-black font-bold">Who this is for</h3>
                <p className="text-sm text-[#251B18]/75 font-light leading-relaxed font-sans">
                  We work with teams serious about automation at scale. If you're looking for a quick demo or a proof of concept, we're probably not the right fit. If you're ready to invest in operational infrastructure that delivers measurable results, we should talk.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className="border-t border-black/5 bg-[#f8f6f1]/30">
          <FAQ />
        </Section>
      </PageLayout>
    </div>
  );
};

export default Contact;
