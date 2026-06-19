import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/ui/Section";
import { Shield, Lock } from "lucide-react";
import { motion } from "framer-motion";

const Privacy = () => {
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
                Governance & Safety
              </p>
              <h1 className="text-4xl md:text-6xl font-serif leading-[1.05] tracking-tight text-black">
                Privacy Policy
              </h1>
              <p className="text-base text-[#251B18]/75 leading-relaxed font-light font-sans max-w-xl mx-auto">
                Last updated: June 19, 2026. This policy outlines how QETADOTIN handles user identity tokens, voice prints, and synthetic media configurations.
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
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-black">Identity Protection</h3>
                <p className="text-xs text-[#251B18]/75 leading-relaxed font-sans font-light font-sans">
                  We lock actor voice prints, visual clone datasets, and private training templates inside dedicated API endpoints. Your parameters remain secure.
                </p>
              </div>

              <div className="p-6 bg-[#f8f6f1] border border-black/5 rounded-[24px] space-y-4">
                <div className="w-10 h-10 bg-[#ff7633]/10 text-[#ff7633] rounded-full flex items-center justify-center">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-black">Secure Data Processing</h3>
                <p className="text-xs text-[#251B18]/75 leading-relaxed font-sans font-light font-sans">
                  All prompt inputs, synthesis files, and localized audio rendering triggers run on encrypted cloud servers with zero public leakage.
                </p>
              </div>
            </div>

            {/* Right: Detailed text */}
            <div className="lg:col-span-8 space-y-10 font-sans text-sm text-[#251B18]/80 leading-relaxed font-light">
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-black">1. Information Collection</h2>
                <p>
                  QETADOTIN collects user identifiers, billing metadata, and custom assets uploaded for synthesis training. This includes audio voice snippets (used strictly for generating voice duplicates under clear consent policies) and video sample loops (used to calibrate digital avatars).
                </p>
                <p>
                  We compile usage stats such as pipeline request volumes, rendering duration, node processing latency, and webhook statuses to maintain telemetry diagnostics.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-black">2. How We Process Assets</h2>
                <p>
                  Your audio and video parameters are processed through secure neural translation models and fast rendering clusters. These assets are compiled dynamically into multi-ratio aspect ads, script localized files, and training videos.
                </p>
                <p>
                  <strong>Zero Training on Public Models:</strong> QETADOTIN does not sell, lease, or distribute your custom voice clone coordinates or face patterns. We do not use user-specific assets to pre-train public open-source algorithms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-black">3. Access & Control</h2>
                <p>
                  Enterprise team administrators retain full access and control over active model assets. At any time, you can purge your custom voice clones, digital human assets, and rendering job records from our active databases and rendering nodes.
                </p>
                <p>
                  If you choose to purge assets, they are immediately queued for deletion and overwritten on secure cloud directories within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-black">4. Secure Node Infrastructure</h2>
                <p>
                  We host data across decentralized cloud endpoints using TLS 1.3 encryption in transit and AES-256 at rest. Telemetry diagnostics status and webhook connections (n8n, Salesforce, Hubspot) operate via strictly authenticated API calls.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-black/5">
                <h3 className="font-serif text-lg font-bold text-black">Contact Privacy Officer</h3>
                <p>
                  For any asset security concerns or user data purge requests, please reach out to our privacy diagnostics team at <a href="mailto:inqeta@gmail.com" className="text-[#ff7633] hover:underline font-medium">inqeta@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </PageLayout>
    </div>
  );
};

export default Privacy;
