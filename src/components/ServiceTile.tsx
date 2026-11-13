import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { kindLabel, servicePath, type ServiceLine } from "@/lib/site";

type ServiceTileProps = {
  line: ServiceLine;
  index: number;
};

export function ServiceTile({ line, index }: ServiceTileProps) {
  return (
    <FadeIn delay={index * 0.03}>
      <Link
        href={servicePath(line.id)}
        className="flex h-full flex-col rounded-xl border border-[#1B2740] bg-[#0B1220] p-7 transition-colors hover:border-[#C9A24B]/50"
      >
        <p className="text-xs uppercase tracking-[0.18em] text-[#E0BC6A]">
          {kindLabel(line.kind)}
        </p>
        <h3 className="mt-3 font-display text-[22px] leading-snug text-[#E8ECF4]">
          {line.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[#8A97AD]">
          {line.summary}
        </p>
        <span className="mt-6 text-sm text-[#E0BC6A]">
          {line.kind === "pilot" ? "View pilot" : "View service"}
        </span>
      </Link>
    </FadeIn>
  );
}
