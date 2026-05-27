import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative flex w-full items-center justify-center lg:justify-end">
      {/* Radial glow behind banner (matches Figma aura) */}
      <div
        className="hero-glow-bg pointer-events-none absolute inset-0 -z-10 scale-110"
        aria-hidden
      />

      <div className="relative w-full max-w-[640px] lg:max-w-none lg:translate-x-[6%]">
        <Image
          src="/banner_image.png"
          alt="Professional using N7 digital banking on laptop and mobile"
          width={820}
          height={640}
          priority
          className="h-auto w-full rounded-[var(--radius-2xl)] object-contain"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>
    </div>
  );
}
