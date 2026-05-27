"use client";

import Lottie from "lottie-react";
import { useReducedMotion } from "framer-motion";
import waveAnimation from "@/public/phones/wave.json";

export function BankingBannerWave() {
  const reduceMotion = useReducedMotion();

  return (
    <Lottie
      animationData={waveAnimation}
      loop={!reduceMotion}
      autoplay={!reduceMotion}
      className="banking-banner-wave"
      style={{ width: 40, height: 40, marginTop: '2px' }}
      aria-hidden
    />
  );
}
