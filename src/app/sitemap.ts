import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://walkingpadpicks.vercel.app";

  const articles = [
    "best-walking-pads-2026",
    "walking-pad-vs-treadmill",
    "best-walking-pad-under-200",
    "are-walking-pads-worth-it",
    "walking-pad-while-working",
  ];

  const staticPages = [
    "",
    "about",
    "contact",
    "privacy-policy",
    "affiliate-disclosure",
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}/${page}`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.5,
    })),
    ...articles.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
