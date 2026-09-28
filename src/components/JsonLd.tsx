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
      "Data engineering and pipelines",
      "dbt, SQL and transformation",
      "Cloud data platforms",
      "Analytics architecture and BI",
      "AI-ready data",
      "Contested metric diagnostic",
      "Data integrity, quality and governance",
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
