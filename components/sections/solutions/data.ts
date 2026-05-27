export type SolutionItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  iconSrc: string;
  badge?: "NBFC";
};

export const solutionsHeading =
  "All of our solutions are tailor-made to your needs";

export const solutions: SolutionItem[] = [
  {
    id: "core-banking",
    title: "Core Banking CB7",
    description:
      "N7's core banking solution is designed to improve the client experience with user-friendly functionality, simplify management of daily tasks, and automate manual procedures.",
    href: "#core-banking",
    iconSrc: "/aboutus/icon1.svg",
  },
  {
    id: "digital-banking",
    title: "Digital Banking N7",
    description:
      "Our Digital banking specialists combine strategy with human-centered design and disruptive innovation to help you unlock new possibilities.",
    href: "#digital-banking",
    iconSrc: "/aboutus/icon2.svg",
  },
  {
    id: "open-banking",
    title: "Open Banking",
    description:
      "Our API banking approach goes beyond standardization, account aggregation and KYC, to be bank-led, regulatory compliant and open to innovation.",
    href: "#open-banking",
    iconSrc: "/aboutus/icon3.svg",
  },
  {
    id: "loan-origination",
    title: "Loan Origination System",
    description:
      "Our Digital banking specialists combine strategy with human-centered design and disruptive innovation to help you unlock new possibilities.",
    href: "#loan-origination",
    iconSrc: "/aboutus/icon4.svg",
    badge: "NBFC",
  },
  {
    id: "loan-management",
    title: "Loan Management System",
    description:
      "Our Digital banking specialists combine strategy with human-centered design and disruptive innovation to help you unlock new possibilities.",
    href: "#loan-management",
    iconSrc: "/aboutus/icon5.svg",
    badge: "NBFC",
  },
];
