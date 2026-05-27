import Link from "next/link";
import { RequestDemoTrigger } from "@/components/request-demo";

export function HeroContent() {
  return (
    <div className="font-archivo flex flex-col justify-center">
      <h1 className="text-display-xl text-gradient-headline text-balance font-medium">
        The new foundation of modern banking
      </h1>

      <p className="text-body-lg mt-6 max-w-xl text-pretty font-normal text-text-secondary">
        We drive innovation and growth, provide seamless customer experience and
        operational excellence
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
        <RequestDemoTrigger className="btn-hero-primary inline-flex items-center justify-center px-10">
          Request Demo
        </RequestDemoTrigger>
        <Link
          href="#contact"
          className="btn-hero-outline inline-flex items-center justify-center px-10"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
