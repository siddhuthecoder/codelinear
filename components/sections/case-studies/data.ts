export type CaseStudyItem = {
  id: string;
  category: string;
  title: string;
  href: string;
  logo: {
    src: string;
    alt: string;
    width: number;
  };
};

export const caseStudyImage = "/case_study.png";

export const caseStudies: CaseStudyItem[] = [
  {
    id: "1",
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    href: "#case-study-1",
    logo: { src: "/logos/logo_3.svg", alt: "Zoomerr", width: 80 },
  },
  {
    id: "2",
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    href: "#case-study-2",
    logo: { src: "/logos/logo_3.svg", alt: "Zoomerr", width: 80 },
  },
  {
    id: "3",
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    href: "#case-study-3",
    logo: { src: "/logos/logo_3.svg", alt: "Zoomerr", width: 80 },
  },
  {
    id: "4",
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    href: "#case-study-4",
    logo: { src: "/logos/logo_3.svg", alt: "Zoomerr", width: 80 },
  },
];
