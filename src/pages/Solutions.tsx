import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Workflow, Users, Bot, Layers, Check, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
};

const solutions = [
  {
    id: "workflow",
    icon: Workflow,
    title: "AI Workflow Automation",
    subtitle: "Eliminate operational bottlenecks",
    description: "End-to-end automation of internal operations, CRM processes, support workflows, and administrative tasks. Systems that run without human intervention.",
    forWho: ["Operations teams drowning in manual processes", "Companies scaling faster than their ops capacity", "Organizations with repetitive, rule-based workflows"],
    examples: [
      "Automated onboarding sequences across HR, IT, and team leads",
      "CRM data enrichment and lead routing without manual input",
      "Support ticket classification and intelligent escalation",
      "Document processing and approval workflows"
    ],
    outcome: "Operational capacity scales without headcount. Teams focus on judgment, not data entry.",
    gradient: "from-sky-blue/40 to-periwinkle/40"
  },
  {
    id: "revenue",
    icon: Users,
    title: "AI Revenue & Lead Systems",
    subtitle: "Intelligent pipeline automation",
    description: "Autonomous lead qualification, outreach intelligence, and pipeline automation. Systems that identify, score, and engage prospects without manual oversight.",
    forWho: ["Sales teams spending time on unqualified leads", "Revenue operations needing consistent qualification", "Companies scaling outreach across multiple channels"],
    examples: [
      "Multi-channel lead scoring with behavioral signals",
      "Automated prospect research and personalization",
      "Pipeline velocity tracking and intervention alerts",
      "Reply prediction and optimal timing systems"
    ],
    outcome: "Revenue teams engage only high-intent prospects. Pipeline moves faster with less friction.",
    gradient: "from-periwinkle/40 to-pastel-pink/40"
  },
  {
    id: "agents",
    icon: Bot,
    title: "Custom AI Agents",
    subtitle: "Autonomous decision support",
    description: "Purpose-built AI agents for research, data extraction, analysis, and decision support. Agents that operate within your workflows and learn from your data.",
    forWho: ["Teams doing repetitive research and analysis", "Organizations needing real-time data extraction", "Companies requiring specialized domain agents"],
    examples: [
      "Market research agents monitoring competitive signals",
      "Document analysis agents extracting structured data",
      "Customer insight agents synthesizing feedback patterns",
      "Compliance agents monitoring regulatory requirements"
    ],
    outcome: "Specialized intelligence running 24/7. Human expertise amplified, not replaced.",
    gradient: "from-pastel-pink/40 to-peach-coral/40"
  },
  {
    id: "integration",
    icon: Layers,
    title: "System Integration",
    subtitle: "Unified automation infrastructure",
    description: "APIs, databases, and existing tools unified into cohesive automation infrastructure. No more siloed systems or manual data transfer between platforms.",
    forWho: ["Organizations with fragmented tool stacks", "Companies needing real-time data synchronization", "Teams tired of manual imports and exports"],
    examples: [
      "Bidirectional CRM and marketing platform sync",
      "Real-time inventory and order management integration",
      "Unified customer data across support, sales, and product",
      "Custom API development for proprietary systems"
    ],
    outcome: "Single source of truth across all systems. Data flows automatically where it's needed.",
    gradient: "from-peach-coral/40 to-warm-lavender/40"
  }
];

const Solutions = () => {
  return (
    <PageLayout>
      {/* Hero - Pastel Gradient */}
      <section className="min-h-[70vh] flex items-center relative overflow-hidden gradient-hero-bg -mt-24 pt-24">
        {/* Floating pastel orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="floating-orb w-[500px] h-[500px] bg-periwinkle/40 -top-40 -right-40 opacity-60" />
          <div className="floating-orb w-[400px] h-[400px] bg-pastel-pink/30 bottom-20 -left-40 opacity-50" style={{ animationDelay: "-8s" }} />
          <div className="floating-orb w-[300px] h-[300px] bg-sky-blue/35 top-1/2 left-1/4 opacity-40" style={{ animationDelay: "-12s" }} />
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
              Solutions
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8 text-foreground text-shadow-soft"
            >
              AI systems built for operations, not demos.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Four core categories of production-grade automation infrastructure. Each designed to eliminate manual work and scale with your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((solution, index) => (
        <Section 
          key={solution.id} 
          id={solution.id}
          className={index % 2 === 0 ? "bg-white/30 backdrop-blur-sm" : "bg-gradient-to-br from-periwinkle/10 via-transparent to-pastel-pink/10"}
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <motion.div 
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-8 shadow-pastel`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <solution.icon className="h-7 w-7 text-foreground/70" strokeWidth={1.5} />
              </motion.div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium bg-white/50 backdrop-blur-sm text-foreground/70 border border-white/30 mb-4">
                {solution.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                {solution.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {solution.description}
              </p>
              
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-4">
                  Built for
                </h3>
                <ul className="space-y-3">
                  {solution.forWho.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <motion.div 
                        className="w-5 h-5 rounded-full bg-gradient-to-r from-sky-blue/40 to-periwinkle/40 flex items-center justify-center mt-0.5 flex-shrink-0 shadow-pastel"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Check className="h-3 w-3 text-foreground/70" />
                      </motion.div>
                      <span className="text-foreground/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Discuss your workflow
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-4">
                  Example workflows
                </h3>
                <div className="space-y-3">
                  {solution.examples.map((example, i) => (
                    <motion.div 
                      key={i} 
                      className="glass-card !p-5 text-sm cursor-default"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    >
                      {example}
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                className="glass-card !bg-gradient-to-br from-sky-blue/10 to-periwinkle/10 !border-white/40"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-sm uppercase tracking-widest font-medium text-accent-foreground mb-3">
                  Business outcome
                </h3>
                <p className="text-foreground font-medium">
                  {solution.outcome}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Section>
      ))}

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
              Ready to discuss your automation needs?
            </h2>
            <p className="text-foreground/60 text-lg mb-12">
              Every engagement starts with understanding your workflows. No sales pitch, just problem-solving.
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

export default Solutions;