"use client";

import { useEffect, useState } from "react";

type View = "overview" | "collections" | "leakage" | "workflow" | "faq";

type Invoice = {
  id: string;
  customer: string;
  segment: string;
  type: string;
  amount: string;
  balance: string;
  due: string;
  age: string;
  status: string;
  filter: "overdue" | "due" | "partial";
  found: string;
  action: string;
};

type Job = {
  id: string;
  customer: string;
  type: string;
  amount: string;
  age: string;
  status: string;
  found: string;
  action: string;
};

const invoices: Invoice[] = [
  {
    id: "INV-2048",
    customer: "Redstone Property Group",
    segment: "Commercial service",
    type: "Commercial service invoice",
    amount: "$4,280",
    balance: "$4,280",
    due: "32 days ago",
    age: "32 days overdue",
    status: "Past due",
    filter: "overdue",
    found:
      "No payment is currently matched to this invoice in the sample records.",
    action:
      "Confirm the invoice was received, review any prior communication, and consider a friendly payment-status follow-up.",
  },
  {
    id: "INV-2039",
    customer: "Canyon Ridge Homes",
    segment: "Residential HVAC",
    type: "Residential HVAC invoice",
    amount: "$2,160",
    balance: "$2,160",
    due: "18 days ago",
    age: "18 days overdue",
    status: "Past due",
    filter: "overdue",
    found: "The sample record shows the full balance remains open.",
    action:
      "Check whether the customer has raised a question or requested documentation before following up.",
  },
  {
    id: "INV-2055",
    customer: "Desert Oak Facilities",
    segment: "Maintenance contract",
    type: "Maintenance contract invoice",
    amount: "$6,750",
    balance: "$6,750",
    due: "7 days ago",
    age: "7 days overdue",
    status: "Past due",
    filter: "overdue",
    found: "The due date has passed and no matched payment is shown.",
    action:
      "Review contract payment terms and confirm the invoice reached the correct accounts-payable contact.",
  },
  {
    id: "INV-2061",
    customer: "Copper State Dental",
    segment: "Commercial plumbing",
    type: "Commercial plumbing invoice",
    amount: "$1,260",
    balance: "$1,260",
    due: "Due today",
    age: "Due today",
    status: "Due today",
    filter: "due",
    found: "The invoice is due today; no overdue status is implied.",
    action:
      "No urgent action is required. Monitor the due date and follow your normal payment process.",
  },
  {
    id: "INV-2017",
    customer: "Pinnacle Retail Partners",
    segment: "Commercial HVAC",
    type: "Commercial HVAC invoice",
    amount: "$3,400",
    balance: "$900",
    due: "Partial",
    age: "Partially paid",
    status: "Partial payment",
    filter: "partial",
    found: "A $2,500 payment is matched, leaving a $900 open balance.",
    action:
      "Confirm the remaining balance and check whether the customer expects another payment or a credit.",
  },
];

const jobs: Record<string, Job> = {
  "JB-8814": {
    id: "JB-8814",
    customer: "Redstone Property Group",
    type: "Completed HVAC service job",
    amount: "$1,940 estimated",
    age: "Completed 4 days ago",
    status: "No confident invoice match",
    found:
      "The sample job record is marked complete. The demonstration matching process did not find a sufficiently confident invoice match.",
    action:
      "Check the field-service and accounting systems for a draft, delayed, contract-covered, or separately issued invoice before treating this as unbilled.",
  },
  "JB-8821": {
    id: "JB-8821",
    customer: "Mesa Vista Homes",
    type: "Completed plumbing repair",
    amount: "$1,280 estimated",
    age: "Completed 3 days ago",
    status: "Invoice status unclear",
    found: "The sample job appears complete, but invoice status is ambiguous.",
    action:
      "Confirm whether billing is pending approval, already completed in another system, or intentionally not billable.",
  },
  "JB-8830": {
    id: "JB-8830",
    customer: "North Valley Offices",
    type: "Completed maintenance job",
    amount: "$420 variance",
    age: "Completed 6 days ago",
    status: "Amount mismatch",
    found:
      "The illustrative job total and matched invoice total differ by $420.",
    action:
      "Compare labor, materials, discounts, tax, and approved change orders. Do not assume the difference is underbilling until verified.",
  },
};

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

const nav: { id: View; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "collections", label: "Collections" },
  { id: "leakage", label: "Unbilled work" },
  { id: "workflow", label: "How it works" },
  { id: "faq", label: "Questions" },
];

const crumbs: Record<View, string> = {
  overview: "Overview",
  collections: "Collections",
  leakage: "Unbilled work",
  workflow: "How it works",
  faq: "Questions",
};

type Modal =
  | { kind: "invoice"; id: string }
  | { kind: "job"; id: string }
  | null;

export function FlowDashboardPreview() {
  const [view, setView] = useState<View>("overview");
  const [step, setStep] = useState(0);
  const [filter, setFilter] = useState<"all" | Invoice["filter"]>("all");
  const [openQuestion, setOpenQuestion] = useState(0);
  const [modal, setModal] = useState<Modal>(null);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setModal(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const shown = invoices.filter(
    (row) => filter === "all" || row.filter === filter,
  );
  const record =
    modal?.kind === "invoice"
      ? invoices.find((row) => row.id === modal.id)
      : modal
        ? jobs[modal.id]
        : undefined;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="overflow-hidden rounded-sm border border-white/10 bg-navy-deep lg:grid lg:grid-cols-[220px_1fr]">
        <nav className="flex gap-2 overflow-x-auto border-b border-white/10 p-3 lg:flex-col lg:gap-1 lg:border-b-0 lg:border-r lg:p-4">
          <p className="hidden px-3 pb-2 text-[11px] uppercase tracking-[0.16em] text-gold lg:block">
            Workspace
          </p>
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setView(item.id)}
              className={`shrink-0 rounded-sm px-3 py-2 text-left text-sm ${
                view === item.id
                  ? "bg-gold/10 text-gold"
                  : "text-secondary hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <p className="mt-auto hidden px-3 pt-8 text-xs leading-5 text-secondary lg:block">
            Havilah Flow is designed as a layer on the field-service and
            accounting software you already use. It does not replace them.
          </p>
        </nav>

        <div className="min-w-0">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
            <p className="text-sm text-secondary">
              Havilah Flow <span className="text-white">/ {crumbs[view]}</span>
            </p>
            <p className="rounded-sm border border-gold/30 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-gold">
              Illustrative demo data
            </p>
          </div>

          <div className="p-5 sm:p-6">
            {view === "overview" ? (
              <Overview
                onView={setView}
                step={step}
                onStep={setStep}
                onOpen={setModal}
              />
            ) : null}
            {view === "collections" ? (
              <Collections
                rows={shown}
                filter={filter}
                onFilter={setFilter}
                onOpen={setModal}
              />
            ) : null}
            {view === "leakage" ? <Leakage onOpen={setModal} /> : null}
            {view === "workflow" ? <Workflow /> : null}
            {view === "faq" ? (
              <Questions open={openQuestion} onOpen={setOpenQuestion} />
            ) : null}
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs leading-6 text-secondary">
        Havilah Flow is a concept preview by Havilah Technologies LLC. Every
        company, invoice, and amount shown is fictional. This is not a live
        financial system. Havilah Flow is an emerging pilot.
      </p>

      {modal && record ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) setModal(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="record-title"
            className="w-full max-w-lg rounded-sm border border-white/10 bg-navy p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-gold">
                {modal.kind === "invoice"
                  ? "Collections exception"
                  : "Revenue verification"}
              </p>
              <button
                type="button"
                onClick={() => setModal(null)}
                className="text-sm text-secondary hover:text-white"
              >
                Close
              </button>
            </div>
            <h3
              id="record-title"
              className="mt-3 font-display text-2xl text-white"
            >
              {record.customer}
            </h3>
            <p className="mt-2 text-sm text-secondary">
              {record.type} · {record.id}
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-sm border border-white/10 p-3">
                <dt className="text-[11px] uppercase tracking-[0.14em] text-secondary">
                  {modal.kind === "invoice" ? "Open balance" : "Estimated value"}
                </dt>
                <dd className="mt-1 text-white">
                  {modal.kind === "invoice"
                    ? (record as Invoice).balance
                    : (record as Job).amount}
                </dd>
              </div>
              <div className="rounded-sm border border-white/10 p-3">
                <dt className="text-[11px] uppercase tracking-[0.14em] text-secondary">
                  Status
                </dt>
                <dd className="mt-1 text-white">{record.age}</dd>
              </div>
            </dl>
            <p className="mt-5 text-sm leading-7 text-secondary">
              <span className="text-white">What Havilah Flow found. </span>
              {record.found}
            </p>
            <p className="mt-4 rounded-sm border border-gold/30 bg-gold/[0.06] p-4 text-sm leading-7 text-secondary">
              <span className="text-gold">Suggested team review. </span>
              {record.action}
            </p>
            <button
              type="button"
              onClick={() => setModal(null)}
              className="mt-5 rounded-sm border border-gold/40 px-4 py-2 text-sm uppercase tracking-[0.16em] text-gold hover:bg-gold/10"
            >
              Close details
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function Overview({
  onView,
  step,
  onStep,
  onOpen,
}: {
  onView: (view: View) => void;
  step: number;
  onStep: (index: number) => void;
  onOpen: (modal: Modal) => void;
}) {
  const facts = [
    ["Open receivables", "$48,620", "Across 37 open invoices"],
    ["Past due", "$18,450", "12 invoices need follow-up"],
    ["Potential unbilled work", "$7,840", "6 completed jobs to review"],
    ["Exceptions to review", "18", "Prioritized for your team"],
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-[11px] uppercase tracking-[0.16em] text-gold">
          Your revenue, in clearer view
        </p>
        <h2 className="mt-2 font-display text-3xl text-white">
          Good morning, Summit Mechanical.
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-secondary">
          One place to see what has been earned, what is still outstanding, and
          what may need attention. Sample reporting period, last 30 days.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {facts.map(([label, value, note]) => (
          <article key={label} className="rounded-sm border border-white/10 p-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-secondary">
              {label}
            </p>
            <p className="mt-2 font-display text-2xl text-white">{value}</p>
            <p className="mt-1 text-xs text-secondary">{note}</p>
          </article>
        ))}
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-sm border border-white/10">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
            <div>
              <h3 className="text-white">Priority collection follow-ups</h3>
              <p className="text-xs text-secondary">
                Illustrative invoices ranked for review
              </p>
            </div>
            <button
              type="button"
              onClick={() => onView("collections")}
              className="text-xs uppercase tracking-[0.14em] text-gold"
            >
              View all
            </button>
          </div>
          <ul>
            {invoices.slice(0, 4).map((row) => (
              <li key={row.id} className="border-t border-white/10 first:border-t-0">
                <button
                  type="button"
                  onClick={() => onOpen({ kind: "invoice", id: row.id })}
                  className="grid w-full gap-1 px-4 py-3 text-left hover:bg-white/[0.03] sm:grid-cols-[1.4fr_0.7fr_0.8fr_0.7fr]"
                >
                  <span>
                    <span className="block text-sm text-white">{row.customer}</span>
                    <span className="block text-xs text-secondary">{row.segment}</span>
                  </span>
                  <span className="text-sm text-secondary">{row.id}</span>
                  <span className="text-sm text-white">{row.balance}</span>
                  <span className="text-xs uppercase tracking-[0.12em] text-gold">
                    {row.age}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-sm border border-white/10 p-4">
          <h3 className="text-white">What needs attention</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <p className="text-white">Aging balance needs review</p>
              <p className="text-secondary">
                Redstone Property Group · $4,280 · 32 days overdue
              </p>
            </li>
            <li>
              <p className="text-white">Completed job may be unbilled</p>
              <p className="text-secondary">Job JB-8814 · $1,940 estimated value</p>
            </li>
            <li>
              <p className="text-white">Payment needs matching</p>
              <p className="text-secondary">
                $875 deposit not confidently matched to an invoice
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-sm border border-white/10 p-4">
        <h3 className="text-white">How Havilah Flow fits in</h3>
        <p className="text-xs text-secondary">A layer over your existing systems</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-4">
          {steps.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => onStep(index)}
              className={`rounded-sm border p-3 text-left ${
                step === index
                  ? "border-gold/50 bg-gold/[0.06]"
                  : "border-white/10"
              }`}
            >
              <p className="text-[11px] uppercase tracking-[0.14em] text-gold">
                {index + 1}
              </p>
              <p className="mt-2 text-sm text-white">{item.title}</p>
              <p className="mt-1 text-xs text-secondary">{item.line}</p>
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm leading-7 text-secondary">
          <span className="text-white">
            Step {step + 1} — {steps[step].title}.{" "}
          </span>
          {steps[step].detail}
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-sm border border-white/10 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white">Completed jobs to verify</h3>
            <button
              type="button"
              onClick={() => onView("leakage")}
              className="text-xs uppercase tracking-[0.14em] text-gold"
            >
              Review all
            </button>
          </div>
          <p className="mt-1 text-xs text-secondary">
            Potentially unbilled work. Not assumed lost revenue.
          </p>
          {(["JB-8814", "JB-8821"] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => onOpen({ kind: "job", id })}
              className="mt-3 block w-full border-t border-white/10 pt-3 text-left"
            >
              <span className="text-sm text-white">
                {id} · {jobs[id].customer}
              </span>
              <span className="mt-1 block text-xs text-secondary">
                {jobs[id].age} · {jobs[id].status}
              </span>
              <span className="mt-1 block text-sm text-gold">{jobs[id].amount}</span>
            </button>
          ))}
        </div>
        <div className="rounded-sm border border-gold/30 bg-gold/[0.04] p-4">
          <h3 className="text-white">Built to work alongside your software</h3>
          <p className="mt-3 text-sm leading-7 text-secondary">
            No replacement project. Havilah Flow is designed to read authorized
            information, surface exceptions, and help your team decide what to
            do next.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-gold">
            <span className="rounded-sm border border-gold/30 px-2 py-1">
              Field service
            </span>
            <span className="rounded-sm border border-gold/30 px-2 py-1">
              Accounting
            </span>
            <span className="rounded-sm border border-gold/30 px-2 py-1">
              Payments
            </span>
          </div>
          <button
            type="button"
            onClick={() => onView("workflow")}
            className="mt-4 text-xs uppercase tracking-[0.14em] text-gold"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

function Collections({
  rows,
  filter,
  onFilter,
  onOpen,
}: {
  rows: Invoice[];
  filter: "all" | Invoice["filter"];
  onFilter: (filter: "all" | Invoice["filter"]) => void;
  onOpen: (modal: Modal) => void;
}) {
  const filters: { id: "all" | Invoice["filter"]; label: string }[] = [
    { id: "all", label: "All invoices" },
    { id: "overdue", label: "Overdue" },
    { id: "due", label: "Due soon" },
    { id: "partial", label: "Partial payment" },
  ];
  return (
    <div>
      <h2 className="font-display text-2xl text-white">Collections workspace</h2>
      <p className="mt-2 max-w-2xl text-sm leading-7 text-secondary">
        See outstanding balances, understand aging, and decide which follow-up
        deserves attention first. Select any invoice for more context.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onFilter(item.id)}
            className={`rounded-sm border px-3 py-2 text-xs uppercase tracking-[0.12em] ${
              filter === item.id
                ? "border-gold/50 text-gold"
                : "border-white/10 text-secondary"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <ul className="mt-4 divide-y divide-white/10 rounded-sm border border-white/10">
        {rows.map((row) => (
          <li key={row.id}>
            <button
              type="button"
              onClick={() => onOpen({ kind: "invoice", id: row.id })}
              className="grid w-full gap-1 px-4 py-3 text-left hover:bg-white/[0.03] sm:grid-cols-5"
            >
              <span className="text-sm text-white">{row.customer}</span>
              <span className="text-sm text-secondary">{row.id}</span>
              <span className="text-sm text-secondary">{row.amount}</span>
              <span className="text-sm text-white">{row.balance}</span>
              <span className="text-xs uppercase tracking-[0.12em] text-gold">
                {row.status}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm leading-7 text-secondary">
        Suggested follow-ups are recommendations for your team. No messages or
        financial records are changed from this page.
      </p>
    </div>
  );
}

function Leakage({ onOpen }: { onOpen: (modal: Modal) => void }) {
  const columns: { title: string; cards: { id?: string; title: string; note: string; money: string }[] }[] =
    [
      {
        title: "Completed jobs",
        cards: [
          {
            id: "JB-8814",
            title: "JB-8814 · Redstone Property",
            note: "Completed · 4 days ago",
            money: "$1,940 estimated",
          },
          {
            id: "JB-8821",
            title: "JB-8821 · Mesa Vista Homes",
            note: "Completed · 3 days ago",
            money: "$1,280 estimated",
          },
        ],
      },
      {
        title: "Matching review",
        cards: [
          {
            id: "JB-8814",
            title: "Possible invoice gap",
            note: "No confident invoice match found",
            money: "Needs verification",
          },
          {
            id: "JB-8830",
            title: "Amount mismatch",
            note: "Job and invoice totals differ",
            money: "$420 variance",
          },
        ],
      },
      {
        title: "Team review",
        cards: [
          {
            id: "JB-8821",
            title: "Check invoice status",
            note: "Possible draft or delayed sync",
            money: "Awaiting review",
          },
        ],
      },
      {
        title: "Resolved",
        cards: [
          {
            title: "JB-8792 · Copper State",
            note: "Invoice located after review",
            money: "Matched · $860",
          },
        ],
      },
    ];
  return (
    <div>
      <h2 className="font-display text-2xl text-white">
        Completed work and invoice matching
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-7 text-secondary">
        Job records are compared with invoice records. A flag is a prompt to
        investigate, not proof that revenue was lost.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {columns.map((column) => (
          <div key={column.title} className="rounded-sm border border-white/10 p-3">
            <h3 className="text-[11px] uppercase tracking-[0.14em] text-secondary">
              {column.title}
            </h3>
            {column.cards.map((card) =>
              card.id ? (
                <button
                  key={card.title}
                  type="button"
                  onClick={() => onOpen({ kind: "job", id: card.id! })}
                  className="mt-3 block w-full rounded-sm border border-white/10 p-3 text-left hover:border-gold/30"
                >
                  <span className="block text-sm text-white">{card.title}</span>
                  <span className="mt-1 block text-xs text-secondary">{card.note}</span>
                  <span className="mt-2 block text-sm text-gold">{card.money}</span>
                </button>
              ) : (
                <div
                  key={card.title}
                  className="mt-3 rounded-sm border border-white/10 p-3"
                >
                  <p className="text-sm text-white">{card.title}</p>
                  <p className="mt-1 text-xs text-secondary">{card.note}</p>
                  <p className="mt-2 text-sm text-gold">{card.money}</p>
                </div>
              ),
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-7 text-secondary">
        A job may be invoiced in another system, covered by a contract,
        intentionally not billable, or waiting on approval. Flow highlights
        records for a person to verify before anyone acts.
      </p>
    </div>
  );
}

function Workflow() {
  return (
    <div>
      <h2 className="font-display text-2xl text-white">How Havilah Flow works</h2>
      <p className="mt-2 max-w-2xl text-sm leading-7 text-secondary">
        A revenue intelligence layer, not a replacement for the software your
        team already relies on.
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {[
          ["Your field-service software", "Job status, work orders, customer and service details"],
          ["Your accounting and payment tools", "Invoices, balances, payments, and deposits"],
          ["Havilah Flow", "Connects authorized data, matches records, and surfaces exceptions"],
        ].map(([title, body]) => (
          <article key={title} className="rounded-sm border border-white/10 p-4">
            <h3 className="text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-secondary">{body}</p>
          </article>
        ))}
      </div>
      <ol className="mt-4 grid gap-3 md:grid-cols-3">
        {[
          ["Bring records together", "Use an approved connection or a controlled export."],
          ["Identify exceptions", "Compare jobs, invoices, and payments with defined rules."],
          ["Help your team act", "Prioritize follow-ups and reviews before any change is made."],
        ].map(([title, body], index) => (
          <li key={title} className="rounded-sm border border-white/10 p-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-gold">
              {index + 1}
            </p>
            <p className="mt-2 text-white">{title}</p>
            <p className="mt-2 text-sm leading-6 text-secondary">{body}</p>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm leading-7 text-secondary">
        Your software stays the system of record. Flow provides visibility and
        recommendations. Your team remains in control of approvals and actions.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-gold">
        <span className="rounded-sm border border-gold/30 px-2 py-1">
          No system replacement
        </span>
        <span className="rounded-sm border border-gold/30 px-2 py-1">
          Human review
        </span>
        <span className="rounded-sm border border-gold/30 px-2 py-1">
          Authorized access
        </span>
      </div>
    </div>
  );
}

function Questions({
  open,
  onOpen,
}: {
  open: number;
  onOpen: (index: number) => void;
}) {
  return (
    <div>
      <h2 className="font-display text-2xl text-white">
        Questions business owners ask
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-7 text-secondary">
        A product concept. Connections and capabilities are confirmed during
        validation.
      </p>
      <div className="mt-5 space-y-2">
        {questions.map((item, index) => (
          <div key={item.question} className="rounded-sm border border-white/10">
            <button
              type="button"
              aria-expanded={open === index}
              onClick={() => onOpen(open === index ? -1 : index)}
              className="w-full px-4 py-3 text-left text-sm text-white"
            >
              {item.question}
            </button>
            {open === index ? (
              <p className="px-4 pb-4 text-sm leading-7 text-secondary">
                {item.answer}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
