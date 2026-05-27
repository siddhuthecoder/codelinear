import Image from "next/image";
import Link from "next/link";
import type { SolutionItem } from "./data";

type SolutionCardProps = {
  solution: SolutionItem;
};

export function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <article className="flex w-full flex-col items-start text-left group cursor-default transition-transform duration-300 ease-out hover:-translate-y-1">
      <Image
        src={solution.iconSrc}
        alt=""
        width={42}
        height={43}
        className="block h-[2.6875rem] w-[2.625rem] shrink-0 self-start object-contain object-left"
      />

      <div className="mt-[var(--gap-solution-stack)] flex w-full items-end justify-between gap-4">
        <h3 className="font-archivo text-heading-sm text-gradient-headline font-medium">
          {solution.title}
        </h3>
        {solution.badge ? (
          <span className="tag-nbfc shrink-0 pb-[4px]">{solution.badge}</span>
        ) : null}
      </div>

      <p className="font-archivo mt-4 text-sm leading-relaxed font-normal text-text-secondary">
        {solution.description}
      </p>

      <Link
        href={solution.href}
        className="link-learn-more mt-[var(--gap-solution-stack)] w-fit self-start"
      >
        <span>
          <span className="link-learn-more-underline">Learn</span> More
        </span>
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
