import { FadeIn } from "./FadeIn";
import { stack } from "@/lib/site";

export function StackStrip() {
  return (
    <section className="border-b border-white/10 bg-navy-deep">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-5 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
          Stack
        </p>
        {stack.map((item) => (
          <FadeIn key={item}>
            <span className="text-sm text-secondary">{item}</span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
