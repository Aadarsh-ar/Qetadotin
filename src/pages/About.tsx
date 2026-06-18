import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Shield, Award, Cpu } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/ui/Section";
import newLogo from "@/assets/qeta-logo-new.jpg";

const About = () => {
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
              About us
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-serif leading-[1.05] tracking-tight text-black"
            >
              Systems that scale your brand, <br />
              <span className="text-[#ff7633]">not manual loops.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-[#251B18]/75 leading-relaxed font-light font-sans max-w-2xl mx-auto"
            >
              We are a team of automation architects engineering next-generation B2B media and publishing workflows.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Organization Block */}
      <Section className="border-t border-black/5 py-20 bg-white">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#ff7633] font-bold">
              Our agency
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-black leading-tight font-medium">
              We design and construct permanent content engines.
            </h2>
            <p className="text-[#251B18]/80 text-sm md:text-base leading-relaxed font-light font-sans">
              QETADOTIN builds deep automation. By pairing avatar generation with real-time cloned voices, catalog scripts, and schedule publishing nodes, we replace weeks of manual camera work with continuous edge distribution.
            </p>
          </div>
          <div className="lg:col-span-7 flex justify-center">
            <div className="p-8 bg-[#f8f6f1] border border-black/5 rounded-[30px] flex flex-col items-center max-w-sm space-y-4">
              <img src={newLogo} alt="Logo" className="w-24 h-24 rounded-full border border-black/10 object-cover" />
              <span className="font-serif text-lg text-black font-bold">QETADOTIN</span>
              <span className="text-xs uppercase tracking-widest text-[#ff7633] font-bold font-sans">Est. 2024</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Grid */}
      <Section className="border-t border-black/5 py-20 bg-[#f8f6f1]/30">
        <div className="space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-[#ff7633] font-bold">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-serif text-black font-medium">Built around operational speed.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Eye, title: "Pure Transparency", desc: "Full tracking statistics and node indicators are integrated into every custom layout block." },
              { icon: Shield, title: "Identity Lock", desc: "We host speaker characteristics and media credentials securely inside closed API clusters." },
              { icon: Award, title: "Absolute Quality", desc: "Every output compiles through pre-configured template wrappers for consistent alignment." }
            ].map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className="bg-white p-8 rounded-[25px] border border-black/5 space-y-4 hover:shadow-sm transition-all duration-300">
                  <div className="w-10 h-10 bg-[#ff7633]/10 text-[#ff7633] rounded-full flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-serif text-black font-bold">{val.title}</h4>
                  <p className="text-xs text-[#251B18]/70 leading-relaxed font-sans">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-black/5 relative overflow-hidden bg-white py-24">
        <div className="text-center max-w-3xl mx-auto space-y-6">

          <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
            Construct your brand machinery today.
          </h2>
          <p className="text-[#251B18]/70 text-lg max-w-xl mx-auto leading-relaxed font-light font-sans">
            Let's design a permanent media generation and publishing loop for your operations.
          </p>
          <Link to="/contact" className="btn-gold group inline-flex font-sans uppercase font-bold text-xs mt-4">
            Book a Strategy Call
            <ArrowRight className="ml-2.5 h-4 w-4" />
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
};

export default About;