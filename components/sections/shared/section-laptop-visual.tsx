import Image from "next/image";
import { cn } from "@/lib/utils";

type SectionLaptopVisualProps = {
  src: string;
  alt: string;
  position: "left" | "right";
};

export function SectionLaptopVisual({
  src,
  alt,
  position,
}: SectionLaptopVisualProps) {
  const isRight = position === "right";

  return (
    <div
      className={cn(
        "section-laptop-visual relative flex w-full",
        "overflow-hidden lg:overflow-visible lg:min-h-[600px]",
        isRight ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={cn(
          "hero-glow-bg pointer-events-none absolute top-1/2 -z-10 h-full w-[min(100%,28rem)] -translate-y-1/2 opacity-70",
          isRight ? "right-0" : "left-0",
        )}
        aria-hidden
      />

      <Image
        src={src}
        alt={alt}
        width={480}
        height={580}
        className={cn(
          "h-auto object-contain",
          // Mobile: normal in-flow, constrained height
          "relative w-full max-h-[300px] rounded-xl",
          // Desktop: absolute overhang positioning
          "lg:max-h-none lg:rounded-none lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:max-w-[min(100%,740px)] lg:min-w-[600px]",
          isRight
            ? "lg:right-[-260px] lg:object-right"
            : "lg:left-[-250px] lg:object-left",
        )}
        sizes="(max-width: 1024px) 90vw, 46vw"
      />
    </div>
  );
}
