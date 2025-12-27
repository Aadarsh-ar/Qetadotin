import { Link } from "react-router-dom";
import { Instagram, Mail, Facebook, Linkedin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Our Work", href: "/how-we-work" },
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
    <footer className="relative overflow-hidden rounded-t-[3rem] mt-[-2rem] z-10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-95" />
      
      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-coral/20 rounded-full blur-3xl" />
      
      <div className="container-wide px-6 md:px-12 lg:px-20 py-20 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <span className="text-xl font-bold tracking-tight text-white">QETA</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-8">
              Production-grade AI systems that eliminate manual work and scale operations.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-6 text-white/50">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-6 text-white/50">
              Solutions
            </h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-6 text-white/50">
              Resources
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} QETA. All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              Systems that run your business.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
