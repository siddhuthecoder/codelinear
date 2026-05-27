import Image from "next/image";
import Link from "next/link";
import { MotionReveal } from "@/components/motion";
import { Section } from "@/components/layout/section";
import { insights } from "./data";
import { InsightsCards } from "./insights-cards";
import { InsightsIntro } from "./insights-intro";

export function InsightsSection() {
  const featured = insights.find((item) => item.featured);
  const compact = insights.filter((item) => !item.featured);

  return (
    <Section
      id="insights"
      surface="dark"
      padding="default"
      className="insights-section relative overflow-hidden"
      aria-labelledby="insights-heading"
      noPaddingBottom
    >
      <div
        className="pointer-events-none absolute inset-0 hero-glow-bg opacity-60"
        aria-hidden
      />

      <div className="relative grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-14 xl:gap-16">
        <MotionReveal id="insights-heading">
          <InsightsIntro />
        </MotionReveal>

        <div className="insights-panel min-w-0">
          <InsightsCards featured={featured} compact={compact} />

          <MotionReveal className="mt-8 flex justify-end md:mt-10" delay={0.2}>
            <Link href="#insights" className="insights-read-all">
              <span>
                <span className="insights-read-all-underline">Read</span> All
                Insights
              </span>
              <Image
                src="/icons/arrow.svg"
                alt=""
                width={14}
                height={15}
                aria-hidden
              />
            </Link>
          </MotionReveal>
        </div>
      </div>
    </Section>
  );
}
