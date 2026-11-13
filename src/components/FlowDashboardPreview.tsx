"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { FlowMark } from "./FlowMark";
import { FlowRevenueSummary } from "./FlowRevenueSummary";
import {
  flowThemes,
  followUps,
  invoices,
  jobs,
  money,
  type FlowTheme,
} from "@/lib/flowSample";

type Tab = "inv" | "unb" | "fu" | "how" | "faq";
type Outcome = "queued" | "skipped";

const steps = [
  {
    title: "Your systems",
    line: "Jobs, invoices, payments",
    detail:
      "Your field-service platform, accounting system, and payment tools remain your systems of record.",
  },
  {
    title: "Connect",
    line: "Authorized data access",
    detail:
      "Information is shared only through a method and scope approved by the business. The exact connection depends on the software in use.",
  },
  {
    title: "Havilah Flow",
    line: "Match, flag, prioritize",
    detail:
      "Havilah Flow compares job, invoice, and payment records to flag possible overdue balances, unbilled work, and reconciliation exceptions.",
  },
  {
    title: "Your team",
    line: "Review, decide, act",
    detail:
      "Your team reviews the evidence, decides what is valid, and takes action in the existing system.",
  },
];

const questions = [
  {
    question: "Do we have to replace our current software?",
    answer:
      "No. Flow is being designed as a layer over the field-service and accounting tools you already use. Those systems remain where your team manages jobs, invoices, and payments.",
  },
  {
    question: "Does Havilah Flow change invoices or payment records?",
    answer:
      "The first approach is to identify, explain, and prioritize exceptions. It does not edit financial records on its own. Someone you authorize decides what happens, in the system you already use.",
  },
  {
    question: "How would our information get into Havilah Flow?",
    answer:
      "Depending on your software and the pilot, records are shared through an authorized connection or a controlled export. What can be connected, and with which permissions, is confirmed before a pilot.",
  },
  {
    question: "Will it automatically text or email my customers?",
    answer:
      "Not by default. A person reviews a follow-up before it is sent. Any later automation would need your authorization, approved wording, and the applicable safeguards.",
  },
  {
    question: "What if a job has no matching invoice for a valid reason?",
    answer:
      "It is labeled for review. It is not treated as lost revenue. Your team can confirm the reason, or dismiss it.",
  },
  {
    question: "Do we need to change how our employees work?",
    answer:
      "The aim is a clearer view of the workflow you already have. A pilot first confirms which records are available and where a review step fits the way the office already works.",
  },
  {
    question: "Is this already integrated with my software?",
    answer:
      "No integration is claimed until it is built and tested. Interviews first establish which systems a business uses.",
  },
];

function severity(days: number) {
  if (days > 60) return { color: "var(--fl-bad)", mark: "▲" };
  if (days > 30) return { color: "var(--fl-warn)", mark: "▲" };
  return { color: "var(--fl-info)", mark: "●" };
}

function Chip({ color, children }: { color: string; children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs"
      style={{ borderColor: color, color }}
    >
      {children}
    </span>
  );
}

const actionButton =
  "rounded-md bg-[var(--fl-gold)] px-3 py-1.5 text-[13px] font-semibold text-[#0B1220] hover:brightness-110";
const quietButton =
  "rounded-md border border-[var(--fl-line)] px-3 py-1.5 text-[13px] text-[var(--fl-text)] hover:border-[var(--fl-gold)]";

export function FlowDashboardPreview() {
  const [theme, setTheme] = useState<FlowTheme>("dark");
  const [tab, setTab] = useState<Tab>("inv");
  const [query, setQuery] = useState("");
  const [outcomes, setOutcomes] = useState<Record<string, Outcome>>({});
  const [notice, setNotice] = useState("");
  const [step, setStep] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(0);

  const q = query.trim().toLowerCase();
  const matches = (text: string) => !q || text.toLowerCase().includes(q);

  function record(key: string, outcome: Outcome, message: string) {
    setOutcomes((current) => ({ ...current, [key]: outcome }));
    setNotice(message);
  }

  const openFollowUps = followUps.filter((item) => !outcomes[`fu:${item.client}`]);
  const tabs: { id: Tab; label: string; count?: number }[] = [
    { id: "inv", label: "Unpaid invoices", count: invoices.length },
    { id: "unb", label: "Unbilled work", count: jobs.length },
    { id: "fu", label: "Follow-ups", count: openFollowUps.length },
    { id: "how", label: "How it works" },
    { id: "faq", label: "Questions" },
  ];
  const searchable = tab === "inv" || tab === "unb" || tab === "fu";

  const invoiceRows = invoices
    .filter((row) => matches(`${row.client} ${row.id}`))
    .sort((a, b) => b.overdue - a.overdue);
  const jobRows = jobs
    .filter((row) => matches(`${row.client} ${row.job} ${row.id}`))
    .sort((a, b) => b.waiting - a.waiting);
  const followUpRows = followUps.filter((item) => matches(item.client));

  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 lg:px-8 lg:pt-20">
      <div
        data-theme={theme}
        style={flowThemes[theme] as CSSProperties}
        className="overflow-hidden rounded-xl border border-[var(--fl-line)] bg-[var(--fl-bg)] text-[var(--fl-text)] [font-variant-numeric:tabular-nums]"
      >
        <div className="flex flex-wrap items-center gap-3 border-b border-[var(--fl-line)] px-5 py-4">
          <FlowMark />
          <div className="min-w-0">
            <p className="font-display text-lg leading-tight">Havilah Flow</p>
            <p className="text-xs text-[var(--fl-muted)]">
              Summit Mechanical Services · Revenue view
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="rounded-full border border-[var(--fl-gold)]/50 px-3 py-1 text-[11px] text-[var(--fl-gold-text)]">
              Illustrative demo data
            </span>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={quietButton}
            >
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <FlowRevenueSummary />

          <div
            role="tablist"
            aria-label="Revenue view sections"
            className="mt-8 flex flex-wrap gap-1 border-b border-[var(--fl-line)]"
          >
            {tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                onClick={() => setTab(item.id)}
                className={`-mb-px border-b-2 px-3.5 py-2.5 text-sm ${
                  tab === item.id
                    ? "border-[var(--fl-gold)] text-[var(--fl-text)]"
                    : "border-transparent text-[var(--fl-muted)] hover:text-[var(--fl-text)]"
                }`}
              >
                {item.label}
                {item.count !== undefined ? (
                  <em className="ml-1.5 rounded-full bg-[var(--fl-raised)] px-2 py-px text-xs not-italic">
                    {item.count}
                  </em>
                ) : null}
              </button>
            ))}
          </div>

          {searchable ? (
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by client or job"
              aria-label="Search"
              className="mt-4 w-full max-w-xs rounded-md border border-[var(--fl-line)] bg-[var(--fl-card)] px-3 py-2 text-sm text-[var(--fl-text)] placeholder:text-[var(--fl-muted)] focus:border-[var(--fl-gold)] focus:outline-none"
            />
          ) : null}

          <div className="mt-4">
            {tab === "inv" ? (
              invoiceRows.length ? (
                <div className="overflow-x-auto rounded-xl border border-[var(--fl-line)] bg-[var(--fl-card)]">
                  <table className="w-full min-w-[680px] border-collapse text-sm">
                    <thead>
                      <tr className="text-left text-xs text-[var(--fl-muted)]">
                        <th className="px-4 py-3 font-medium">Invoice</th>
                        <th className="px-4 py-3 font-medium">Client</th>
                        <th className="px-4 py-3 font-medium">Status</th>
                        <th className="px-4 py-3 font-medium">Last contact</th>
                        <th className="px-4 py-3 text-right font-medium">Amount</th>
                        <th className="px-4 py-3" />
                      </tr>
                    </thead>
                    <tbody>
                      {invoiceRows.map((row) => {
                        const level = severity(row.overdue);
                        const key = `inv:${row.id}`;
                        return (
                          <tr key={row.id} className="border-t border-[var(--fl-line)]">
                            <td className="px-4 py-3">{row.id}</td>
                            <td className="px-4 py-3">{row.client}</td>
                            <td className="px-4 py-3">
                              <Chip color={level.color}>
                                {level.mark} {row.overdue} days overdue
                              </Chip>
                            </td>
                            <td className="px-4 py-3">{row.last}</td>
                            <td className="px-4 py-3 text-right">
                              {money.format(row.amount)}
                            </td>
                            <td className="px-4 py-3 text-right">
                              {outcomes[key] ? (
                                <span className="text-[13px] text-[var(--fl-ok)]">
                                  ✓ Queued for approval
                                </span>
                              ) : (
                                <button
                                  type="button"
                                  className={actionButton}
                                  onClick={() =>
                                    record(
                                      key,
                                      "queued",
                                      `Reminder for ${row.id} queued for a person to approve. Nothing was sent.`,
                                    )
                                  }
                                >
                                  Draft reminder
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <NoMatches />
              )
            ) : null}

            {tab === "unb" ? (
              jobRows.length ? (
                <div className="overflow-x-auto rounded-xl border border-[var(--fl-line)] bg-[var(--fl-card)]">
                  <table className="w-full min-w-[680px] border-collapse text-sm">
                    <thead>
                      <tr className="text-left text-xs text-[var(--fl-muted)]">
                        <th className="px-4 py-3 font-medium">Job</th>
                        <th className="px-4 py-3 font-medium">Client</th>
                        <th className="px-4 py-3 font-medium">Completed</th>
                        <th className="px-4 py-3 font-medium">Waiting</th>
                        <th className="px-4 py-3 text-right font-medium">Value</th>
                        <th className="px-4 py-3" />
                      </tr>
                    </thead>
                    <tbody>
                      {jobRows.map((row) => {
                        const key = `unb:${row.id}`;
                        return (
                          <tr key={row.id} className="border-t border-[var(--fl-line)]">
                            <td className="px-4 py-3">
                              {row.job}
                              <span className="block text-xs text-[var(--fl-muted)]">
                                {row.id}
                              </span>
                            </td>
                            <td className="px-4 py-3">{row.client}</td>
                            <td className="px-4 py-3">{row.done}</td>
                            <td className="px-4 py-3">
                              <Chip color="var(--fl-warn)">▲ {row.waiting} days</Chip>
                            </td>
                            <td className="px-4 py-3 text-right">
                              {money.format(row.amount)}
                            </td>
                            <td className="px-4 py-3 text-right">
                              {outcomes[key] ? (
                                <span className="text-[13px] text-[var(--fl-ok)]">
                                  ✓ Draft queued
                                </span>
                              ) : (
                                <button
                                  type="button"
                                  className={actionButton}
                                  onClick={() =>
                                    record(
                                      key,
                                      "queued",
                                      `Invoice draft for ${row.id} queued for a person to review. Nothing was created in the accounting system.`,
                                    )
                                  }
                                >
                                  Draft invoice
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <NoMatches />
              )
            ) : null}

            {tab === "fu" ? (
              followUpRows.length ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {followUpRows.map((item) => {
                    const key = `fu:${item.client}`;
                    const outcome = outcomes[key];
                    return (
                      <article
                        key={item.client}
                        className="rounded-xl border border-[var(--fl-line)] bg-[var(--fl-card)] p-5"
                      >
                        <p className="font-semibold">{item.client}</p>
                        <p className="text-[13px] text-[var(--fl-muted)]">{item.why}</p>
                        <p className="my-3 border-l-2 border-[var(--fl-line)] pl-3 text-[13px] text-[var(--fl-muted)]">
                          {item.draft}
                        </p>
                        <div className="flex items-center gap-2">
                          {outcome === "queued" ? (
                            <span className="text-[13px] text-[var(--fl-ok)]">
                              ✓ Queued for approval
                            </span>
                          ) : outcome === "skipped" ? (
                            <span className="text-[13px] text-[var(--fl-muted)]">
                              Skipped for now
                            </span>
                          ) : (
                            <>
                              <button
                                type="button"
                                className={actionButton}
                                onClick={() =>
                                  record(
                                    key,
                                    "queued",
                                    `Message to ${item.client} queued for a person to approve. Nothing was sent.`,
                                  )
                                }
                              >
                                Queue for approval
                              </button>
                              <button
                                type="button"
                                className={quietButton}
                                onClick={() =>
                                  record(key, "skipped", `${item.client} skipped for now.`)
                                }
                              >
                                Skip
                              </button>
                            </>
                          )}
                        </div>
                        <p className="mt-3 text-[13px] text-[var(--fl-muted)]">
                          Next step: {item.next}
                        </p>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <NoMatches />
              )
            ) : null}

            {tab === "how" ? (
              <div className="space-y-5">
                <div className="grid gap-2 sm:grid-cols-4">
                  {steps.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setStep(index)}
                      aria-pressed={step === index}
                      className={`rounded-lg border p-3 text-left ${
                        step === index
                          ? "border-[var(--fl-gold)] bg-[var(--fl-raised)]"
                          : "border-[var(--fl-line)] bg-[var(--fl-card)]"
                      }`}
                    >
                      <span className="text-xs text-[var(--fl-gold-text)]">{index + 1}</span>
                      <span className="mt-1 block text-sm font-semibold">{item.title}</span>
                      <span className="mt-1 block text-xs text-[var(--fl-muted)]">
                        {item.line}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="rounded-lg border border-[var(--fl-line)] bg-[var(--fl-card)] p-4 text-sm leading-7 text-[var(--fl-muted)]">
                  <span className="font-semibold text-[var(--fl-text)]">
                    Step {step + 1}: {steps[step].title}.{" "}
                  </span>
                  {steps[step].detail}
                </p>
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    ["Your field-service software", "Job status, work orders, customer and service details"],
                    ["Your accounting and payment tools", "Invoices, balances, payments, and deposits"],
                    ["Havilah Flow", "Matches authorized records and surfaces exceptions for a person to review"],
                  ].map(([title, body]) => (
                    <div
                      key={title}
                      className="rounded-lg border border-[var(--fl-line)] bg-[var(--fl-card)] p-4"
                    >
                      <p className="text-sm font-semibold">{title}</p>
                      <p className="mt-1.5 text-[13px] leading-6 text-[var(--fl-muted)]">{body}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-7 text-[var(--fl-muted)]">
                  Your software stays the system of record. Flow provides
                  visibility and recommendations. Your team stays in control of
                  approvals and actions.
                </p>
              </div>
            ) : null}

            {tab === "faq" ? (
              <div className="space-y-2">
                {questions.map((item, index) => (
                  <div
                    key={item.question}
                    className="rounded-lg border border-[var(--fl-line)] bg-[var(--fl-card)]"
                  >
                    <button
                      type="button"
                      aria-expanded={openQuestion === index}
                      onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
                      className="w-full px-4 py-3 text-left text-sm font-semibold"
                    >
                      {item.question}
                    </button>
                    {openQuestion === index ? (
                      <p className="px-4 pb-4 text-sm leading-7 text-[var(--fl-muted)]">
                        {item.answer}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <p role="status" className="mt-4 min-h-5 text-[13px] text-[var(--fl-gold-text)]">
            {notice}
          </p>
          <p className="mt-1 text-xs text-[var(--fl-muted)]">
            Nothing is sent. Every reminder and draft waits for a person to approve it.
          </p>
        </div>
      </div>

      <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-secondary">
        A concept preview by Havilah Technologies LLC. Company names, invoices,
        and amounts are fictional. No live system and no customer data are
        connected on this page, and what is available depends on the pilot.
      </p>
    </section>
  );
}

function NoMatches() {
  return (
    <p className="rounded-xl border border-[var(--fl-line)] bg-[var(--fl-card)] p-5 text-sm text-[var(--fl-muted)]">
      No matches. Clear the search to see everything.
    </p>
  );
}
