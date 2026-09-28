import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const engagementSteps = [
  {
    name: "Discovery call",
    detail:
      "We start by understanding the business problem, existing data environment, requirements, and desired outcome.",
  },
  {
    name: "Written SOW",
    detail:
      "The scope, deliverables, responsibilities, and engagement terms are documented in a written statement of work before delivery begins.",
  },
  {
    name: "Delivery in your environment",
    detail:
      "We build and deliver within the client environment, with the appropriate engineering, testing, documentation, and controls for the work.",
  },
];

const deliveryPrinciples = [
  {
    title: "Engineering first",
    copy: "Build reliable data pipelines, transformations, and warehouse structures.",
  },
  {
    title: "Business-aligned data",
    copy: "Connect technical implementation to the metrics and decisions the business actually needs.",
  },
  {
    title: "Defensible numbers",
    copy: "Apply testing, reconciliation, documentation, and controls so data can be trusted after delivery.",
  },
  {
    title: "Existing-environment delivery",
    copy: "Work within the client’s architecture, tools, standards, and deployment practices.",
  },
  {
    title: "AI-ready foundations",
    copy: "Structure and govern data so it can support analytics, automation, and AI use cases.",
  },
];

const capabilities = [
  {
    name: "Data Engineering",
    href: "/services/engineering",
    detail:
      "Pipelines, ingestion, transformation, orchestration, and production data workflows.",
  },
  {
    name: "Analytics Engineering",
    href: "/services/dbt",
    detail:
      "Dimensional modeling, business logic, metric definitions, testing, and analytics-ready datasets.",
  },
  {
    name: "Data Platforms",
    href: "/services/cloud",
    detail:
      "Warehouse design, data architecture, integrations, governance, and reliability.",
  },
  {
    name: "Data Quality & Controls",
    href: "/services/governance",
    detail:
      "Reconciliation, validation, testing, monitoring, and controls for critical business data.",
  },
  {
    name: "AI-Ready Data",
    href: "/services/ai",
    detail:
      "Data foundations designed to support AI, automation, machine learning, and advanced analytics.",
  },
];

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Havilah Technologies LLC provides professional data services for finance, operations, and technology leaders. Work is delivered in the client environment under a written statement of work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Data engineering and analytics for organizations that run on their warehouse"
        description={`${siteConfig.legalName} designs, builds, and governs data platforms. Work is delivered under a written statement of work, in the client environment.`}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">
            The firm
          </p>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-secondary">
            <p>
              We provide professional data services for finance, operations,
              and technology leaders.
            </p>
            <p>
              Our work is engineering: data ingestion, transformation models,
              warehouse design, metric integrity, and the controls that keep a
              number defensible after delivery.
            </p>
            <p>
              We work within the client’s existing environment, technology
              stack, and operating requirements. Engagements are contracted and
              invoiced by {siteConfig.legalName}.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              How an engagement runs
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl text-white sm:text-4xl">
              From the business problem to delivery in your environment
            </h2>
          </FadeIn>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {engagementSteps.map((step, index) => (
              <FadeIn key={step.name} delay={index * 0.07}>
                <li className="h-full rounded-sm border border-white/10 p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-xl text-white">
                    {step.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-secondary">
                    {step.detail}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              How we deliver
            </p>
            <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
              Engineering that the business can use
            </h2>
            <ul className="mt-8 space-y-6">
              {deliveryPrinciples.map((item) => (
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
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-sm border border-white/10 p-6 lg:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-gold">
                Capabilities
              </p>
              <ul className="mt-6 space-y-6">
                {capabilities.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="font-display text-lg text-white transition-colors hover:text-gold"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-2 text-sm leading-7 text-secondary">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
