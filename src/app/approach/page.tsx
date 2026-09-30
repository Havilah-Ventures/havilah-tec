import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { MethodologySection } from "@/components/MethodologySection";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import {
  craft,
  deliveryPosture,
  engagementModels,
  engagementStart,
} from "@/lib/site";

export const metadata = createPageMetadata({
  title: "How we work",
  description:
    "How Havilah Technologies LLC engages: discovery call, written SOW, delivery in your warehouse and git. Assess → Design → Deliver → Govern.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Assess, design, deliver, govern"
        description="Every engagement is a named workstream under a written SOW. We work in your warehouse and your git. We do not take unscoped seats."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">
            How an engagement starts
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl text-white sm:text-4xl">
            Fit call, written SOW, delivery in your environment
          </h2>
        </FadeIn>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {engagementStart.map((step, index) => (
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
      </section>

      <MethodologySection />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Commercial shape
            </p>
            <h2 className="mt-4 font-display text-3xl text-white">
              Written SOW. Named workstream.
            </h2>
            <div className="mt-8 space-y-6">
              {engagementModels.map((model) => (
                <article
                  key={model.name}
                  className="border-b border-white/10 pb-6 last:border-b-0"
                >
                  <h3 className="font-display text-lg text-white">
                    {model.name}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-secondary">
                    {model.description}
                  </p>
                </article>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Stack
            </p>
            <h2 className="mt-4 font-display text-3xl text-white">
              Snowflake, dbt, Python, SQL, AWS — used as engineering.
            </h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {craft.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 space-y-6">
              {deliveryPosture.map((item) => (
                <article key={item.title}>
                  <h3 className="font-display text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-secondary">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              The statement of work
            </p>
            <h2 className="mt-4 font-display text-3xl text-white">
              What the SOW contains
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-secondary">
              <li>The workstream and the outcome.</li>
              <li>Named owners on both sides.</li>
              <li>Acceptance criteria.</li>
              <li>The environment: your warehouse and your git.</li>
              <li>A single fee for that scope.</li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              At the end
            </p>
            <h2 className="mt-4 font-display text-3xl text-white">
              What you own
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-secondary">
              <li>The code in your repository.</li>
              <li>Tests and documentation.</li>
              <li>A runbook and named owners.</li>
              <li>The decision of what an agent may quote, when that is in scope.</li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Questions
            </p>
            <h2 className="mt-4 font-display text-3xl text-white">
              Access, security, and price
            </h2>
          </FadeIn>
          <dl className="mt-10 space-y-8">
            <div>
              <dt className="font-display text-lg text-white">
                What access do you need?
              </dt>
              <dd className="mt-2 text-sm leading-7 text-secondary">
                The warehouse, the repository, and the two artifacts when the
                work is a disputed metric. Access stays inside your boundary.
              </dd>
            </div>
            <div>
              <dt className="font-display text-lg text-white">
                Where does the data go?
              </dt>
              <dd className="mt-2 text-sm leading-7 text-secondary">
                It stays in your cloud and your git. We do not take a copy of
                production home.
              </dd>
            </div>
            <div>
              <dt className="font-display text-lg text-white">
                How is the work priced?
              </dt>
              <dd className="mt-2 text-sm leading-7 text-secondary">
                A single number in the statement of work for a defined scope.
                Rates are not published on this site.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <CtaBand
        title="Tell us the workstream."
        copy="Thirty minutes is enough to say whether it is a fit."
        buttonLabel="Request a fit call"
      />
    </>
  );
}
