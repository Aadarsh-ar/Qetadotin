import { Link } from "react-router-dom";
import { Instagram, Mail, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                <img src={logo} alt="QETA" className="h-10 w-10 object-contain rounded-full shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-shadow duration-300" />
                <span className="text-xl font-semibold tracking-tight text-foreground">QETA</span>
              </Link>
              <p className="text-foreground/60 text-sm leading-relaxed max-w-xs mb-8">
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
                    className="w-10 h-10 rounded-full bg-white/50 hover:bg-white/80 flex items-center justify-center text-foreground/50 hover:text-foreground transition-all duration-300 shadow-sm hover:shadow-pastel"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-6 text-foreground/50">
                Company
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-6 text-foreground/50">
                Solutions
              </h4>
              <ul className="space-y-4">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-6 text-foreground/50">
                Resources
              </h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-20 pt-8 border-t border-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-foreground/50 text-sm">
                © {new Date().getFullYear()} QETA. All rights reserved.
              </p>
              <p className="text-foreground/50 text-sm">
                Systems that run your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};