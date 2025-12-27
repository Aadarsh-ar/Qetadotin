import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Workflow, Users, Bot, Layers, Check } from "lucide-react";
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
    color: "bg-accent/10 text-accent"
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
    color: "bg-primary/10 text-primary"
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
    color: "bg-copper/10 text-copper"
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
    color: "bg-stone/10 text-stone"
  }
];

const Solutions = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-background pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-orb w-[500px] h-[500px] bg-accent/15 -top-40 -right-40" />
        </div>
        <div className="container-wide px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="pill-accent mb-8 inline-flex">
              Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
              AI systems built for operations, not demos.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Four core categories of production-grade automation infrastructure. Each designed to eliminate manual work and scale with your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((solution, index) => (
        <Section 
          key={solution.id} 
          id={solution.id}
          className={index % 2 === 0 ? "" : "bg-secondary/30"}
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className={`w-14 h-14 rounded-2xl ${solution.color} flex items-center justify-center mb-8`}>
                <solution.icon className="h-7 w-7" strokeWidth={1.5} />
              </motion.div>
              <motion.span variants={fadeInUp} className="pill-accent mb-4 inline-flex">
                {solution.subtitle}
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                {solution.title}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed mb-8">
                {solution.description}
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <h3 className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-4">
                  Built for
                </h3>
                <ul className="space-y-3 mb-8">
                  {solution.forWho.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-accent" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link to="/contact">
                  <Button variant="heroOutline" size="lg">
                    Discuss your workflow
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-4">
                  Example workflows
                </h3>
                <div className="space-y-3">
                  {solution.examples.map((example, i) => (
                    <div key={i} className="glass-card !p-5 text-sm">
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass-card !bg-accent/5 !border-accent/20">
                <h3 className="text-sm uppercase tracking-widest font-medium text-accent mb-3">
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
      <Section dark className="rounded-t-[3rem]">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Ready to discuss your automation needs?
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-12">
              Every engagement starts with understanding your workflows. No sales pitch, just problem-solving.
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

export default Solutions;