import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { servicePath } from "@/lib/site";

type PracticeAreaCardProps = {
  id?: string;
  name: string;
  summary: string;
  capabilities: string[];
  index: number;
  compact?: boolean;
  href?: string;
};

export function PracticeAreaCard({
  id,
  name,
  summary,
  capabilities,
  index,
  compact = false,
  href,
}: PracticeAreaCardProps) {
  const ctaHref = href ?? (id ? servicePath(id) : "/contact");
  const ctaLabel = id || href ? "View this service" : "Discuss this practice";

  return (
    <FadeIn delay={index * 0.05}>
      <article
        id={id}
        className="flex h-full scroll-mt-28 flex-col rounded-sm border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-gold/30 hover:bg-white/[0.04] lg:p-8"
      >
        <h3 className="font-display text-xl text-white lg:text-2xl">
          {name}
        </h3>
        <p className="mt-4 text-sm leading-7 text-secondary">{summary}</p>

        {!compact ? (
          <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
            {capabilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-6 text-secondary"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <Link
          href={ctaHref}
          className="mt-8 inline-flex text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
        >
          {compact ? "Learn more" : ctaLabel}
        </Link>
      </article>
    </FadeIn>
  );
}
