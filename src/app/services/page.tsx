import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { serviceLines, servicePath, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Data engineering, analytics, governance, and a contested-metric diagnostic on Snowflake, dbt, and AWS. Delivered under a written SOW in your environment.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we do"
        description={`${siteConfig.legalName} contracts four kinds of work. Each one is a named statement of work, delivered in your environment.`}
        cta={{ href: "/contact", label: "Request a fit call" }}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {serviceLines.map((line, index) => (
            <FadeIn key={line.id} delay={index * 0.05}>
              <article className="flex h-full flex-col rounded-sm border border-white/10 p-8">
                <h2 className="font-display text-2xl text-white">{line.name}</h2>
                <p className="mt-4 text-sm leading-7 text-secondary">
                  {line.summary}
                </p>
                <p className="mt-4 text-sm leading-7 text-white">
                  Best for: {line.bestFor}
                </p>
                <Link
                  href={servicePath(line.id)}
                  className="mt-8 text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
                >
                  View this service
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <article className="mt-6 rounded-sm border border-gold/30 bg-gold/[0.04] p-8">
            <h2 className="font-display text-2xl text-white">
              Not sure where to start?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-secondary">
              If two official numbers disagree, start with the Contested Metric
              Diagnostic. It names which figure is valid before anyone funds a
              larger build.
            </p>
            <Link
              href={servicePath("diagnostic")}
              className="mt-6 inline-flex text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
            >
              Start with the diagnostic
            </Link>
          </article>
        </FadeIn>
      </section>

      <CtaBand
        title="Tell us the workstream."
        copy="We will tell you whether a diagnostic, a build, or a partner workstream is the right next step."
        buttonLabel="Request a fit call"
      />
    </>
  );
}
