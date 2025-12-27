import { Link } from "react-router-dom";
import { Instagram, Mail, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.jpg";

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
    <footer className="bg-primary text-primary-foreground rounded-t-[3rem] mt-[-2rem] relative z-10">
      <div className="container-wide px-6 md:px-12 lg:px-20 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="bg-primary-foreground/10 rounded-full p-2">
                <img 
                  src={logo} 
                  alt="QETA" 
                  className="h-8 w-8 object-contain brightness-0 invert opacity-90" 
                />
              </div>
              <span className="text-xl font-semibold tracking-tight">QETA</span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs mb-8">
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
                  className="w-10 h-10 rounded-full bg-primary-foreground/5 hover:bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-6 text-primary-foreground/40">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-6 text-primary-foreground/40">
              Solutions
            </h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-6 text-primary-foreground/40">
              Resources
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/40 text-sm">
              © {new Date().getFullYear()} QETA. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-sm">
              Systems that run your business.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};