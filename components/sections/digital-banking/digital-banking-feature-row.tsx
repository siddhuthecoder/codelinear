import { DigitalBankingFeatureCopy } from "./digital-banking-feature-copy";
import { DigitalBankingPhoneStage } from "./digital-banking-phone-stage";

export type DigitalBankingFeatureRowVariant = "text-middle" | "text-right";

export type DigitalBankingFeatureRowData = {
  title: string;
  description: string;
  features: readonly string[];
  phoneImage: string;
  sideSvg: string;
  sideSvgPosition: "left" | "right";
  variant: DigitalBankingFeatureRowVariant;
};

/**
 * Same 3-column grid as hero.
 * - text-middle: empty | copy | phone
 * - text-right:  empty | phone | copy (like hero right column)
 */
export function DigitalBankingFeatureRow({
  title,
  description,
  features,
  phoneImage,
  sideSvg,
  sideSvgPosition,
  variant,
}: DigitalBankingFeatureRowData) {
  const copy = (
    <DigitalBankingFeatureCopy
      title={title}
      description={description}
      features={features}
      className="digital-banking-feature-copy"
    />
  );

  const phone = (
    <DigitalBankingPhoneStage
      phoneImage={phoneImage}
      phoneAlt=""
      sideSvg={sideSvg}
      sideSvgPosition={sideSvgPosition}
    />
  );

  return (
    <div
      className={[
        "digital-banking-grid digital-banking-grid-feature",
        variant === "text-right"
          ? "digital-banking-grid-feature--text-right"
          : "digital-banking-grid-feature--text-middle",
      ].join(" ")}
    >
      <div className="digital-banking-grid-spacer" aria-hidden />

      {variant === "text-middle" ? (
        <>
          {copy}
          {phone}
        </>
      ) : (
        <>
          {phone}
          {copy}
        </>
      )}
    </div>
  );
}
