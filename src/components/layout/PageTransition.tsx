import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    transform: "translateY(20px)",
  },
  animate: {
    opacity: 1,
    transform: "translateY(0px)",
  },
  exit: {
    opacity: 0,
    transform: "translateY(-20px)",
  },
};

const pageTransition = {
  type: "tween" as const,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
  duration: 0.4,
};

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};