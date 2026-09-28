import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { servicePath, type ServiceLine } from "@/lib/site";

type ServiceTileProps = {
  line: ServiceLine;
  index: number;
};

export function ServiceTile({ line, index }: ServiceTileProps) {
  return (
    <FadeIn delay={index * 0.03}>
      <Link
        href={servicePath(line.id)}
        className="flex h-full flex-col rounded-sm border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-gold/30 hover:bg-white/[0.04]"
      >
        <p className="text-xs uppercase tracking-[0.18em] text-gold">
          {line.navHint}
        </p>
        <h3 className="mt-3 font-display text-xl text-white">{line.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-secondary">
          {line.summary}
        </p>
        <span className="mt-6 text-sm uppercase tracking-[0.16em] text-gold">
          View service
        </span>
      </Link>
    </FadeIn>
  );
}
