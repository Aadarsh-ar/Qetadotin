import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/ui/Section";
import { Scale, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="bg-white text-black min-h-screen relative overflow-hidden font-sans">
      <PageLayout>
        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-center justify-center bg-white pt-32 pb-12 overflow-hidden">
          <div className="container-wide text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#ff7633] font-bold">
                Governance & Terms
              </p>
              <h1 className="text-4xl md:text-6xl font-serif leading-[1.05] tracking-tight text-black">
                Terms & Conditions
              </h1>
              <p className="text-base text-[#251B18]/75 leading-relaxed font-light font-sans max-w-xl mx-auto">
                Last updated: June 19, 2026. These terms govern access to the QETADOTIN synthetic media generation and publishing telemetry networks.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <Section className="border-t border-black/5 py-16 bg-white">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left: Summary cards */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="p-6 bg-[#f8f6f1] border border-black/5 rounded-[24px] space-y-4">
                <div className="w-10 h-10 bg-[#ff7633]/10 text-[#ff7633] rounded-full flex items-center justify-center">
                  <Scale className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-black">Compliance Scope</h3>
                <p className="text-xs text-[#251B18]/75 leading-relaxed font-sans font-light">
                  Users are strictly prohibited from generating deceptive, fraudulent, or non-consensual synthetic media. Absolute safety verification is required.
                </p>
              </div>

              <div className="p-6 bg-[#f8f6f1] border border-black/5 rounded-[24px] space-y-4">
                <div className="w-10 h-10 bg-[#ff7633]/10 text-[#ff7633] rounded-full flex items-center justify-center">
                  <Terminal className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-black">API & Telemetry Limits</h3>
                <p className="text-xs text-[#251B18]/75 leading-relaxed font-sans font-light">
                  API quotas, webhook rendering cycles, and concurrent scheduler threads are subject to pre-configured bandwidth thresholds.
                </p>
              </div>
            </div>

            {/* Right: Detailed text */}
            <div className="lg:col-span-8 space-y-10 font-sans text-sm text-[#251B18]/80 leading-relaxed font-light">
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-black">1. Services Provision</h2>
                <p>
                  QETADOTIN provides custom digital human models, localized voice clones, and autonomous multi-channel publishing loops. By accessing our platform, you agree to configure webhooks, databases, and cron schedules in compliance with all relevant international internet and communication standards.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-black">2. Intellectual Property Rights</h2>
                <p>
                  <strong>Your Models:</strong> All voice print coordinates, customized facial datasets, and script templates trained on your proprietary materials belong completely to your team under strict licensing. QETADOTIN claims no ownership over the copyright of raw output files generated.
                </p>
                <p>
                  <strong>Our Infrastructure:</strong> The rendering algorithms, node structures, telemetry panels, custom dashboard layouts, and system configurations are the intellectual property of QETADOTIN.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-black">3. Prohibited Usage Policy</h2>
                <p>
                  You agree not to utilize QETADOTIN to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Generate voice clones of public officials, actors, or individuals without explicit written, verifiable consent.</li>
                  <li>Distribute misleading political media or deepfakes designed to manipulate public sentiment or deceive consumers.</li>
                  <li>Bypass pipeline rate limits, trigger API attacks on rendering nodes, or inject malicious scripts into webhook schemas.</li>
                </ul>
                <p>
                  Violation of any usage policies will result in immediate termination of API keys, model accounts, and access to all telemetry metrics dashboards.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-black">4. Telemetry Telecommunications and SLA</h2>
                <p>
                  While QETADOTIN strives for 99.9% uptime across our fast-rendering edge worker systems and background publishing nodes, we do not guarantee uninterrupted server operations. We are not responsible for delivery drops or delays stemming from external channel APIs (YouTube, Instagram, TikTok, Meta Ads, etc.).
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-black/5">
                <h3 className="font-serif text-lg font-bold text-black">Contact Legal Council</h3>
                <p>
                  For corporate licensing agreements or legal queries regarding terms, please email <a href="mailto:inqeta@gmail.com" className="text-[#ff7633] hover:underline font-medium">inqeta@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </PageLayout>
    </div>
  );
};

export default Terms;
