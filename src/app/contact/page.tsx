import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Havilah Technologies LLC for data engineering, dbt, Snowflake/AWS, analytics, AI-ready data, governance, or partner delivery.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a 30-minute fit call"
        description="Name the workstream. We reply with a time for a thirty-minute call, or we tell you if it is not a fit."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <FadeIn>
            <div className="space-y-10">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-gold">
                  What happens next
                </p>
                <ol className="mt-4 space-y-4 text-sm leading-7 text-secondary">
                  <li>You send the workstream, and the metric if two numbers disagree.</li>
                  <li>We reply with a time for a thirty-minute fit call, or we say it is not a fit.</li>
                  <li>
                    If it is a fit, you receive a written statement of work
                    under {siteConfig.legalName}.
                  </li>
                </ol>
                <Link
                  href="/services"
                  className="mt-4 inline-flex text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
                >
                  View services →
                </Link>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-gold">
                  Contracting
                </p>
                <p className="mt-3 text-base leading-8 text-secondary">
                  All engagements are contracted and invoiced by{" "}
                  {siteConfig.legalName}, a {siteConfig.parentName} company.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-gold">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 inline-block text-lg text-white transition-colors hover:text-gold"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-sm border border-white/10 bg-white/[0.02] p-8">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
