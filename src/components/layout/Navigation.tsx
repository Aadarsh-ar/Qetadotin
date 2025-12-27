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
                className="h-9 w-9 object-contain rounded-full transition-all duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]" 
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden mt-3 bg-white/80 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-pastel-lg overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block py-3 px-4 rounded-xl text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all ${
                    location.pathname === link.href ? "bg-primary/15 text-foreground" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" size="lg" className="w-full">
                    Book a Call
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};