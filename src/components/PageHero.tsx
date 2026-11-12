import { FadeIn } from "./FadeIn";
import { Button } from "./Button";

type HeroAction = { href: string; label: string };

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  cta?: HeroAction;
  secondaryCta?: HeroAction;
};

export function PageHero({
  eyebrow,
  title,
  description,
  cta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 12% 20%, rgba(200,162,74,0.10), transparent 42%), radial-gradient(circle at 88% 0%, rgba(167,171,179,0.08), transparent 38%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <FadeIn>
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary">
            {description}
          </p>
          {cta || secondaryCta ? (
            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              {cta ? <Button href={cta.href}>{cta.label}</Button> : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="ghost">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </FadeIn>
      </div>
    </section>
  );
}
