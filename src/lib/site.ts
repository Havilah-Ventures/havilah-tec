export const siteConfig = {
  name: "Havilah Technologies",
  legalName: "Havilah Technologies LLC",
  parentName: "Havilah Ventures",
  parentLegalName: "Havilah Ventures LLC",
  parentUrl: "https://www.haviventures.com",
  homeTitle:
    "Snowflake, dbt & AWS Data Engineering Consulting | Havilah Technologies",
  tagline: "One trusted number, in every report.",
  heroEyebrow: "Havilah Technologies",
  heroSubline:
    "We build and govern Snowflake, dbt, and AWS data platforms so finance, operations, and AI tools all quote the same answer. Delivered under a written SOW, inside your environment.",
  operatingFocus: "Data Engineering, Analytics & AI",
  serviceTagline:
    "Four ways to put one trusted number in every report: platforms, analytics, governance, and a diagnostic when two official numbers disagree.",
  email: "info@havilahtec.com",
  url: "https://www.havilahtec.com",
  description:
    "Data engineering, analytics, and AI-ready data on Snowflake, dbt, and AWS. Delivered under a written SOW in your environment. Book a 30-minute fit call.",
};

export const primaryNav = [
  { href: "/services/partnership", label: "Partners" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/approach", label: "How we work" },
  { href: "/about", label: "About" },
] as const;

export const footerFirmLinks = [
  ...primaryNav,
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

/** @deprecated Use primaryNav. Kept so older imports still resolve. */
export const navLinks = primaryNav;

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
] as const;

export const stack = [
  "Snowflake",
  "dbt",
  "Python",
  "SQL",
  "AWS",
  "Airflow",
  "Tableau / Power BI",
];

export const proofPoints = [
  {
    value: "Written SOW",
    label: "A named workstream, named owners, and clear acceptance criteria.",
  },
  {
    value: "Your environment",
    label: "We work in your warehouse and your git. Nothing is taken home.",
  },
  {
    value: "Tested by default",
    label: "Every model ships with tests and documentation.",
  },
  {
    value: "Handoff that holds",
    label:
      "Runbooks and owners, so the work survives the next close and the next engineer.",
  },
];

export const dataChallenges = [
  {
    title: "Two revenues for one month",
    description:
      "Finance and another function report different revenue for the same month.",
  },
  {
    title: "Close slips into spreadsheets",
    description: "Close slips because someone reconciles it by hand.",
  },
  {
    title: "The board asks",
    description: "The board asks, and nobody will stand behind the answer.",
  },
  {
    title: "A dashboard moved",
    description:
      "A dashboard changed after a migration and nobody can say why.",
  },
  {
    title: "An audit is coming",
    description:
      "An audit is coming and the path from source to number is not written down.",
  },
  {
    title: "An AI pilot quotes a number",
    description: "An AI pilot quotes a number nobody has certified.",
  },
];

export const costOfWaiting = [
  {
    title: "Time lost each close",
    detail:
      "Analyst and finance hours go to reconciling the same disagreement by hand.",
  },
  {
    title: "Decisions on the wrong number",
    detail:
      "Close, commissions, or an operating call proceeds on a figure nobody has settled.",
  },
  {
    title: "Audit exposure",
    detail:
      "When the path from source to the filed number is not written down, the question arrives before the evidence.",
  },
  {
    title: "An AI effort on an uncertified metric",
    detail:
      "A copilot or agent quotes a number the business has not agreed is real.",
  },
];

export const buyerConcerns = [
  {
    role: "Controller or CFO",
    worry: "Close on a number you can defend.",
  },
  {
    role: "Head of Data",
    worry: "Stop refereeing dashboards.",
  },
  {
    role: "VP Operations",
    worry: "One metric that runs the floor.",
  },
  {
    role: "Delivery partner",
    worry: "A workstream a program manager can accept.",
  },
];

export type { ServiceLine } from "./offers";
export {
  allServices,
  getService,
  partnerService,
  serviceLines,
  servicePath,
} from "./offers";

export const homepageStart = [
  {
    name: "Metric review",
    detail:
      "Bring the two artifacts that disagree, the metric name, and the decision or deadline that depends on it. Thirty minutes. We say whether a diagnostic is the right next step.",
  },
  {
    name: "Written SOW",
    detail:
      "A named workstream under Havilah Technologies LLC. Scope, owners, and acceptance criteria.",
  },
  {
    name: "Delivery in your environment",
    detail:
      "Work lands in your warehouse and your git. Runbooks and handoff a program manager can accept.",
  },
];

export const engagementStart = [
  {
    name: "Fit call",
    detail:
      "Thirty minutes on your stack and the outcome you need. We tell you honestly if it is a fit.",
  },
  {
    name: "Written SOW",
    detail:
      "A named workstream under Havilah Technologies LLC. Scope, owners, and acceptance criteria.",
  },
  {
    name: "Delivery in your environment",
    detail:
      "Work lands in your warehouse and your git. Runbooks and handoff a program manager can accept.",
  },
];

export const deliveryPosture = [
  {
    title: "Your cloud and your repo",
    copy: "We work inside the client security boundary. We do not take a copy of production home.",
  },
  {
    title: "Scoped professional services",
    copy: "Named workstreams with a written SOW. Not an unscoped seat on Slack.",
  },
  {
    title: "Handoff that holds",
    copy: "Tests, documentation, and named owners so the work survives close and the next engineer.",
  },
];

export const engagementModels = [
  {
    name: "Project delivery",
    description:
      "Defined-scope engineering: pipelines, dbt models, Snowflake/AWS work, migrations, and transformation programs with a written SOW.",
  },
  {
    name: "Managed partnership",
    description:
      "Ongoing stewardship — new models, pipeline operations, or a metric family. Named hours and deliverables.",
  },
  {
    name: "Subcontract & teaming",
    description:
      "We join a prime or partner on a data workstream. Havilah Technologies LLC is the contracting entity.",
  },
  {
    name: "Contested Metric Diagnostic",
    description:
      "When the work is a number fight: one metric, two artifacts, about ten business days. Ruling, evidence SQL, ranked changes.",
  },
];

export const inquiryTypes = [
  "Contested Metric Diagnostic",
  "Data Engineering & Cloud Platforms",
  "Analytics & AI-Ready Data",
  "Governance & Data Quality",
  "Partner delivery",
  "Other",
];

export const clientProfile = {
  organizations:
    "Mid-market and enterprise teams with a warehouse in motion — and primes or partners who need a Snowflake/dbt/AWS specialist on a defined workstream.",
  environments:
    "ERP, CRM, files, and APIs into Snowflake or AWS; dbt or SQL marts; Tableau, Power BI, or Looker; AI features sitting on top of that estate.",
  leaders:
    "CFO, Controller, VP Finance, VP Operations, CDO, Head of Data, and partner / subcontract managers on delivery programs",
  sectorsNote:
    "Commercial and public-sector programs across financial services, healthcare, manufacturing, technology, retail, energy, logistics, and operations-heavy businesses.",
};

export const representativeSectors = [
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Technology",
  "Retail & Consumer",
  "Energy & Industrials",
  "Logistics & Transportation",
  "Public sector (via primes)",
];

export const methodology = {
  headline: "Assess → Design → Deliver → Govern",
  summary:
    "The same discipline whether we are standing up a pipeline, rebuilding dbt models, or governing a metric for close.",
  steps: [
    {
      name: "Assess",
      description:
        "Evaluate current state — systems, grain, jobs, gaps, and risk — with findings leadership can act on.",
    },
    {
      name: "Design",
      description:
        "Target architecture, correction path, and success criteria aligned to the business decision the data must support.",
    },
    {
      name: "Deliver",
      description:
        "Implement in their repo and warehouse: pipelines, models, tests, and documentation to specification.",
    },
    {
      name: "Govern",
      description:
        "Leave controls, monitoring, and ownership so the work holds at close and when an agent is pointed at the mart.",
    },
  ],
};

export const diagnosticHops = [
  { name: "Operational document", detail: "Invoice, job, contract — header vs line." },
  { name: "CDC / ingest", detail: "Deletes, late arrivals, what the pipeline actually kept." },
  { name: "Warehouse fact", detail: "Grain. The hop most fights actually live in." },
  { name: "Certified mart", detail: "The table both sides call source of truth." },
  { name: "BI calculation", detail: "Joins, filters, table calcs nobody remembers putting in." },
  { name: "Downstream", detail: "Bonus, branch scorecard, or the agent about to quote it." },
];

export const diagnosticOutputs = [
  "Ruling: which number is valid for which decision (close vs ops vs compensation).",
  "Break class: source, grain, mapping, late CDC, report logic, or a copied business rule.",
  "Evidence SQL — parameterized, they re-run.",
  "Ranked changes, hours, and owner.",
  "Do-not-touch list: bonus formulas, GL maps, CDC delete filters unless a named human approves.",
];

export const notThis = [
  {
    title: "Scoped SOWs",
    copy: "We take named workstreams under Havilah Technologies LLC — not unscoped extra hands.",
  },
  {
    title: "Engineering in your repo",
    copy: "Pipelines, dbt, and SQL land where your team already works. Deliverables are documents and code, not a slide theatre.",
  },
  {
    title: "Governed before AI",
    copy: "Agents and copilots quote certified grain. We do not point a model at three definitions of revenue.",
  },
];

export const craft = [
  "Snowflake",
  "dbt",
  "Python",
  "SQL",
  "AWS",
  "CDC / ELT",
  "Orchestration",
  "BI grain",
  "AI-ready marts",
];
