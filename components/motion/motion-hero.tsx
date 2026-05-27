"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroContainer, transition } from "./variants";

export function MotionHero({
  children,
  className,
  id,
  "aria-labelledby": ariaLabelledby,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section
        id={id}
        className={className}
        aria-labelledby={ariaLabelledby}
      >
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      aria-labelledby={ariaLabelledby}
      initial="hidden"
      animate="visible"
      variants={heroContainer}
    >
      {children}
    </motion.section>
  );
}

export function MotionHeroHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <header className={className}>{children}</header>;
  }

  return (
    <motion.header
      className={className}
      variants={{
        hidden: { opacity: 0, y: -12 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={transition}
    >
      {children}
    </motion.header>
  );
}
