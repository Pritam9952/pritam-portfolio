import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pritam-portfolio-theta.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}