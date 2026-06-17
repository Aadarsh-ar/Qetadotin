import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-semibold uppercase tracking-[0.18em] text-xs ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-accent",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-foreground/20 bg-transparent text-foreground hover:border-primary hover:text-primary",
        secondary: "bg-card text-foreground border border-border hover:border-primary/60",
        ghost: "text-foreground/70 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground hover:bg-accent",
        heroOutline: "border border-foreground/20 bg-transparent text-foreground hover:border-primary hover:text-primary",
        nav: "bg-transparent text-foreground/60 hover:text-primary normal-case tracking-normal text-sm font-normal",
        soft: "bg-card text-foreground hover:bg-muted",
        glass: "bg-card/60 backdrop-blur-xl text-foreground border border-border hover:border-primary/60",
        pastel: "bg-primary text-primary-foreground hover:bg-accent",
      },
      size: {
        default: "h-11 px-7",
        sm: "h-9 px-4",
        lg: "h-13 px-8",
        xl: "h-14 px-10 text-sm",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };