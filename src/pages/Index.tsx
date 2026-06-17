import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { PageLayout } from "@/components/layout/PageLayout";

/* ─────────────────────────────────────────────
   QETADOTIN — Cinematic Editorial Home
   Locked tokens: Noir #0d0d0d / Gold #c9a84c
   DM Serif Display + Fira Sans · Asymmetric 60/40
   ───────────────────────────────────────────── */

const services = [
  { num: "01", name: "AI Avatars", line: "Photoreal digital humans that carry your brand voice frame-perfect." },
  { num: "02", name: "Voice Cloning", line: "Indistinguishable vocal twins — multilingual, on-brand, on-demand." },
  { num: "03", name: "AI Ads", line: "Performance creative at the speed of testing. Hooks, cuts, variants." },
  { num: "04", name: "Video Editing", line: "Cinematic post — pace, color, motion crafted for the algorithm." },
  { num: "05", name: "Social Branding", line: "An entire identity system tuned for feed, story and short-form." },
  { num: "06", name: "Automation Systems", line: "Pipelines that publish, schedule, repurpose and report — alone." },
];

const principles = [
  "One message per section",
  "Visual-first storytelling",
  "Premium motion, not noise",
  "Engineered, not improvised",
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <PageLayout>
      {/* ============ HERO — Asymmetric 60/40 ============ */}
      <section ref={heroRef} className="relative min-h-screen bg-background overflow-hidden">
        {/* Ambient gold glow */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />

        <motion.div
          style={{ y, opacity }}
          className="relative max-w-7xl mx-auto px-6 md:px-10 pt-40 md:pt-48 pb-24 grid grid-cols-12 gap-8"
        >
          {/* Left 60% — Headline */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 py-1.5 px-3 border border-primary/30 bg-primary/5 w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-gold" />
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary">
                AI Content Systems · Est. 2024
              </span>
            </motion.div>

            <h1 className="font-serif text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.9] tracking-display text-foreground">
              <span className="block overflow-hidden"><span className="mask-up">Brands move</span></span>
              <span className="block overflow-hidden"><span className="mask-up" style={{ animationDelay: "0.12s" }}>at the speed</span></span>
              <span className="block overflow-hidden"><span className="mask-up gold-grad-text" style={{ animationDelay: "0.24s" }}>of their system.</span></span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-sans text-lg md:text-xl text-foreground/55 max-w-xl font-light leading-relaxed"
            >
              QETADOTIN builds AI-powered content systems for modern brands — avatars, voice, ads, video and automation engineered into one cinematic pipeline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-5 pt-2"
            >
              <Link to="/contact" className="btn-gold group">
                Book a Call
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/solutions" className="btn-ghost-bone group">
                See the System
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right 40% — Cinematic mark */}
          <div className="col-span-12 lg:col-span-5 relative hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[480px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-primary/15 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-primary/10 rounded-full"
              />
              <div className="absolute inset-0 border-[0.5px] border-primary/20 rotate-45 scale-75" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full bg-primary/10 blur-[80px]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-[14rem] leading-none gold-grad-text">Q</span>
              </div>
              {/* Floating labels */}
              <div className="absolute top-6 right-0 font-sans text-[10px] uppercase tracking-[0.35em] text-foreground/40 rotate-90 origin-right">
                System v2.0 / Online
              </div>
              <div className="absolute bottom-4 left-0 font-sans text-[10px] uppercase tracking-[0.35em] text-foreground/40">
                Cinema-grade pipeline
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 bg-foreground/20 overflow-hidden relative">
            <motion.div
              className="absolute inset-0 bg-primary"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </section>

      {/* ============ MARQUEE — Services Ticker ============ */}
      <section className="border-y border-border bg-noir-elev/40 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-8">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-16 px-8">
              {services.map((s) => (
                <div key={`${dup}-${s.num}`} className="flex items-center gap-6">
                  <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-primary">{s.num}</span>
                  <span className="font-serif text-3xl md:text-4xl text-foreground/85">{s.name}</span>
                  <span className="text-primary text-2xl">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============ MANIFESTO — One message ============ */}
      <section className="relative py-32 md:py-48 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-6">— Manifesto</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-8"
          >
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-display text-foreground/85">
              We don't make <span className="text-foreground/40">content</span>. We engineer the
              <span className="gold-grad-text"> machinery</span> that produces it — frame after frame, post after post, market after market.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ============ SERVICES — Editorial 60/40 list ============ */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 grid grid-cols-12 gap-8">
          {/* Sticky index 40% */}
          <div className="col-span-12 md:col-span-4">
            <div className="md:sticky md:top-32">
              <p className="eyebrow mb-6">— Core Services</p>
              <h3 className="font-serif text-5xl md:text-6xl leading-[1.02] tracking-display mb-8">
                Six surfaces. <br/>
                <span className="gold-grad-text">One system.</span>
              </h3>
              <p className="font-sans text-foreground/55 leading-relaxed mb-10 max-w-sm">
                Each capability ships standalone or composed into a full content engine for your brand.
              </p>
              <Link to="/solutions" className="btn-ghost-bone group">
                Explore Solutions
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* List 60% */}
          <div className="col-span-12 md:col-span-8">
            <ul className="divide-y divide-border border-y border-border">
              {services.map((s, i) => (
                <motion.li
                  key={s.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="group"
                >
                  <Link
                    to="/solutions"
                    className="grid grid-cols-12 gap-4 py-8 md:py-10 items-baseline transition-colors hover:bg-primary/[0.02]"
                  >
                    <span className="col-span-2 font-sans text-[10px] uppercase tracking-[0.3em] text-primary pt-3">
                      {s.num}
                    </span>
                    <div className="col-span-9">
                      <h4 className="font-serif text-3xl md:text-5xl text-foreground group-hover:text-primary transition-colors tracking-display">
                        {s.name}
                      </h4>
                      <p className="font-sans text-foreground/50 mt-3 max-w-lg leading-relaxed">{s.line}</p>
                    </div>
                    <ArrowUpRight className="col-span-1 h-6 w-6 text-foreground/30 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all justify-self-end mt-3" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ CINEMATIC STAT BAND ============ */}
      <section className="border-t border-border bg-noir-elev/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 grid grid-cols-12 gap-8">
          {[
            { v: "10×", l: "Faster creative cycles" },
            { v: "99.9%", l: "Pipeline uptime" },
            { v: "24/7", l: "Autonomous publishing" },
          ].map((m, i) => (
            <motion.div
              key={m.l}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="col-span-12 md:col-span-4"
            >
              <div className="hairline-t pt-6">
                <p className="eyebrow mb-4">0{i + 1}</p>
                <p className="font-serif text-7xl md:text-8xl gold-grad-text leading-none tracking-display">{m.v}</p>
                <p className="font-sans text-foreground/55 mt-4">{m.l}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ PRINCIPLES — minimal grid ============ */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-6">— How we work</p>
            <h3 className="font-serif text-5xl md:text-6xl leading-[1.02] tracking-display">
              A studio's <span className="gold-grad-text">discipline,</span> an engine's <span className="gold-grad-text">throughput.</span>
            </h3>
          </div>
          <div className="col-span-12 md:col-span-7 md:pl-12 md:border-l border-border space-y-8 pt-2">
            {principles.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-baseline gap-6 hairline-b pb-6"
              >
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary">0{i + 1}</span>
                <p className="font-serif text-2xl md:text-3xl text-foreground/85">{p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA — Cinematic closer ============ */}
      <section className="relative border-t border-border overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/8 blur-[160px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-48 text-center">
          <p className="eyebrow mb-8 justify-center">— The next system</p>
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-display mb-12 text-balance">
            Let's build the <br />
            <span className="gold-grad-text">machinery</span> behind your brand.
          </h2>
          <Link to="/contact" className="btn-gold group inline-flex">
            Start a Project
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
