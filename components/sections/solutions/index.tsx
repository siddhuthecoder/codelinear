import { MotionReveal } from "@/components/motion";
import { Section } from "@/components/layout/section";
import { SolutionsGrid } from "./solutions-grid";
import { SolutionsIntro } from "./solutions-intro";

export function SolutionsSection() {
  return (
    <Section
      id="solutions"
      surface="dark"
      padding="default"
      className="relative overflow-hidden"
      aria-labelledby="solutions-heading"
      noPaddingBottom={true}
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-2/3 max-w-3xl hero-glow-bg opacity-80"
        aria-hidden
      />

      <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <MotionReveal id="solutions-heading">
          <SolutionsIntro />
        </MotionReveal>

        <SolutionsGrid />
      </div>
    </Section>
  );
}
