import type { Metadata } from "next";
import { siteConfig } from "./site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "",
}: PageMetadataOptions): Metadata {
  const url =
    !path || path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? siteConfig.homeTitle
      : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/og/home.png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og/home.png"],
    },
  };
}
