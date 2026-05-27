import { Section } from "@/components/layout/section";
import { FlexibleContent } from "./flexible-content";
import { FlexibleVisual } from "./flexible-visual";

export function FlexibleBankingSection() {
  return (
    <Section
      id="flexible-banking"
      surface="dark"
      padding="default"
      className="flexi-section relative overflow-x-clip"
      aria-labelledby="flexible-banking-heading"
      noPaddingBottom
      noPaddingTop
    >
      <div className="relative lg:min-h-[min(520px,90vw)] py-4 lg:min-h-[480px] lg:py-8">
        <div
          id="flexible-banking-heading"
          className="z-10 grid items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-10 xl:gap-16 max-sm:mt-[-60px]"
        >
          <div className="min-w-0">
            <FlexibleVisual />
          </div>

          <div className="min-w-0">
            <FlexibleContent />
          </div>
        </div>
      </div>
    </Section>
  );
}
