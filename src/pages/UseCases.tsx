import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/ui/Section";

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
    solution: "Autonomous research agent monitoring competitor websites, job postings, social signals. Daily briefings synthesized into actionable intelligence.",
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
      <section className="relative min-h-[50vh] flex items-center justify-center bg-white pt-32 pb-16 overflow-hidden">
        <div className="container-wide relative z-10 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-6"
          >
            <motion.p
              variants={fadeInUp}
              className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#ff7633] font-bold"
            >
              Use cases
            </motion.p>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-serif leading-[1.05] tracking-tight text-black"
            >
              Operational impact, <br />
              <span className="text-[#ff7633]">not hypotheticals.</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-[#251B18]/75 leading-relaxed font-light font-sans max-w-2xl mx-auto"
            >
              Real examples of how production-grade AI systems transform operational capacity. Focus on the outcome, not the technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <Section className="border-t border-black/5 py-20 bg-white">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#f8f6f1] border border-black/5 p-8 rounded-[25px] hover:border-[#ff7633]/30 hover:shadow-sm transition-all duration-300 space-y-6"
              whileHover={{ y: -2 }}
            >
              <span className="px-3 py-1 bg-[#ff7633]/10 border border-[#ff7633]/25 text-[#ff7633] text-[9px] uppercase tracking-wider font-semibold rounded-full block w-fit">
                {useCase.category}
              </span>
              <h2 className="text-2xl font-serif text-black font-bold">
                {useCase.title}
              </h2>
              
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xs uppercase tracking-[0.25em] text-[#251B18]/45 font-bold font-sans">
                    Challenge
                  </h3>
                  <p className="text-[#251B18]/80 text-sm font-sans font-light leading-relaxed">
                    {useCase.challenge}
                  </p>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-xs uppercase tracking-[0.25em] text-[#251B18]/45 font-bold font-sans">
                    Solution
                  </h3>
                  <p className="text-[#251B18]/80 text-sm font-sans font-light leading-relaxed">
                    {useCase.solution}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-black/5">
                  <h3 className="text-xs uppercase tracking-[0.25em] text-[#ff7633] font-bold font-sans mb-3">
                    Outcomes
                  </h3>
                  <ul className="space-y-2.5">
                    {useCase.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#ff7633] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-[#251B18] text-sm font-sans font-light">{outcome}</span>
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
      <Section className="border-t border-black/5 relative overflow-hidden bg-white py-24">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
              Similar operational challenges?
            </h2>
            <p className="text-[#251B18]/70 text-lg max-w-xl mx-auto leading-relaxed font-light font-sans">
              Every system starts with understanding your specific workflows. Let's discuss what automation could look like for your operations.
            </p>
            <Link to="/contact" className="btn-gold group inline-flex font-sans uppercase font-bold text-xs mt-4">
              Discuss Your Workflow
              <ArrowRight className="ml-2.5 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default UseCases;
