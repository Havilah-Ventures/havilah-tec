import type { ReactNode } from "react";

export type BandTone = "paper" | "ink";

type BandProps = {
  tone: BandTone;
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Band({ tone, id, className = "", children }: BandProps) {
  const surface = tone === "paper" ? "surface-paper" : "bg-[#0B1220]";
  return (
    <section id={id} className={`${surface} ${className}`}>
      {children}
    </section>
  );
}

/** Call once per rendered section so conditional sections still alternate. */
export function toneSequence(first: BandTone = "paper") {
  let next = first;
  return (): BandTone => {
    const tone = next;
    next = tone === "paper" ? "ink" : "paper";
    return tone;
  };
}
