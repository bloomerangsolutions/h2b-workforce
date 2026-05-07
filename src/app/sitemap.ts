import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const ARTICLE_SLUGS = ["2024-supplemental-cap", "scaling-greenscapes", "2025-dol-rules"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = SITE.url;
  const routes = [
    "",
    "/programs",
    "/industries/landscaping",
    "/how-it-works",
    "/pricing",
    "/eligibility",
    "/about",
    "/resources",
    "/contact",
    "/privacy",
  ];

  const staticPages = routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  const articles = ARTICLE_SLUGS.map((slug) => ({
    url: `${base}/resources/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...articles];
}
