import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { kindLabel, serviceLines, servicePath, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Havilah Flow, data engineering on Snowflake, dbt, and AWS, and automation of a named workflow. Havilah Technologies LLC.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Three lines"
        description={`${siteConfig.legalName} offers a revenue-intelligence pilot and two professional services. Each professional service is a named statement of work.`}
        cta={{ href: "/contact", label: "Discuss a business challenge" }}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {serviceLines.map((line, index) => (
            <FadeIn key={line.id} delay={index * 0.05}>
              <article className="flex h-full flex-col rounded-sm border border-white/10 p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-gold">
                  {kindLabel(line.kind)}
                </p>
                <h2 className="mt-3 font-display text-2xl text-white">{line.name}</h2>
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
              larger build. A prime who needs a named data workstream can read
              how partnering works.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href={servicePath("diagnostic")}
                className="inline-flex text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
              >
                Start with the diagnostic
              </Link>
              <Link
                href={servicePath("partnership")}
                className="inline-flex text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
              >
                Partner delivery
              </Link>
            </div>
          </article>
        </FadeIn>
      </section>

      <CtaBand
        title="Tell us the business challenge."
        copy="We will tell you whether Havilah Flow, a data engagement, a workflow, or a partner workstream is the right next step."
        buttonLabel="Discuss a business challenge"
      />
    </>
  );
}
