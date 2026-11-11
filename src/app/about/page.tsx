import Link from "next/link";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const engagementSteps = [
  {
    name: "A conversation",
    detail:
      "Name the challenge: unpaid invoices and unbilled work, two numbers that disagree, or a workflow someone repeats by hand. We say which line fits.",
  },
  {
    name: "Written scope",
    detail:
      "Professional services get a statement of work before delivery. Havilah Flow starts as a conversation about an authorized sample.",
  },
  {
    name: "Work in your environment",
    detail:
      "Data work lands in your warehouse and your git. Automation lands in the systems you already run. A Flow sample is used only with written authorization.",
  },
];

const deliveryPrinciples = [
  {
    title: "The situation",
    copy: "We start with the problem you can name: money already earned and hard to see, two reports that do not share a number, or a step someone repeats by hand.",
  },
  {
    title: "The line that fits",
    copy: "Havilah Flow is the pilot for revenue a service business has already earned. Data engineering is the professional service when the number itself is the problem. Automation is the service when one workflow is the problem.",
  },
  {
    title: "A person stays on the decision",
    copy: "A reminder, a message, or a change to a record waits for someone you authorize. A disputed metric is ruled in writing before a larger build.",
  },
  {
    title: "Engineering, after the problem is named",
    copy: "Pipelines, models, warehouse structure, and workflow connections come once the problem is known. The build serves that problem.",
  },
  {
    title: "In your environment",
    copy: "Data work lands in your warehouse and your git. Automation lands in the systems you already run. A Flow sample is used only with written authorization.",
  },
];

const capabilities = [
  {
    name: "Havilah Flow",
    href: "/services/havilah-flow",
    detail:
      "An emerging pilot for service businesses. Unpaid invoices, completed work that may be unbilled, and follow-ups a person approves.",
  },
  {
    name: "Data Engineering & Intelligence",
    href: "/services/data-engineering",
    detail:
      "Pipelines, a metric layer, and governance on Snowflake, dbt, and AWS.",
  },
  {
    name: "Contested Metric Diagnostic",
    href: "/services/diagnostic",
    detail:
      "Start here when two official numbers disagree. One metric, a written ruling, and evidence SQL your team can re-run.",
  },
  {
    name: "AI Automation & Digital Solutions",
    href: "/services/ai-automation",
    detail:
      "One named workflow on the systems you already run. A person approves the step that changes a record.",
  },
];

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Havilah Technologies LLC builds data platforms, automates a named workflow, and is developing Havilah Flow for revenue a service business has already earned.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Three lines. One firm."
        description={`${siteConfig.legalName} is a technology firm. We engineer data platforms, automate a named workflow, and are developing Havilah Flow so a service business can see revenue it has already earned.`}
        cta={{ href: "/contact", label: "Send an inquiry" }}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">
            The firm
          </p>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-secondary">
            <p>
              Service businesses, finance teams, and delivery partners come to
              us with a problem they can name: money that has been earned and
              is hard to see, a number two reports do not share, or a workflow
              someone repeats by hand.
            </p>
            <p>
              Havilah Flow is an emerging pilot for the first of those.
              Data Engineering & Intelligence is the professional service for
              Snowflake, dbt, and AWS, and it includes the Contested Metric
              Diagnostic when two official numbers disagree. AI Automation
              & Digital Solutions takes one named workflow and leaves a person
              on the step that changes a record.
            </p>
            <p>
              Professional services are contracted and invoiced by{" "}
              {siteConfig.legalName}, in the client environment, under a
              written statement of work. {siteConfig.legalName} is a{" "}
              {siteConfig.parentName} company.
            </p>
          </div>
          <div className="mt-10">
            <Button href="/contact">Discuss a business challenge</Button>
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
              Name the challenge. Then we scope the work.
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
        title="Tell us the business challenge."
        copy="Unpaid invoices, two numbers that disagree, or a workflow someone repeats by hand. We reply with whether a conversation is the right next step."
        buttonLabel="Send an inquiry"
      />
    </>
  );
}
