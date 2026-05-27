"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MotionStagger } from "@/components/motion";
import { fadeInUp, scaleIn, transitionFast } from "@/components/motion/variants";
import type { InsightItem } from "./data";
import { InsightCardCompact, InsightCardFeatured } from "./insight-card";

type InsightsCardsProps = {
  featured?: InsightItem;
  compact: InsightItem[];
};

export function InsightsCards({ featured, compact }: InsightsCardsProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="insights-grid">
        {featured ? (
          <div className="insights-grid-featured">
            <InsightCardFeatured insight={featured} />
          </div>
        ) : null}
        {compact.map((insight) => (
          <InsightCardCompact key={insight.id} insight={insight} />
        ))}
      </div>
    );
  }

  return (
    <MotionStagger className="insights-grid">
      {featured ? (
        <motion.div
          className="insights-grid-featured"
          variants={scaleIn}
          transition={transitionFast}
        >
          <InsightCardFeatured insight={featured} />
        </motion.div>
      ) : null}
      {compact.map((insight) => (
        <motion.div key={insight.id} variants={fadeInUp} transition={transitionFast}>
          <InsightCardCompact insight={insight} />
        </motion.div>
      ))}
    </MotionStagger>
  );
}
