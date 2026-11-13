import { notFound } from "next/navigation";
import Link from "next/link";
import { Band, toneSequence } from "@/components/Band";
import { CtaBand } from "@/components/CtaBand";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import {
  allServices,
  diagnosticHops,
  diagnosticOutputs,
  getService,
  kindLabel,
  servicePath,
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
    title: service.seoTitle ?? service.name,
    description: service.lead,
    path: servicePath(service.id),
    image: service.socialImage,
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
  const isFlow = service.id === "havilah-flow";
  const isData = service.id === "data-engineering";
  const showStack =
    service.id === "data-engineering" ||
    service.id === "diagnostic" ||
    service.id === "partnership";
  const eyebrow =
    service.id === "partnership"
      ? "Partners"
      : service.id === "diagnostic"
        ? "Diagnostic"
        : kindLabel(service.kind);
  const contactHref = `/contact?workstream=${encodeURIComponent(service.inquiryType)}`;
  const headings = isFlow
    ? {
        help: "What Flow does",
        when: "When a pilot fits",
        work: "How a pilot runs",
        outcomes: "What you see each morning",
        scope: "What Flow covers",
        related: "Other Havilah lines",
      }
    : {
        help: "How we help",
        when: "When this is the engagement",
        work: "What an engagement looks like",
        outcomes: "Deliverables",
        scope: "In scope",
        related: "Related services",
      };
  const tone = toneSequence();

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={service.name}
        description={service.lead}
        cta={{
          href: contactHref,
          label: service.ctaLabel,
        }}
        secondaryCta={
          isFlow
            ? { href: "/flow/how-it-works", label: "See how it works" }
            : undefined
        }
      />

      {isFlow ? (
        <section className="border-t border-white/10 bg-[#070B14]">
          <div className="mx-auto grid max-w-6xl gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Outstanding", "Invoices still open in your records"],
              ["Overdue", "Accounts past the due date"],
              ["Unbilled work", "Completed work that may have no invoice"],
              ["Follow-ups", "Items waiting on a person"],
            ].map(([value, label]) => (
              <div key={value} className="bg-[#070B14] px-6 py-6">
                <p className="font-display text-lg text-gold">{value}</p>
                <p className="mt-2 text-sm leading-6 text-secondary">{label}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto max-w-6xl px-6 py-4 text-xs leading-6 text-secondary lg:px-8">
            A morning review covers these four facts. Any dollar amount in a
            sketch is illustrative. Havilah Flow is an emerging pilot, not a
            live installation.
          </p>
        </section>
      ) : null}

      {isDiagnostic ? (
        <section className="border-t border-white/10 bg-[#070B14]">
          <div className="mx-auto grid max-w-6xl gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["One metric", "The number both sides claim"],
              ["Two artifacts", "The reports or extracts in dispute"],
              ["About ten business days", "A fixed, short statement of work"],
              ["Written ruling", "Which number is valid for which decision"],
              ["Evidence SQL", "Queries your team can re-run"],
            ].map(([value, label]) => (
              <div key={value} className="bg-[#070B14] px-6 py-6">
                <p className="font-display text-lg text-gold">{value}</p>
                <p className="mt-2 text-sm leading-6 text-secondary">{label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {showStack ? (
        <section className="border-t border-white/10 bg-[#070B14]">
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
      ) : null}

      <Band tone={tone()}>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.28em] text-gold">
                The work
              </p>
              <h2 className="mt-4 font-display text-3xl text-white">
                {headings.help}
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
                {headings.when}
              </p>
              <p className="mt-4 text-base leading-8 text-secondary">
                {service.when}
              </p>
              <p className="mt-6 text-sm leading-7 text-secondary">
                {service.deliveryNote}
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
        </div>
      </Band>

      <Band tone={tone()}>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Typical work
            </p>
            <h2 className="mt-4 font-display text-3xl text-white">
              {headings.work}
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
      </Band>

      <Band tone={tone()}>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.28em] text-gold">
                What you receive
              </p>
              <h2 className="mt-4 font-display text-3xl text-white">
                {headings.outcomes}
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
                {headings.scope}
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
        </div>
      </Band>

      {isDiagnostic ? (
        <Band tone={tone()}>
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
        </Band>
      ) : null}

      <Band tone={tone()}>
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
      </Band>

      <Band tone={tone()}>
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              {headings.related}
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
      </Band>

      {isData ? (
        <Band tone={tone()}>
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.28em] text-gold">
                When two numbers disagree
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl text-white">
                Start with the Contested Metric Diagnostic
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-secondary">
                One metric, two artifacts, a written ruling, and evidence SQL
                your team can re-run. The larger build follows only if you
                want it.
              </p>
              <Link
                href={servicePath("diagnostic")}
                className="mt-6 inline-flex text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
              >
                Read the diagnostic
              </Link>
            </FadeIn>
          </div>
        </Band>
      ) : null}

      <CtaBand
        title={isFlow ? "Request a conversation." : `Discuss ${service.name}.`}
        copy={
          isFlow
            ? "Tell us how you track unpaid invoices and completed work that has not been billed. We will say whether a conversation is the right next step."
            : service.deliveryNote
        }
        buttonLabel={service.ctaLabel}
        href={contactHref}
      />
    </>
  );
}
