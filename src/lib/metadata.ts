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
          url: "/logo/havilah-seal-primary.svg",
          width: 120,
          height: 120,
          alt: `${siteConfig.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
  };
}
