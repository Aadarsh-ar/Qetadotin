import { motion } from "framer-motion";

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const HamburgerIcon = ({ isOpen, onClick, className = "" }: HamburgerIconProps) => {
  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },
    open: (custom: number) => ({
      rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
      y: custom === 1 ? 6 : custom === 3 ? -6 : 0,
      opacity: custom === 2 ? 0 : 1,
    }),
  };

  return (
    <button
      onClick={onClick}
      className={`md:hidden p-2.5 rounded-xl bg-primary/5 hover:bg-primary/15 transition-colors relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {[1, 2, 3].map((line) => (
        <motion.span
          key={line}
          custom={line}
          variants={lineVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="block w-5 h-0.5 bg-foreground rounded-full origin-center"
        />
      ))}
    </button>
  );
};
