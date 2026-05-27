export type InsightItem = {
  id: string;
  category: string;
  title: string;
  author: string;
  date: string;
  href: string;
  featured?: boolean;
};

export const insightsHeading =
  "Get yourself up-to-speed on all the things happening in fintech";

export const insightImage = "/case_study.png";

export const insights: InsightItem[] = [
  {
    id: "featured",
    featured: true,
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    href: "#insight-featured",
  },
  {
    id: "2",
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    href: "#insight-2",
  },
  {
    id: "3",
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    href: "#insight-3",
  },
];
