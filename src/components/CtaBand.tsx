import { FadeIn } from "./FadeIn";
import { Button } from "./Button";

type CtaBandProps = {
  title?: string;
  copy?: string;
  buttonLabel?: string;
};

export function CtaBand({
  title = "Tell us the workstream.",
  copy = "Pipelines, dbt, Snowflake, AWS, analytics, governance, or a named partner workstream. We scope it under Havilah Technologies LLC.",
  buttonLabel = "Start an engagement",
}: CtaBandProps) {
  return (
    <section className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <FadeIn>
          <div className="flex flex-col items-start gap-6 rounded-sm border border-gold/30 bg-gold/[0.04] p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div className="max-w-2xl">
              <p className="font-display text-2xl text-white sm:text-3xl">
                {title}
              </p>
              <p className="mt-3 text-sm leading-7 text-secondary">{copy}</p>
            </div>
            <Button href="/contact">{buttonLabel}</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
