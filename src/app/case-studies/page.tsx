import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { situations } from "@/lib/situations";

export const metadata = createPageMetadata({
  title: "Case studies",
  description:
    "Real situations Havilah Technologies LLC is hired into: two official numbers, a warehouse that misses close, a copilot quoting an uncertified metric, and an audit that asks where the figure came from.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="The situations, and how the work meets them"
        description="These are the problems clients bring. Each one names the challenge and the engagement that addresses it. Client names and measured results are added only when that client permits them."
      />

      <section className="mx-auto max-w-6xl space-y-8 px-6 py-20 lg:px-8 lg:py-24">
        {situations.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.04}>
            <article className="rounded-sm border border-white/10 p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.24em] text-gold">
                {item.service}
              </p>
              <h2 className="mt-3 font-display text-2xl text-white sm:text-3xl">
                {item.title}
              </h2>
              <div className="mt-8 grid gap-8 lg:grid-cols-3">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.22em] text-gold">
                    Situation
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-secondary">
                    {item.situation}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.22em] text-gold">
                    Challenge
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-secondary">
                    {item.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.22em] text-gold">
                    How the engagement responds
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-secondary">
                    {item.response}
                  </p>
                </div>
              </div>
              <Link
                href={item.href}
                className="mt-8 inline-flex text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
              >
                View this service
              </Link>
            </article>
          </FadeIn>
        ))}
      </section>

      <CtaBand
        title="If one of these is live, send it."
        copy="Name the metric or the workstream, and the decision that is waiting on it."
        buttonLabel="Book a fit call"
      />
    </>
  );
}
