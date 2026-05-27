"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeSmooth, transition } from "./variants";

export function AnimatedHome({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <main className="min-h-dvh">{children}</main>;
  }

  return (
    <motion.main
      className="min-h-dvh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: transition.duration, ease: easeSmooth }}
    >
      {children}
    </motion.main>
  );
}
