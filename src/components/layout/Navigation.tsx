import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { HamburgerIcon } from "@/components/ui/HamburgerIcon";
import newLogo from "@/assets/qeta-logo-new.jpg";

const navLinks = [
  { name: "Solutions", href: "/solutions" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/50 bg-noir-elev flex items-center justify-center">
              <img
                src={newLogo}
                alt="QETADOTIN"
                width={40}
                height={40}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="h-10 w-10 object-cover"
              />
            </span>
            <span className="font-sans text-xs uppercase tracking-[0.28em] text-foreground">
              QETADOTIN
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-sans text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 link-underline-gold ${
                  location.pathname === link.href ? "text-primary" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="font-sans text-[11px] uppercase tracking-[0.25em] font-semibold bg-primary text-primary-foreground px-5 py-3 hover:bg-accent transition-colors"
            >
              Book a Call
            </Link>
          </div>

          <HamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </nav>

      {/* Mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-md md:hidden"
              style={{ zIndex: 9998 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-xs bg-noir-elev border-l border-border md:hidden flex flex-col"
              style={{ zIndex: 9999 }}
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                  <img src={newLogo} alt="QETADOTIN" width={32} height={32}
                    className="h-8 w-8 object-cover rounded-full border border-primary/50" />
                  <span className="font-sans text-xs uppercase tracking-[0.28em]">QETADOTIN</span>
                </Link>
                <button onClick={() => setIsOpen(false)} className="p-2 text-foreground/70 hover:text-primary" aria-label="Close menu">
                  <X size={22} />
                </button>
              </div>
              <div className="flex-1 px-6 py-10 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.06, duration: 0.4 }}
                  >
                    <Link
                      to={link.href}
                      className={`block font-serif text-3xl ${
                        location.pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="p-6 border-t border-border">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center font-sans text-[11px] uppercase tracking-[0.25em] font-semibold bg-primary text-primary-foreground py-4 hover:bg-accent transition-colors"
                >
                  Book a Call
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
