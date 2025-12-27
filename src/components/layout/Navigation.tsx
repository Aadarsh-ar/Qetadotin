import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-500 ${
      scrolled ? "top-3" : "top-6"
    }`}>
      <div className={`bg-white/70 backdrop-blur-2xl border border-white/40 rounded-full px-4 md:px-6 transition-all duration-500 ${
        scrolled ? "shadow-pastel-lg" : "shadow-pastel"
      }`}>
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="QETA" 
                className="h-10 w-10 object-cover rounded-full transition-all duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
                style={{ imageRendering: 'auto' }}
              />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">QETA</span>
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

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link to="/contact">
              <Button variant="hero" size="sm">
                Book a Call
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-primary/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Portal-like positioning */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm md:hidden"
              style={{ zIndex: 9998 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-white backdrop-blur-2xl shadow-2xl md:hidden"
              style={{ zIndex: 9999 }}
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-foreground" />
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="px-6 py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      className={`block py-4 px-5 rounded-2xl text-lg font-medium text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-sky-blue/20 hover:to-periwinkle/20 transition-all ${
                        location.pathname === link.href 
                          ? "bg-gradient-to-r from-sky-blue/30 to-periwinkle/30 text-foreground" 
                          : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="absolute bottom-8 left-6 right-6"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" size="lg" className="w-full text-lg py-6">
                    Book a Call
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};