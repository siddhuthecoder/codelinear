"use client";

import { MotionConfig } from "framer-motion";
import { transition } from "./variants";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={transition}>
      {children}
    </MotionConfig>
  );
}
