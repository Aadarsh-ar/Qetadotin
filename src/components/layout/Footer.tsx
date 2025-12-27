import { Link } from "react-router-dom";
import { Instagram, Mail, Facebook, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/qeta-logo.jpg";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  solutions: [
    { name: "AI Workflow Automation", href: "/solutions#workflow" },
    { name: "AI Revenue Systems", href: "/solutions#revenue" },
    { name: "Custom AI Agents", href: "/solutions#agents" },
    { name: "System Integration", href: "/solutions#integration" },
  ],
  resources: [
    { name: "Use Cases", href: "/use-cases" },
    { name: "Blog", href: "/blog" },
  ],
};

const socialLinks = [
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/qeta.in?igsh=MXF1MWdsbXB5aWZlMw==" 
  },
  { 
    name: "Email", 
    icon: Mail, 
    href: "mailto:inqeta@gmail.com" 
  },
  { 
    name: "Facebook", 
    icon: Facebook, 
    href: "#" 
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/qeta-dotin-8a48a03a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 mt-[-2rem]">
      {/* Gradient overlay top */}
      <div className="h-24 bg-gradient-to-b from-transparent via-primary/5 to-primary/20 rounded-t-[3rem]" />
      
      {/* Main footer content */}
      <div className="bg-gradient-to-br from-primary/30 via-periwinkle/30 to-accent/20 backdrop-blur-sm">
        <div className="container-wide px-6 md:px-12 lg:px-20 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                <motion.img 
                  src={logo} 
                  alt="QETA" 
                  className="h-12 w-12 object-cover rounded-full shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <span className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">QETA</span>
              </Link>
              <p className="text-foreground/60 text-sm leading-relaxed max-w-xs mb-8">
                Production-grade AI systems that eliminate manual work and scale operations.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="w-10 h-10 rounded-full bg-white/50 hover:bg-white/80 flex items-center justify-center text-foreground/50 hover:text-foreground transition-all duration-300 shadow-sm hover:shadow-pastel"
                    aria-label={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-6 text-foreground/50">
                Company
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      className="text-foreground/70 hover:text-foreground transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-6 text-foreground/50">
                Solutions
              </h4>
              <ul className="space-y-4">
                {footerLinks.solutions.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      className="text-foreground/70 hover:text-foreground transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-6 text-foreground/50">
                Resources
              </h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      className="text-foreground/70 hover:text-foreground transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <NewsletterForm />
          </div>

          {/* Bottom */}
          <motion.div 
            className="mt-20 pt-8 border-t border-foreground/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-foreground/50 text-sm">
                © {new Date().getFullYear()} QETA. All rights reserved.
              </p>
              <p className="text-foreground/50 text-sm">
                Systems that run your business.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};