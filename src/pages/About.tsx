import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
};

const principles = [
  {
    title: "Systems over tools",
    description: "Tools are commodities. Systems are assets. We build infrastructure that compounds value over time, not point solutions that create dependencies."
  },
  {
    title: "Reliability over speed",
    description: "Fast deployment means nothing if systems break in production. We optimize for stability, predictability, and long-term operational value."
  },
  {
    title: "Ownership over dependency",
    description: "You own everything we build. Full source code, complete documentation, trained team. Our goal is to make ourselves unnecessary."
  },
  {
    title: "Outcomes over activity",
    description: "We measure success by operational impact—time saved, capacity created, friction eliminated. Not by features shipped or hours logged."
  }
];

const About = () => {
  return (
    <PageLayout>
      {/* Hero - Pastel Gradient */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden gradient-hero-bg -mt-24 pt-24">
        {/* Floating pastel orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="floating-orb w-[600px] h-[600px] bg-warm-lavender/40 -top-40 -left-40 opacity-60" />
          <div className="floating-orb w-[400px] h-[400px] bg-sky-blue/30 bottom-20 -right-40 opacity-50" style={{ animationDelay: "-10s" }} />
          <div className="floating-orb w-[300px] h-[300px] bg-peach-coral/35 top-1/3 right-1/4 opacity-40" style={{ animationDelay: "-5s" }} />
        </div>
        
        <div className="container-wide px-6 md:px-12 lg:px-20 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-white/60 backdrop-blur-xl text-foreground border border-white/40 shadow-pastel mb-8"
            >
              <Sparkles className="w-4 h-4 mr-2 text-accent-foreground animate-pulse" />
              About QETA
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8 text-foreground text-shadow-soft"
            >
              Built to solve operational problems, not chase trends.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <Section className="bg-gradient-to-br from-periwinkle/15 via-transparent to-pastel-pink/15">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <SectionHeader
              label="Philosophy"
              title="Why QETA exists"
              className="mb-8"
            />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                QETA was founded on a simple observation: most businesses don't need more AI tools. They need systems that actually work in production.
              </p>
              <p>
                The AI industry is full of demos, prototypes, and proofs of concept. What's missing is reliable infrastructure—systems that run without constant maintenance, scale with the business, and create measurable operational value.
              </p>
              <p>
                We focus exclusively on production-grade automation infrastructure. No experiments, no pilots, no flashy demos. Just systems that eliminate manual work and scale operations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="space-y-4"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8, scale: 1.01, transition: { duration: 0.2 } }}
                className="glass-card !p-6 cursor-default"
              >
                <h3 className="font-semibold mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Approach */}
      <Section className="bg-white/30 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <SectionHeader
              label="Our Approach"
              title="Automation is only meaningful when it's reliable"
              centered
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="space-y-6 text-muted-foreground leading-relaxed text-lg"
          >
            <p>
              Every system we build follows the same standard: it must work in production without constant intervention. This isn't a high bar—it's the minimum requirement for operational infrastructure.
            </p>
            <p>
              We don't chase the newest AI models or the latest tooling trends. We use proven, reliable technology that delivers consistent results. The goal is operational value, not technical novelty.
            </p>
            <p>
              Our engagements are structured for clarity. Fixed phases, clear deliverables, transparent timelines. You know exactly what you're getting and when you're getting it.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* The Name */}
      <Section className="bg-gradient-to-br from-warm-lavender/15 via-transparent to-sky-blue/15">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <SectionHeader
              label="The Name"
              title="QETA"
              className="mb-8"
            />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The wolf represents intelligence, autonomy, and precision. The mountain represents scale, stability, and long-term infrastructure.
              </p>
              <p>
                Together, they embody what we build: intelligent systems with the stability to run at scale. Not flashy tools, but foundational infrastructure.
              </p>
            </div>
          </motion.div>
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
              className="w-56 h-56 md:w-72 md:h-72 glass-card flex items-center justify-center shadow-pastel-lg"
            >
              <img 
                src={logo} 
                alt="QETA Logo" 
                className="w-36 h-36 md:w-48 md:h-48 object-contain"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-primary/40 via-periwinkle/40 to-accent/30 rounded-t-[3rem] backdrop-blur-sm">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium mb-8 bg-white/50 backdrop-blur-sm text-foreground/70 border border-white/30"
            >
              Get Started
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-foreground">
              Ready to discuss your operations?
            </h2>
            <p className="text-foreground/60 text-lg mb-12">
              No sales pitch. Just a conversation about your workflows and whether automation infrastructure makes sense.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default About;