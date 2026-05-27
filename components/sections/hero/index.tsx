import { MotionHero, MotionItem, MotionStagger } from "@/components/motion";
import { HeroContent } from "./hero-content";
import { HeroVisual } from "./hero-visual";
import { TrustedBy } from "./trusted-by";

export function HeroSection() {
  return (
    <MotionHero
      id="hero"
      className="surface-dark relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="page-container">
        <MotionStagger
          trigger="mount"
          className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-16"
        >
          <MotionItem className="flex flex-col">
            <div id="hero-heading">
              <HeroContent />
            </div>
            <TrustedBy />
          </MotionItem>

          <MotionItem variant="scaleIn">
            <HeroVisual />
          </MotionItem>
        </MotionStagger>
      </div>
    </MotionHero>
  );
}
