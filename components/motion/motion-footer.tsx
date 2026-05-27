"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp, transition, viewport } from "./variants";

export function MotionFooter({
  children,
  className,
  style,
  "aria-label": ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <footer className={className} style={style} aria-label={ariaLabel}>
        {children}
      </footer>
    );
  }

  return (
    <motion.footer
      className={className}
      style={style}
      aria-label={ariaLabel}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUp}
      transition={transition}
    >
      {children}
    </motion.footer>
  );
}
