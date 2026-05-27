import Link from "next/link";
import { solutionsHeading } from "./data";

export function SolutionsIntro() {
  return (
    <div className="font-archivo flex flex-col lg:max-w-[min(100%,32rem)]">
      <h2 className="text-display-lg text-gradient-headline text-balance font-medium">
        {solutionsHeading}
      </h2>

      <Link
        href="#request-demo"
        className="btn-hero-outline mt-8 inline-flex w-fit items-center justify-center px-10 md:mt-10"
      >
        Request Demo
      </Link>
    </div>
  );
}
