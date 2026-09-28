import Link from "next/link";
import { LegalPageIntro, LegalSection } from "@/components/LegalContent";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description: `Terms of Use for the ${siteConfig.legalName} website — governing access to and use of our online properties.`,
  path: "/terms",
});

const lastUpdated = "September 20, 2026";

export default function TermsOfUsePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description={`These Terms of Use govern your access to and use of the ${siteConfig.name} website operated by ${siteConfig.legalName}.`}
      />

      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-20">
        <LegalPageIntro lastUpdated={lastUpdated}>
          <p>
            By accessing or using this website, you agree to these Terms of Use.
            If you do not agree, please do not use the site.
          </p>
        </LegalPageIntro>

        <LegalSection title={`1. About ${siteConfig.name}`} index={1}>
          <p>
            This website is operated by {siteConfig.legalName}, a{" "}
            {siteConfig.parentName} company. Content on this site is provided
            for general informational purposes regarding our advisory
            capabilities. Nothing on this website constitutes legal, financial,
            investment, or professional advice. Advisory engagements, if any,
            are governed by separate written agreements with{" "}
            {siteConfig.legalName}.
          </p>
        </LegalSection>

        <LegalSection title="2. Acceptable Use" index={2}>
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Use the website for any unlawful purpose</li>
            <li>
              Attempt to gain unauthorized access to our systems or networks
            </li>
            <li>
              Interfere with the proper functioning or security of the website
            </li>
            <li>
              Scrape, harvest, or extract data from the site without permission
            </li>
            <li>
              Misrepresent your affiliation with {siteConfig.name} or
              impersonate any person or entity
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Intellectual Property" index={3}>
          <p>
            All content on this website — including text, graphics, logos,
            design, and layout — is the property of {siteConfig.legalName},{" "}
            {siteConfig.parentLegalName}, or their licensors and is protected by
            applicable intellectual property laws.
          </p>
          <p>
            You may view and download content for personal, non-commercial
            reference only. You may not reproduce, distribute, modify, or create
            derivative works without our prior written consent.
          </p>
        </LegalSection>

        <LegalSection title="4. Inquiries & Communications" index={4}>
          <p>
            Information submitted through our contact channels does not create a
            client, advisory, partnership, or employment relationship. We
            reserve the right to decline any inquiry at our sole discretion.
          </p>
          <p>
            Any non-public information you submit should not be considered
            confidential until a mutual written agreement is executed.
          </p>
        </LegalSection>

        <LegalSection title="5. Disclaimer of Warranties" index={5}>
          <p>
            This website and its content are provided on an &ldquo;as is&rdquo;
            and &ldquo;as available&rdquo; basis without warranties of any kind,
            whether express or implied.
          </p>
        </LegalSection>

        <LegalSection title="6. Limitation of Liability" index={6}>
          <p>
            To the fullest extent permitted by applicable law,{" "}
            {siteConfig.legalName} and its members, managers, officers, and
            affiliates shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising from or related
            to your use of this website.
          </p>
          <p>
            Our total liability for any claim arising from use of the website
            shall not exceed one hundred U.S. dollars (USD $100).
          </p>
        </LegalSection>

        <LegalSection title="7. Indemnification" index={7}>
          <p>
            You agree to indemnify and hold harmless {siteConfig.legalName} and
            its affiliates from any claims, damages, or expenses arising from
            your violation of these Terms or misuse of the website.
          </p>
        </LegalSection>

        <LegalSection title="8. Privacy" index={8}>
          <p>
            Your use of this website is also governed by our{" "}
            <Link
              href="/privacy"
              className="text-gold transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection title="9. Modifications" index={9}>
          <p>
            We may revise these Terms of Use at any time by posting an updated
            version on this page. Your continued use of the website after
            changes are posted constitutes acceptance of the revised Terms.
          </p>
        </LegalSection>

        <LegalSection title="10. Governing Law" index={10}>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the State in which {siteConfig.legalName} is registered,
            without regard to conflict of law principles.
          </p>
        </LegalSection>

        <LegalSection title="11. Contact" index={11}>
          <p>
            {siteConfig.legalName}
            <br />
            Email:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-gold transition-colors hover:text-white"
            >
              {siteConfig.email}
            </a>
          </p>
        </LegalSection>
      </article>
    </>
  );
}
