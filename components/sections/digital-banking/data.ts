export const digitalBankingHeading = "Digital banking out-of-the-box";

export const digitalBankingDescription =
  "N7 helps your financial institution improve the client experience, automate and optimize procedures";

export const digitalBankingComplianceHeading =
  "Fully compliant with regulatory requirement";

export const digitalBankingComplianceDescription =
  "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.";

export const digitalBankingPhoneImage = "/phones/phone1.png";

export const digitalBankingWatermark = "/icons/N7.svg";

export const digitalBankingFeatures = [
  "Pre-integrated Security System",
  "Fully Compliant With Regulatory Requirement",
  "Digitally Connected Core",
] as const;

export const digitalBankingFeatureRows = [
  {
    title: "No legacy IT systems",
    description:
      "Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
    features: [
      "Adaptive & Intelligent API monetization",
      "Ambient User Experience",
      "Cloud-native With lower TCO",
    ],
    phoneImage: "/phones/phone2.png",
    sideSvg: "/phones/left_side.svg",
    sideSvgPosition: "left" as const,
    variant: "text-middle" as const,
  },
  {
    title: "No traditional branches",
    description:
      "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.",
    features: [
      "Branchless & Paperless Banking",
      "Digital Transformation Capability",
      "Optimized, Adaptable and Scalable",
    ],
    phoneImage: "/phones/phone3.png",
    sideSvg: "/phones/7_right.svg",
    sideSvgPosition: "right" as const,
    variant: "text-right" as const,
  },
] as const;
