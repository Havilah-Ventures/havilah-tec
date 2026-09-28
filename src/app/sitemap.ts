import type { MetadataRoute } from "next";
import { serviceLines, servicePath, siteConfig } from "@/lib/site";

const staticPaths = [
  "/",
  "/services",
  "/approach",
  "/about",
  "/careers",
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

  for (const line of serviceLines) {
    pages.push({
      url: `${siteConfig.url}${servicePath(line.id)}`,
      lastModified: new Date("2026-09-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return pages;
}
