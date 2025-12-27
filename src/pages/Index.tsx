import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Workflow, Users, Bot, Layers, Phone } from "lucide-react";
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

const solutions = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description: "Internal ops, CRM, support, and admin processes automated end-to-end.",
    href: "/solutions#workflow"
  },
  {
    icon: Users,
    title: "AI Revenue & Lead Systems",
    description: "Qualification, outreach intelligence, and pipeline automation at scale.",
    href: "/solutions#revenue"
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Research, extraction, and decision support agents built for your workflows.",
    href: "/solutions#agents"
  },
  {
    icon: Layers,
    title: "System Integration",
    description: "APIs, databases, and existing stack unified into cohesive infrastructure.",
    href: "/solutions#integration"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Systems Audit",
    description: "Analyze workflows, data flows, and operational bottlenecks."
  },
  {
    number: "02",
    title: "Architecture Design",
    description: "Blueprint automation infrastructure aligned to your operations."
  },
  {
    number: "03",
    title: "Build & Deploy",
    description: "Custom production-ready systems deployed to your environment."
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description: "Continuous monitoring, iteration, and performance improvements."
  }
];

const metrics = [
  { value: "68%", label: "Reduced manual processing time" },
  { value: "5", label: "Channels with zero-human lead qualification" },
  { value: "24/7", label: "Autonomous operation capability" }
];

const problems = [
  "Fragmented tools that don't communicate",
  "Manual workflows eating operational capacity",
  "No ownership of automation infrastructure",
  "Automations that break after launch"
];

const teamMembers = [
  {
    name: "Aadarsh",
    role: "Automation & Workflow Architect",
    phone: "+916305367443",
    whatsappLink: "https://wa.me/916305367443"
  },
  {
    name: "Eswar",
    role: "Lead Engineer, AI Integrations",
    phone: "+919391536082",
    whatsappLink: "https://wa.me/919391536082"
  }
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-background">
        <div className="container-wide px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.p 
              variants={fadeInUp}
              className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-6"
            >
              AI Systems Partner
            </motion.p>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-8"
            >
              We build AI systems that run your business, not demos.
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
            >
              QETA designs and deploys custom AI automation infrastructure to eliminate manual work, reduce costs, and scale operations. No fragmented tools. No broken automations. Just systems that work.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button variant="heroOutline" size="xl">
                  See What We Build
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <Section className="border-t border-border">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <SectionHeader
              label="The Problem"
              title="Most 'AI agencies' sell tools. Businesses need systems."
            />
          </div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 p-6 bg-card border border-border"
              >
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-foreground/80">{problem}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Solutions Section */}
      <Section className="border-t border-border">
        <SectionHeader
          label="What We Build"
          title="Production-grade AI systems for operational scale"
          description="Four core system categories designed to replace manual work with reliable automation infrastructure."
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <Link 
                to={solution.href}
                className="group block system-card h-full"
              >
                <solution.icon className="h-6 w-6 text-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {solution.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-foreground/60 group-hover:text-foreground transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Process Section */}
      <Section className="border-t border-border">
        <SectionHeader
          label="How We Work"
          title="From audit to autonomous operation"
          description="A structured approach to building systems that actually work in production."
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative"
            >
              <span className="text-6xl font-bold text-primary/10 absolute -top-4 -left-2">
                {step.number}
              </span>
              <div className="pt-12">
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Metrics Section */}
      <Section className="border-t border-border">
        <SectionHeader
          label="Results"
          title="Measured outcomes, not promises"
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center md:text-left"
            >
              <p className="text-5xl md:text-6xl font-semibold text-foreground mb-3">
                {metric.value}
              </p>
              <p className="text-muted-foreground">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Team Section */}
      <Section className="border-t border-border">
        <SectionHeader
          label="Our Team"
          title="The people behind QETA"
          description="Connect directly with our team to discuss your automation needs."
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 max-w-3xl"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="system-card"
            >
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
              <p className="text-sm text-foreground/70 mb-4 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {member.phone}
              </p>
              <a
                href={member.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="default" className="w-full">
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section dark>
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6"
          >
            If manual work is slowing your growth, it's a systems problem.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 text-lg mb-10"
          >
            Let's discuss how QETA can architect the automation infrastructure your operations need.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact">
              <Button 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none font-medium"
              >
                Schedule a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Index;
