import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";

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
      <section className="bg-background pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container-wide px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-6">
              How We Work
            </p>
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
      <Section className="border-t border-border">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Who we work with
            </motion.h2>
            <ul className="space-y-4">
              {workWithUs.map((item, i) => (
                <motion.li 
                  key={i} 
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Who we don't work with
            </motion.h2>
            <ul className="space-y-4">
              {dontWorkWith.map((item, i) => (
                <motion.li 
                  key={i} 
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Process */}
      <Section className="border-t border-border bg-card">
        <SectionHeader
          label="The Process"
          title="From audit to autonomous operation"
          description="Every phase has clear deliverables. You know exactly what you're getting and when."
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="grid lg:grid-cols-12 gap-8 p-8 bg-background border border-border"
            >
              <div className="lg:col-span-2">
                <p className="text-sm uppercase tracking-widest font-medium text-accent mb-2">
                  {step.phase}
                </p>
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
                <ul className="space-y-2">
                  {step.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Ownership */}
      <Section className="border-t border-border">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <SectionHeader
              label="Ownership"
              title="You own everything we build"
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
          <div className="space-y-4">
            <div className="p-6 bg-card border border-border">
              <h3 className="font-semibold mb-2">Full source code ownership</h3>
              <p className="text-sm text-muted-foreground">
                Every line of code deployed to your repositories.
              </p>
            </div>
            <div className="p-6 bg-card border border-border">
              <h3 className="font-semibold mb-2">Complete documentation</h3>
              <p className="text-sm text-muted-foreground">
                Technical docs your team can actually use.
              </p>
            </div>
            <div className="p-6 bg-card border border-border">
              <h3 className="font-semibold mb-2">Team training included</h3>
              <p className="text-sm text-muted-foreground">
                Your team understands and can maintain the systems.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Ready to start the conversation?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10">
            A strategy call is the first step. We'll discuss your workflows, identify opportunities, and determine if we're the right fit.
          </p>
          <Link to="/contact">
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none font-medium"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
};

export default HowWeWork;
