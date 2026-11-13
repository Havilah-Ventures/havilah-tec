import type { CSSProperties } from "react";
import Link from "next/link";
import { FlowMark } from "./FlowMark";
import { FlowRevenueSummary } from "./FlowRevenueSummary";
import { flowThemes } from "@/lib/flowSample";

export function FlowRevenueFrame() {
  return (
    <div>
      <div
        style={flowThemes.dark as CSSProperties}
        className="overflow-hidden rounded-xl border border-[var(--fl-line)] bg-[var(--fl-bg)] text-left text-[var(--fl-text)] [font-variant-numeric:tabular-nums]"
      >
        <div className="flex flex-wrap items-center gap-3 border-b border-[var(--fl-line)] px-5 py-3.5">
          <FlowMark size={30} />
          <div className="min-w-0">
            <p className="font-display text-[17px] leading-tight">Havilah Flow</p>
            <p className="text-xs text-[var(--fl-muted)]">
              Summit Mechanical Services · Revenue view
            </p>
          </div>
          <span className="ml-auto rounded-full border border-[var(--fl-gold)]/50 px-3 py-1 text-[11px] text-[var(--fl-gold-text)]">
            Illustrative demo data
          </span>
        </div>
        <div className="p-5">
          <FlowRevenueSummary />
        </div>
        <p className="px-5 pb-5 text-xs leading-6 text-[var(--fl-muted)]">
          A sketch of the intended Havilah Flow view. Every company and amount
          is fictional. Havilah Flow is an emerging pilot, and nothing here is
          connected to a live system.
        </p>
      </div>
      <Link
        href="/flow/how-it-works"
        className="mt-4 inline-flex text-sm uppercase tracking-[0.18em] text-[#E0BC6A] transition-colors hover:text-white"
      >
        See the full preview
      </Link>
    </div>
  );
}
