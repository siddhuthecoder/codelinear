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
        "section-laptop-visual hide-image-small relative flex min-h-[360px] w-full overflow-visible lg:min-h-[600px]",
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
          "section-laptop-image absolute top-1/2 h-auto max-w-[min(100%,740px)] -translate-y-1/2 object-contain",
          isRight
            ? "right-[-260px] ml-[100px] object-right lg:ml-auto"
            : "left-[-250px] mr-[100px] object-left lg:mr-auto",
        )}
        sizes="(max-width: 1024px) 100vw, 46vw"
        style={{ minWidth: "600px" }}
      />
    </div>
  );
}
