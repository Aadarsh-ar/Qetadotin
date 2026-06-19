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
    { name: "Our Work", href: "/work" },
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
    <footer className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 mb-16">
      <div className="bg-[#f8f6f1] border border-black/10 rounded-[30px] px-8 md:px-16 py-20 relative overflow-hidden shadow-sm">
        {/* Subtle decorative grid/stripes on footer background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img src={logoSmall} alt="QETADOTIN" width={44} height={44}
                className="h-11 w-11 object-cover rounded-full border border-black/10" />
              <span className="font-sans text-sm uppercase tracking-[0.28em] text-black font-bold">QETADOTIN</span>
            </Link>
            <p className="text-[#251B18]/70 text-sm leading-relaxed max-w-xs font-light font-sans">
              AI-powered content systems for modern brands. Avatars, voice, video and automation — engineered, not improvised.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="w-10 h-10 border border-black/15 text-[#251B18]/60 hover:text-[#ff7633] hover:border-[#ff7633] rounded-full flex items-center justify-center transition-all bg-white"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#251B18] font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="font-sans text-sm text-[#251B18]/75 hover:text-[#ff7633] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Column */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#251B18] font-bold mb-6">Studio</h4>
            <ul className="space-y-3">
              {[...footerLinks.company, ...footerLinks.resources].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="font-sans text-sm text-[#251B18]/75 hover:text-[#ff7633] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-2 md:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#251B18] font-bold mb-6">Signal</h4>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="mt-20 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[#251B18]/50 font-sans text-xs uppercase tracking-[0.25em]">
          <p>
            © {new Date().getFullYear()} QETADOTIN
          </p>
          <div className="flex flex-wrap gap-4 items-center text-[10px]">
            <Link to="/privacy" className="hover:text-[#ff7633] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-[#ff7633] transition-colors">Terms & Conditions</Link>
          </div>
          <p>
            Systems that run your brand.
          </p>
        </div>
      </div>
    </footer>
  );
};
