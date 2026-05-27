import Link from "next/link";
import { insightsHeading } from "./data";

export function InsightsIntro() {
  return (
    <div className="insights-intro font-archivo">
      <h2 className="insights-intro-title text-gradient-headline text-[37px] font-medium" style={{lineHeight: '1.2'}} >
        {insightsHeading}
      </h2>

      <Link
        href="#insights"
        className="btn-hero-outline mt-8 inline-flex h-10 w-fit items-center justify-center px-10 md:mt-10"
      >
        Insights
      </Link>
    </div>
  );
}
