import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";

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

// Process steps removed as per user request

const workWithUs = [
  "Teams serious about operational automation",
  "Organizations ready to own their infrastructure",
  "Companies with clear workflow pain points",
  "Leadership committed to process improvement"
];

const dontWorkWith = [
  "Companies looking for quick demos or proofs of concept",
  "Organizations without executive sponsorship",
  "Teams not ready to document their processes",
  "Projects without clear success metrics"
];

const HowWeWork = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-orb w-[500px] h-[500px] bg-primary-foreground/10 -top-40 -left-40" />
        </div>
        <div className="container-wide px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-primary-foreground/10 text-primary-foreground mb-8">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8 text-primary-foreground">
              A structured approach to reliable automation.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed">
              We don't sell hours. We deliver systems. Every engagement follows a proven methodology designed for production-grade outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Qualification */}
      <Section className="bg-primary text-primary-foreground">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-primary-foreground/10"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-primary-foreground">
              Who we work with
            </motion.h2>
            <ul className="space-y-4">
              {workWithUs.map((item, i) => (
                <motion.li 
                  key={i} 
                  variants={fadeInUp}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-primary-foreground/10"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-primary-foreground">
              Who we don't work with
            </motion.h2>
            <ul className="space-y-4">
              {dontWorkWith.map((item, i) => (
                <motion.li 
                  key={i} 
                  variants={fadeInUp}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <X className="h-3.5 w-3.5 text-primary-foreground/60" />
                  </div>
                  <span className="text-primary-foreground/60">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Ownership */}
      <Section className="bg-primary text-primary-foreground">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-primary-foreground/10 text-primary-foreground mb-4">
              Ownership
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-primary-foreground">
              You own everything we build
            </h2>
            <div className="space-y-6 text-primary-foreground/70 leading-relaxed">
              <p>
                Every system we build is deployed to your infrastructure. You own the code, the data, the integrations—everything. We don't create dependencies. We create assets.
              </p>
              <p>
                Our goal is to make ourselves unnecessary. The systems we build should run without us. Documentation, training, and knowledge transfer are built into every engagement.
              </p>
            </div>
          </div>
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {[
              { title: "Full source code ownership", desc: "Every line of code deployed to your repositories." },
              { title: "Complete documentation", desc: "Technical docs your team can actually use." },
              { title: "Team training included", desc: "Your team understands and can maintain the systems." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
                <h3 className="font-semibold mb-2 text-primary-foreground">{item.title}</h3>
                <p className="text-sm text-primary-foreground/60">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground pb-32">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-primary-foreground">
              Ready to start the conversation?
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-12">
              A strategy call is the first step. We'll discuss your workflows, identify opportunities, and determine if we're the right fit.
            </p>
            <Link to="/contact">
              <Button 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full font-medium shadow-xl"
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default HowWeWork;