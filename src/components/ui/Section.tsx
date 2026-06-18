import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export const Section = ({ children, className, dark = false, id }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "section-padding relative overflow-hidden",
        dark ? "bg-primary text-primary-foreground" : "bg-background text-foreground",
        className
      )}
    >
      <div className="container-wide relative z-10">
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  dark?: boolean;
  centered?: boolean;
}

export const SectionHeader = ({ 
  label, 
  title, 
  description, 
  className, 
  dark = false,
  centered = false 
}: SectionHeaderProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "max-w-2xl mb-16 md:mb-20",
        centered && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span className="pill-accent mb-6">
          {label}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15]",
        dark ? "text-primary-foreground" : "text-foreground"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-6 text-lg md:text-xl leading-relaxed",
          dark ? "text-primary-foreground/70" : "text-muted-foreground"
        )}>
          {description}
        </p>
      )}
    </motion.div>
  );
};