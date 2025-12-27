import { motion } from "framer-motion";

export const SystemDiagram = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Connection Lines */}
        <motion.path
          d="M100 150 L200 80"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.path
          d="M100 150 L200 150"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.path
          d="M100 150 L200 220"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        <motion.path
          d="M200 80 L300 150"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.path
          d="M200 150 L300 150"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
        <motion.path
          d="M200 220 L300 150"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* Nodes */}
        <motion.circle
          cx="100"
          cy="150"
          r="8"
          fill="currentColor"
          fillOpacity="0.3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
        <motion.circle
          cx="200"
          cy="80"
          r="6"
          fill="currentColor"
          fillOpacity="0.2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        />
        <motion.circle
          cx="200"
          cy="150"
          r="6"
          fill="currentColor"
          fillOpacity="0.2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        />
        <motion.circle
          cx="200"
          cy="220"
          r="6"
          fill="currentColor"
          fillOpacity="0.2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        />
        <motion.circle
          cx="300"
          cy="150"
          r="10"
          fill="currentColor"
          fillOpacity="0.4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />

        {/* Pulse Animation on Central Node */}
        <motion.circle
          cx="300"
          cy="150"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.2"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
      </svg>
    </div>
  );
};
