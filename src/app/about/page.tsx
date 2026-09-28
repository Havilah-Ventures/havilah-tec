import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { deliveryPosture, serviceLines, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Havilah Technologies LLC is the data operating company of Havilah Ventures — pipelines, dbt, cloud analytics, and AI-ready data under a written SOW.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A data engineering practice with institutional delivery"
        description={`${siteConfig.legalName} contracts, invoices, and delivers data platforms, transformation, analytics, and AI-ready foundations. Buyers hire a named practitioner billed as this company.`}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              The practice
            </p>
            <h2 className="mt-4 font-display text-3xl text-white">
              Independent specialist. Written SOW.
            </h2>
            <p className="mt-6 text-base leading-8 text-secondary">
              We are a data engineering and analytics practice: pipelines, dbt,
              Snowflake, AWS, transformation, analytics, governance, and
              AI-ready marts. Work is scoped to a named workstream. Delivery
              happens in the client environment.
            </p>
            <p className="mt-4 text-base leading-8 text-secondary">
              Engagements run under {siteConfig.legalName}.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Parent
            </p>
            <h2 className="mt-4 font-display text-3xl text-white">
              A {siteConfig.parentName} company
            </h2>
            <p className="mt-6 text-base leading-8 text-secondary">
              {siteConfig.parentName} holds the group brand.{" "}
              {siteConfig.name} is the operating company for technology
              services — the entity that signs, invoices, and delivers.
            </p>
            <a
              href={siteConfig.parentUrl}
              className="mt-8 inline-flex text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
            >
              Visit {siteConfig.parentName}
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.28em] text-gold">
                How we deliver
              </p>
              <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
                {siteConfig.operatingFocus}
              </h2>
              <ul className="mt-8 space-y-6">
                {deliveryPosture.map((item) => (
                  <li key={item.title}>
                    <h3 className="font-display text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-secondary">
                      {item.copy}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-10 inline-flex text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
              >
                View capabilities →
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-sm border border-white/10 p-6 lg:p-8">
                <p className="text-xs uppercase tracking-[0.24em] text-gold">
                  Catalog
                </p>
                <ul className="mt-6 space-y-4">
                  {serviceLines.map((area) => (
                    <li key={area.id}>
                      <Link
                        href={`/services/${area.id}`}
                        className="font-display text-lg text-white transition-colors hover:text-gold"
                      >
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
