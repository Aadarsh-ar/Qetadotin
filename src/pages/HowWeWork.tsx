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

const processSteps = [
  {
    phase: "Phase 1",
    title: "Systems Audit",
    duration: "1-2 weeks",
    description: "We analyze your current workflows, data flows, and operational bottlenecks. This isn't a surface-level review—we map every manual process, every handoff, every potential automation point.",
    deliverables: [
      "Complete workflow documentation",
      "Bottleneck identification report",
      "Data flow analysis",
      "Automation opportunity matrix"
    ]
  },
  {
    phase: "Phase 2",
    title: "Architecture Design",
    duration: "1-2 weeks",
    description: "Based on the audit, we design a comprehensive automation blueprint. Every system is architected for reliability, scalability, and your team's ability to maintain it long-term.",
    deliverables: [
      "Technical architecture document",
      "Integration specifications",
      "Data model design",
      "Implementation roadmap"
    ]
  },
  {
    phase: "Phase 3",
    title: "Build & Deploy",
    duration: "4-8 weeks",
    description: "We build your systems in production-ready quality from day one. No prototypes that need rebuilding. Each component is tested, documented, and deployed to your infrastructure.",
    deliverables: [
      "Production-ready systems",
      "Complete documentation",
      "Team training sessions",
      "Deployment to your environment"
    ]
  },
  {
    phase: "Phase 4",
    title: "Optimize & Scale",
    duration: "Ongoing",
    description: "Post-launch, we monitor performance, iterate on edge cases, and optimize for scale. Your systems improve over time, not degrade.",
    deliverables: [
      "Performance monitoring dashboards",
      "Regular optimization reports",
      "Scaling recommendations",
      "Continuous improvement iterations"
    ]
  }
];

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
      <section className="bg-background pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-orb w-[500px] h-[500px] bg-primary/10 -top-40 -left-40" />
        </div>
        <div className="container-wide px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="pill-accent mb-8 inline-flex">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
              A structured approach to reliable automation.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We don't sell hours. We deliver systems. Every engagement follows a proven methodology designed for production-grade outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Qualification */}
      <Section className="bg-secondary/30">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="glass-card"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Who we work with
            </motion.h2>
            <ul className="space-y-4">
              {workWithUs.map((item, i) => (
                <motion.li 
                  key={i} 
                  variants={fadeInUp}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="glass-card"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Who we don't work with
            </motion.h2>
            <ul className="space-y-4">
              {dontWorkWith.map((item, i) => (
                <motion.li 
                  key={i} 
                  variants={fadeInUp}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <X className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader
          label="The Process"
          title="From audit to autonomous operation"
          description="Every phase has clear deliverables. You know exactly what you're getting and when."
          centered
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-6"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card"
            >
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-widest font-medium bg-accent/10 text-accent mb-2">
                    {step.phase}
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {step.duration}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-4">
                    Deliverables
                  </p>
                  <ul className="space-y-3">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Ownership */}
      <Section className="bg-secondary/30">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionHeader
              label="Ownership"
              title="You own everything we build"
              className="mb-8"
            />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
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
              <motion.div key={i} variants={fadeInUp} className="glass-card !p-6">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark className="rounded-t-[3rem]">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
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