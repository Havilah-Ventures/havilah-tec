export const siteConfig = {
  name: "Havilah Technologies",
  legalName: "Havilah Technologies LLC",
  parentName: "Havilah Ventures",
  parentLegalName: "Havilah Ventures LLC",
  parentUrl: "https://www.haviventures.com",
  tagline: "Data engineering, analytics, and AI-ready platforms — delivered under a written SOW.",
  heroSubline:
    "We design, build, and govern the warehouse on Snowflake, dbt, and AWS. Pipelines, transformation, analytics, and named workstreams for commercial buyers and delivery partners.",
  operatingFocus: "Data Engineering, Analytics & AI",
  serviceTagline:
    "From source systems to certified marts: engineering, transformation, cloud platforms, analytics, governance, and AI-ready data.",
  email: "info@havilahtec.com",
  url: "https://www.havilahtec.com",
  description:
    "Havilah Technologies LLC delivers data engineering, dbt transformation, Snowflake and AWS platforms, analytics, AI-ready data, and data quality programs. A Havilah Ventures company.",
};

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/approach", label: "How we work" },
  { href: "/contact", label: "Contact" },
] as const;

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
  { value: "Your environment", label: "Delivery in the client warehouse and git — not a copy taken home." },
  { value: "Written SOW", label: "Named workstream, named owners, documented handoff." },
  { value: "Modern stack", label: "Snowflake, dbt, Python, SQL, and AWS used as engineering." },
  { value: "Governed grain", label: "Certified marts before reporting or an agent quotes a number." },
];

export const dataChallenges = [
  {
    title: "Pipelines that cannot be trusted at close",
    description:
      "Jobs fail, incremental models drift, and CDC drops deletes. Finance cannot defend the number that lands in the board pack.",
  },
  {
    title: "dbt estates that grew without grain",
    description:
      "Hundreds of models, three definitions of revenue, and no owner of the hop between certified and the workbook.",
  },
  {
    title: "Warehouse cost without performance",
    description:
      "Snowflake and AWS bills climb because queries, materializations, and clustering were never designed for the actual grain.",
  },
  {
    title: "Conflicting metrics across systems",
    description:
      "Finance, operations, and leadership rely on different numbers — both dashboards refreshed last night, nobody yields.",
  },
  {
    title: "AI stalled on messy data",
    description:
      "Cortex, copilots, and agents pick a join path and answer with confidence. They do not flag that two revenues already exist.",
  },
  {
    title: "Programs that need a specialist subcontractor",
    description:
      "Primes and mid-market firms win the platform deal, then need Snowflake, dbt, and AWS engineering that is scoped — not an open ticket queue.",
  },
];

export type ServiceLine = {
  id: string;
  name: string;
  navHint: string;
  /** Catalog card. */
  summary: string;
  /** Hero: what we help the buyer do. */
  lead: string;
  overview: string[];
  howWeHelp: string[];
  typicalWork: { name: string; detail: string }[];
  capabilities: string[];
  when: string;
  outcomes: string[];
  related: string[];
};

export function servicePath(id: string) {
  return `/services/${id}`;
}

export function getService(id: string) {
  return serviceLines.find((line) => line.id === id);
}

export const serviceLines: ServiceLine[] = [
  {
    id: "engineering",
    name: "Data Engineering & Pipelines",
    navHint: "ETL/ELT, CDC, orchestration",
    summary:
      "We design and build the ingest, CDC, and orchestration that move ERP, CRM, files, and APIs into a warehouse operations can run.",
    lead: "We help you get operational data out of source systems and into Snowflake or AWS on a schedule the business can defend — not a brittle job that only the last engineer understands.",
    overview: [
      "Most reporting and AI failures start before the warehouse. Files land late, CDC drops deletes, APIs change shape, and orchestration hides the failure until close. Havilah Technologies LLC designs and delivers the pipelines that sit between those sources and a warehouse your team can operate.",
      "We work in your cloud and your git. The work is a named workstream: which sources, which grain, which SLA, and who owns the runbook when we leave.",
    ],
    howWeHelp: [
      "Map source systems (ERP, CRM, files, APIs, events) to a landing and staging design your warehouse can actually load.",
      "Build batch and near-real-time ingest, including change data capture where the source supports it.",
      "Stand up orchestration — Airflow, dbt Cloud jobs, or AWS-native scheduling — with alerting that fails loudly.",
      "Document recovery: what to rerun, what not to backfill, and who is on the page when a job breaks at close.",
      "Hand over runbooks in your environment so the pipeline is yours, not a black box we operate from the outside.",
    ],
    typicalWork: [
      {
        name: "Source-to-warehouse design",
        detail:
          "Inventory of systems, extract patterns, landing zones, and a written ingest architecture before code is the first deliverable.",
      },
      {
        name: "Pipeline build",
        detail:
          "ELT/ETL implementation for priority domains — customers, orders, inventory, finance — with tests on volume, freshness, and keys.",
      },
      {
        name: "CDC and incremental loads",
        detail:
          "Correct handling of inserts, updates, and deletes so the warehouse matches the operational system at close, not last Tuesday.",
      },
      {
        name: "Reliability and operations",
        detail:
          "Orchestration, alerting, SLAs, and runbooks so a failed job is an incident with an owner — not a surprise in the board pack.",
      },
    ],
    capabilities: [
      "ETL / ELT from ERP, CRM, files, APIs, and event streams",
      "Batch and near-real-time ingest, including CDC",
      "Orchestration (Airflow, dbt Cloud jobs, AWS-native scheduling)",
      "Pipeline reliability, alerting, and runbooks in your environment",
    ],
    when: "Source systems exist, reporting is late or brittle, and no one owns the path from ERP, files, or APIs into the warehouse.",
    outcomes: [
      "Documented ingest paths with named owners",
      "Orchestration that fails loudly and recovers cleanly",
      "CDC behavior you can explain at close",
      "Runbooks in your environment",
    ],
    related: ["dbt", "cloud", "governance"],
  },
  {
    id: "dbt",
    name: "dbt, SQL & Transformation",
    navHint: "Models, tests, grain",
    summary:
      "We build and refactor the dbt and SQL layer that turns landings into certified marts finance and operations can both use.",
    lead: "We help you turn raw landings into tested, documented marts — with grain, tests, and owners — so a new engineer can follow the model and finance can defend the number.",
    overview: [
      "A warehouse without a modeling layer becomes a pile of SQL. dbt estates without grain become three definitions of revenue. We design, build, and refactor transformation so certified tables have a meaning a controller can restate.",
      "We use dbt Core or dbt Cloud in your repo and CI. We do not require a full rewrite when a scoped refactor of the domain that is breaking close will do.",
    ],
    howWeHelp: [
      "Establish or repair grain: what one row means in the fact, and which keys the mart is allowed to join.",
      "Build incremental models, snapshots, and tests that fail on the real business rule — not only on not-null.",
      "Document models, exposures, and contracts so Tableau, Power BI, or an agent cannot silently invent a fourth definition.",
      "Refactor inherited dbt projects: packages, CI, naming, and the models that actually feed close.",
      "Leave a modeling standard your team can extend without calling us for every new column.",
    ],
    typicalWork: [
      {
        name: "Modeling standard",
        detail:
          "Layers (staging, intermediate, marts), naming, tests, and ownership so the project is a system, not a folder of SQL.",
      },
      {
        name: "Certified marts",
        detail:
          "Domain marts — finance, operations, commercial — with tests and documentation aligned to how the business decides.",
      },
      {
        name: "Incremental strategy",
        detail:
          "Insert/overwrite, merge, and snapshot patterns matched to volume and late-arriving data, not a default that burns credits.",
      },
      {
        name: "Estate refactor",
        detail:
          "Triage of an inherited dbt project: what to keep, what to isolate, what to rebuild, with hours attached.",
      },
    ],
    capabilities: [
      "dbt Core and dbt Cloud modeling, packages, and CI",
      "Incremental strategies, snapshots, and grain design",
      "Tests, documentation, and exposure contracts",
      "Scoped refactor of inherited models — full rewrite only when the work requires it",
    ],
    when: "dbt or a SQL mart already exists, definitions have forked, or a new domain needs models finance can defend.",
    outcomes: [
      "Certified marts with tests that fail on the real grain",
      "Incremental and snapshot strategies matched to the workload",
      "Documentation a new engineer can follow",
      "A refactor plan that does not require boiling the ocean",
    ],
    related: ["engineering", "analytics", "governance"],
  },
  {
    id: "cloud",
    name: "Cloud Data Platforms",
    navHint: "Snowflake and AWS",
    summary:
      "We design, migrate, and tune Snowflake and AWS so the platform matches the workload — roles, performance, cost, and security.",
    lead: "We help you land on Snowflake and AWS as an operating platform: warehouse layout, roles, data paths, and a migration you can run in parallel — not a weekend cutover.",
    overview: [
      "A cloud warehouse that was stood up for a demo is not a platform. Roles are shared, compute is a single warehouse, S3 paths are tribal knowledge, and the bill does not match the grain of the work. We design and operationalize Snowflake and AWS so security, finance, and engineering can all use the same estate.",
      "Migrations include a parallel run. Cost and performance are engineering outcomes, not a product pitch.",
    ],
    howWeHelp: [
      "Design Snowflake accounts, databases, schemas, warehouses, and roles that match how teams actually work.",
      "Build AWS data paths — S3, Glue, Lambda, IAM — that security will approve, including GovCloud-aware delivery where required.",
      "Plan and execute warehouse migrations with a parallel run, validation, and a cutover a program manager can accept.",
      "Tune clustering, warehouses, and materializations so compute follows the workload instead of a default XL.",
      "Leave platform documentation: who can create objects, who can share, and how cost is reviewed.",
    ],
    typicalWork: [
      {
        name: "Platform design",
        detail:
          "Target architecture for Snowflake and/or AWS: environments, roles, storage, and the boundary with source systems.",
      },
      {
        name: "Stand-up and hardening",
        detail:
          "Account configuration, network and IAM, object hierarchy, and the first landing and compute pattern.",
      },
      {
        name: "Migration",
        detail:
          "Source-to-target mapping, parallel run, reconciliation, and cutover — from legacy warehouse or another cloud.",
      },
      {
        name: "Performance and cost",
        detail:
          "Warehouse sizing, clustering, query hygiene, and a review cadence so the bill is explainable.",
      },
    ],
    capabilities: [
      "Snowflake warehouse design, roles, sharing, and performance",
      "AWS data paths: S3, Glue, Lambda, IAM, and GovCloud-aware delivery",
      "Warehouse migrations with parallel-run cutovers",
      "Cost and compute hygiene as an engineering outcome",
    ],
    when: "You are landing on Snowflake or AWS, migrating off legacy, or paying for compute that does not match the work.",
    outcomes: [
      "A warehouse layout roles and sharing can actually use",
      "AWS data paths security will approve",
      "Migration with a parallel run and validation",
      "Compute and cost that follow the workload",
    ],
    related: ["engineering", "dbt", "partnership"],
  },
  {
    id: "analytics",
    name: "Analytics Architecture & BI",
    navHint: "Metrics, reporting, BI grain",
    summary:
      "We define and deliver the metric layer so Tableau, Power BI, or Looker reports the warehouse — not a fourth version of revenue.",
    lead: "We help you put reporting on certified grain: metric definitions, semantic structure, and BI workbooks that finance and operations can both use.",
    overview: [
      "Dashboards are not an architecture. When the warehouse is live and Tableau still calculates its own revenue, the argument moves from the pipeline to the workbook. We design the metric and reporting layer so BI is a consumer of certified tables — not a second warehouse.",
      "The work is definitions, grain, and the path from mart to workbook. We do not sell a visualization restyle as a data program.",
    ],
    howWeHelp: [
      "Write metric definitions aligned to warehouse grain — what the number includes, excludes, and is valid for.",
      "Design a semantic layer or governed metric table so tools do not fork a fourth definition.",
      "Align Tableau, Power BI, or Looker extracts and calculations to certified marts.",
      "Structure reporting for finance and operations without duplicating the model in the BI tool.",
      "Set a self-service boundary: which fields analysts may combine, and which they may not.",
    ],
    typicalWork: [
      {
        name: "Metric catalog",
        detail:
          "Named metrics, owners, grain, and the certified table each report is allowed to use.",
      },
      {
        name: "Reporting architecture",
        detail:
          "How workbooks, extracts, and semantic models connect to the warehouse without rewriting business logic.",
      },
      {
        name: "BI alignment",
        detail:
          "Repair of Tableau, Power BI, or Looker calculations that silently disagree with the mart.",
      },
      {
        name: "Self-service guardrails",
        detail:
          "Published datasets and permissions so analysts can explore without forking close.",
      },
    ],
    capabilities: [
      "Metric definitions and semantic-layer design",
      "Reporting infrastructure for finance and operations",
      "Tableau, Power BI, and Looker aligned to warehouse grain",
      "Self-service foundations that do not fork a fourth definition",
    ],
    when: "The warehouse is there, but Tableau, Power BI, or Looker still invents a fourth definition of the same number.",
    outcomes: [
      "Metric definitions aligned to warehouse grain",
      "Reporting finance and operations can both use",
      "BI calculations that stop rewriting certified tables",
      "Self-service that does not fork the model",
    ],
    related: ["dbt", "diagnostic", "ai"],
  },
  {
    id: "ai",
    name: "AI-Ready Data",
    navHint: "Governed grain before an agent quotes a number",
    summary:
      "We prepare certified marts, features, and semantic context so warehouse AI and copilots quote numbers the business has already ruled.",
    lead: "We help you make the warehouse safe for AI: governed inputs, documented grain, and a clear gate for what a copilot or agent is allowed to quote.",
    overview: [
      "Warehouse AI, Cortex-class tools, and internal agents will pick a join path and answer with confidence. They will not flag that two revenues already exist. We prepare the data layer first — marts, features, semantic context — then the go-live rule for what the model may say.",
      "This is not a model-training engagement. It is the data work that has to be true before anyone points an agent at the board pack.",
    ],
    howWeHelp: [
      "Identify which certified marts and features an agent or copilot is allowed to read.",
      "Document grain and semantic context so the tool is not guessing the join.",
      "Set a go-live gate: which metrics may be quoted, and which require a human.",
      "Build Python services around the warehouse where scoring, orchestration, or APIs are required.",
      "Refuse to point a model at unresolved duplicate definitions of the same business number.",
    ],
    typicalWork: [
      {
        name: "AI-ready marts",
        detail:
          "Selection and hardening of tables and features that are clean enough for retrieval or Cortex-class tools.",
      },
      {
        name: "Semantic context",
        detail:
          "Views, descriptions, and grain notes the tool can use instead of inventing a join.",
      },
      {
        name: "Go-live gate",
        detail:
          "A written list of what the model may quote, for whom, and what happens when it cannot.",
      },
      {
        name: "Warehouse-adjacent services",
        detail:
          "Python APIs or scoring jobs that sit next to Snowflake/AWS when the use case needs them.",
      },
    ],
    capabilities: [
      "AI-ready marts, features, and documented grain",
      "Semantic views and governed context for Cortex-class tools",
      "Agent go-live gates: what the model is allowed to quote",
      "Python services around the warehouse (scoring, orchestration, APIs)",
    ],
    when: "Leadership wants a copilot or internal agent on certified data, and the team cannot yet say which revenue is real.",
    outcomes: [
      "Marts and features an agent is allowed to read",
      "Documented grain and semantic context",
      "A go-live gate for what the model may quote",
      "Python around the warehouse where scoring or APIs are required",
    ],
    related: ["dbt", "governance", "analytics"],
  },
  {
    id: "diagnostic",
    name: "Contested Metric Diagnostic",
    navHint: "When two official numbers both claim truth",
    summary:
      "We trace one disputed metric from source through the warehouse into the report and leave a written ruling plus evidence SQL your team re-runs.",
    lead: "We help you settle a number fight: one metric, two disagreeing artifacts, a written ruling, and evidence SQL a controller can re-run — typically in about ten business days.",
    overview: [
      "When jobs are green and both dashboards refreshed last night, the problem is not “the pipeline failed.” It is grain, a filter, a copied business rule, or CDC that dropped a delete. We follow one metric from the operational document through ingest, fact, mart, and BI until the break is named.",
      "The diagnostic is a scoped SOW. Implementation of the ranked fixes is a separate engineering engagement if you want it.",
    ],
    howWeHelp: [
      "Take one metric and two artifacts — report, extract, bonus file, or an agent answer — as the intake.",
      "Trace the number from operational document through CDC, warehouse fact, certified mart, and BI calculation.",
      "Issue a written ruling: which number is valid for which decision (close, operations, compensation).",
      "Deliver parameterized evidence SQL your team re-runs.",
      "Rank the fixes with hours and owners, plus a do-not-touch list for bonus formulas, GL maps, and CDC filters.",
    ],
    typicalWork: [
      {
        name: "Intake",
        detail:
          "Metric name, two artifacts, and access to warehouse, git, and the workbook.",
      },
      {
        name: "Trace",
        detail:
          "Document → ingest → fact → mart → BI → downstream (bonus, scorecard, or agent).",
      },
      {
        name: "Ruling",
        detail:
          "Which figure is valid for which decision, and the break class (source, grain, mapping, CDC, report logic, or copied rule).",
      },
      {
        name: "Handoff",
        detail:
          "Evidence SQL, ranked changes, and the list of objects that must not be edited without a named approver.",
      },
    ],
    capabilities: [
      "Trace from operational document through CDC, fact, mart, and BI",
      "Ruling: which number is valid for close, operations, or compensation",
      "Parameterized evidence SQL your team re-runs",
      "Ranked fixes and a do-not-touch list",
    ],
    when: "The jobs are green, both dashboards refreshed, and nobody will yield — close, commissions, a branch, or an agent is about to pick a side.",
    outcomes: [
      "A written ruling: which number is valid for which decision",
      "Evidence SQL your team re-runs",
      "Ranked changes with hours and owners",
      "A do-not-touch list for bonus, GL maps, and CDC filters",
    ],
    related: ["analytics", "governance", "dbt"],
  },
  {
    id: "governance",
    name: "Data Integrity, Quality & Governance",
    navHint: "Tests, lineage, ownership, audit",
    summary:
      "We put tests, lineage, owners, and reconciliation in place so accuracy holds after delivery — at close, audit, and in regulated programs.",
    lead: "We help you keep the warehouse accurate after the first delivery: quality tests, lineage, named owners, and evidence finance can show an auditor.",
    overview: [
      "Delivery without controls decays. Tests live in a wiki, lineage is a diagram no one updates, and exceptions hide in Slack. We install the quality and ownership layer that makes certified tables stay certified.",
      "This is operational governance — reconciliation, monitors, and owners — not a policy binder. Close, audit, and regulated programs need evidence, not a framework slide.",
    ],
    howWeHelp: [
      "Design reconciliation between source, warehouse, and the report finance actually files.",
      "Put tests and monitors on the paths that break — freshness, uniqueness, accepted values, and volume.",
      "Assign named owners to marts and pipelines, with a path for exceptions that does not live only in chat.",
      "Produce lineage and documentation a new engineer or auditor can follow.",
      "Leave evidence packs suitable for close, internal audit, or a regulated program.",
    ],
    typicalWork: [
      {
        name: "Quality framework",
        detail:
          "Test suite and monitors on ingest and marts, with thresholds and owners.",
      },
      {
        name: "Reconciliation",
        detail:
          "Cross-system checks for the metrics that land in close or a regulator pack.",
      },
      {
        name: "Lineage and ownership",
        detail:
          "Documented path from source to report, with a named human for each certified table.",
      },
      {
        name: "Exception handling",
        detail:
          "How breaks are raised, who decides, and what gets written down — not lost in Slack.",
      },
    ],
    capabilities: [
      "Cross-system reconciliation and financial-truth work",
      "Quality frameworks, monitoring, and exception handling",
      "Lineage, documentation, and named owners",
      "Evidence for close, audit, and regulated programs",
    ],
    when: "Delivery happened, but quality, lineage, and named owners did not. Close, audit, or a regulated program needs evidence.",
    outcomes: [
      "Reconciliation finance can show an auditor",
      "Tests and monitors on the paths that actually break",
      "Lineage and owners, not an unmaintained wiki",
      "Exception handling that does not hide in Slack",
    ],
    related: ["engineering", "dbt", "diagnostic"],
  },
  {
    id: "partnership",
    name: "Partner & Subcontract Delivery",
    navHint: "Named workstreams for primes and partners",
    summary:
      "We deliver a named Snowflake, dbt, or AWS workstream under subcontract — in your security boundary, with a handoff a program manager can accept.",
    lead: "We help primes and delivery partners fill a defined data workstream: pipelines, models, migration, or platform engineering under Havilah Technologies LLC — not an open ticket queue.",
    overview: [
      "Programs win on platform and still need a specialist to build the data path. We subcontract as Havilah Technologies LLC on a written SOW: the workstream, the environment, the acceptance criteria, and the handoff.",
      "We work in your repo and your cloud. NAICS 541511 / 541512-aligned professional services. We are not extra unscoped hands on Slack.",
    ],
    howWeHelp: [
      "Scope a named workstream — pipeline, dbt models, Snowflake/AWS, migration, or diagnostic — with hours and deliverables.",
      "Contract and invoice as Havilah Technologies LLC, the operating company on the subcontract.",
      "Deliver inside the prime or partner security boundary, in their git and their cloud.",
      "Align to program governance: status, artifacts, and a documented handoff a program manager can accept.",
      "Stay on the named scope. Expansion is a change order, not silent staff augmentation.",
    ],
    typicalWork: [
      {
        name: "Workstream SOW",
        detail:
          "Statement of work the prime can put on the program: scope, environment, acceptance, and entity.",
      },
      {
        name: "Embedded delivery",
        detail:
          "Engineering in their repo — pipelines, models, or platform — against their standards and access model.",
      },
      {
        name: "Teaming",
        detail:
          "Participation on data, cloud, and analytics programs where a specialist workstream is the gap.",
      },
      {
        name: "Handoff",
        detail:
          "Documentation, tests, and owners so the program does not depend on a single subcontracted mailbox.",
      },
    ],
    capabilities: [
      "SOW delivery on a named workstream (pipeline, models, migration, diagnostic)",
      "NAICS 541511 / 541512-aligned professional services",
      "Teaming with primes on data, cloud, and analytics programs",
      "Delivery in their repo and security boundary, with documented handoff",
    ],
    when: "A prime or partner won the program and needs a named data workstream delivered under subcontract, in their security boundary.",
    outcomes: [
      "SOW on a named workstream, not an open ticket queue",
      "Havilah Technologies LLC as the contracting entity",
      "Delivery in their repo and their cloud",
      "Documented handoff a program manager can accept",
    ],
    related: ["engineering", "cloud", "dbt"],
  },
];

/** Home and about still reference a short list; full catalog is serviceLines. */
export const practiceAreas = serviceLines.filter((line) =>
  ["engineering", "dbt", "cloud"].includes(line.id),
);

export const serviceGroups = [
  {
    id: "build",
    name: "Build",
    summary: "Pipelines, models, platforms, and reporting infrastructure.",
    ids: ["engineering", "dbt", "cloud", "analytics"],
  },
  {
    id: "govern",
    name: "Govern",
    summary: "Quality, AI-ready grain, and metric integrity.",
    ids: ["ai", "governance", "diagnostic"],
  },
  {
    id: "deliver",
    name: "Deliver",
    summary: "Named workstreams for primes and commercial partners.",
    ids: ["partnership"],
  },
] as const;

export function servicesInGroup(groupId: (typeof serviceGroups)[number]["id"]) {
  const group = serviceGroups.find((item) => item.id === groupId);
  if (!group) return [];
  return group.ids
    .map((id) => getService(id))
    .filter((line): line is ServiceLine => Boolean(line));
}

export const engagementStart = [
  {
    name: "Discovery call",
    detail:
      "Thirty minutes. Stack, systems, and the outcome you need. We say if it is a fit.",
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
  "Data engineering / pipelines",
  "dbt & transformation",
  "Snowflake / AWS platform",
  "Analytics / BI",
  "AI-ready data",
  "Data quality & governance",
  "Contested metric diagnostic",
  "Subcontract / partner delivery",
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
