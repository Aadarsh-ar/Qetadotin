import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/ui/Section";
import { FAQ } from "@/components/ui/FAQ";

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
  return (
    <div className="bg-white text-black min-h-screen relative overflow-hidden font-sans">
      <PageLayout>
        {/* Hero */}
        <section className="relative min-h-[45vh] flex items-center justify-center bg-white pt-32 pb-12 overflow-hidden">
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
                Book a Strategy Session
              </motion.p>
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-serif leading-[1.05] tracking-tight text-black"
              >
                Schedule directly on our calendar.
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-[#251B18]/75 leading-relaxed font-light font-sans max-w-2xl mx-auto"
              >
                Select a time below that works for your team. We will discuss your manual workflow pain points and map out potential automation targets.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Calendar Scheduler Section */}
        <Section className="border-t border-black/5 py-16 bg-white">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Direct Scheduler Call-to-Action Card (7 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 p-8 md:p-12 bg-[#f8f6f1] border border-black/10 rounded-[30px] shadow-sm min-h-[500px] flex flex-col justify-center items-center text-center space-y-8 relative overflow-hidden"
            >
              {/* background subtle elements */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#ff7633]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#ff7633]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="w-20 h-20 rounded-full bg-[#ff7633]/10 border border-[#ff7633]/20 flex items-center justify-center text-[#ff7633] mb-2">
                <Calendar className="h-10 w-10 animate-pulse" />
              </div>

              <div className="space-y-3 max-w-md">
                <h3 className="text-2xl md:text-3xl font-serif text-black font-bold">
                  Open Interactive Calendar
                </h3>
                <p className="text-sm text-[#251B18]/70 leading-relaxed font-sans font-light">
                  To avoid loading lag or security embedding header issues, we open our scheduling pipeline directly in a new secure window. Choose your time slot and synchronize instantly.
                </p>
              </div>

              <a
                href="https://calendly.com/qetadotin/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-3 px-8 py-4 text-xs font-sans uppercase font-bold tracking-widest transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer"
              >
                Schedule Your Call
                <Calendar className="h-4 w-4" />
              </a>

              <p className="text-[10px] text-black/40 font-mono tracking-wider">
                CALENDLY REDIRECT • SEAMLESS SECURE SYNC
              </p>
            </motion.div>

            {/* Right: Context and Steps (5 columns) */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-5 space-y-8"
            >
              <motion.div variants={fadeInUp} className="space-y-6">
                <h2 className="text-3xl font-serif text-black font-semibold">What happens next</h2>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Pick a time", desc: "Select a slot on the calendar that matches your team's availability. You'll receive a calendar invite instantly." },
                    { step: 2, title: "Workflow diagnostic session", desc: "We'll jump on a 30-minute call to audit your current video, audio, and content pipelines." },
                    { step: 3, title: "Deployment blueprint", desc: "You'll leave the call with a clear operational roadmap for automation and system integration." }
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

              <motion.div variants={fadeInUp} className="p-6 bg-[#ff7633]/5 border border-[#ff7633]/20 rounded-[20px] space-y-3">
                <div className="flex items-center gap-2 text-[#ff7633]">
                  <Calendar className="h-5 w-5" />
                  <h3 className="font-serif text-lg text-black font-bold m-0">Pre-call details</h3>
                </div>
                <p className="text-sm text-[#251B18]/75 font-light leading-relaxed font-sans">
                  We suggest inviting key stakeholders (operations coordinators, growth leads, or technical admins) to ensure we cover the entire pipeline landscape during our discussion.
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
