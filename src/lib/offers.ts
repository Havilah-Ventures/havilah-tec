export type ServiceKind = "pilot" | "service";

export type ServiceLine = {
  id: string;
  name: string;
  kind: ServiceKind;
  navHint: string;
  /** Title used in the document head when it should differ from the visible name. */
  seoTitle?: string;
  bestFor: string;
  summary: string;
  lead: string;
  overview: string[];
  howWeHelp: string[];
  typicalWork: { name: string; detail: string }[];
  capabilities: string[];
  when: string;
  outcomes: string[];
  related: string[];
  faqs: { question: string; answer: string }[];
  ctaLabel: string;
  /** Must match an entry in `inquiryTypes` so the contact form can preselect it. */
  inquiryType: string;
  deliveryNote: string;
};

export const serviceLines: ServiceLine[] = [
  {
    id: "havilah-flow",
    inquiryType: "Havilah Flow",
    name: "Havilah Flow",
    kind: "pilot",
    navHint: "Revenue intelligence",
    bestFor:
      "Unpaid invoices, completed work that was never billed, and follow-up that depends on one person remembering.",
    summary:
      "An emerging pilot that helps service businesses see unpaid invoices, unbilled completed work, and which accounts need a follow-up.",
    lead: "We help service businesses identify unpaid invoices, catch completed work that has not been billed, and manage customer payment follow-ups — using the software they already run.",
    overview: [
      "Havilah Flow is an emerging pilot from Havilah Technologies LLC for service businesses. It is a conversation and, when you authorize it, a look at a sample of invoices and completed work. It is not a live product with customers, and it is not a checkout.",
      "The pilot sits on the field-service, operations, and accounting software you already use. It recommends a next step. A person approves a reminder before anything is sent, and a balance comes from your records.",
    ],
    howWeHelp: [
      "Show outstanding invoices and which of them are overdue.",
      "Surface completed work that may not have a corresponding invoice.",
      "Flag invoice and payment records that do not match.",
      "Prepare a follow-up for a person on your team to approve.",
      "Leave unresolved accounts visible until your system records the payment.",
    ],
    typicalWork: [
      {
        name: "A conversation",
        detail:
          "How you track overdue invoices and completed work that has not been billed. No demo before that workflow is understood.",
      },
      {
        name: "An authorized sample",
        detail:
          "A limited look at invoices, completed work, and payments you choose to share. Findings are labeled confirmed, suspected, or needing verification.",
      },
      {
        name: "The morning review",
        detail:
          "Outstanding invoices, overdue accounts, unbilled completed work, and follow-ups due. Figures in any sketch are illustrative.",
      },
      {
        name: "A person approves",
        detail:
          "The system recommends a reminder, a correction, or a call. Someone you authorize approves what actually goes out.",
      },
    ],
    capabilities: [
      "Accounts receivable visibility",
      "Completed work that may be unbilled",
      "Invoice and payment exceptions",
      "Follow-up recommendations a person approves",
    ],
    when: "The business earns the money in one system and collects it in another, and nobody has a single list of what needs attention today.",
    outcomes: [
      "A clear picture of what is outstanding",
      "Exceptions you can verify against your own records",
      "A next action for each item that needs one",
      "Reminders that wait for a person",
    ],
    related: ["data-engineering", "ai-automation"],
    faqs: [
      {
        question: "Is Havilah Flow available to buy today?",
        answer:
          "It is an emerging pilot. The invitation is a conversation, or a look at an authorized sample. It is not a free trial and not a checkout.",
      },
      {
        question: "Which businesses is it for?",
        answer:
          "Service businesses that complete work, invoice for it, and then have to collect. The page is not limited to one trade.",
      },
      {
        question: "Does it replace our field-service or accounting software?",
        answer:
          "No. It reads what those systems already hold, with your authorization. It does not replace them.",
      },
      {
        question: "Who sends a reminder?",
        answer:
          "A person you authorize approves it. The system recommends. It does not invent a balance or mark an invoice paid without a recorded payment.",
      },
    ],
    ctaLabel: "Request a conversation",
    deliveryNote:
      "An emerging pilot of Havilah Technologies LLC. We start with a conversation. A sample is used only with written authorization.",
  },
  {
    id: "data-engineering",
    inquiryType: "Data Engineering & Intelligence",
    name: "Data Engineering & Intelligence",
    kind: "service",
    navHint: "Snowflake, dbt, and AWS",
    seoTitle: "Snowflake, dbt & AWS Data Engineering",
    bestFor:
      "The warehouse, the metric, or the audit trail is not something the business can defend.",
    summary:
      "Pipelines, a metric layer, and governance on Snowflake, dbt, and AWS, plus a diagnostic when two official numbers disagree.",
    lead: "We build and govern Snowflake, dbt, and AWS data platforms so finance, operations, and AI tools can quote one agreed number. When two official numbers disagree, start with the Contested Metric Diagnostic.",
    overview: [
      "One service covers the path from source to a number the business will defend: ingestion, the warehouse, the metric layer, and the controls that keep it true at close.",
      "The work lands in your cloud and your git under a written statement of work. A copilot is allowed to quote a figure only after the business has agreed which number is real.",
    ],
    howWeHelp: [
      "Land ERP, CRM, files, and APIs into a warehouse design your team can operate.",
      "Model the priority domains in dbt or SQL, with tests on grain, freshness, and keys.",
      "Write one metric definition and point Tableau, Power BI, or Looker at certified marts.",
      "Put reconciliation, lineage, tests, and a named owner on the paths that land in close.",
      "When two reports already disagree, trace that one metric before funding a larger build.",
    ],
    typicalWork: [
      {
        name: "Contested Metric Diagnostic",
        detail:
          "One metric, two artifacts, a written ruling, and evidence SQL your team can re-run. The rebuild is a separate statement of work.",
      },
      {
        name: "Pipelines and platform",
        detail:
          "Ingestion, dbt or SQL models, and Snowflake or AWS roles sized for the actual workload, with a runbook.",
      },
      {
        name: "Metric layer",
        detail:
          "Certified marts, BI pointed at that layer, and a written boundary for what an agent may quote.",
      },
      {
        name: "Governance",
        detail:
          "Reconciliation, monitors, lineage, and a named human for the number.",
      },
    ],
    capabilities: [
      "Ingestion from ERP, CRM, files, and APIs",
      "Snowflake and AWS platform design",
      "dbt or SQL transformation with tests",
      "One metric layer for finance and operations",
      "Lineage, reconciliation, and named owners",
    ],
    when: "The feed is late, two functions report different revenue, close or an audit needs a path from source to number, or a copilot is about to quote a figure nobody has certified.",
    outcomes: [
      "Code in your repository",
      "A runbook your team can follow at close",
      "Tests on volume, freshness, and keys",
      "A written metric definition, when that is the work",
    ],
    related: ["diagnostic", "ai-automation", "partnership"],
    faqs: [
      {
        question: "Where does the work land?",
        answer:
          "In your warehouse and your git. We do not take a copy of production home.",
      },
      {
        question: "Where do we start when two numbers disagree?",
        answer:
          "With the Contested Metric Diagnostic. It names which figure is valid. Platform work follows if you want the fix built.",
      },
      {
        question: "Do you replace our BI tool?",
        answer:
          "No. We put Tableau, Power BI, or Looker on a certified mart so the tool is not inventing a second metric.",
      },
      {
        question: "Can a prime hire this as a workstream?",
        answer:
          "Yes. A named Snowflake, dbt, or AWS workstream can be contracted under Havilah Technologies LLC, inside the prime's security boundary.",
      },
    ],
    ctaLabel: "Request a fit call",
    deliveryNote:
      "Contracted and invoiced by Havilah Technologies LLC. Delivery in your warehouse and your git.",
  },
  {
    id: "ai-automation",
    inquiryType: "AI Automation & Digital Solutions",
    name: "AI Automation & Digital Solutions",
    kind: "service",
    navHint: "A named workflow",
    bestFor:
      "A person repeats the same step across systems every week, and that step has a name.",
    summary:
      "Automate one named business workflow and connect the applications you already use. A person approves any step that changes a record.",
    lead: "Havilah Technologies automates a named business workflow and connects the applications the client already uses. A person approves the step that changes a record or sends a message.",
    overview: [
      "The engagement is one workflow: what happens, how often, which systems, and what a person does by hand today. The deliverable is that path, with the exception a person still has to see.",
      "Work is a written statement of work in your environment, with a handoff and a named owner. Expansion beyond that workflow is a change order.",
    ],
    howWeHelp: [
      "Name the workflow, the volume, and the systems it touches.",
      "Connect those applications with the access you grant.",
      "Let a model draft, classify, or route a step a person can check.",
      "Keep a person on any step that changes a record, sends a message, or moves money.",
      "Leave tests, an audit of what ran, and a named owner.",
    ],
    typicalWork: [
      {
        name: "The workflow",
        detail:
          "The trigger, the hand-offs, and the step that is repetitive enough to name.",
      },
      {
        name: "The connection",
        detail:
          "Authorized links between applications you already license.",
      },
      {
        name: "The approval",
        detail:
          "Which steps a model may draft, and which steps a person must approve.",
      },
      {
        name: "Handoff",
        detail:
          "Tests, a record of what ran, and an owner on your side.",
      },
    ],
    capabilities: [
      "Workflow automation on systems you already run",
      "API and application integration",
      "Intelligent document handling when the workflow needs it",
      "An agent that prepares the next action for a person to approve",
    ],
    when: "Someone retypes a record from one application into another, chases a document, or assembles the same update by hand, and the process can be pointed at.",
    outcomes: [
      "One workflow, automated inside a written scope",
      "A person on the step that changes a record",
      "A handoff your team can own",
      "An audit of inputs, recommendations, and decisions",
    ],
    related: ["data-engineering", "havilah-flow"],
    faqs: [
      {
        question: "Is this a chatbot?",
        answer:
          "No. The engagement is a named workflow. A general assistant with no process is not the offer.",
      },
      {
        question: "Does the model change our records?",
        answer:
          "A person approves the step that changes a record, sends a message, or moves money.",
      },
      {
        question: "What if two reports disagree?",
        answer:
          "That starts as Data Engineering & Intelligence. A workflow that would quote a number waits until the business has agreed which number is real.",
      },
      {
        question: "Is there a package price?",
        answer:
          "No price is published here. The work is a statement of work for the named workflow.",
      },
    ],
    ctaLabel: "Request a fit call",
    deliveryNote:
      "Contracted and invoiced by Havilah Technologies LLC. A written statement of work in your environment, with a handoff.",
  },
];

export const diagnosticService: ServiceLine = {
  id: "diagnostic",
  inquiryType: "Contested Metric Diagnostic",
  name: "Contested Metric Diagnostic",
  kind: "service",
  navHint: "Start here when two numbers disagree",
  bestFor: "Two official numbers both claim to be true.",
  summary:
    "Two reports, two answers? We trace the metric to its source and give you a written ruling plus SQL you can re-run.",
  lead: "Two official numbers. Both claim truth. We trace one metric from the source through the warehouse into the report and leave a written ruling plus evidence SQL — typically in about ten business days.",
  overview: [
    "When the jobs are green and both dashboards refreshed, the problem is not a failed pipeline. It is the level of detail — an order total versus the line items — a filter, a copied rule, or a delete the load dropped.",
    "The diagnostic is a fixed, short statement of work. Building the fix is a separate engagement if you want it.",
  ],
  howWeHelp: [
    "Take one metric and two artifacts — a report, an extract, a board pack, or an agent answer.",
    "Trace the number from the operational document through ingest, the warehouse, the mart, and the report.",
    "Issue a written ruling: which number is valid for which decision.",
    "Deliver evidence SQL your team can re-run.",
    "Rank the fixes, with a list of objects that must not be edited without a named approver.",
  ],
  typicalWork: [
    {
      name: "Intake",
      detail: "The metric name, two artifacts, and access to the warehouse and the workbook.",
    },
    {
      name: "Trace",
      detail: "Source, warehouse, and report — until the break is named.",
    },
    {
      name: "Ruling",
      detail: "Which figure is valid for close, operations, or compensation.",
    },
    {
      name: "Handoff",
      detail: "Evidence SQL and ranked changes. Implementation is a separate scope.",
    },
  ],
  capabilities: [
    "One metric, traced from source to report",
    "A written ruling for a named decision",
    "Evidence SQL your team re-runs",
    "Ranked fixes, not a silent rebuild",
  ],
  when: "Both dashboards refreshed, and nobody will yield — close, commissions, or an agent is about to pick a side.",
  outcomes: [
    "A written ruling: which number is valid for which decision",
    "Evidence SQL your team re-runs",
    "Ranked changes with owners",
    "A do-not-touch list for bonus formulas, GL maps, and load filters",
  ],
  related: ["data-engineering", "partnership"],
  faqs: [
    {
      question: "How long is it?",
      answer:
        "Typically about ten business days for one metric and two artifacts. The scope is fixed and short.",
    },
    {
      question: "What do we receive?",
      answer:
        "A written ruling and evidence SQL your team can re-run. A sample ruling is published only from a real engagement, with the client’s permission.",
    },
    {
      question: "Does the fee include the rebuild?",
      answer:
        "No. The diagnostic names the break. Implementation is a separate written statement of work if you want it built.",
    },
    {
      question: "What should we send?",
      answer:
        "The metric name, the two artifacts that disagree, and the decision or deadline that depends on the number.",
    },
  ],
  ctaLabel: "Start a diagnostic",
  deliveryNote:
    "Contracted and invoiced by Havilah Technologies LLC. A fixed statement of work. The rebuild, if you want it, is separate.",
};

export const partnerService: ServiceLine = {
  id: "partnership",
  inquiryType: "Partner delivery",
  name: "Partners",
  kind: "service",
  navHint: "Named workstreams for primes",
  bestFor: "A program needs a Snowflake, dbt, or AWS specialist on a defined workstream.",
  summary:
    "A named Snowflake, dbt, or AWS workstream under subcontract — in your security boundary, with a handoff a program manager can accept.",
  lead: "Primes and delivery managers hire us for a defined data workstream inside their security boundary. We do not join as an open ticket queue.",
  overview: [
    "A named workstream has a scope, an environment, acceptance criteria, and a handoff. That is what a program manager can put on the plan and accept at the end.",
    "We work in your repository and your cloud. Havilah Technologies LLC is the contracting entity. Credentials and contract vehicles are stated in the statement of work when they apply. They are not listed here until they are current.",
  ],
  howWeHelp: [
    "Scope a named workstream: pipeline, models, Snowflake or AWS, migration, or a diagnostic.",
    "Contract and invoice as Havilah Technologies LLC.",
    "Deliver inside the prime or partner security boundary.",
    "Report status and artifacts a program manager can accept.",
    "Stay on the named scope. Expansion is a change order.",
  ],
  typicalWork: [
    {
      name: "Workstream statement of work",
      detail: "Scope, environment, acceptance, and the contracting entity.",
    },
    {
      name: "Delivery in your boundary",
      detail: "Engineering in your repo and your cloud, against your access model.",
    },
    {
      name: "Status a program can use",
      detail: "Artifacts and progress a program manager can put in the pack.",
    },
    {
      name: "Handoff",
      detail: "Tests, documentation, and owners so the work does not live in one mailbox.",
    },
  ],
  capabilities: [
    "A named workstream, not unscoped staff",
    "Delivery in your security boundary and your repo",
    "Handoff a program manager can accept",
    "Havilah Technologies LLC on the subcontract",
  ],
  when: "A prime or partner has the client and needs a specialist workstream delivered under subcontract.",
  outcomes: [
    "A statement of work the program can file",
    "Delivery in their repo and their cloud",
    "Documented handoff",
    "Named owners on your side",
  ],
  related: ["data-engineering", "diagnostic"],
  faqs: [
    {
      question: "Do you work outside our security boundary?",
      answer: "No. The work stays in your repository and your cloud.",
    },
    {
      question: "Is this extra staff on Slack?",
      answer:
        "No. It is a named workstream with acceptance criteria. Hours outside that scope are a change order.",
    },
    {
      question: "Which contract vehicles do you hold?",
      answer:
        "Those are named in the statement of work when they apply. We do not publish a vehicle list here.",
    },
  ],
  ctaLabel: "Request a fit call",
  deliveryNote:
    "Contracted and invoiced by Havilah Technologies LLC, inside your security boundary.",
};

export const allServices: ServiceLine[] = [
  ...serviceLines,
  diagnosticService,
  partnerService,
];

export function servicePath(id: string) {
  return `/services/${id}`;
}

export function getService(id: string) {
  return allServices.find((line) => line.id === id);
}

export function kindLabel(kind: ServiceKind) {
  return kind === "pilot" ? "Pilot" : "Professional service";
}
