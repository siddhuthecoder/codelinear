import Image from "next/image";

type DigitalBankingPhoneStageProps = {
  phoneImage: string;
  phoneAlt: string;
  sideSvg?: string;
  sideSvgPosition?: "left" | "right";
};

export function DigitalBankingPhoneStage({
  phoneImage,
  phoneAlt,
  sideSvg,
  sideSvgPosition = "left",
}: DigitalBankingPhoneStageProps) {
  return (
    <div className="digital-banking-phone-stage">
      {sideSvg ? (
        <div
          className={[
            "digital-banking-phone-decor",
            sideSvgPosition === "left"
              ? "digital-banking-phone-decor-left"
              : "digital-banking-phone-decor-right",
          ].join(" ")}
          aria-hidden
        >
          <Image
            src={sideSvg}
            alt=""
            width={480}
            height={1246}
            className="digital-banking-phone-decor-img"
            sizes="(max-width: 1024px) 50vw, 280px"
            priority={false}
          />
        </div>
      ) : null}

      <Image
        src={phoneImage}
        alt={phoneAlt}
        width={340}
        height={680}
        className="digital-banking-phone"
        sizes="(max-width: 1024px) 60vw, 340px"
        priority={false}
      />
    </div>
  );
}
