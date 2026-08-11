import { MetadataRoute } from "next";
import { getAllSlugs, getArticle } from "@/lib/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.walkingpadpicks.com";
  const redirectingSlugs = new Set(["walking-pad-vs-elliptical", "best-walking-pad-300-lb-capacity"]);
  const articleSlugs = getAllSlugs().filter((slug) => !redirectingSlugs.has(slug));
  const articleEntries = await Promise.all(
    articleSlugs.map(async (slug) => {
      const article = await getArticle(slug);
      return {
        slug,
        dateModified: article?.dateModified ?? article?.date ?? "2026-03-01",
      };
    })
  );

  const staticPages = [
    "",
    "about",
    "contact",
    "privacy",
    "affiliate-disclosure",
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}/${page}`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.5,
    })),
    ...articleEntries.map((entry) => ({
      url: `${baseUrl}/${entry.slug}`,
      lastModified: new Date(entry.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
