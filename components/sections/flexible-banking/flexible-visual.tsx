import { SectionLaptopVisual } from "@/components/sections/shared/section-laptop-visual";
import { flexibleImage } from "./data";

export function FlexibleVisual() {
  return (
    <SectionLaptopVisual
      src={flexibleImage}
      alt="KYC dashboard on laptop showing flexible core banking"
      position="left"
    />
  );
}
