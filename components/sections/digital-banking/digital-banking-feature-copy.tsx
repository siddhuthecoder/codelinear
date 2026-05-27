import Image from "next/image";

const checkIcon = "/icons/checkbox.svg";

function FeatureCheckIcon() {
  return (
    <Image
      src={checkIcon}
      alt=""
      width={30}
      height={32}
      className="digital-banking-check-icon shrink-0"
      aria-hidden
    />
  );
}

type DigitalBankingFeatureCopyProps = {
  title: string;
  description: string;
  features: readonly string[];
  className?: string;
};

/** Same title / description / checklist styles as hero right column */
export function DigitalBankingFeatureCopy({
  title,
  description,
  features,
  className = "",
}: DigitalBankingFeatureCopyProps) {
  return (
    <div className={["font-archivo", className].filter(Boolean).join(" ")}>
      <h3 className="digital-banking-compliance-heading text-balance font-medium text-[var(--text-on-light)]">
        {title}
      </h3>
      <p className="digital-banking-compliance-description text-pretty font-normal text-[var(--n7-gray-600)]">
        {description}
      </p>
      <ul className="digital-banking-features">
        {features.map((feature) => (
          <li key={feature} className="digital-banking-feature-item">
            <FeatureCheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
