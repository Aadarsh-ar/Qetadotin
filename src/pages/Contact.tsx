import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, Mail, User, MessageSquare } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/ui/Section";
import { FAQ } from "@/components/ui/FAQ";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
    email: "",
    phone: "",
    service: "avatars",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation error",
        description: "Please fill in all required fields (Name, Email, Message).",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke("submit-form", {
        body: {
          formType: "contact",
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
          },
        },
      });

      if (error) {
        // Extract error message from function error context if possible
        console.error("Function invocation error details:", error);
        throw error;
      }

      toast({
        title: "Request received",
        description: "We'll review your details and get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "avatars",
        message: ""
      });
    } catch (err: any) {
      console.error("Submission failed:", err);
      toast({
        title: "Submission error",
        description: err.message || "There was a problem submitting your inquiry. Please try booking directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-black min-h-screen relative overflow-hidden font-sans">
      <PageLayout>
        {/* Hero */}
        <section className="relative min-h-[42vh] flex items-center justify-center bg-white pt-32 pb-12 overflow-hidden">
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
                Inquiry & Scheduling
              </motion.p>
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-serif leading-[1.05] tracking-tight text-black"
              >
                Let's construct your systems.
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-[#251B18]/75 leading-relaxed font-light font-sans max-w-2xl mx-auto"
              >
                Drop your workflow parameters below or choose a slot directly on our calendar.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact and Scheduler Section */}
        <Section className="border-t border-black/5 py-16 bg-white">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Form (7 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 p-8 md:p-10 bg-[#f8f6f1] border border-black/10 rounded-[30px] shadow-sm space-y-6"
            >
              <div className="space-y-1">
                <h3 className="text-2xl font-serif text-black font-bold">Drop us a line</h3>
                <p className="text-xs text-[#251B18]/65 font-sans font-light">
                  Fill out the parameters below and our pipeline architects will review your project specs.
                </p>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-[#251B18]/70 flex items-center gap-1.5">
                    <User className="h-3 w-3 text-[#ff7633]" /> Name
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-black/10 focus:border-[#ff7633] focus:ring-1 focus:ring-[#ff7633] rounded-[10px] h-11 px-4 text-xs text-black transition-all outline-none font-sans"
                    placeholder="Your Name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-[#251B18]/70 flex items-center gap-1.5">
                      <Mail className="h-3 w-3 text-[#ff7633]" /> Email Address
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-black/10 focus:border-[#ff7633] focus:ring-1 focus:ring-[#ff7633] rounded-[10px] h-11 px-4 text-xs text-black transition-all outline-none font-sans"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-[#251B18]/70 flex items-center gap-1.5">
                      <Phone className="h-3 w-3 text-[#ff7633]" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-black/10 focus:border-[#ff7633] focus:ring-1 focus:ring-[#ff7633] rounded-[10px] h-11 px-4 text-xs text-black transition-all outline-none font-sans"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-[#251B18]/70">
                    Primary Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-black/10 focus:border-[#ff7633] focus:ring-1 focus:ring-[#ff7633] rounded-[10px] h-11 px-4 text-xs text-black transition-all outline-none cursor-pointer font-sans"
                  >
                    <option value="avatars">AI Avatars & Video Production</option>
                    <option value="voice">Voice Cloning & Translation</option>
                    <option value="ads">Performance AI Ad Composites</option>
                    <option value="automation">Set-and-Forget Publishing Systems</option>
                    <option value="full-pipeline">Enterprise Content Pipeline Audit</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-[#251B18]/70 flex items-center gap-1.5">
                    <MessageSquare className="h-3 w-3 text-[#ff7633]" /> Workflow Bottlenecks
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-white border border-black/10 focus:border-[#ff7633] focus:ring-1 focus:ring-[#ff7633] rounded-[10px] p-4 text-xs text-black transition-all outline-none resize-none font-sans"
                    placeholder="Describe your current manual steps or scaling goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gold justify-center flex gap-2 items-center h-12 text-xs font-sans font-bold uppercase tracking-widest transition-transform hover:scale-[1.01]"
                >
                  {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}
                </button>
              </form>
            </motion.div>

            {/* Right: Calendly Scheduler and Details (5 columns) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Calendly Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="p-6 md:p-8 bg-[#f8f6f1] border border-black/10 rounded-[28px] shadow-sm flex flex-col items-center text-center space-y-5 relative overflow-hidden"
              >
                {/* background subtle elements */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#ff7633]/5 rounded-full blur-xl pointer-events-none" />
                
                <div className="w-12 h-12 rounded-full bg-[#ff7633]/10 border border-[#ff7633]/20 flex items-center justify-center text-[#ff7633]">
                  <Calendar className="h-6 w-6 animate-pulse" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-lg font-serif text-black font-bold">Or Book Directly</h4>
                  <p className="text-xs text-[#251B18]/70 leading-relaxed font-sans font-light">
                    Want to lock in a time slot instantly? Bypass the form and synchronize directly on our calendar.
                  </p>
                </div>
                <a
                  href="https://calendly.com/qetadotin/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full justify-center inline-flex items-center gap-2 py-3 text-xs font-sans font-bold uppercase tracking-wider hover:scale-[1.02] transition-transform"
                >
                  Schedule Strategy Call
                  <Calendar className="h-3.5 w-3.5" />
                </a>
              </motion.div>

              {/* What Happens Next */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="space-y-6"
              >
                <h3 className="text-2xl font-serif text-black font-semibold">What happens next</h3>
                <div className="space-y-5">
                  {[
                    { step: 1, title: "Diagnostic audit", desc: "We'll study your submitted details or pre-call checklist to outline potential bottlenecks." },
                    { step: 2, title: "30-Min workflow call", desc: "We map out exactly which node engines or video pipelines can compress your manual production cycles." },
                    { step: 3, title: "Custom blueprint", desc: "You receive a tailored cost/telemetry blueprint detailing the integration roadmap." }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 group">
                      <span className="w-8 h-8 rounded-full bg-[#ff7633]/10 border border-[#ff7633]/25 text-[#ff7633] text-xs font-semibold flex items-center justify-center flex-shrink-0 font-mono">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-serif text-sm mb-0.5 text-black font-bold">{item.title}</p>
                        <p className="text-xs text-[#251B18]/70 leading-relaxed font-sans font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
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
