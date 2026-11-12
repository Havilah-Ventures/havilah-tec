"use client";

import { useState } from "react";

const steps = [
  {
    kicker: "01 / Your current tools",
    title: "Existing business software",
    summary:
      "Field-service, accounting, and payment records remain your systems of record.",
    detailTitle: "Your existing tools remain in place",
    detail:
      "Havilah Flow is intended to sit alongside your current systems. It is not a replacement, and it is not a new place to run the day.",
    items: [
      "Keep your field-service software",
      "Keep your accounting system",
      "Keep your payment processor",
      "Your team stays in control",
    ],
  },
  {
    kicker: "02 / Connect",
    title: "Secure data connection",
    summary:
      "Approved access, or a controlled file export, brings the relevant records together.",
    detailTitle: "Connect only the data the review needs",
    detail:
      "For an initial look, the business authorizes the relevant records. Depending on the software and the pilot, that is an approved connection or a controlled export.",
    items: [
      "Customer and job references",
      "Job status and completion dates",
      "Invoice totals, dates, and balances",
      "Payment and application records",
    ],
  },
  {
    kicker: "03 / Analyze",
    title: "Havilah Flow intelligence",
    summary:
      "Jobs, invoices, and payments are compared so exceptions and priorities surface.",
    detailTitle: "Compare records and surface exceptions",
    detail:
      "Fixed rules compare jobs, invoices, and payments. A model may explain a finding in plain language. It does not set an amount, a balance, or a paid status.",
    items: [
      "Overdue and partly paid invoices",
      "Completed work with no apparent invoice",
      "Invoice or payment mismatches",
      "A priority, with the evidence beside it",
    ],
  },
  {
    kicker: "04 / Review and act",
    title: "Your team takes action",
    summary:
      "Review the finding, decide what to do, then act in the software you already use.",
    detailTitle: "Your team reviews and acts",
    detail:
      "Someone you authorize verifies the finding and chooses the next step. The change, if there is one, is made in the software the business already uses.",
    items: [
      "Review the source records",
      "Confirm or dismiss the exception",
      "Choose the next action",
      "A person approves any reminder",
    ],
  },
] as const;

const samples = {
  collections: {
    heading: "Know which invoices need attention.",
    body: "Open balances are grouped by age, and the accounts that may need a follow-up rise to the top. Your team reviews the recommendation before anyone contacts a customer.",
    path: ["Open invoices", "Aging and priority", "A person approves the follow-up"],
    fields: [
      ["Invoice", "INV-1042"],
      ["Customer", "Sample customer"],
      ["Open balance", "$1,240"],
      ["Days overdue", "18"],
      ["Next step", "Review, then a person approves any reminder."],
    ],
  },
  leakage: {
    heading: "Spot completed work that may not have been billed.",
    body: "Job records are compared with invoices. A completed job with no apparent match is flagged for review, along with other mismatches. A flag is a prompt to investigate, not a conclusion that revenue was lost.",
    path: ["Completed jobs", "Match to invoices", "Review exceptions"],
    fields: [
      ["Job", "JOB-228"],
      ["Completed", "Mar 4"],
      ["Customer", "Sample customer"],
      ["Invoice match", "No matching invoice"],
      ["Next step", "Verify before treating this as lost revenue."],
    ],
  },
} as const;

export function FlowWorkflow() {
  const [step, setStep] = useState(0);
  const [view, setView] = useState<keyof typeof samples>("collections");
  const current = steps[step];
  const sample = samples[view];

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl text-white">
              One view of the revenue workflow
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-secondary">
              Select a step to see what happens, and what stays with your team.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-gold">
            Click a step
          </p>
        </div>

        <div className="mt-10 grid gap-3 lg:grid-cols-4">
          {steps.map((item, index) => {
            const active = index === step;
            return (
              <button
                key={item.title}
                type="button"
                aria-pressed={active}
                onClick={() => setStep(index)}
                className={`rounded-sm border p-5 text-left transition-colors ${
                  active
                    ? "border-gold/60 bg-gold/[0.06]"
                    : "border-white/10 hover:border-gold/30"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-gold">
                  {item.kicker}
                </p>
                <p className="mt-3 font-display text-lg text-white">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-secondary">
                  {item.summary}
                </p>
              </button>
            );
          })}
        </div>

        <div
          aria-live="polite"
          className="mt-4 grid gap-6 rounded-sm border border-white/10 bg-white/[0.02] p-6 lg:grid-cols-[1fr_1.2fr]"
        >
          <div>
            <h3 className="font-display text-xl text-white">
              {current.detailTitle}
            </h3>
            <p className="mt-3 text-sm leading-7 text-secondary">
              {current.detail}
            </p>
          </div>
          <ul className="grid content-center gap-3 sm:grid-cols-2">
            {current.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-6 text-secondary"
              >
                <span className="text-gold" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <h2 className="font-display text-3xl text-white">
            What Flow looks for
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-secondary">
            The two problems the pilot is being designed to address.
          </p>
          <div className="mt-8 flex flex-wrap gap-3" role="tablist">
            {(
              [
                ["collections", "Overdue invoices and collections"],
                ["leakage", "Completed jobs and unbilled work"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={view === id}
                onClick={() => setView(id)}
                className={`rounded-sm border px-4 py-2 text-sm transition-colors ${
                  view === id
                    ? "border-gold/50 bg-gold/10 text-gold"
                    : "border-white/10 text-secondary hover:border-gold/30 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]" role="tabpanel">
            <div>
              <h3 className="font-display text-2xl text-white">
                {sample.heading}
              </h3>
              <p className="mt-4 text-sm leading-7 text-secondary">
                {sample.body}
              </p>
              <ol className="mt-6 flex flex-wrap items-center gap-2 text-sm text-secondary">
                {sample.path.map((item, index) => (
                  <li key={item} className="flex items-center gap-2">
                    {index > 0 ? (
                      <span className="text-gold" aria-hidden>
                        →
                      </span>
                    ) : null}
                    <span className="rounded-sm border border-white/10 px-3 py-2">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-sm border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-gold">
                What your team sees
              </p>
              <p className="mt-2 text-xs leading-5 text-secondary">
                Illustrative. Not a customer result. Havilah Flow is an
                emerging pilot.
              </p>
              <dl className="mt-5 space-y-3">
                {sample.fields.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3"
                  >
                    <dt className="text-xs uppercase tracking-[0.14em] text-secondary">
                      {label}
                    </dt>
                    <dd className="text-right text-sm text-white">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
