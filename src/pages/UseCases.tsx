import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      <section className="bg-background pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container-wide px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-6">
              Use Cases
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
              Operational impact, not hypotheticals.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Real examples of how production-grade AI systems transform operational capacity. Focus on the outcome, not the technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <Section className="border-t border-border">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`grid lg:grid-cols-12 gap-8 p-8 md:p-10 border border-border ${
                index % 2 === 0 ? "bg-background" : "bg-card"
              }`}
            >
              <div className="lg:col-span-4">
                <p className="text-sm uppercase tracking-widest font-medium text-accent mb-3">
                  {useCase.category}
                </p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {useCase.title}
                </h2>
              </div>
              
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-3">
                    Challenge
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {useCase.challenge}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-3">
                    Solution
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {useCase.solution}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-3">
                    Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {useCase.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                        <span className="text-foreground font-medium">{outcome}</span>
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
      <Section dark>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Similar operational challenges?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10">
            Every system starts with understanding your specific workflows. Let's discuss what automation could look like for your operations.
          </p>
          <Link to="/contact">
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none font-medium"
            >
              Discuss Your Workflow
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
};

export default UseCases;
