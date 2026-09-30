import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { HomeHero } from "@/components/HomeHero";
import { ServiceTile } from "@/components/ServiceTile";
import { StackStrip } from "@/components/StackStrip";
import {
  engagementStart,
  proofPoints,
  serviceLines,
  servicePath,
} from "@/lib/site";
import { situations } from "@/lib/situations";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StackStrip />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              What we do
            </p>
            <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
              Four engagements. One trusted number.
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {serviceLines.map((line, index) => (
              <ServiceTile key={line.id} line={line} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              A typical situation
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl text-white">
              {situations[0].title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-secondary">
              {situations[0].challenge}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-secondary">
              {situations[0].response}
            </p>
            <Link
              href="/case-studies"
              className="mt-6 inline-flex text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
            >
              See all five situations
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-white/10 bg-navy-deep">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Why teams hire us
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((item, index) => (
              <FadeIn key={item.value} delay={index * 0.05}>
                <article className="h-full bg-navy px-6 py-8">
                  <p className="font-display text-2xl text-gold">{item.value}</p>
                  <p className="mt-3 text-sm leading-6 text-secondary">
                    {item.label}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">
            How an engagement starts
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl text-white sm:text-4xl">
            Three steps, then the work starts
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

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Who we serve
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-sm border border-white/10 p-8">
              <h2 className="font-display text-2xl text-white">
                For finance and data leaders
              </h2>
              <p className="mt-4 text-base leading-8 text-secondary">
                CFOs, controllers, and heads of data who need reporting they
                can defend.
              </p>
            </article>
            <article className="rounded-sm border border-white/10 p-8">
              <h2 className="font-display text-2xl text-white">
                For primes and delivery partners
              </h2>
              <p className="mt-4 text-base leading-8 text-secondary">
                Program managers who need a Snowflake, dbt, or AWS specialist
                on a defined workstream, inside your security boundary.
              </p>
              <Link
                href={servicePath("partnership")}
                className="mt-6 inline-flex text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
              >
                Learn about partnering
              </Link>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us the workstream."
        copy="Pipelines, dbt, Snowflake, AWS, analytics, governance, or a partner engagement. We will scope it in writing."
        buttonLabel="Request a fit call"
      />
    </>
  );
}
