import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { StackStrip } from "@/components/StackStrip";
import { createPageMetadata } from "@/lib/metadata";
import {
  clientProfile,
  dataChallenges,
  engagementModels,
  serviceGroups,
  servicePath,
  servicesInGroup,
  siteConfig,
} from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Havilah Technologies data portfolio: pipelines, dbt, Snowflake, AWS, analytics, AI-ready data, governance, partner subcontracting, and metric diagnostics.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A data portfolio you can contract by workstream"
        description={`${siteConfig.serviceTagline} Commercial buyers and delivery partners engage ${siteConfig.legalName} on a named SOW.`}
        cta={{ href: "/contact", label: "Start an engagement" }}
      />

      <StackStrip />

      {serviceGroups.map((group) => {
        const lines = servicesInGroup(group.id);
        return (
          <section
            key={group.id}
            className="border-b border-white/10 bg-white/[0.02]"
          >
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
              <FadeIn>
                <p className="text-xs uppercase tracking-[0.28em] text-gold">
                  {group.name}
                </p>
                <h2 className="mt-4 font-display text-3xl text-white">
                  {group.summary}
                </h2>
              </FadeIn>
              <div
                className={`mt-10 grid gap-6 ${
                  lines.length === 1 ? "lg:grid-cols-1" : "lg:grid-cols-2"
                }`}
              >
                {lines.map((area, index) => (
                  <PracticeAreaCard
                    key={area.id}
                    id={area.id}
                    name={area.name}
                    summary={area.summary}
                    capabilities={area.capabilities}
                    index={index}
                    href={servicePath(area.id)}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">
            Why this work exists
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl text-white sm:text-4xl">
            Pipelines, models, and AI fail in the same places
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dataChallenges.map((challenge, index) => (
            <FadeIn key={challenge.title} delay={index * 0.05}>
              <article className="h-full rounded-sm border border-white/10 p-6">
                <h3 className="font-display text-lg text-white">
                  {challenge.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-secondary">
                  {challenge.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.28em] text-gold">
                How we engage
              </p>
              <h2 className="mt-4 font-display text-3xl text-white">
                Four commercial shapes. One LLC on the SOW.
              </h2>
              <p className="mt-6 text-base leading-8 text-secondary">
                Commercial terms are scoped individually.{" "}
                {siteConfig.legalName} signs.
              </p>
            </FadeIn>

            <div className="space-y-6">
              {engagementModels.map((model, index) => (
                <FadeIn key={model.name} delay={index * 0.08}>
                  <article className="rounded-sm border border-white/10 p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-white">
                      {model.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-secondary">
                      {model.description}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">
            Who we serve
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl text-white">
            Operators, data leaders, and delivery partners
          </h2>
        </FadeIn>
        <dl className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { label: "Organizations", value: clientProfile.organizations },
            { label: "Environments", value: clientProfile.environments },
            { label: "Leadership", value: clientProfile.leaders },
          ].map((item) => (
            <div key={item.label}>
              <dt className="text-xs uppercase tracking-[0.2em] text-gold">
                {item.label}
              </dt>
              <dd className="mt-3 text-sm leading-7 text-secondary">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <CtaBand />
    </>
  );
}
