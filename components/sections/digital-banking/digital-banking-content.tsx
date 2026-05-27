import Image from "next/image";
import Link from "next/link";
import {
  digitalBankingComplianceDescription,
  digitalBankingComplianceHeading,
  digitalBankingDescription,
  digitalBankingFeatures,
  digitalBankingHeading,
} from "./data";

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

export function DigitalBankingLeftContent() {
  return (
    <div className="digital-banking-left font-archivo">
      <h2
        id="digital-banking-heading"
        className="digital-banking-heading text-balance font-medium text-[var(--text-on-light)]"
      >
        {digitalBankingHeading}
      </h2>
      <p className="digital-banking-description mt-4 max-w-md text-pretty font-normal text-[var(--n7-gray-600)] md:mt-5">
        {digitalBankingDescription}
      </p>

      <div className="mt-8 flex flex-col items-start gap-4 md:mt-10">
        <Link
          href="#request-demo"
          className="btn-hero-primary inline-flex min-w-[8.5rem] items-center justify-center px-10"
        >
          Request Demo
        </Link>
        <Link href="#digital-banking" className="link-learn-more w-fit">
          <span>
            <span className="link-learn-more-underline">Learn</span> More
          </span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

export function DigitalBankingRightContent() {
  return (
    <div className="digital-banking-right font-archivo">
      <h3 className="digital-banking-compliance-heading text-balance font-medium text-[var(--text-on-light)]">
        {digitalBankingComplianceHeading}
      </h3>
      <p className="digital-banking-compliance-description text-pretty font-normal text-[var(--n7-gray-600)]">
        {digitalBankingComplianceDescription}
      </p>

      <ul className="digital-banking-features">
        {digitalBankingFeatures.map((feature) => (
          <li key={feature} className="digital-banking-feature-item">
            <FeatureCheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
