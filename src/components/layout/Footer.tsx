import { Link } from "react-router-dom";
import { Instagram, Mail, Facebook, Linkedin } from "lucide-react";
import logoSmall from "@/assets/qeta-logo-new.jpg";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "AI Avatars", href: "/solutions#avatars" },
    { name: "Voice Cloning", href: "/solutions#voice" },
    { name: "AI Ads", href: "/solutions#ads" },
    { name: "Video Editing", href: "/solutions#video" },
    { name: "Social Branding", href: "/solutions#social" },
    { name: "Automation Systems", href: "/solutions#automation" },
  ],
  resources: [
    { name: "Use Cases", href: "/use-cases" },
    { name: "Blog", href: "/blog" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/qeta.in?igsh=MXF1MWdsbXB5aWZlMw==" },
  { name: "Email", icon: Mail, href: "mailto:inqeta@gmail.com" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/qeta-dotin-8a48a03a1" },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-24">
        {/* Massive brand mark */}
        <div className="mb-20 pb-16 border-b border-border">
          <p className="eyebrow mb-6">— Build the system</p>
          <h2 className="font-serif text-[18vw] md:text-[14vw] lg:text-[180px] leading-[0.85] tracking-display text-foreground">
            QETA<span className="text-primary">.</span>IN
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
              <img src={logoSmall} alt="QETADOTIN" width={44} height={44}
                className="h-11 w-11 object-cover rounded-full border border-primary/50" />
              <span className="font-sans text-xs uppercase tracking-[0.28em] text-foreground">QETADOTIN</span>
            </Link>
            <p className="text-foreground/55 text-sm leading-relaxed max-w-xs mb-8 font-light">
              AI-powered content systems for modern brands. Avatars, voice, video and automation — engineered, not improvised.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="w-10 h-10 border border-border text-foreground/60 hover:text-primary hover:border-primary/60 flex items-center justify-center transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="eyebrow mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="font-sans text-sm text-foreground/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="eyebrow mb-6">Studio</h4>
            <ul className="space-y-3">
              {[...footerLinks.company, ...footerLinks.resources].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="font-sans text-sm text-foreground/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-3">
            <h4 className="eyebrow mb-6">Signal</h4>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/40">
            © {new Date().getFullYear()} QETADOTIN — Hyderabad / Remote
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/40">
            Systems that run your brand.
          </p>
        </div>
      </div>
    </footer>
  );
};
