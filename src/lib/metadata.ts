import type { Metadata } from "next";
import { siteConfig } from "./site";

export type SocialImage = {
  url: string;
  alt: string;
};

const defaultSocialImage: SocialImage = {
  url: "/og/havilah-technologies.png",
  alt: `${siteConfig.name}: ${siteConfig.tagline} Data engineering, AI automation, and Havilah Flow.`,
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: SocialImage;
};

export function createPageMetadata({
  title,
  description,
  path = "",
  image = defaultSocialImage,
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
          url: image.url,
          width: 1200,
          height: 630,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}
