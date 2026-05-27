import { Section } from "@/components/layout/section";
import {
  DigitalBankingLeftContent,
  DigitalBankingRightContent,
} from "./digital-banking-content";
import { DigitalBankingRows } from "./digital-banking-rows";
import { DigitalBankingPhone } from "./digital-banking-phone";
import { DigitalBankingWatermark } from "./digital-banking-watermark";
import { CtaSection } from "../cta";

export function DigitalBankingSection() {
  return (
    <Section
      id="digital-banking"
      surface="transparent"
      padding="default"
      className="digital-banking-section overflow-x-clip"
      aria-labelledby="digital-banking-heading"
    >
      <div className="digital-banking-inner">
        <DigitalBankingWatermark />

        <div className="digital-banking-rows">
          <div className="digital-banking-grid digital-banking-grid-hero">
            <DigitalBankingLeftContent />
            <DigitalBankingPhone />
            <DigitalBankingRightContent />
          </div>

          <DigitalBankingRows />

          <CtaSection whiteBg logo paddingX />
        </div>
      </div>
    </Section>
  );
}
