import Image from "next/image";
import {
  flexibleFeatures,
  flexibleHeading,
  flexibleSubheading,
} from "./data";

const checkIcon = "/icons/checkbox.svg";

function FeatureCheckIcon() {
  return (
    <Image
      src={checkIcon}
      alt=""
      width={30}
      height={32}
      className="flexi-check-icon shrink-0"
      aria-hidden
    />
  );
}

export function FlexibleContent() {
  return (
    <div className="flexi-content font-archivo">
      <h2 className="flexi-heading text-gradient-headline text-balance font-medium">
        {flexibleHeading}
      </h2>

      <div className="flexi-features-block">
        <p className="flexi-subheading">{flexibleSubheading}</p>

        <ul className="flexi-features grid gap-x-8 gap-y-4 sm:grid-cols-2 md:gap-x-10 md:gap-y-5">
        {flexibleFeatures.map((column, columnIndex) => (
          <li key={columnIndex} className="min-w-0 list-none">
            <ul className="flex flex-col gap-2">
              {column.map((feature) => (
                <li key={feature} className="flexi-feature-item flex items-start gap-1.5">
                  <FeatureCheckIcon />
                  <span className="pt-[5px]">{feature}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}
