import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { HomeHero } from "@/components/HomeHero";
import { ServiceTile } from "@/components/ServiceTile";
import {
  engagementStart,
  proofPoints,
  serviceLines,
  servicePath,
} from "@/lib/site";
import { situations } from "@/lib/situations";

const homeSituations = ["unbilled-work", "two-revenues", "manual-handoff"]
  .map((id) => situations.find((item) => item.id === id))
  .filter((item): item is (typeof situations)[number] => Boolean(item));

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              What we do
            </p>
            <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
              Three lines. One company.
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
              Typical situations
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl text-white">
              One problem from each line
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {homeSituations.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.05}>
                <Link
                  href={item.href}
                  className="block h-full rounded-sm border border-white/10 p-6 transition-colors hover:border-gold/30"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-gold">
                    {item.service}
                  </p>
                  <h3 className="mt-3 font-display text-xl text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-secondary">
                    {item.situation}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <Link
              href="/case-studies"
              className="mt-8 inline-flex text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
            >
              See all situations
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
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="rounded-sm border border-white/10 p-8">
              <h2 className="font-display text-2xl text-white">
                For service businesses
              </h2>
              <p className="mt-4 text-base leading-8 text-secondary">
                Owners who need to see unpaid invoices, completed work that
                has not been billed, and which accounts need a follow-up.
              </p>
              <Link
                href={servicePath("havilah-flow")}
                className="mt-6 inline-flex text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
              >
                Havilah Flow
              </Link>
            </article>
            <article className="rounded-sm border border-white/10 p-8">
              <h2 className="font-display text-2xl text-white">
                For finance and data leaders
              </h2>
              <p className="mt-4 text-base leading-8 text-secondary">
                CFOs, controllers, and heads of data who need a number they
                can defend, on Snowflake, dbt, and AWS.
              </p>
              <Link
                href={servicePath("data-engineering")}
                className="mt-6 inline-flex text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
              >
                Data engineering
              </Link>
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
        title="Tell us the business challenge."
        copy="Unpaid invoices and unbilled work, a number you cannot defend, or a workflow someone repeats by hand. We will say which line fits."
        buttonLabel="Discuss a business challenge"
      />
    </>
  );
}
