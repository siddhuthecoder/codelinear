export type FooterLocation = {
  id: string;
  title: string;
  address: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterLinkColumn = {
  title: string;
  links: FooterLink[];
};

export const footerLocations: FooterLocation[] = [
  {
    id: "london-uk",
    title: "London",
    address:
      "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
  },
  {
    id: "dubai",
    title: "Dubai",
    address:
      "Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates",
  },
  {
    id: "pune",
    title: "London",
    address:
      "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India",
  },
];

export const footerLinkColumns: FooterLinkColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "Core Banking CB7", href: "#core-banking" },
      { label: "Digital Banking N7", href: "#digital-banking" },
      { label: "Open Banking", href: "#open-banking" },
      { label: "Loan Origination System", href: "#loan-origination" },
      { label: "Loan Management System", href: "#loan-management" },
      { label: "Digital Transformation", href: "#digital-transformation" },
    ],
  },
  {
    title: "N7 Banking",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Solutions", href: "#solutions" },
      { label: "Contact", href: "#contact" },
      { label: "Company", href: "#company" },
      { label: "Careers", href: "#careers" },
      { label: "Insights", href: "#insights" },
      { label: "Core Team", href: "#core-team" },
      { label: "Brand Center", href: "#brand-center" },
    ],
  },
  {
    title: "Our Socials",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "X", href: "https://x.com" },
    ],
  },
];

export const footerCopyright =
  "Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]";
