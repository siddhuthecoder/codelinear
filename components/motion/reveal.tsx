"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  fadeIn,
  fadeInDown,
  fadeInUp,
  scaleIn,
  staggerContainer,
  transition,
  transitionFast,
  viewport,
} from "./variants";

const variantMap = {
  fadeInUp,
  fadeIn,
  fadeInDown,
  scaleIn,
} as const;

type MotionRevealProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  variant?: keyof typeof variantMap;
  delay?: number;
};

export function MotionReveal({
  children,
  className,
  id,
  variant = "fadeInUp",
  delay = 0,
}: MotionRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variantMap[variant]}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}

type MotionStaggerProps = {
  children?: ReactNode;
  className?: string;
  trigger?: "mount" | "inView";
  as?: "div" | "ul";
};

export function MotionStagger({
  children,
  className,
  trigger = "inView",
  as = "div",
}: MotionStaggerProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as === "ul" ? "ul" : "div";

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const motionProps =
    trigger === "mount"
      ? { initial: "hidden" as const, animate: "visible" as const }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport,
        };

  const MotionTag = as === "ul" ? motion.ul : motion.div;

  return (
    <MotionTag className={className} variants={staggerContainer} {...motionProps}>
      {children}
    </MotionTag>
  );
}

type MotionItemProps = {
  children?: ReactNode;
  className?: string;
  variant?: keyof typeof variantMap;
};

export function MotionItem({
  children,
  className,
  variant = "fadeInUp",
}: MotionItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variantMap[variant]}
      transition={transitionFast}
    >
      {children}
    </motion.div>
  );
}

type MotionSectionProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  animateOnMount?: boolean;
};

export function MotionSection({
  children,
  className,
  id,
  style,
  animateOnMount = false,
}: MotionSectionProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section id={id} className={className} style={style}>
        {children}
      </section>
    );
  }

  const motionProps = animateOnMount
    ? { initial: "hidden" as const, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport,
      };

  return (
    <motion.section
      id={id}
      className={cn(className)}
      style={style}
      variants={fadeInUp}
      transition={transition}
      {...motionProps}
    >
      {children}
    </motion.section>
  );
}
