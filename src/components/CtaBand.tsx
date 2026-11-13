import { FadeIn } from "./FadeIn";
import { Button } from "./Button";

type CtaBandProps = {
  title?: string;
  copy?: string;
  buttonLabel?: string;
  href?: string;
};

export function CtaBand({
  title = "Tell us the workstream.",
  copy = "Unpaid invoices, a number you cannot defend, or a workflow someone repeats by hand. We scope it under Havilah Technologies LLC.",
  buttonLabel = "Start an engagement",
  href = "/contact",
}: CtaBandProps) {
  return (
    <section className="bg-[#070B14]">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-24">
        <FadeIn>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#C7CEDA]">
            {copy}
          </p>
          <div className="mt-8">
            <Button href={href} variant="solid">
              {buttonLabel}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
