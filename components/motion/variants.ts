import type { Transition, Variants } from "framer-motion";

/** Gentle deceleration — reads smooth on scroll reveals and hero stagger */
export const easeSmooth: Transition["ease"] = [0.16, 1, 0.3, 1];

export const transition: Transition = {
  duration: 0.9,
  ease: easeSmooth,
};

export const transitionFast: Transition = {
  duration: 0.75,
  ease: easeSmooth,
};

export const viewport = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -64px 0px",
} as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1 },
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easeSmooth,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.14,
    },
  },
};
