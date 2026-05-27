import { AnimatedHome } from "@/components/motion";
import { BankingBannerSection } from "@/components/sections/banking-banner";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { CoreBankingSection } from "@/components/sections/core-banking";
import { DigitalBankingSection } from "@/components/sections/digital-banking";
import { FlexibleBankingSection } from "@/components/sections/flexible-banking";
import { InsightsSection } from "@/components/sections/insights";
import { CtaSection } from "@/components/sections/cta";
import { FooterSection } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { SolutionsSection } from "@/components/sections/solutions";

export default function Home() {
  return (
    <>
      <AnimatedHome>
        <HeroSection />
        <SolutionsSection />
        <CoreBankingSection />
        <FlexibleBankingSection />
        <CtaSection />
        <BankingBannerSection />
        <DigitalBankingSection />
        <InsightsSection />
        <CaseStudiesSection />
      </AnimatedHome>
      <CtaSection id="cta-footer" headingId="cta-footer-heading" whiteBg noWatermark plainBg />
      <FooterSection />
    </>
  );
}
