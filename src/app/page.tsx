import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { HomeHero } from "@/components/HomeHero";
import { MethodologySection } from "@/components/MethodologySection";
import { ServiceTile } from "@/components/ServiceTile";
import { StackStrip } from "@/components/StackStrip";
import {
  buyerConcerns,
  clientProfile,
  costOfWaiting,
  dataChallenges,
  deliveryPosture,
  getService,
  homepageStart,
  proofPoints,
  serviceLines,
  servicePath,
} from "@/lib/site";

export default function HomePage() {
  const diagnostic = getService("diagnostic");

  return (
    <>
      <HomeHero />
      <StackStrip />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              When the number is already in dispute
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl text-white sm:text-4xl">
              The report is not where the break starts
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
          <p className="mt-10 max-w-3xl text-base leading-8 text-secondary">
            If two of these are familiar, the break is upstream of the report.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Cost of waiting
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl text-white sm:text-4xl">
              What an unsettled number costs
            </h2>
          </FadeIn>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {costOfWaiting.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05}>
                <li className="h-full rounded-sm border border-white/10 p-6">
                  <h3 className="font-display text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-secondary">
                    {item.detail}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-white/10 bg-navy-deep">
        <div className="mx-auto grid max-w-6xl gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((item, index) => (
            <FadeIn key={item.value} delay={index * 0.05}>
              <article className="h-full bg-navy px-6 py-8 lg:px-8">
                <p className="font-display text-2xl text-gold">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-secondary">
                  {item.label}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Start here
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl text-white sm:text-4xl">
              Settle one disputed number
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-secondary">
              The diagnostic is the engagement to start with. The workstreams
              below are what happens after the ruling, or when the work is a
              named build.
            </p>
          </FadeIn>

          {diagnostic ? (
            <FadeIn>
              <Link
                href={servicePath(diagnostic.id)}
                className="mt-10 block rounded-sm border border-gold/30 bg-gold/[0.04] p-8 transition-colors hover:bg-gold/[0.07] lg:p-10"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-gold">
                  {diagnostic.navHint}
                </p>
                <h3 className="mt-3 font-display text-2xl text-white sm:text-3xl">
                  {diagnostic.name}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-8 text-secondary">
                  {diagnostic.lead}
                </p>
                <span className="mt-6 inline-block text-sm uppercase tracking-[0.16em] text-gold">
                  View the diagnostic
                </span>
              </Link>
            </FadeIn>
          ) : null}

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceLines.map((line, index) => (
              <ServiceTile key={line.id} line={line} index={index} />
            ))}
          </div>
        </div>
      </section>

      <MethodologySection variant="compact" />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">
            How an engagement starts
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl text-white sm:text-4xl">
            Metric review, SOW, delivery in your environment
          </h2>
        </FadeIn>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {homepageStart.map((step, index) => (
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

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.28em] text-gold">
                Who we serve
              </p>
              <h2 className="mt-4 font-display text-3xl text-white">
                The worry that brings each buyer in
              </h2>
              <p className="mt-6 text-base leading-8 text-secondary">
                {clientProfile.organizations}
              </p>
              <ul className="mt-8 space-y-6">
                {buyerConcerns.map((item) => (
                  <li key={item.role}>
                    <h3 className="font-display text-lg text-white">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-secondary">
                      {item.worry}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="text-xs uppercase tracking-[0.28em] text-gold">
                Delivery posture
              </p>
              <ul className="mt-8 space-y-6">
                {deliveryPosture.map((item) => (
                  <li
                    key={item.title}
                    className="border-b border-white/10 pb-6 last:border-b-0"
                  >
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
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
