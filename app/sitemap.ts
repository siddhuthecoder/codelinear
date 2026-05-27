import type { MetadataRoute } from "next";

const BASE_URL = "https://codelinear-eta.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
