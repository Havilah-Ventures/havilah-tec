"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

type Theme = "dark" | "light";
type Tab = "inv" | "unb" | "fu" | "how" | "faq";
type Outcome = "queued" | "skipped";

const themes: Record<Theme, Record<string, string>> = {
  dark: {
    "--fl-bg": "#070B14",
    "--fl-card": "#0D1626",
    "--fl-raised": "#111A2C",
    "--fl-line": "#1B2740",
    "--fl-text": "#E8ECF4",
    "--fl-muted": "#8A97AD",
    "--fl-gold": "#C9A24B",
    "--fl-gold-text": "#E0BC6A",
    "--fl-figure": "#C9A24B",
    "--fl-ok": "#2FB57F",
    "--fl-warn": "#E8742C",
    "--fl-bad": "#E5484D",
    "--fl-info": "#4C8DFF",
  },
  light: {
    "--fl-bg": "#F6F7FA",
    "--fl-card": "#FFFFFF",
    "--fl-raised": "#EBEEF4",
    "--fl-line": "#DDE2EC",
    "--fl-text": "#0B1220",
    "--fl-muted": "#5E6C84",
    "--fl-gold": "#C9A24B",
    "--fl-gold-text": "#8F6F22",
    "--fl-figure": "#8F6F22",
    "--fl-ok": "#1E8F61",
    "--fl-warn": "#C25A18",
    "--fl-bad": "#D23A40",
    "--fl-info": "#2F6FE0",
  },
};

const invoices = [
  { id: "INV-2041", client: "Desert Ridge Dental", amount: 12400, overdue: 47, last: "Oct 2" },
  { id: "INV-2057", client: "Copper State Logistics", amount: 28750, overdue: 62, last: "Sep 21" },
  { id: "INV-2063", client: "Saguaro Property Group", amount: 9180, overdue: 18, last: "Oct 29" },
  { id: "INV-2070", client: "Gilbert Family Clinic", amount: 15600, overdue: 9, last: "Nov 4" },
  { id: "INV-2018", client: "Mesa Cold Storage", amount: 21300, overdue: 96, last: "Aug 30" },
  { id: "INV-2082", client: "Sonoran Hospitality", amount: 7420, overdue: 3, last: "Nov 10" },
  { id: "INV-2029", client: "Chandler Schools Co-op", amount: 18900, overdue: 34, last: "Oct 14" },
];

const jobs = [
  { id: "JOB-7712", client: "Desert Ridge Dental", job: "Rooftop unit replacement", amount: 18400, waiting: 21, done: "Oct 23" },
  { id: "JOB-7730", client: "Copper State Logistics", job: "Dock cooling repair", amount: 9650, waiting: 14, done: "Oct 30" },
  { id: "JOB-7741", client: "Saguaro Property Group", job: "Quarterly maintenance (6 sites)", amount: 12300, waiting: 9, done: "Nov 4" },
  { id: "JOB-7755", client: "Mesa Cold Storage", job: "Compressor diagnostics", amount: 6800, waiting: 6, done: "Nov 7" },
  { id: "JOB-7760", client: "Sonoran Hospitality", job: "Kitchen exhaust install", amount: 14200, waiting: 4, done: "Nov 9" },
];

const followUps = [
  {
    client: "Mesa Cold Storage",
    why: "96 days overdue, no reply to 3 emails",
    next: "Call the accounts payable contact, then prepare a final notice.",
    draft:
      "Hi Carla, invoice INV-2018 for $21,300 is now 96 days past due. Could you confirm a payment date this week? Happy to resend the invoice.",
  },
  {
    client: "Copper State Logistics",
    why: "$28,750 overdue and a $9,650 job not yet billed",
    next: "Bill the dock repair in your accounting system, then send both together.",
    draft:
      "Hi Raj, attached are INV-2057 and a new invoice for the dock cooling repair. Can we schedule both for payment on the next run?",
  },
  {
    client: "Desert Ridge Dental",
    why: "Invoice 47 days overdue, $18,400 job completed 21 days ago",
    next: "Invoice the rooftop unit, then send a friendly reminder.",
    draft:
      "Hi Dr. Patel, thank you for your business. Your rooftop unit invoice is attached, along with a reminder for INV-2041.",
  },
  {
    client: "Chandler Schools Co-op",
    why: "34 days overdue, last contact 30 days ago",
    next: "Send a reminder with the purchase order number.",
    draft:
      "Hello, a quick reminder that INV-2029 for $18,900 is past due. The PO number is on the attached copy.",
  },
];

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

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const unpaidTotal = invoices.reduce((sum, row) => sum + row.amount, 0);
const unbilledTotal = jobs.reduce((sum, row) => sum + row.amount, 0);
const earnedTotal = unpaidTotal + unbilledTotal;
const collected = 96400;

const buckets = [
  { label: "0–30 days", from: 0, to: 30, color: "var(--fl-info)" },
  { label: "31–60", from: 31, to: 60, color: "var(--fl-warn)" },
  { label: "61–90", from: 61, to: 90, color: "var(--fl-warn)" },
  { label: "90+", from: 91, to: 9999, color: "var(--fl-bad)" },
].map((bucket) => ({
  ...bucket,
  value: invoices
    .filter((row) => row.overdue >= bucket.from && row.overdue <= bucket.to)
    .reduce((sum, row) => sum + row.amount, 0),
}));
const largestBucket = Math.max(...buckets.map((bucket) => bucket.value));

function severity(days: number) {
  if (days > 60) return { color: "var(--fl-bad)", mark: "▲" };
  if (days > 30) return { color: "var(--fl-warn)", mark: "▲" };
  return { color: "var(--fl-info)", mark: "●" };
}

function FlowMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <g
        stroke="var(--fl-gold-text)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 52V22a10 10 0 0 1 10-10h8a10 10 0 0 1 10 10" />
        <path d="M20 34h6a12 12 0 0 1 12 12" />
      </g>
      <circle cx="48" cy="24" r="4.5" fill="var(--fl-gold)" />
    </svg>
  );
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
  const [theme, setTheme] = useState<Theme>("dark");
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
        style={themes[theme] as CSSProperties}
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
          <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
            <div className="rounded-xl border border-[var(--fl-line)] bg-[var(--fl-card)] p-5">
              <p className="text-[13px] text-[var(--fl-muted)]">
                Earned but not yet collected
              </p>
              <p className="mt-1 font-display text-5xl leading-tight text-[var(--fl-figure)] sm:text-6xl">
                {money.format(earnedTotal)}
              </p>
              <p className="text-[13px] text-[var(--fl-muted)]">
                {invoices.length} invoices are unpaid and {jobs.length} completed
                jobs have not been billed.
              </p>
              <div className="mt-4 flex h-2 overflow-hidden rounded bg-[var(--fl-raised)]">
                <i
                  className="block h-full"
                  style={{
                    width: `${(unpaidTotal / earnedTotal) * 100}%`,
                    background: "var(--fl-bad)",
                  }}
                />
                <i
                  className="block h-full"
                  style={{
                    width: `${(unbilledTotal / earnedTotal) * 100}%`,
                    background: "var(--fl-warn)",
                  }}
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-5 text-[13px]">
                <span className="flex items-center gap-2">
                  <i className="block h-2.5 w-2.5 rounded-full bg-[var(--fl-bad)]" />
                  Unpaid {money.format(unpaidTotal)}
                </span>
                <span className="flex items-center gap-2">
                  <i className="block h-2.5 w-2.5 rounded-full bg-[var(--fl-warn)]" />
                  Unbilled {money.format(unbilledTotal)}
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-[var(--fl-line)] bg-[var(--fl-card)] p-5">
              <p className="text-sm font-semibold">Unpaid invoices by age</p>
              <div className="mt-4 space-y-3">
                {buckets.map((bucket) => (
                  <div
                    key={bucket.label}
                    className="grid grid-cols-[72px_1fr_80px] items-center gap-3 text-[13px]"
                  >
                    <span>{bucket.label}</span>
                    <div className="h-3.5 overflow-hidden rounded bg-[var(--fl-raised)]">
                      <i
                        className="block h-full rounded"
                        style={{
                          width: `${(bucket.value / largestBucket) * 100}%`,
                          background: bucket.color,
                        }}
                      />
                    </div>
                    <span className="text-right">{money.format(bucket.value)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {[
              {
                color: "var(--fl-bad)",
                label: "Overdue invoices",
                value: money.format(unpaidTotal),
                note: `▲ ${invoices.length} accounts`,
              },
              {
                color: "var(--fl-warn)",
                label: "Done, not billed",
                value: money.format(unbilledTotal),
                note: `▲ ${jobs.length} jobs waiting`,
              },
              {
                color: "var(--fl-ok)",
                label: "Collected in November",
                value: money.format(collected),
                note: "✓ 31 invoices paid",
              },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="border-l-[3px] pl-4"
                style={{ borderColor: kpi.color }}
              >
                <p className="text-[13px] text-[var(--fl-muted)]">{kpi.label}</p>
                <p className="mt-0.5 text-2xl font-semibold">{kpi.value}</p>
                <p className="text-[13px] text-[var(--fl-muted)]">{kpi.note}</p>
              </div>
            ))}
          </div>

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
