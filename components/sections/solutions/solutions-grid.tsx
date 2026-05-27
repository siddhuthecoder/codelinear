"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MotionStagger } from "@/components/motion";
import { fadeInUp, transitionFast } from "@/components/motion/variants";
import { solutions } from "./data";
import { SolutionCard } from "./solution-card";

export function SolutionsGrid() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <ul className="grid list-none items-start gap-x-10 gap-y-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14 lg:gap-x-14 lg:gap-y-16">
        {solutions.map((solution) => (
          <li key={solution.id} className="justify-self-start">
            <SolutionCard solution={solution} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <MotionStagger
      as="ul"
      className="grid list-none items-start gap-x-10 gap-y-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14 lg:gap-x-14 lg:gap-y-16"
    >
      {solutions.map((solution) => (
        <motion.li
          key={solution.id}
          className="justify-self-start"
          variants={fadeInUp}
          transition={transitionFast}
        >
          <SolutionCard solution={solution} />
        </motion.li>
      ))}
    </MotionStagger>
  );
}
