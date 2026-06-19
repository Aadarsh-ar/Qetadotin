import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, Check } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/ui/Section";

const sectors = [
  { id: "all", name: "All Sectors" },
  { id: "media", name: "Media & Synthesis" },
  { id: "growth", name: "Growth & Creative" },
  { id: "operations", name: "Operations & Flows" },
];

const projects = [
  // Media & Synthesis
  {
    id: "avatar-hub",
    sector: "media",
    sectorName: "Media & Synthesis",
    image: "/work_avatar_hub.png",
    title: "Interactive AI Avatar Hub",
    subtitle: "Photorealistic Brand Spokespeople",
    challenge: "Replicating executive and speaker presence for multi-market product announcements without expensive studio overhead or scheduling logjams.",
    solution: "We deployed a localized photorealistic digital avatar generator integrated with sub-100ms voice cloning technology. Renders high-fidelity broadcast updates dynamically from simple text prompts.",
    outcome: "-82% Production Hours",
    validation: "4.8/5 Viewer Rating",
    telemetry: {
      engine: "Hydra Synthesis v2.4",
      latency: "140ms",
      throughput: "60 FPS rendering",
      nodes: "AWS-EC2-G5x.12xlarge",
    },
    stack: ["Hydra Rendering Cluster", "ElevenLabs API", "Next.js edge workers", "Fast-Sync CDN"],
  },
  {
    id: "multilingual-voice",
    sector: "media",
    sectorName: "Media & Synthesis",
    image: "/work_multi_voice.png",
    title: "Multilingual Voice Broadcasts",
    subtitle: "Unified AI Voice & Localization",
    challenge: "Standardizing corporate training voice assets across English, Spanish, Hindi, and German while keeping production loops fast.",
    solution: "Advanced neural speech-to-speech voice cloning clusters that preserve original speaker timbre and inflections while adapting seamlessly to native speech cadences.",
    outcome: "12h Localization Cycle",
    validation: "100% Identity Protected",
    telemetry: {
      engine: "Neural Vocal Twins",
      latency: "38ms audio synthesis",
      throughput: "24kHz wav output",
      nodes: "IN-HYD-01 / Edge cluster",
    },
    stack: ["Vocal Twin Synthesis", "Custom pitch correction models", "WAV-2-Vec Sync"],
  },
  // Growth & Creative Testing
  {
    id: "ad-factory",
    sector: "growth",
    sectorName: "Growth & Creative Testing",
    image: "/work_ad_factory.png",
    title: "Hyper-Variant Social Ad Factory",
    subtitle: "High-Velocity AI Ads",
    challenge: "Ad fatigue on performance social channels requiring continuous replenishment of hook variations and multi-ratio aspect ratios.",
    solution: "Algorithmic video asset composer creating 60 unique variations of hook copy, aspect ratio, and background music tracks per run, driven by performance feedback alerts.",
    outcome: "3.4× Conversion Velocity",
    validation: "76% Lower Ad Fatigue",
    telemetry: {
      engine: "Vantage Ad Composer",
      latency: "4.2s per composite render",
      throughput: "60 unique variants / batch",
      nodes: "GCP-A2-HighGPU.4g",
    },
    stack: ["Stable Diffusion Video API", "Vantage ad metrics engine", "Meta Ads Manager Webhooks"],
  },
  {
    id: "social-wrapper",
    sector: "growth",
    sectorName: "Growth & Creative Testing",
    image: "/work_soc_wrapper.png",
    title: "Dynamic Social Feed Wrapper",
    subtitle: "Automated Feed Brand Wrapping",
    challenge: "Keeping up with raw content publishing schedules while ensuring strict layout wrappers, captions, and brand styling guidelines are met.",
    solution: "Asset-wrapping pipeline which automatically ingest raw video snippets, injects custom typography layout wraps and captions, and ships them optimized for mobile algorithms.",
    outcome: "24/7 Social Coverage",
    validation: "15M+ Aggregate Views",
    telemetry: {
      engine: "Lottie Render Engine",
      latency: "800ms per render",
      throughput: "Unlimited automated queue",
      nodes: "Cloudflare Workers",
    },
    stack: ["FFmpeg Node Orchestration", "Lottie Typography Engine", "Instagram Publishing API"],
  },
  // Operations & Flows
  {
    id: "edge-publisher",
    sector: "operations",
    sectorName: "Operations & Flows",
    image: "/work_edge_pub.png",
    title: "Edge Publishing Engine",
    subtitle: "Autonomous Multi-Channel Publisher",
    challenge: "Bottlenecks in post-production review, scheduling coordination, metadata formatting, and publishing on multiple platforms.",
    solution: "Self-orchestrating cron publisher that analyzes engagement trends, updates hashtags dynamically, optimizes SEO tags, and distributes video content autonomously.",
    outcome: "99.9% Pipeline Uptime",
    validation: "Zero Human Interaction",
    telemetry: {
      engine: "Edge Worker Scheduler",
      latency: "12ms DB sync",
      throughput: "Multi-platform distribution",
      nodes: "Vercel Edge Network",
    },
    stack: ["Node Cron Edge Workers", "Supabase DB", "YouTube & TikTok API Integrations"],
  },
  {
    id: "sales-assistant",
    sector: "operations",
    sectorName: "Operations & Flows",
    image: "/work_sales_asst.png",
    title: "Intelligence Lead Qualifier",
    subtitle: "Lead Enrichment & Auto-Response",
    challenge: "Inbound client submissions sitting cold for hours before manual sales operators could qualify, enrich records, and schedule consultation calls.",
    solution: "Autonomous sales agents scanning inbound leads, scraping company sizes, pulling market records, and generating custom introductory packages within 15 seconds.",
    outcome: "4.2× Booking Conversions",
    validation: "<15s Latency",
    telemetry: {
      engine: "GPT-4o Agent Cluster",
      latency: "1.8s analysis window",
      throughput: "Concurrency: 100 threads",
      nodes: "OpenAI API Cluster",
    },
    stack: ["Enrichment API pools", "Cal.com Scheduler Orchestrator", "Supabase Client Hooks"],
  },
];

const Work = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.sector === activeTab);

  return (
    <div className="bg-white text-black min-h-screen relative overflow-hidden font-sans">
      <PageLayout>
        {/* Header section with clean background */}
        <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-16 z-10">
          <div className="container-wide px-6 relative">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#ff7633] font-bold"
              >
                Case studies
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl md:text-7xl font-serif leading-[1.05] tracking-tight text-black"
              >
                Proven architecture. <br />
                <span className="text-[#ff7633]">Measurable lift.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-[#251B18]/75 leading-relaxed font-light font-sans max-w-2xl mx-auto"
              >
                We build, deploy, and scale content generation and operational flows that eliminate manual bottlenecks. Explore our structural integrations.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Sticky selector - rounded off-white tabs */}
        <section className="border-y border-black/5 bg-[#f8f6f1] sticky top-20 z-40">
          <div className="container-wide px-6 py-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {sectors.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-2 font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 rounded-full border ${
                    activeTab === tab.id 
                      ? "border-[#ff7633] bg-white text-[#ff7633]" 
                      : "border-transparent text-[#251B18]/50 hover:text-black"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <Section className="py-20 md:py-32 z-10 relative">
          <div className="container-wide space-y-24 md:space-y-36">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid gap-20 md:gap-28"
              >
                {filteredProjects.map((project, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div 
                      key={project.id}
                      className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center pb-20 border-b border-black/5 last:border-0 last:pb-0"
                    >
                      {/* Left Column: Visual Container (6 cols) */}
                      <div className={`lg:col-span-6 w-full ${!isEven ? 'lg:order-2' : ''}`}>
                        <div className="relative rounded-[24px] overflow-hidden border border-black/5 bg-[#121212] shadow-sm hover:shadow-md transition-all duration-300">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover aspect-[16/10] hover:scale-[1.02] transition-transform duration-500"
                          />
                        </div>
                      </div>

                      {/* Right Column: Context & Details (6 cols) */}
                      <div className={`lg:col-span-6 space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-[#ff7633]/10 border border-[#ff7633]/25 text-[#ff7633] text-[9px] uppercase tracking-wider font-semibold rounded-full font-mono">
                            {project.sectorName}
                          </span>
                          <span className="text-black/20 font-mono text-xs">/</span>
                          <span className="text-black/50 font-sans text-xs uppercase tracking-wider font-semibold">{project.subtitle}</span>
                        </div>

                        <h2 className="text-3xl font-serif tracking-tight text-black leading-tight">
                          {project.title}
                        </h2>

                        <div className="space-y-5">
                          <div>
                            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#ff7633] mb-1 font-bold font-sans">
                              Challenge
                            </h4>
                            <p className="text-[#251B18]/80 text-sm font-light leading-relaxed font-sans">
                              {project.challenge}
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-[#f8f6f1] border border-black/5 rounded-[15px]">
                              <span className="text-[9px] uppercase tracking-widest text-[#251B18]/40 font-semibold block mb-1">
                                Primary Outcome
                              </span>
                              <span className="font-serif text-lg text-[#ff7633] font-bold">
                                {project.outcome}
                              </span>
                            </div>
                            <div className="p-4 bg-[#f8f6f1] border border-black/5 rounded-[15px]">
                              <span className="text-[9px] uppercase tracking-widest text-[#251B18]/40 font-semibold block mb-1">
                                Primary Validation
                              </span>
                              <span className="font-sans text-xs text-black font-bold truncate block">
                                {project.validation}
                              </span>
                            </div>
                          </div>

                          {/* Telemetry Diagnostics using warm card */}
                          <div className="bg-[#f8f6f1] border border-black/5 rounded-[20px] p-5 font-mono text-[10px] space-y-2.5 shadow-sm">
                            <div className="flex items-center justify-between pb-1.5 border-b border-black/5 text-[9px] tracking-wider text-black/40">
                              <span className="flex items-center gap-1.5 font-sans uppercase font-bold text-[8px] text-[#ff7633]">
                                <Terminal className="h-3 w-3 text-[#ff7633]" />
                                Telemetry Diagnostics
                              </span>
                              <span>SYS_v2.4</span>
                            </div>
                            
                            <div className="space-y-1.5">
                              <div className="flex justify-between">
                                <span className="text-[#251B18]/50">ENGINE_CLASS:</span>
                                <span className="text-black font-semibold">{project.telemetry.engine}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#251B18]/50">LATENCY:</span>
                                <span className="text-[#ff7633] font-semibold">{project.telemetry.latency}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-[#251B18]/50">CLUSTER_NODE:</span>
                                <span className="text-black font-semibold truncate max-w-[220px]">{project.telemetry.nodes}</span>
                              </div>
                            </div>
                          </div>

                          {/* Integrated Modules List */}
                          <div className="space-y-2.5">
                            <h4 className="text-[10px] uppercase tracking-[0.25em] text-black/45 font-semibold font-sans">
                              Integrated Modules
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.stack.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1 bg-[#f8f6f1] border border-black/5 rounded-full text-xs font-sans text-[#251B18]/80 font-light hover:border-[#ff7633]/30 transition-colors">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </Section>

        {/* Conversion Closer / CTA */}
        <Section className="border-t border-black/5 relative overflow-hidden bg-[#f8f6f1]/30 py-24">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-black">
              Ready to construct your pipeline?
            </h2>
            <p className="text-[#251B18]/70 text-lg max-w-xl mx-auto leading-relaxed font-light font-sans">
              We engineer specialized systems tailored to your production and distribution needs. Let's discuss your targets.
            </p>
            <Link to="/contact" className="btn-gold group inline-flex font-sans uppercase font-bold text-xs mt-4">
              Book a Strategy Call
              <ArrowRight className="ml-2.5 h-4 w-4" />
            </Link>
          </div>
        </Section>
      </PageLayout>
    </div>
  );
};

export default Work;
