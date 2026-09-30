import { notFound } from "next/navigation";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import {
  allServices,
  diagnosticHops,
  diagnosticOutputs,
  getService,
  servicePath,
  siteConfig,
  stack,
} from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allServices.map((line) => ({ slug: line.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: "Service" };
  }
  return createPageMetadata({
    title: service.name,
    description: service.lead,
    path: servicePath(service.id),
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    notFound();
  }

  const related = service.related
    .map((id) => getService(id))
    .filter((line): line is NonNullable<typeof line> => Boolean(line));
  const isDiagnostic = service.id === "diagnostic";

  return (
    <>
      <PageHero
        eyebrow={service.id === "partnership" ? "Partners" : "Service"}
        title={service.name}
        description={service.lead}
        cta={{
          href: "/contact",
          label: isDiagnostic ? "Start a diagnostic" : "Request a fit call",
        }}
      />

      {isDiagnostic ? (
        <section className="border-b border-white/10 bg-navy-deep">
          <div className="mx-auto grid max-w-6xl gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["One metric", "The number both sides claim"],
              ["Two artifacts", "The reports or extracts in dispute"],
              ["About ten business days", "A fixed, short statement of work"],
              ["Written ruling", "Which number is valid for which decision"],
              ["Evidence SQL", "Queries your team can re-run"],
            ].map(([value, label]) => (
              <div key={value} className="bg-navy-deep px-6 py-6">
                <p className="font-display text-lg text-gold">{value}</p>
                <p className="mt-2 text-sm leading-6 text-secondary">{label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="border-b border-white/10 bg-navy-deep">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-5 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Stack
          </p>
          {stack.map((item) => (
            <span key={item} className="text-sm text-secondary">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              The work
            </p>
            <h2 className="mt-4 font-display text-3xl text-white">
              How we help
            </h2>
            <div className="mt-6 space-y-5">
              {service.overview.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base leading-8 text-secondary"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              When this is the engagement
            </p>
            <p className="mt-4 text-base leading-8 text-secondary">
              {service.when}
            </p>
            <p className="mt-6 text-sm leading-7 text-secondary">
              Contracted and invoiced by {siteConfig.legalName}. Delivery in
              your warehouse and your git.
            </p>
          </FadeIn>
        </div>

        <ul className="mt-14 space-y-4">
          {service.howWeHelp.map((item, index) => (
            <FadeIn key={item} delay={index * 0.03}>
              <li className="flex gap-4 text-sm leading-7 text-secondary sm:text-base">
                <span className="mt-0.5 font-display text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Typical work
            </p>
            <h2 className="mt-4 font-display text-3xl text-white">
              What an engagement looks like
            </h2>
          </FadeIn>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.typicalWork.map((item, index) => (
              <FadeIn key={item.name} delay={index * 0.05}>
                <li className="h-full rounded-sm border border-white/10 p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-xl text-white">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-secondary">
                    {item.detail}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              What you receive
            </p>
            <h2 className="mt-4 font-display text-3xl text-white">
              Deliverables
            </h2>
            <ul className="mt-8 space-y-3">
              {service.outcomes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-secondary"
                >
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Capabilities
            </p>
            <h2 className="mt-4 font-display text-3xl text-white">
              In scope
            </h2>
            <ul className="mt-8 space-y-3">
              {service.capabilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-secondary"
                >
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {isDiagnostic ? (
        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.28em] text-gold">
                Method
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl text-white sm:text-4xl">
                Trace the number from source to report
              </h2>
            </FadeIn>
            <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {diagnosticHops.map((hop, index) => (
                <FadeIn key={hop.name} delay={index * 0.05}>
                  <li className="h-full rounded-sm border border-white/10 p-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-xl text-white">
                      {hop.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-secondary">
                      {hop.detail}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ol>
            <FadeIn>
              <ol className="mt-12 max-w-3xl space-y-4">
                {diagnosticOutputs.map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-4 text-sm leading-7 text-secondary"
                  >
                    <span className="font-display text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </FadeIn>
          </div>
        </section>
      ) : null}

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Questions
            </p>
          </FadeIn>
          <dl className="mt-8 max-w-3xl space-y-8">
            {service.faqs.map((item) => (
              <div key={item.question}>
                <dt className="font-display text-lg text-white">
                  {item.question}
                </dt>
                <dd className="mt-2 text-sm leading-7 text-secondary">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Related services
            </p>
          </FadeIn>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((line) => (
              <li key={line.id}>
                <Link
                  href={servicePath(line.id)}
                  className="block h-full rounded-sm border border-white/10 p-5 transition-colors hover:border-gold/30"
                >
                  <p className="font-display text-lg text-white">{line.name}</p>
                  <p className="mt-2 text-sm leading-6 text-secondary">
                    {line.summary}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={`Discuss ${service.name}.`}
        copy={`${service.name} is contracted under ${siteConfig.legalName}. Tell us the stack, the systems, and the outcome.`}
        buttonLabel={isDiagnostic ? "Start a diagnostic" : "Request a fit call"}
      />
    </>
  );
}
