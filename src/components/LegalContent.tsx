import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

type LegalSectionProps = {
  title: string;
  children: ReactNode;
  index?: number;
};

export function LegalSection({ title, children, index = 0 }: LegalSectionProps) {
  return (
    <FadeIn delay={index * 0.04}>
      <section className="border-b border-white/10 py-10 last:border-b-0">
        <h2 className="font-display text-2xl text-white">{title}</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-secondary">
          {children}
        </div>
      </section>
    </FadeIn>
  );
}

type LegalPageIntroProps = {
  lastUpdated: string;
  children: ReactNode;
};

export function LegalPageIntro({ lastUpdated, children }: LegalPageIntroProps) {
  return (
    <FadeIn>
      <p className="text-xs uppercase tracking-[0.24em] text-gold">
        Last updated: {lastUpdated}
      </p>
      <div className="mt-6 space-y-4 text-base leading-8 text-secondary">
        {children}
      </div>
    </FadeIn>
  );
}
