import { FadeIn } from "./FadeIn";
import { methodology } from "@/lib/site";

type MethodologySectionProps = {
  variant?: "default" | "compact";
};

export function MethodologySection({
  variant = "default",
}: MethodologySectionProps) {
  const isCompact = variant === "compact";

  return (
    <section
      className={
        isCompact
          ? "border-b border-white/10 bg-white/[0.02]"
          : "border-y border-white/10 bg-white/[0.02]"
      }
    >
      <div
        className={`mx-auto max-w-6xl px-6 lg:px-8 ${
          isCompact ? "py-16 lg:py-20" : "py-20 lg:py-24"
        }`}
      >
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">
            Methodology
          </p>
          <h2
            className={`mt-4 font-display text-white ${
              isCompact
                ? "text-2xl sm:text-3xl"
                : "max-w-3xl text-3xl sm:text-4xl"
            }`}
          >
            {methodology.headline}
          </h2>
          {!isCompact ? (
            <p className="mt-6 max-w-2xl text-base leading-8 text-secondary">
              {methodology.summary}
            </p>
          ) : null}
        </FadeIn>

        <div
          className={`mt-12 grid gap-6 ${
            isCompact
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : "md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {methodology.steps.map((step, index) => (
            <FadeIn key={step.name} delay={index * 0.07}>
              <article className="relative h-full rounded-sm border border-white/10 p-6">
                {index < methodology.steps.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute -right-3 top-8 hidden text-gold/40 lg:inline"
                  >
                    →
                  </span>
                ) : null}
                <p className="text-xs uppercase tracking-[0.24em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl text-white">
                  {step.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-secondary">
                  {step.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
