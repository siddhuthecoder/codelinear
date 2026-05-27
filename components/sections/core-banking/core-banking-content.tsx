import Link from "next/link";

export function CoreBankingContent() {
  return (
    <div className="font-archivo z-10 flex max-w-[min(100%,28rem)] flex-col items-start text-left">
      <h2 className="text-display-lg text-gradient-headline text-balance font-medium">
        A complete cloud-based core banking.
      </h2>

      <p className="mt-[var(--gap-solution-stack)] max-w-md text-body-lg text-pretty font-normal text-text-secondary">
        Faster time to market with our cloud-based core banking services
      </p>

      <div className="mt-[var(--gap-solution-stack)] flex flex-col items-start gap-4">
        <Link
          href="#request-demo"
          className="btn-hero-primary inline-flex h-10 items-center justify-center px-10"
        >
          Request Demo
        </Link>

        <Link href="#core-banking" className="link-learn-more w-fit">
          <span>
            <span className="link-learn-more-underline">Learn</span> More
          </span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
