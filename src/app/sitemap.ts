import type { MetadataRoute } from "next";
import { allServices, servicePath, siteConfig } from "@/lib/site";
import { insights } from "@/lib/insights";

const staticPaths = [
  "/",
  "/services",
  "/approach",
  "/about",
  "/careers",
  "/case-studies",
  "/insights",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified: new Date("2026-09-20"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  for (const line of allServices) {
    pages.push({
      url: `${siteConfig.url}${servicePath(line.id)}`,
      lastModified: new Date("2026-09-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const post of insights) {
    pages.push({
      url: `${siteConfig.url}/insights/${post.slug}`,
      lastModified: new Date("2026-09-30"),
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  return pages;
}
