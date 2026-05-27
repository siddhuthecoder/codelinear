import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Solutions", href: "#solutions", hasChevron: true },
  { label: "Resources", href: "#resources", hasChevron: true },
  { label: "About Us", href: "#about", hasChevron: false },
] as const;

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      aria-hidden
      className={cn("shrink-0 opacity-70", className)}
    >
      <path
        d="M0.75 0.75L4 4L7.25 0.75"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroHeaderNav() {
  return (
    <div className="mx-auto w-full max-w-[720px] flex items-center justify-center">
      <div
        className="nav-capsule flex w-[90%] items-center md:gap-[160px] max-md:justify-between"
      >
        <Link
          href="/"
          className="shrink-0 text-[1.125rem] font-bold leading-none tracking-tight text-white"
          aria-label="N7 home"
        >
          N7
        </Link>

        <div className="font-hero-mono flex min-w-0 flex-1 items-center justify-between font-medium max-md:max-w-fit max-md:pr-2">
          <nav
            className="hidden max-w-[264px] md:flex"
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-[0.6875rem] font-medium tracking-[0.06em] text-white/90 uppercase transition-colors hover:text-white"
                  >
                    {item.label}
                    {item.hasChevron ? <ChevronDown className="mt-px" /> : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="#request-demo"
            className="btn-nav-pill inline-flex shrink-0 items-center justify-center px-8 py-1.5"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
