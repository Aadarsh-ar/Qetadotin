import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

const useCases = [
  {
    category: "Workflow Automation",
    title: "Automated Employee Onboarding",
    challenge: "Manual onboarding across HR, IT, and team leads created delays and inconsistent experiences. New hires waited days for access and equipment.",
    solution: "End-to-end onboarding automation triggered by offer acceptance. Systems provisioned automatically, training sequences launched, and team leads notified—all without manual intervention.",
    outcomes: [
      "Onboarding time reduced from 5 days to 4 hours",
      "Zero manual data entry across systems",
      "100% consistent experience for every new hire"
    ]
  },
  {
    category: "Revenue Systems",
    title: "Multi-Channel Lead Qualification",
    challenge: "Sales team spent 60% of time on unqualified leads. Manual research couldn't keep up with inbound volume across website, LinkedIn, and referrals.",
    solution: "Automated lead scoring combining behavioral signals, firmographic data, and engagement patterns. Only qualified opportunities reach sales reps, already enriched with research.",
    outcomes: [
      "Lead qualification with zero human input",
      "Reply rates increased 40% with personalization",
      "Sales capacity focused on high-intent prospects only"
    ]
  },
  {
    category: "AI Agents",
    title: "Competitive Intelligence Agent",
    challenge: "Manual competitor monitoring was sporadic and incomplete. The team missed pricing changes, product launches, and market signals.",
    solution: "Autonomous research agent monitoring competitor websites, job postings, press releases, and social signals. Daily briefings synthesized into actionable intelligence.",
    outcomes: [
      "24/7 monitoring across 15 competitor sources",
      "Real-time alerts on significant changes",
      "Monthly market reports generated automatically"
    ]
  },
  {
    category: "System Integration",
    title: "Unified Customer Data Platform",
    challenge: "Customer data fragmented across CRM, support desk, product analytics, and billing. No single source of truth for customer health.",
    solution: "Real-time bidirectional sync across all customer touchpoints. Unified customer profiles updated automatically with every interaction.",
    outcomes: [
      "Single customer view across all platforms",
      "Churn signals detected 30 days earlier",
      "Support tickets enriched with full context automatically"
    ]
  },
  {
    category: "Workflow Automation",
    title: "Document Processing Pipeline",
    challenge: "Invoice processing required manual data extraction, validation, and routing. Processing times varied from hours to days.",
    solution: "Automated document intake with AI extraction, validation rules, and intelligent routing. Exceptions flagged for human review only when necessary.",
    outcomes: [
      "Processing time reduced from 4 hours to 12 minutes",
      "98% extraction accuracy without manual review",
      "Automatic three-way matching with purchase orders"
    ]
  },
  {
    category: "Revenue Systems",
    title: "Pipeline Velocity Optimization",
    challenge: "Deals stalled at unpredictable stages. No visibility into which opportunities needed intervention or why.",
    solution: "Real-time pipeline analytics with automated stall detection. Intervention recommendations based on historical win patterns and deal characteristics.",
    outcomes: [
      "Average deal cycle reduced by 22%",
      "At-risk deals identified 2 weeks earlier",
      "Rep coaching prioritized by data, not intuition"
    ]
  }
];

const UseCases = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 gradient-hero-bg opacity-100" />
        
        {/* Floating orbs */}
        <div className="floating-orb w-[600px] h-[600px] bg-primary/30 -top-40 -left-40" />
        <div className="floating-orb w-[400px] h-[400px] bg-accent/25 top-20 right-0" style={{ animationDelay: "-5s" }} />
        <div className="floating-orb w-[300px] h-[300px] bg-secondary/30 bottom-0 left-1/3" style={{ animationDelay: "-10s" }} />
        
        <div className="container-wide px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span variants={fadeInUp} className="pill-accent mb-8 inline-flex">
              Use Cases
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8"
            >
              Operational impact, not hypotheticals.
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Real examples of how production-grade AI systems transform operational capacity. Focus on the outcome, not the technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <Section>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="interactive-card group"
            >
              <span className="pill-accent mb-4 inline-flex text-xs">
                {useCase.category}
              </span>
              <h2 className="text-xl font-semibold tracking-tight mb-6 group-hover:text-accent transition-colors">
                {useCase.title}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-medium text-muted-foreground mb-2">
                    Challenge
                  </h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {useCase.challenge}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-medium text-muted-foreground mb-2">
                    Solution
                  </h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {useCase.solution}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <h3 className="text-xs uppercase tracking-widest font-medium text-accent mb-3">
                    Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {useCase.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-foreground text-sm font-medium">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
              Similar operational challenges?
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-12">
              Every system starts with understanding your specific workflows. Let's discuss what automation could look like for your operations.
            </p>
            <Link to="/contact">
              <Button 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full font-medium shadow-xl"
              >
                Discuss Your Workflow
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default UseCases;
