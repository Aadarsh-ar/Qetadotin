import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Workflow, Users, Bot, Layers, Phone, Sparkles, Calendar, Clock } from "lucide-react";
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

const solutions = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description: "Internal ops, CRM, support, and admin processes automated end-to-end.",
    href: "/solutions#workflow",
    gradient: "from-sky-blue/30 to-periwinkle/30"
  },
  {
    icon: Users,
    title: "AI Revenue & Lead Systems",
    description: "Qualification, outreach intelligence, and pipeline automation at scale.",
    href: "/solutions#revenue",
    gradient: "from-periwinkle/30 to-pastel-pink/30"
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Research, extraction, and decision support agents built for your workflows.",
    href: "/solutions#agents",
    gradient: "from-pastel-pink/30 to-peach-coral/30"
  },
  {
    icon: Layers,
    title: "System Integration",
    description: "APIs, databases, and existing stack unified into cohesive infrastructure.",
    href: "/solutions#integration",
    gradient: "from-peach-coral/30 to-warm-lavender/30"
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

const blogPreview = [
  {
    id: "1",
    title: "How AI Automation is Transforming Business Operations",
    summary: "Key trends shaping how businesses leverage AI to streamline workflows.",
    category: "Insights",
    date: "Dec 20, 2024",
    readTime: "8 min"
  },
  {
    id: "2",
    title: "Building Production-Ready AI Agents",
    summary: "Architecture patterns and best practices for deploying AI agents.",
    category: "Engineering",
    date: "Dec 15, 2024",
    readTime: "12 min"
  },
  {
    id: "3",
    title: "The Real Cost of Manual Workflows",
    summary: "We analyzed 50+ businesses to quantify the hidden costs of manual processes.",
    category: "Research",
    date: "Dec 10, 2024",
    readTime: "6 min"
  }
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section - Soft Pastel Gradient */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-32 pb-20 gradient-hero-bg">
        {/* Floating pastel orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="floating-orb w-[600px] h-[600px] bg-sky-blue/40 -top-40 -right-40 opacity-60" />
          <div className="floating-orb w-[500px] h-[500px] bg-pastel-pink/30 bottom-20 -left-40 opacity-50" style={{ animationDelay: "-8s" }} />
          <div className="floating-orb w-[400px] h-[400px] bg-warm-lavender/35 top-1/3 left-1/4 opacity-40" style={{ animationDelay: "-15s" }} />
          <div className="floating-orb w-[300px] h-[300px] bg-peach-coral/30 bottom-40 right-1/4 opacity-45" style={{ animationDelay: "-12s" }} />
        </div>
        
        <div className="container-wide px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-white/60 backdrop-blur-xl text-foreground border border-white/40 shadow-pastel mb-8">
                <Sparkles className="w-4 h-4 mr-2 text-accent-foreground" />
                AI Systems Partner
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-8 text-foreground text-shadow-soft"
            >
              We build AI systems that run your business, not demos.
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
            >
              QETA designs and deploys custom AI automation infrastructure to eliminate manual work, reduce costs, and scale operations. No fragmented tools. No broken automations. Just systems that work.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
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
      <Section className="bg-white/30 backdrop-blur-sm">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <SectionHeader
            label="The Problem"
            title="Most 'AI agencies' sell tools. Businesses need systems."
            className="mb-0"
          />
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card !p-6 flex items-center gap-4"
              >
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-pastel-pink to-peach-coral flex-shrink-0" />
                <p className="text-foreground/80">{problem}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Solutions Section */}
      <Section>
        <SectionHeader
          label="What We Build"
          title="Production-grade AI systems for operational scale"
          description="Four core system categories designed to replace manual work with reliable automation infrastructure."
          centered
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
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
                className="group interactive-card block h-full"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 shadow-pastel`}>
                  <solution.icon className="h-6 w-6 text-foreground/70" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-foreground transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {solution.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-foreground/60 group-hover:text-accent-foreground transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Process Section */}
      <Section className="bg-gradient-to-br from-periwinkle/20 via-transparent to-pastel-pink/20">
        <SectionHeader
          label="How We Work"
          title="From audit to autonomous operation"
          description="A structured approach to building systems that actually work in production."
          centered
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card text-center"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-sky-blue/40 to-periwinkle/40 text-foreground font-semibold text-lg mb-6 shadow-pastel">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Metrics Section */}
      <Section>
        <SectionHeader
          label="Results"
          title="Measured outcomes, not promises"
          centered
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card text-center"
            >
              <p className="text-5xl md:text-6xl font-semibold text-foreground mb-3 gradient-text-pastel">
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
      <Section className="bg-gradient-to-br from-warm-lavender/20 via-transparent to-sky-blue/20">
        <SectionHeader
          label="Our Team"
          title="The people behind QETA"
          description="Connect directly with our team to discuss your automation needs."
          centered
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-blue/50 to-periwinkle/50 flex items-center justify-center mx-auto mb-6 shadow-pastel">
                <span className="text-2xl font-semibold text-foreground">{member.name[0]}</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
              <p className="text-sm text-foreground/70 mb-6 flex items-center justify-center gap-2">
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

      {/* Blog Section */}
      <Section>
        <SectionHeader
          label="From Our Blog"
          title="Insights, Updates & Learning"
          description="Explore our thoughts on AI automation, system architecture, and operational efficiency."
          centered
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {blogPreview.map((post) => (
            <motion.div key={post.id} variants={fadeInUp}>
              <Link to={`/blog`} className="block group h-full">
                <div className="blog-card h-full p-6 md:p-8 flex flex-col">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide bg-gradient-to-r from-sky-blue/30 to-periwinkle/30 text-foreground/70 w-fit mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-accent-foreground transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/30">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/blog">
            <Button variant="heroOutline" size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary/40 via-periwinkle/40 to-accent/30 rounded-t-[3rem] backdrop-blur-sm">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium mb-8 bg-white/50 backdrop-blur-sm text-foreground/70 border border-white/30">
              Get Started
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-foreground"
          >
            If manual work is slowing your growth, it's a systems problem.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground/60 text-lg mb-12"
          >
            Let's discuss how QETA can architect the automation infrastructure your operations need.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/contact">
              <Button variant="hero" size="xl">
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