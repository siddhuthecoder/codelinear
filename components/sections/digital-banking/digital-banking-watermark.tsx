import Image from "next/image";
import { digitalBankingWatermark } from "./data";

export function DigitalBankingWatermark() {
  return (
    <div className="digital-banking-watermark-layer" aria-hidden>
      <Image
        src={digitalBankingWatermark}
        alt=""
        width={1200}
        height={600}
        className="digital-banking-watermark"
        sizes="(max-width: 1024px) 120vw, 64rem"
        priority={false}
      />
    </div>
  );
}
