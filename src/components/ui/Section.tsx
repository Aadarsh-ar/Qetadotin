import { ReactNode } from "react";
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
        "section-padding",
        dark ? "bg-primary text-primary-foreground" : "bg-background text-foreground",
        className
      )}
    >
      <div className="container-wide">
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
}

export const SectionHeader = ({ label, title, description, className, dark = false }: SectionHeaderProps) => {
  return (
    <div className={cn("max-w-3xl mb-12 md:mb-16", className)}>
      {label && (
        <p className={cn(
          "text-sm uppercase tracking-widest font-medium mb-4",
          dark ? "text-primary-foreground/60" : "text-muted-foreground"
        )}>
          {label}
        </p>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight",
        dark ? "text-primary-foreground" : "text-foreground"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-6 text-lg leading-relaxed",
          dark ? "text-primary-foreground/70" : "text-muted-foreground"
        )}>
          {description}
        </p>
      )}
    </div>
  );
};
