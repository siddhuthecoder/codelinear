import { Section } from "@/components/layout/section";
import { Cb7Watermark } from "./cb7-watermark";
import { CoreBankingContent } from "./core-banking-content";
import { CoreBankingVisual } from "./core-banking-visual";

export function CoreBankingSection() {
  return (
    <Section
      id="core-banking"
      surface="dark"
      padding="default"
      className="core-banking-section relative overflow-x-clip"
      aria-labelledby="core-banking-heading"
      noPaddingBottom
    >
      <div className="relative lg:min-h-[400px] lg:py-8">
        <div className="core-banking-dark-fade" aria-hidden />

        <div className="cb7-watermark-wrap" aria-hidden>
          <Cb7Watermark />
        </div>

        <div
          id="core-banking-heading"
          className="z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-16"
        >
          <CoreBankingContent />
          <div className="min-w-0 lg:col-start-2">
            <CoreBankingVisual />
          </div>
        </div>
      </div>
    </Section>
  );
}
