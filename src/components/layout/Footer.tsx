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
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="QETA" 
                className="h-10 w-10 object-contain brightness-0 invert opacity-90" 
              />
              <span className="text-xl font-semibold tracking-tight">QETA</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs mb-6">
              Production-grade AI systems that eliminate manual work and scale operations.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/50">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/50">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/50">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} QETA. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              Systems that run your business.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
