import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-500 ${
        scrolled ? "top-3" : "top-6"
      }`}>
        <div className={`bg-white/70 backdrop-blur-2xl border border-white/40 rounded-full px-4 md:px-6 transition-all duration-500 ${
          scrolled ? "shadow-pastel-lg" : "shadow-pastel"
        }`}>
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <img 
                src={newLogo} 
                alt="QETADOTIN" 
                width={40}
                height={40}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="h-10 w-10 object-cover rounded-full transition-all duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
              />
              <span className="text-lg font-semibold tracking-tight text-foreground">QETADOTIN</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href}>
                  <Button 
                    variant="nav" 
                    size="sm"
                    className={`${location.pathname === link.href ? "bg-primary/20 text-foreground" : ""}`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link to="/contact">
                <Button variant="hero" size="sm">
                  Book a Call
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle - Animated Hamburger */}
            <HamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Outside nav for proper z-index */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-foreground/30 backdrop-blur-md md:hidden"
              style={{ zIndex: 9998 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 180 }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-xs bg-gradient-to-b from-white to-sky-blue/10 shadow-2xl md:hidden flex flex-col"
              style={{ zIndex: 9999 }}
            >
              {/* Header with Logo and Close */}
              <div className="flex items-center justify-between p-5 border-b border-border/20">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <img 
                    src={newLogo} 
                    alt="QETADOTIN" 
                    width={32}
                    height={32}
                    loading="lazy"
                    className="h-8 w-8 object-cover rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                  />
                  <span className="text-lg font-semibold text-foreground">QETADOTIN</span>
                </Link>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} className="text-foreground" />
                </motion.button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center justify-between py-4 px-4 rounded-2xl text-base font-medium transition-all duration-200 ${
                        location.pathname === link.href 
                          ? "bg-gradient-to-r from-sky-blue/40 to-periwinkle/40 text-foreground shadow-sm" 
                          : "text-foreground/70 hover:text-foreground hover:bg-white/60"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${location.pathname === link.href ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-2"}`} />
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="p-5 border-t border-border/20"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" size="lg" className="w-full text-base py-5 group">
                    Book a Call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
