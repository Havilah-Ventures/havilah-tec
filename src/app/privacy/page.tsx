import { LegalPageIntro, LegalSection } from "@/components/LegalContent";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.legalName} — how we collect, use, and protect information when you visit our website or contact us.`,
  path: "/privacy",
});

const lastUpdated = "September 20, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`This Privacy Policy describes how ${siteConfig.legalName} collects, uses, and safeguards information in connection with our website and communications.`}
      />

      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-20">
        <LegalPageIntro lastUpdated={lastUpdated}>
          <p>
            {siteConfig.legalName} (&ldquo;Havilah Technologies,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects
            your privacy. This policy applies to information collected through
            this website and related inquiry channels. We are a company of{" "}
            {siteConfig.parentLegalName}.
          </p>
        </LegalPageIntro>

        <LegalSection title="1. Information We Collect" index={1}>
          <p>
            <strong className="font-normal text-white">
              Information you provide.
            </strong>{" "}
            When you contact us through our website or email, we may collect
            your name, email address, company name, role, message content, and
            any other information you choose to provide.
          </p>
          <p>
            <strong className="font-normal text-white">
              Automatically collected information.
            </strong>{" "}
            When you visit our website, our hosting provider and infrastructure
            partners may automatically collect certain technical data, including
            IP address, browser type, device information, referring URLs, and
            general usage data necessary to operate and secure the site.
          </p>
        </LegalSection>

        <LegalSection title="2. How We Use Information" index={2}>
          <p>We use information we collect to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Respond to inquiries and evaluate potential engagements</li>
            <li>Operate, maintain, and improve our website</li>
            <li>Communicate with you regarding our services</li>
            <li>Protect the security and integrity of our systems</li>
            <li>Comply with applicable legal obligations</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </LegalSection>

        <LegalSection title="3. Legal Basis & Consent" index={3}>
          <p>
            Where applicable, we process information based on legitimate
            business interests (such as responding to inquiries), your consent
            (when you submit a contact request), and compliance with legal
            requirements.
          </p>
        </LegalSection>

        <LegalSection title="4. Sharing of Information" index={4}>
          <p>We may share information with:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Service providers who assist in hosting, email delivery, and
              website operations
            </li>
            <li>
              Professional advisors where reasonably necessary (legal,
              accounting)
            </li>
            <li>
              Our parent, {siteConfig.parentLegalName}, where needed to
              administer group operations
            </li>
            <li>
              Authorities when required by law or to protect our rights and
              safety
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Data Retention" index={5}>
          <p>
            We retain information for as long as necessary to fulfill the
            purposes described in this policy, unless a longer retention period
            is required or permitted by law.
          </p>
        </LegalSection>

        <LegalSection title="6. Security" index={6}>
          <p>
            We implement reasonable administrative, technical, and
            organizational measures designed to protect information against
            unauthorized access, disclosure, or alteration. No method of
            transmission over the Internet is completely secure.
          </p>
        </LegalSection>

        <LegalSection title="7. Your Rights" index={7}>
          <p>
            Depending on your jurisdiction, you may have rights to access,
            correct, delete, or restrict processing of your personal
            information. To exercise applicable rights, contact us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-gold transition-colors hover:text-white"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="8. International Visitors" index={8}>
          <p>
            Our website is operated from the United States. If you access the
            site from outside the United States, you understand that information
            may be processed in the United States or other jurisdictions where
            our service providers operate.
          </p>
        </LegalSection>

        <LegalSection title="9. Changes to This Policy" index={9}>
          <p>
            We may update this Privacy Policy from time to time. The
            &ldquo;Last updated&rdquo; date indicates when the policy was last
            revised.
          </p>
        </LegalSection>

        <LegalSection title="10. Contact Us" index={10}>
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
