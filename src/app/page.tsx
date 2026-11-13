import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { HomeHero } from "@/components/HomeHero";
import { ServiceTile } from "@/components/ServiceTile";
import { serviceLines } from "@/lib/site";
import { situations } from "@/lib/situations";

const homeSituations = ["unbilled-work", "two-revenues", "manual-handoff"]
  .map((id) => situations.find((item) => item.id === id))
  .filter((item): item is (typeof situations)[number] => Boolean(item));

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="surface-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-[#8A6A1F]">
              Typical situations
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl sm:text-4xl">
              One problem from each line
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {homeSituations.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.05}>
                <Link
                  href={item.href}
                  className="block h-full rounded-xl border border-[#EBEEF4] bg-white p-7 transition-colors hover:border-[#C9A24B]/60"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8A6A1F]">
                    {item.service}
                  </p>
                  <h3 className="mt-3 font-display text-[21px] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#3D4A61]">
                    {item.situation}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="lines" className="scroll-mt-20 bg-[#0B1220]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-[#E0BC6A]">
              What we do
            </p>
            <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
              Three lines. One company.
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {serviceLines.map((line, index) => (
              <ServiceTile key={line.id} line={line} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="surface-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-6 py-20 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-[#8A6A1F]">
              Situations
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Problems we are built for
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#3D4A61]">
              Seven illustrative situations across the three lines. They
              describe the problem and how an engagement or a pilot would
              start. They are not client results.
            </p>
          </FadeIn>
          <Link
            href="/case-studies"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8A6A1F] transition-colors hover:text-[#0B1220]"
          >
            See all situations
          </Link>
        </div>
      </section>

      <CtaBand
        title="Tell us the business challenge."
        copy="Unpaid invoices, a number you cannot defend, or a workflow someone repeats by hand. We will say which line fits and what the first step is."
        buttonLabel="Discuss a business challenge"
      />
    </>
  );
}
