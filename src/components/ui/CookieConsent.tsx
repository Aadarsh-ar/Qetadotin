import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, X } from "lucide-react";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("qetadotin-cookie-consent");
    if (!consent) {
      // Show popup after a small delay for premium entrance feel
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("qetadotin-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("qetadotin-cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-50"
        >
          <div className="bg-black/90 backdrop-blur-md text-white border border-white/10 rounded-[24px] p-6 shadow-2xl relative overflow-hidden flex flex-col gap-4">
            {/* Subtle light glow */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#ff7633]/20 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-[#ff7633]/15 text-[#ff7633] flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-sans font-bold tracking-wide uppercase text-white">
                    Cookie Diagnostics
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                    We use cookies to analyze pipeline engagement metrics and optimize rendering delivery. By accepting, you consent to our telemetry trackers.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/40 hover:text-white transition-colors p-0.5 rounded-full hover:bg-white/5"
                aria-label="Close panel"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex gap-3 items-center justify-end pt-2">
              <button
                onClick={handleDecline}
                className="px-4 py-2 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/35 text-xs font-sans font-semibold transition-all"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 rounded-full bg-[#ff7633] text-white hover:bg-[#ff7633]/90 text-xs font-sans font-semibold transition-all shadow-sm shadow-[#ff7633]/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
