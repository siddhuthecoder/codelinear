import { Section } from "@/components/layout/section";
import { BankingBannerMarquee } from "./banking-banner-marquee";

export function BankingBannerSection() {
  return (
    <Section
      id="banking-banner"
      surface="light"
      padding="none"
      container={false}
      className="banking-banner-section overflow-x-clip"
      aria-label="Banking announcement"
    >
      <BankingBannerMarquee />
    </Section>
  );
}
