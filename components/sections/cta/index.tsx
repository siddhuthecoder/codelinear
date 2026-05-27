import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/section";

const cb7Watermark = "/icons/CB7.svg";
const N7Watermark = "icons/N7.svg"

export function CtaSection({
  whiteBg = false,
  logo = false,
  paddingX = false,
  noWatermark = false,
  plainBg = false,
  id = "cta",
  headingId = "cta-heading",
}: {
  whiteBg?: boolean;
  logo?: boolean;
  paddingX?: boolean;
  noWatermark?: boolean;
  plainBg?: boolean;
  id?: string;
  headingId?: string;
}) {
  const bannerClassName = `cta-banner relative overflow-hidden ${plainBg ? "cta-banner-plain" : ""} ${noWatermark ? "cta-banner-no-watermark" : ""}`;
  const bannerStyle = plainBg
    ? { background: "transparent", borderRadius: 0, minHeight: "auto" as const }
    : undefined;

  return (
    <Section
      id={id}
      surface={whiteBg ? "transparent" : "dark"}
      padding="none"
      className={`cta-section py-6 md:py-8 ${paddingX ? "py-4" : ""}`}
      aria-labelledby={headingId}
      noPaddingSides={paddingX} 
      noPaddingBottom={id === "cta-footer"}
    >
      <div className={bannerClassName} style={bannerStyle}>
        {!noWatermark ? (
          <div className="cta-banner-watermark-wrap" aria-hidden>
            <Image
              src={logo ? N7Watermark : cb7Watermark}
              alt=""
              width={1096}
              height={410}
              className="cta-banner-watermark"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ) : null}

        <div className="cta-banner-inner font-archivo relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <h2
              id={headingId}
              className="cta-banner-heading lg:text-[53px] text-balance font-medium text-foreground"
            >
              Take the full advantage of going paper-less now.
            </h2>
            <p className="cta-banner-body lg:text-[16px] mt-4 max-w-2xl text-pretty font-normal text-text-secondary md:mt-5">
              CB7 helps your financial institution improve the client
              experience, automate and optimize procedures, simplify banking
              operations
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:shrink-0">
            <Link
              href="#contact"
              className="btn-hero-outline inline-flex h-10 items-center justify-center px-10"
            >
              Contact Us
            </Link>
            <Link
              href="#request-demo"
              className="btn-hero-primary inline-flex h-10 items-center justify-center px-10"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
