import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.parentLegalName,
      url: siteConfig.parentUrl,
    },
    areaServed: "US",
    serviceType: [
      "Havilah Flow revenue intelligence",
      "Data engineering and pipelines",
      "Snowflake, dbt and AWS",
      "Contested metric diagnostic",
      "AI automation and systems integration",
      "Partner and subcontract delivery",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
