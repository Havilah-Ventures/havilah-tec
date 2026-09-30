export type ServiceLine = {
  id: string;
  name: string;
  navHint: string;
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
};

export const serviceLines: ServiceLine[] = [
  {
    id: "platforms",
    name: "Data Engineering & Cloud Platforms",
    navHint: "Pipelines, dbt, Snowflake, and AWS",
    bestFor: "Data arrives late, incomplete, or the warehouse costs more than it returns.",
    summary:
      "Pipelines and platforms that move ERP, CRM, files, and APIs into a warehouse your team can run.",
    lead: "ERP, CRM, files, and APIs need a path into Snowflake or AWS that your team can run after we leave — with tests, a runbook, and a written scope.",
    overview: [
      "Most reporting failures start before the chart. Files land late, change data drops deletes, and the warehouse bill climbs while the number does not get better.",
      "Havilah Technologies LLC designs and builds that path in your cloud and your git: ingestion, dbt or SQL transformation, and the Snowflake or AWS platform the workload actually needs.",
    ],
    howWeHelp: [
      "Land ERP, CRM, files, and APIs into a warehouse design your team can operate.",
      "Build batch and incremental loads, including change data capture where the source supports it.",
      "Model the priority domains in dbt or SQL, with tests on grain, freshness, and keys.",
      "Lay out Snowflake or AWS roles, warehouses, and cost controls for the actual workload.",
      "Leave a runbook: what to rerun, what not to backfill, and who owns the job at close.",
    ],
    typicalWork: [
      {
        name: "Source-to-warehouse design",
        detail: "Sources, grain, landing, and a written ingest architecture before code.",
      },
      {
        name: "Pipeline and model build",
        detail: "Ingestion plus dbt or SQL models for the domains the business actually closes on.",
      },
      {
        name: "Platform fit",
        detail: "Snowflake or AWS roles, warehouses, and access that match the workload.",
      },
      {
        name: "Handoff",
        detail: "Repository, tests, and a runbook in your environment.",
      },
    ],
    capabilities: [
      "Ingestion from ERP, CRM, files, and APIs",
      "dbt or SQL transformation with tests",
      "Snowflake and AWS platform design",
      "Runbooks and named owners at handoff",
    ],
    when: "The feed is late or incomplete, models disagree, or Snowflake and AWS cost is climbing without a better number.",
    outcomes: [
      "Code in your repository",
      "A runbook your team can follow at close",
      "Tests on volume, freshness, and keys",
      "Documented roles and warehouse layout",
    ],
    related: ["analytics", "governance", "diagnostic"],
    faqs: [
      {
        question: "Where does the work land?",
        answer:
          "In your warehouse and your git. We do not take a copy of production home.",
      },
      {
        question: "What do we receive?",
        answer:
          "The repository, tests, and a runbook: what to rerun, what not to backfill, and who owns the job.",
      },
      {
        question: "Do you stay on to operate it?",
        answer:
          "Handoff is part of the statement of work. Ongoing help is a separate scoped engagement, not an open ticket queue.",
      },
      {
        question: "What if two reports already disagree?",
        answer:
          "Start with the Contested Metric Diagnostic. Platform work follows the ruling if you want the fix built.",
      },
    ],
  },
  {
    id: "analytics",
    name: "Analytics & AI-Ready Data",
    navHint: "One version of the metric",
    bestFor: "Reports and copilots do not share one agreed number.",
    summary:
      "One metric layer, so reports and AI copilots pull from numbers the business has already agreed on.",
    lead: "Finance, operations, and a copilot should quote the same revenue. We put reporting and AI on a certified metric layer, not a fourth version of the number.",
    overview: [
      "The argument usually is not the chart tool. Tableau, Power BI, and Looker each calculate a metric the warehouse never settled, and an agent repeats whichever join it found first.",
      "We define the metric once, on certified marts, with the semantic context an analyst or a copilot is allowed to use.",
    ],
    howWeHelp: [
      "Write the metric definition the business will actually defend.",
      "Build certified marts and the semantic layer reports should read.",
      "Point Tableau, Power BI, or Looker at that layer instead of a private workbook.",
      "Document what a copilot or agent may quote, and what it may not.",
      "Leave tests so a model change cannot silently create a second revenue.",
    ],
    typicalWork: [
      {
        name: "Metric definition",
        detail: "One written meaning for the number finance and operations both use.",
      },
      {
        name: "Certified marts",
        detail: "The tables both sides are allowed to call source of truth.",
      },
      {
        name: "BI on that layer",
        detail: "Workbooks that read the mart, not a copied calculation.",
      },
      {
        name: "Agent boundary",
        detail: "What a copilot may quote, and the grain it must use.",
      },
    ],
    capabilities: [
      "One metric layer for finance and operations",
      "Certified marts and semantic context",
      "BI workbooks on that layer",
      "A gate for what an agent may quote",
    ],
    when: "Two functions report different revenue, or a pilot quotes a number nobody has certified.",
    outcomes: [
      "A written metric definition",
      "Certified marts reports can share",
      "BI pointed at that layer",
      "A documented boundary for AI tools",
    ],
    related: ["governance", "diagnostic", "platforms"],
    faqs: [
      {
        question: "Do you replace our BI tool?",
        answer:
          "No. We put Tableau, Power BI, or Looker on a certified mart so the tool is not inventing a second metric.",
      },
      {
        question: "When is data ready for a copilot?",
        answer:
          "After the business has agreed which number is real. An agent does not settle that argument.",
      },
      {
        question: "What if the two reports already disagree?",
        answer:
          "The Contested Metric Diagnostic names which figure is valid. This engagement builds the layer that keeps it that way.",
      },
    ],
  },
  {
    id: "governance",
    name: "Governance & Data Quality",
    navHint: "Close, audit, and ownership",
    bestFor: "You cannot show where a number came from.",
    summary:
      "Tests, lineage, and named owners, so accuracy holds at close, at audit, and after we leave.",
    lead: "Close, audit, and regulated programs need evidence, not a policy slide. We put tests, lineage, owners, and reconciliation on the paths that actually break.",
    overview: [
      "Delivery without controls decays. Tests live in a wiki, lineage is a diagram no one updates, and the exception hides in chat until the board or an auditor asks.",
      "We install the quality and ownership layer that makes a certified table stay certified: reconciliation, monitors, and a named human for the number.",
    ],
    howWeHelp: [
      "Reconcile source, warehouse, and the report finance actually files.",
      "Put tests and monitors on freshness, uniqueness, accepted values, and volume.",
      "Assign a named owner to each certified mart and pipeline.",
      "Write lineage an engineer or an auditor can follow.",
      "Leave an exception path that is written down, not lost in Slack.",
    ],
    typicalWork: [
      {
        name: "Reconciliation",
        detail: "Cross-system checks for the metrics that land in close or a regulator pack.",
      },
      {
        name: "Tests and monitors",
        detail: "Thresholds and owners on the paths that break.",
      },
      {
        name: "Lineage and ownership",
        detail: "A documented path from source to report, with a named human.",
      },
      {
        name: "Exception handling",
        detail: "How a break is raised, who decides, and what gets written down.",
      },
    ],
    capabilities: [
      "Reconciliation finance can show",
      "Tests and monitors on the paths that break",
      "Lineage and named owners",
      "Evidence for close, audit, and regulated programs",
    ],
    when: "Close, audit, or a regulated program needs proof of where the number came from.",
    outcomes: [
      "Reconciliation finance can show an auditor",
      "Tests and monitors with owners",
      "Lineage from source to report",
      "An exception path that is not only chat",
    ],
    related: ["diagnostic", "analytics", "platforms"],
    faqs: [
      {
        question: "Is this a policy document?",
        answer:
          "No. It is tests, reconciliation, lineage, and named owners on the tables the business files.",
      },
      {
        question: "Who owns the number after you leave?",
        answer:
          "A named person on your team. The statement of work says who that is.",
      },
      {
        question: "What if the number is already disputed?",
        answer:
          "Settle it with the diagnostic first. Governance is how the ruling stays true at the next close.",
      },
    ],
  },
  {
    id: "diagnostic",
    name: "Contested Metric Diagnostic",
    navHint: "Start here",
    bestFor: "Two official numbers both claim to be true.",
    summary:
      "Two reports, two answers? We trace the metric to its source and give you a written ruling plus SQL you can re-run.",
    lead: "Two official numbers. Both claim truth. We trace one metric from the source through the warehouse into the report and leave a written ruling plus evidence SQL — typically in about ten business days.",
    overview: [
      "When the jobs are green and both dashboards refreshed, the problem is not a failed pipeline. It is grain, a filter, a copied rule, or a delete the load dropped.",
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
    related: ["analytics", "governance", "platforms"],
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
  },
];

export const partnerService: ServiceLine = {
  id: "partnership",
  name: "Partners",
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
  related: ["platforms", "analytics", "diagnostic"],
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
};

export const allServices: ServiceLine[] = [...serviceLines, partnerService];

export function servicePath(id: string) {
  return `/services/${id}`;
}

export function getService(id: string) {
  return allServices.find((line) => line.id === id);
}
