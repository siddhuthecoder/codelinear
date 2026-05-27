import { MotionReveal } from "@/components/motion";
import { Section } from "@/components/layout/section";
import { CaseStudiesCarousel } from "./case-studies-carousel";

export function CaseStudiesSection() {
  return (
    <Section
      id="case-studies"
      surface="dark"
      padding="default"
      container={false}
      className="case-studies-section overflow-x-clip"
      aria-labelledby="case-studies-heading"
      noPaddingBottom
    >
      <div className="page-container">
        <MotionReveal>
          <h2
            id="case-studies-heading"
            className="font-archivo text-display-lg text-gradient-headline text-center font-medium mb-2"
          >
            Our Case Studies
          </h2>
        </MotionReveal>
      </div>

      <div className="mt-12 md:mt-14">
        <CaseStudiesCarousel />
      </div>
    </Section>
  );
}
