import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full",
        outline: "border-2 border-primary/20 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground rounded-full",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full",
        ghost: "hover:bg-primary/5 hover:text-foreground rounded-full",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold tracking-wide rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] border-0",
        heroOutline: "border-2 border-primary/30 bg-card/50 backdrop-blur-sm text-foreground hover:border-primary hover:bg-primary/5 font-medium tracking-wide rounded-full",
        nav: "bg-transparent text-foreground/70 hover:text-foreground hover:bg-muted font-normal rounded-full",
        soft: "bg-primary/10 text-primary hover:bg-primary/20 rounded-full font-medium",
        glass: "bg-card/80 backdrop-blur-xl text-foreground border border-border/50 hover:bg-card hover:border-border rounded-full shadow-sm hover:shadow-md",
        gradient: "bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        coral: "bg-coral text-coral-foreground hover:bg-coral/90 font-medium rounded-full shadow-lg hover:shadow-xl",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-base",
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
