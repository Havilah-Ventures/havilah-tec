export const siteConfig = {
  name: "Havilah Technologies",
  legalName: "Havilah Technologies LLC",
  parentName: "Havilah Ventures",
  parentLegalName: "Havilah Ventures LLC",
  parentUrl: "https://www.haviventures.com",
  homeTitle:
    "Data, Automation, and Revenue Intelligence | Havilah Technologies",
  tagline: "Engineering intelligence. Automating business. Unlocking revenue.",
  heroEyebrow: "Havilah Technologies",
  heroSubline:
    "Havilah Technologies helps businesses trust their data, connect the systems they already run, and see revenue those systems are missing.",
  operatingFocus: "Data, automation, and revenue intelligence",
  serviceTagline:
    "Three lines: Havilah Flow for revenue a service business has already earned, data engineering on Snowflake, dbt, and AWS, and automation of a named workflow.",
  email: "info@havilahtec.com",
  url: "https://www.havilahtec.com",
  description:
    "Havilah Technologies helps businesses trust their data, connect the systems they already run, and see revenue those systems are missing. Discuss a business challenge.",
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
    value: "Named scope",
    label:
      "A written statement of work for a service, or a conversation and an authorized sample for Havilah Flow.",
  },
  {
    value: "Your systems",
    label:
      "We work with the warehouse, the applications, and the records you already run.",
  },
  {
    value: "A person decides",
    label:
      "A recommendation waits for a person when the step would change a record or send a message.",
  },
  {
    value: "Handoff that holds",
    label:
      "Professional services leave tests, documentation, and a named owner.",
  },
];

export type { ServiceLine } from "./offers";
export {
  allServices,
  diagnosticService,
  getService,
  kindLabel,
  partnerService,
  serviceLines,
  servicePath,
} from "./offers";

export const engagementStart = [
  {
    name: "A conversation",
    detail:
      "The business challenge, the systems, and the outcome. We say whether it is Havilah Flow, a data engagement, or a named workflow.",
  },
  {
    name: "A written scope",
    detail:
      "Professional services get a statement of work. Havilah Flow starts with a conversation about an authorized sample.",
  },
  {
    name: "Work in your environment",
    detail:
      "Data work lands in your warehouse and your git. Automation lands in the systems you already run. Flow reads records you authorize.",
  },
];

export const deliveryPosture = [
  {
    title: "Your environment",
    copy: "Data work stays in your warehouse and your git. Automation stays in the systems you already run. A Flow sample is used only with written authorization.",
  },
  {
    title: "Scoped work",
    copy: "Professional services are a named statement of work. Havilah Flow is a pilot conversation, not an open seat.",
  },
  {
    title: "Handoff that holds",
    copy: "Services leave tests, documentation, and a named owner. A step that changes a record or sends a message waits for a person.",
  },
];

export const engagementModels = [
  {
    name: "Havilah Flow",
    description:
      "An emerging pilot for service businesses. A conversation about unpaid invoices and completed work that has not been billed, then an authorized sample if you want one.",
  },
  {
    name: "Data engineering",
    description:
      "Pipelines, dbt, Snowflake or AWS, a metric layer, and governance, under a written statement of work in your warehouse and your git.",
  },
  {
    name: "Contested Metric Diagnostic",
    description:
      "When two official numbers disagree: one metric, two artifacts, about ten business days. Ruling, evidence SQL, ranked changes.",
  },
  {
    name: "AI automation",
    description:
      "One named workflow on the applications you already use. A person approves the step that changes a record or sends a message.",
  },
  {
    name: "Subcontract and teaming",
    description:
      "A prime hires a named data workstream. Havilah Technologies LLC is the contracting entity.",
  },
];

export const inquiryTypes = [
  "Havilah Flow",
  "Data Engineering & Intelligence",
  "Contested Metric Diagnostic",
  "AI Automation & Digital Solutions",
  "Partner delivery",
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
