import Image from "next/image";

const partnerLogos = [
  { src: "/logos/logo_1.svg", alt: "SHELLS", width: 73 },
  { src: "/logos/logo_2.svg", alt: "SmartFinder", width: 102 },
  { src: "/logos/logo_3.svg", alt: "Zoomerr", width: 80 },
  { src: "/logos/logo_4.svg", alt: "ArtVenue", width: 90 },
  { src: "/logos/logo_5.svg", alt: "kontrastr", width: 95 },
  { src: "/logos/logo_6.svg", alt: "WAVESMARATHON", width: 110 },
] as const;

export function TrustedBy() {
  return (
    <div className="mt-10 md:mt-12 lg:mt-14">
      <p className="font-archivo mb-4 text-base font-medium text-[var(--n7-gray-500)]">
        Trusted By:
      </p>
      <ul className="flex max-w-2xl flex-wrap items-center gap-x-[18px] gap-y-4 lg:flex-nowrap">
        {partnerLogos.map((logo) => (
          <li key={logo.src} className="flex shrink-0 items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={19}
              className="trusted-logo"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
