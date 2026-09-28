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
            Call, SOW, delivery in your environment
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

      <CtaBand />
    </>
  );
}
