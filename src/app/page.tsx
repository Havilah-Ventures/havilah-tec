import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { HomeHero } from "@/components/HomeHero";
import { MethodologySection } from "@/components/MethodologySection";
import { ServiceTile } from "@/components/ServiceTile";
import { StackStrip } from "@/components/StackStrip";
import {
  clientProfile,
  deliveryPosture,
  engagementStart,
  proofPoints,
  serviceLines,
  siteConfig,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StackStrip />

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
              Services
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl text-white sm:text-4xl">
              {siteConfig.operatingFocus}
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-secondary">
              {siteConfig.serviceTagline}
            </p>
          </FadeIn>

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

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.28em] text-gold">
                Who we serve
              </p>
              <h2 className="mt-4 font-display text-3xl text-white">
                Data leaders, finance, and delivery partners
              </h2>
              <p className="mt-6 text-base leading-8 text-secondary">
                {clientProfile.organizations}
              </p>
              <p className="mt-4 text-base leading-8 text-secondary">
                {clientProfile.leaders}.
              </p>
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
