import dynamic from "next/dynamic";
import { AnimatedHome } from "@/components/motion";
import { RequestDemoModal, RequestDemoProvider } from "@/components/request-demo";
import { BankingBannerSection } from "@/components/sections/banking-banner";
import { CoreBankingSection } from "@/components/sections/core-banking";
import { DigitalBankingSection } from "@/components/sections/digital-banking";
import { FlexibleBankingSection } from "@/components/sections/flexible-banking";
import { InsightsSection } from "@/components/sections/insights";
import { CtaSection } from "@/components/sections/cta";
import { FooterSection } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { SolutionsSection } from "@/components/sections/solutions";

// Carousel has client-side state + framer-motion — split into its own chunk
const CaseStudiesSection = dynamic(
  () => import("@/components/sections/case-studies").then((m) => m.CaseStudiesSection),
  { loading: () => null }
);

export default function Home() {
  return (
    <RequestDemoProvider>
      <RequestDemoModal />
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
    </RequestDemoProvider>
  );
}
