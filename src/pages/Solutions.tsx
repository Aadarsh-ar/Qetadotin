import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Bot, Sparkles, Workflow, Layers, Video, Mic, Megaphone, Check } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/ui/Section";

const solutions = [
  {
    id: "avatars",
    icon: Users,
    title: "AI Avatars",
    subtitle: "Photoreal Digital Humans",
    description: "Photoreal digital humans that carry your brand voice frame-perfect. Deploy custom interactive or broadcast-grade characters for your messaging, scaling your visual footprint.",
    forWho: [
      "Brands wanting consistent face-of-brand presence",
      "Global scale video content developers",
      "Support and sales teams seeking interactive visual helpers"
    ],
    examples: [
      "Synthesized brand representatives for daily video updates",
      "Multi-lingual product walkthrough presenters",
      "Interactive digital concierges for user support"
    ],
    outcome: "Create endless personalized video content without scheduling shoots, booking actors, or managing studios."
  },
  {
    id: "voice",
    icon: Mic,
    title: "Voice Cloning",
    subtitle: "On-brand Vocal Twins",
    description: "Indistinguishable vocal twins — multilingual, on-brand, on-demand. Securely replicate voice assets for consistent narration and high-volume, secure replication of speaker identity.",
    forWho: [
      "Narrators and vocal talents seeking operational leverage",
      "E-learning developers scaling courses internationally",
      "Global brands needing localized audio consistency"
    ],
    examples: [
      "Secure replication of key speaker voice assets",
      "Real-time multilingual video localizations",
      "Dynamic customer service greeting and announcement voices"
    ],
    outcome: "Localize content globally in minutes, maintaining native speech cadence and brand vocal tone."
  },
  {
    id: "ads",
    icon: Megaphone,
    title: "AI Ads",
    subtitle: "Creative Output at Pace",
    description: "Performance creative at the speed of testing. Hooks, cuts, and variants engineered dynamically to match algorithm feedback and boost conversion metrics.",
    forWho: [
      "Performance marketers scaling multi-platform campaigns",
      "Direct-to-consumer ecommerce brands",
      "Ad agencies optimizing production and testing cycles"
    ],
    examples: [
      "Automated hook testing variations generated instantly",
      "Dynamic catalog video ad generation",
      "Aspect-ratio and localized cuts for global social feeds"
    ],
    outcome: "Scale advertising hooks and format iterations dynamically. Out-test competitor creative cycles."
  },
  {
    id: "video",
    icon: Video,
    title: "Video Editing",
    subtitle: "Cinema-grade Post-production",
    description: "Cinematic post-production — pace, color, and motion crafted for the algorithm. AI-augmented editing pipelines that make every frame count without massive manual labor.",
    forWho: [
      "Media production houses optimizing rough cuts",
      "High-throughput content creators",
      "Corporate communications teams managing video feeds"
    ],
    examples: [
      "Automated rough-cuts and timeline assemblies",
      "Visual style transfer and smart color grading",
      "AI-assisted pacing and clip selection for viewer retention"
    ],
    outcome: "Eliminate hours of manual timeline alignment. Ship cinema-grade content at agency speeds."
  },
  {
    id: "social",
    icon: Sparkles,
    title: "Social Branding",
    subtitle: "Automated Feed Identity",
    description: "An entire visual and content identity system tuned for feed, story, and short-form. Maintain absolute design control over active social profiles autonomously.",
    forWho: [
      "Social media directors maintaining brand consistency",
      "Brand marketing leads managing assets",
      "Creator networks managing multi-channels simultaneously"
    ],
    examples: [
      "Consistent layout packaging for feed formats",
      "Dynamic branding overlays on raw footage",
      "Cross-platform auto-formatting and resizing templates"
    ],
    outcome: "Brand presence remains cohesive and high-fidelity across all channels, regardless of feed velocity."
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Automation Systems",
    subtitle: "Autonomous Publishing Engines",
    description: "Pipelines that publish, schedule, repurpose, and report autonomously. Run your content marketing machinery alone, with high-fidelity outputs and zero overhead.",
    forWho: [
      "Operations managers optimizing content workflows",
      "Companies running multi-brand content hubs",
      "Teams seeking true set-and-forget publishing machinery"
    ],
    examples: [
      "Set-and-forget publishing calendars",
      "Auto-repurposing from long-form to micro-clips",
      "Performance telemetry synthesis and automated feed adaptation"
    ],
    outcome: "Your content engines run 24/7 without manual intervention. Complete visibility and maximum output."
  }
];

const Solutions = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-white pt-32 pb-16 overflow-hidden">
        <div className="container-wide relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#ff7633] font-bold"
            >
              What we build
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-serif leading-[1.05] tracking-tight text-black"
            >
              AI systems built for operations, <br />
              <span className="text-[#ff7633]">not demos.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-[#251B18]/75 leading-relaxed font-light font-sans max-w-2xl mx-auto"
            >
              Six core surfaces of production-grade automation infrastructure. Each designed to eliminate manual work and scale with your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      {solutions.map((solution, index) => (
        <Section 
          key={solution.id} 
          id={solution.id}
          className={index % 2 === 0 ? "bg-white border-t border-black/5 py-20" : "bg-[#f8f6f1]/50 border-t border-black/5 py-20"}
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column - Product Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                className="w-12 h-12 bg-[#ff7633]/10 border border-[#ff7633]/25 flex items-center justify-center mb-6 rounded-full"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <solution.icon className="h-6 w-6 text-[#ff7633]" />
              </motion.div>
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#ff7633] font-bold mb-4">
                {solution.subtitle}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-black mb-4 tracking-tight leading-tight">
                {solution.title}
              </h2>
              <p className="text-[#251B18]/80 text-base leading-relaxed mb-8 font-light font-sans">
                {solution.description}
              </p>
              
              <div className="mb-8 space-y-4">
                <h3 className="text-xs uppercase tracking-[0.25em] text-[#251B18]/45 font-bold font-sans">
                  Built for
                </h3>
                <ul className="space-y-3">
                  {solution.forWho.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                    >
                      <div className="w-5 h-5 bg-[#ff7633]/10 border border-[#ff7633]/20 flex items-center justify-center rounded-full mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-[#ff7633]" />
                      </div>
                      <span className="text-[#251B18]/80 font-light text-sm font-sans">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="btn-gold font-sans uppercase font-bold text-xs">
                Discuss your workflow
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Right Column - Examples and Business Outcome */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-[#251B18]/45 mb-4 font-bold font-sans">
                  Example workflows
                </h3>
                <div className="space-y-3">
                  {solution.examples.map((example, i) => (
                    <motion.div 
                      key={i} 
                      className="p-6 bg-[#f8f6f1] border border-black/5 rounded-[20px] shadow-sm font-sans"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      whileHover={{ x: 4 }}
                    >
                      <p className="text-[#251B18] text-sm font-light">{example}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                className="p-6 bg-[#ff7633]/5 border border-[#ff7633]/20 rounded-[20px]"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#ff7633] mb-2 font-bold font-sans">
                  Business outcome
                </h3>
                <p className="text-[#251B18] font-serif text-lg leading-relaxed font-semibold">
                  {solution.outcome}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Section>
      ))}

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
              Ready to discuss your automation needs?
            </h2>
            <p className="text-[#251B18]/70 text-lg max-w-xl mx-auto leading-relaxed font-light font-sans">
              Every engagement starts with understanding your workflows. Let's discuss what automation could look like for your operations.
            </p>
            <Link to="/contact" className="btn-gold group inline-flex font-sans uppercase font-bold text-xs mt-4">
              Book a Strategy Call
              <ArrowRight className="ml-2.5 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Solutions;