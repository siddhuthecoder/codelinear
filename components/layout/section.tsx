"use client";

import { motion, useReducedMotion } from "framer-motion";
import { sectionReveal, viewport } from "@/components/motion/variants";
import { cn } from "@/lib/utils";

type SectionSurface = "dark" | "dark-elevated" | "light" | "transparent";
type SectionPadding = "default" | "sm" | "lg" | "none";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  surface?: SectionSurface;
  padding?: SectionPadding;
  container?: boolean;
  noPaddingBottom?: boolean;
  noPaddingSides?: boolean;
  noPaddingTop?: boolean;
};

const surfaceClasses: Record<SectionSurface, string> = {
  dark: "surface-dark",
  "dark-elevated": "surface-dark-elevated",
  light: "surface-light",
  transparent: "",
};

const paddingClasses: Record<SectionPadding, string> = {
  default: "section-padding",
  sm: "section-padding-sm",
  lg: "section-padding-lg",
  none: "",
};

export function Section({
  children,
  className,
  id,
  surface = "dark",
  padding = "default",
  container = true,
  noPaddingBottom = false,
  noPaddingSides = false,
  noPaddingTop = false,
}: SectionProps) {
  const reduceMotion = useReducedMotion();
  const content = container ? (
    <div className="page-container" style={{ paddingInline: noPaddingSides ? 0 : undefined }}>
      {children}
    </div>
  ) : (
    children
  );

  const sectionClassName = cn(
    surfaceClasses[surface],
    paddingClasses[padding],
    className,
  );
  const sectionStyle =
    noPaddingBottom || noPaddingTop
      ? {
          ...(noPaddingTop ? { paddingTop: 0 } : null),
          ...(noPaddingBottom ? { paddingBottom: 0 } : null),
        }
      : undefined;

  if (reduceMotion) {
    return (
      <section id={id} className={sectionClassName} style={sectionStyle}>
        {content}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={sectionClassName}
      style={sectionStyle}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={sectionReveal}
    >
      {content}
    </motion.section>
  );
}
