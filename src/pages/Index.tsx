import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Plus, Minus, Users, Mic, Megaphone, Video, Sparkles, Workflow } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";

// Services list
const services = [
  {
    id: "avatars",
    num: "01",
    name: "AI Avatars",
    icon: Users,
    desc: "Photorealistic digital humans designed to project your brand voice frame-perfect. Scale localized video production endlessly without cameras.",
    metric: "90% Cost Reduction"
  },
  {
    id: "voice",
    num: "02",
    name: "Voice Cloning",
    icon: Mic,
    desc: "Indistinguishable vocal twins. Replicate speaker assets securely for multilingual audio dubbing, localized audio streams, and narration on demand.",
    metric: "12 Languages Synced"
  },
  {
    id: "ads",
    num: "03",
    name: "AI Ads",
    icon: Megaphone,
    desc: "Performance creative iterations optimized at the speed of algorithms. Hook variants, text templates, and size composites compiled in minutes.",
    metric: "3.4x CTR Velocity"
  },
  {
    id: "video",
    num: "04",
    name: "Video Editing",
    icon: Video,
    desc: "Cinematic post-production automated for feed algorithms. AI-assisted rough cuts, grading templates, and pacing optimization built directly into pipelines.",
    metric: "12min Rendering Cycle"
  },
  {
    id: "social",
    num: "05",
    name: "Social Branding",
    icon: Sparkles,
    desc: "Cohesive visual feed templates generated dynamically. Standardize layouts, caption files, and visual asset overlays across all networks.",
    metric: "100% Brand Consistency"
  },
  {
    id: "automation",
    num: "06",
    name: "Automation Systems",
    icon: Workflow,
    desc: "Set-and-forget publishing calendars, CRM synchronizations, and reporting agents. Run a complete multi-channel content engine autonomously.",
    metric: "24/7 Untethered Operation"
  },
];

// Testimonials list
const testimonials = [
  { quote: "QETADOTIN replaced our entire post-production pipeline. We now output 10x more localized ad variants daily.", author: "Sarah Jenkins", role: "VP Growth, Solace Corp" },
  { quote: "The AI voice clones are indistinguishable from our actors. It has halved our course localization cycles.", author: "Marcus Thorne", role: "Head of Content, Edulink" },
  { quote: "We scheduled a year's worth of multi-channel publishing assets in one click. The telemetry dashboard runs autonomously.", author: "Aria Chen", role: "Director of Operations, Hyperia" },
  { quote: "Our conversion velocity scaled dramatically once we began hyper-testing video ad hooks with their systems.", author: "David Vance", role: "Founder, DTC Labs" },
];

// FAQs list
const faqs = [
  { q: "How do your AI content systems maintain absolute brand safety?", a: "We lock custom models behind your dedicated API endpoints, enforcing strict style wrappers, brand-approved templates, and actor consent contracts. Nothing is broadcast without passing pre-set quality gates." },
  { q: "Can we integrate this with our existing CRM and marketing stacks?", a: "Yes. Our automation systems deploy native webhook connectors to HubSpot, Salesforce, Slack, Meta Ads Manager, TikTok, and standard database infrastructure." },
  { q: "What is the typical setup time for a custom voice or avatar model?", a: "Voice cloning models configure within 24 hours. Broadcast-grade photoreal avatar engines require 5–7 business days for custom training, voice matching, and pipeline calibrations." },
  { q: "Is there ongoing support included?", a: "All engagements include 24/7 telemetry monitoring, monthly pipeline adaptations, and dedicated Slack channels with our operations architects." },
];

const Index = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState(0);

  return (
    <PageLayout>

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-center bg-white pt-36 pb-20 overflow-hidden">
        {/* subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="container-wide text-center relative z-10 space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[2.8rem] sm:text-[4.5rem] md:text-[6rem] leading-[0.93] tracking-tight text-black max-w-5xl mx-auto font-medium"
          >
            Brands move at the velocity of{" "}
            <span className="text-[#ff7633]">their systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-sans text-lg md:text-xl text-[#251B18]/70 max-w-2xl mx-auto font-light leading-relaxed"
          >
            QETADOTIN designs and deploys custom AI automation infrastructure — eliminating manual workflows, compressing production cycles, and scaling brand distribution autonomously.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact" className="btn-gold font-sans uppercase font-bold text-xs">
              Book a Strategy Call
              <ArrowUpRight className="ml-2.5 h-4 w-4" />
            </Link>
            <Link to="/work" className="btn-ghost-bone font-sans uppercase font-semibold text-xs">
              Explore Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 2. PORTFOLIO GALLERY ────────────────────────────────────── */}
      <section className="bg-white pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="group relative rounded-[28px] overflow-hidden border border-black/5 bg-[#f8f6f1]"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src="/work_1.jpg"
                  alt="AI Content Operations"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block text-white/60 text-[10px] uppercase tracking-widest font-semibold mb-1">Operational Interface</span>
                  <h3 className="text-white text-xl font-serif font-bold leading-tight">Interactive Avatar Portal</h3>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="group relative rounded-[28px] overflow-hidden border border-black/5 bg-[#f8f6f1]"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src="/work_2.jpg"
                  alt="Analytics Dashboard"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block text-white/60 text-[10px] uppercase tracking-widest font-semibold mb-1">Asset Integration</span>
                  <h3 className="text-white text-xl font-serif font-bold leading-tight">Vocal Twin Synthesizer</h3>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="group relative rounded-[28px] overflow-hidden border border-black/5 bg-[#f8f6f1]"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src="/work_5.jpg"
                  alt="Developer Workspace"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block text-white/60 text-[10px] uppercase tracking-widest font-semibold mb-1">Automation Systems</span>
                  <h3 className="text-white text-xl font-serif font-bold leading-tight">Publishing Automation Engine</h3>
                </div>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="group relative rounded-[28px] overflow-hidden border border-black/5 bg-[#f8f6f1]"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src="/work_6.jpg"
                  alt="Data Visualization"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block text-white/60 text-[10px] uppercase tracking-widest font-semibold mb-1">Content Infrastructure</span>
                  <h3 className="text-white text-xl font-serif font-bold leading-tight">B2B Content Pipeline</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. LOGO TRUST STRIP ─────────────────────────────────────── */}
      <section className="bg-white py-14 border-y border-black/5">
        <div className="container-wide">
          <p className="text-center font-sans text-[11px] uppercase tracking-[0.22em] text-[#251B18]/35 mb-10 font-semibold">
            Trusted by operations leaders worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-35">
            {["STRIPE", "LINEAR", "OPENAI", "ANTHROPIC", "VERCEL", "FIGMA"].map((brand) => (
              <span key={brand} className="font-serif text-xl sm:text-2xl tracking-[0.18em] font-extrabold text-black">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW WE WORK ──────────────────────────────────────────── */}
      <section className="bg-white py-28 md:py-36">
        <div className="container-wide">
          <div className="bg-[#f8f6f1] rounded-[28px] md:rounded-[36px] p-10 md:p-20 border border-black/5 grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-5 space-y-6">
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#ff7633] font-bold">
                How we work
              </p>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-black leading-[1.05]">
                We engineer the pipelines. You scale the output.
              </h2>
              <p className="text-base text-[#251B18]/65 font-sans font-light leading-relaxed">
                QETADOTIN is not a quick manual agency setup. We construct permanent digital infrastructure that generates text, audio, video, and publish patterns completely untethered.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {[
                { title: "Permanent Assets", desc: "Your avatar models, custom trained voices, and script blocks belong completely to you." },
                { title: "Continuous Output", desc: "AI scripts execute on cron triggers, feeding raw variants automatically to active rendering clusters." },
                { title: "Algorithmic Loops", desc: "CTR dashboards capture channel metrics, updating performance tags in real-time." },
                { title: "Admin Diagnostics", desc: "Full telemetry logs and system statuses are visible directly inside your dashboard panels." }
              ].map((step, i) => (
                <div key={i} className="p-7 bg-white rounded-[20px] border border-black/5 space-y-3 hover:shadow-sm transition-shadow">
                  <div className="w-9 h-9 rounded-full bg-[#ff7633]/10 flex items-center justify-center text-[#ff7633] font-bold text-sm font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="text-lg font-serif text-black font-semibold">{step.title}</h4>
                  <p className="text-xs text-[#251B18]/65 leading-relaxed font-sans">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SERVICES ─────────────────────────────────────────────── */}
      <section className="relative bg-white border-t border-black/5 py-28 md:py-36">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-14 items-start">
            {/* Left sticky heading */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#ff7633] font-bold">
                What we build
              </p>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-black leading-[1.05]">
                One unified content system.
              </h2>
              <p className="text-[#251B18]/60 text-sm font-sans font-light leading-relaxed">
                Each operational stack works standalone or snaps together into your enterprise pipeline. Click to explore.
              </p>

              <div className="pt-4 hidden lg:block space-y-1.5">
                {services.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedService(idx)}
                    className={`flex items-center gap-3 w-full text-left py-2 px-4 rounded-full transition-all text-xs font-semibold uppercase tracking-wider ${
                      selectedService === idx
                        ? "bg-[#ff7633]/10 text-[#ff7633]"
                        : "text-[#251B18]/40 hover:text-black"
                    }`}
                  >
                    <span className="font-mono">{item.num}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right panels */}
            <div className="lg:col-span-8 space-y-5">
              {services.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    className={`p-8 rounded-[24px] border transition-all duration-400 cursor-pointer ${
                      selectedService === idx
                        ? "bg-[#f8f6f1] border-[#ff7633]/35 shadow-sm"
                        : "bg-white border-black/5 hover:border-black/12"
                    }`}
                    onClick={() => setSelectedService(idx)}
                    whileHover={{ x: 3 }}
                  >
                    <div className="flex items-center justify-between pb-5 border-b border-black/5">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          selectedService === idx ? "bg-[#ff7633]/15 text-[#ff7633]" : "bg-[#f8f6f1] text-[#251B18]/50"
                        }`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-xl font-serif text-black font-bold">{item.name}</h4>
                          <span className="text-[10px] tracking-wider text-black/35 font-mono uppercase">{item.num} // module</span>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-[#ff7633] font-bold font-mono hidden sm:block">
                        {item.metric}
                      </span>
                    </div>
                    <div className="pt-5 font-sans">
                      <p className="text-[#251B18]/75 text-sm leading-relaxed mb-4">{item.desc}</p>
                      <Link to="/solutions" className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-[#ff7633] hover:underline">
                        Explore module specs <ArrowRight className="ml-1.5 h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHY QETADOTIN (replaces generic "Key Features") ──────── */}
      <section className="bg-white py-28 md:py-36 border-t border-black/5">
        <div className="container-wide space-y-16">
          <div className="max-w-xl space-y-4">
            <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#ff7633] font-bold">
              Why QETADOTIN
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight font-medium">
              Engineered for absolute throughput.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {[
              { t: "Dynamic Localizations", d: "Instantly dub visual files across regional ad markets while preserving speaker characteristics and brand tone." },
              { t: "Secure API Access", d: "Lock enterprise training content, vocal twins, and company records behind authenticated security policies." },
              { t: "Set-and-Forget Schedulers", d: "Run content production on calendar triggers with automated publishing outputs across every channel." }
            ].map((feat, i) => (
              <div key={i} className="p-8 rounded-[24px] bg-[#f8f6f1] border border-black/5 space-y-5 hover:shadow-md transition-shadow group">
                <span className="font-mono text-[#ff7633]/50 text-xs font-bold">/ {String(i + 1).padStart(2, "0")}</span>
                <h4 className="text-xl font-serif text-black font-bold group-hover:text-[#ff7633] transition-colors">{feat.t}</h4>
                <p className="text-sm text-[#251B18]/65 leading-relaxed font-sans">{feat.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CASE STUDIES ─────────────────────────────────────────── */}
      <section className="bg-white py-28 md:py-36 border-t border-black/5">
        <div className="max-w-[1380px] mx-auto px-6 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#ff7633] font-bold">
                Case studies
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-black tracking-tight leading-[1.05]">
                Real operational integrations.
              </h2>
            </div>
            <Link to="/work" className="btn-gold font-sans uppercase font-bold text-xs shrink-0">
              Explore All Work
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Case Study 1 */}
            <div className="space-y-6 group">
              <Link to="/work" className="block relative overflow-hidden rounded-[28px] aspect-[16/10]">
                <img
                  src="/work_7.jpg"
                  alt="Synthesized Anchor Hub"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-black text-[10px] font-mono font-bold px-3 py-1.5 rounded-full">
                    −82% Hours Saved
                  </span>
                </div>
              </Link>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#ff7633] font-bold">Media & Synthesis</span>
                <h3 className="text-2xl font-serif text-black font-bold group-hover:text-[#ff7633] transition-colors">
                  Synthesized Anchor Hub for Global Retail
                </h3>
                <p className="text-sm text-[#251B18]/65 leading-relaxed font-sans">
                  Deploying photorealistic custom avatar announcers rendering localized daily catalogs globally.
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="space-y-6 group">
              <Link to="/work" className="block relative overflow-hidden rounded-[28px] aspect-[16/10]">
                <img
                  src="/work_8.jpg"
                  alt="Hyper-Variant Ad Engine"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="inline-block bg-[#ff7633] text-white text-[10px] font-mono font-bold px-3 py-1.5 rounded-full">
                    3.4× Conversion Lift
                  </span>
                </div>
              </Link>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#ff7633] font-bold">Growth & Performance</span>
                <h3 className="text-2xl font-serif text-black font-bold group-hover:text-[#ff7633] transition-colors">
                  Hyper-Variant Video Ad Engines for DTC
                </h3>
                <p className="text-sm text-[#251B18]/65 leading-relaxed font-sans">
                  Automating 60 unique aspect-ratio and hook variations per crop loop, syncing directly with feedback webhooks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="bg-white py-28 md:py-36 border-t border-black/5 overflow-hidden">
        <div className="space-y-14">
          <div className="container-wide flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight font-medium max-w-lg">
              What our clients say.
            </h2>
            <Link to="/contact" className="text-xs uppercase tracking-widest font-bold text-[#ff7633] hover:underline inline-flex items-center gap-1.5 shrink-0">
              Start your project <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Scrolling ticker */}
          <div className="flex animate-marquee whitespace-nowrap gap-6 py-2">
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex gap-6">
                {testimonials.map((t, i) => (
                  <div
                    key={`${idx}-${i}`}
                    className="inline-block bg-[#f8f6f1] p-8 rounded-[16px] border border-black/5 w-[400px] whitespace-normal space-y-5 shadow-sm"
                  >
                    <p className="font-sans text-sm text-[#251B18] leading-relaxed">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3 pt-1 border-t border-black/5">
                      <div className="w-7 h-7 rounded-full bg-[#ff7633]/10 flex items-center justify-center text-[#ff7633] font-bold text-xs font-mono">
                        {t.author.charAt(0)}
                      </div>
                      <div className="font-sans">
                        <p className="text-xs text-black font-bold">{t.author}</p>
                        <p className="text-[10px] text-[#251B18]/45 font-medium">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-white py-28 md:py-36 border-t border-black/5">
        <div className="max-w-[760px] mx-auto px-6 space-y-14">
          <div className="space-y-4">
            <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#ff7633] font-bold">
              Questions
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight font-medium">
              Common operational questions.
            </h2>
          </div>

          <div className="space-y-3 font-sans">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8f6f1] border border-black/5 rounded-[20px] overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-serif text-lg text-black font-bold"
                >
                  <span className="pr-6">{item.q}</span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-black">
                    {activeFaq === idx ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="border-t border-black/5"
                    >
                      <div className="px-6 pb-6 pt-5 text-[#251B18]/70 text-sm leading-relaxed font-light">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA CLOSER ──────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto bg-black rounded-[32px] py-28 px-10 md:px-20 text-center relative overflow-hidden">
          {/* subtle dot grid */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          {/* orange glow blob */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ff7633]/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 space-y-7 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white leading-[1.02] tracking-tight">
              Construct the engine{" "}
              <span className="text-[#ff7633]">behind your brand.</span>
            </h2>
            <p className="text-base md:text-lg text-white/55 font-sans font-light max-w-xl mx-auto leading-relaxed">
              We design and deploy automated content and telemetry operations. Build systems that run your business, not demos.
            </p>
            <div className="pt-4">
              <Link to="/contact" className="btn-gold font-sans uppercase font-bold text-xs">
                Book a Strategy Call
                <ArrowRight className="ml-2.5 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Index;
