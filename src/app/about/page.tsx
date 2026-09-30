import Link from "next/link";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const engagementSteps = [
  {
    name: "Metric review",
    detail:
      "Send the two artifacts that disagree, the metric name, and the decision or deadline that depends on it. We say whether a diagnostic is the right next step.",
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
    title: "The situation",
    copy: "We start with what you are living through: which two numbers disagree, who is waiting on them, and which decision is stuck.",
  },
  {
    title: "The pain",
    copy: "We name where it shows up. Close slips. The board asks. Commissions, an audit, or a pilot is about to use a figure nobody will stand behind.",
  },
  {
    title: "The cost of leaving it",
    copy: "We name what continues if the number stays unsettled: hours lost each close, a decision made on the wrong figure, and a question that arrives before the evidence.",
  },
  {
    title: "Engineering, after the problem is named",
    copy: "Pipelines, models, warehouse structure, and controls come once the metric and the break are known. The build serves that problem.",
  },
  {
    title: "In your environment",
    copy: "The work lands in your architecture, tools, and standards. A copilot or agent is allowed to quote the number only after it has been ruled.",
  },
];

const capabilities = [
  {
    name: "Contested Metric Diagnostic",
    href: "/services/diagnostic",
    detail:
      "Start here when two official numbers disagree. One metric, a written ruling, and evidence SQL your team can re-run.",
  },
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
    "When two official numbers disagree, Havilah Technologies LLC writes the ruling and delivers the engineering in the client environment. Send the metric to start.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Two official numbers. One written ruling."
        description={`${siteConfig.legalName} is a professional data-services firm. We settle the metric the business cannot defend, then build the engineering that keeps it settled — in your environment, under a written statement of work.`}
        cta={{ href: "/contact", label: "Send an inquiry" }}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">
            The firm
          </p>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-secondary">
            <p>
              Finance, operations, and technology leaders come to us when two
              reports name the same metric and do not agree. Close, a board
              question, an audit, or an AI pilot is waiting on the answer.
            </p>
            <p>
              The first engagement is a Contested Metric Diagnostic: one
              metric, traced from the source to the report, with a written
              ruling and evidence SQL your team can re-run. The engineering
              that follows — ingestion, transformation, warehouse design, and
              controls — is what keeps that number defensible after delivery.
            </p>
            <p>
              We work within the client’s existing environment, technology
              stack, and operating requirements. Engagements are contracted and
              invoiced by {siteConfig.legalName}. {siteConfig.legalName} is a{" "}
              {siteConfig.parentName} company.
            </p>
          </div>
          <div className="mt-10">
            <Button href="/contact">Send the two numbers</Button>
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
              Send the disagreement. Then we scope the work.
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
              Understand the problem before we engineer it
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

      <CtaBand
        title="If two reports disagree, send the metric."
        copy="Name the two sources, the decision that depends on the number, and the deadline. We reply with whether a diagnostic is the right next step."
        buttonLabel="Send an inquiry"
      />
    </>
  );
}
