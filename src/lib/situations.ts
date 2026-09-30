export const situations = [
  {
    id: "two-revenues",
    service: "Contested Metric Diagnostic",
    href: "/services/diagnostic",
    title: "Two official revenues for the same month",
    situation:
      "Finance closes on one revenue figure. Sales or operations reports another for the same month. Both extracts refreshed overnight. The board pack cannot pick a side.",
    challenge:
      "The jobs are green, so nobody can call it a pipeline failure. The disagreement sits in grain, a filter, a copied business rule, or a delete the load did not keep. Close slips while someone reconciles it in a spreadsheet. Commissions or a forecast may already be using the other figure.",
    response:
      "The diagnostic takes that one metric and the two artifacts. It traces the number from the source system through the warehouse to the report and writes which figure is valid for which decision, with evidence SQL the team can re-run. The rebuild, if they want it, is a separate statement of work.",
  },
  {
    id: "feed-at-close",
    service: "Data Engineering & Cloud Platforms",
    href: "/services/platforms",
    title: "The warehouse is not ready when close starts",
    situation:
      "ERP, CRM, files, or an API are supposed to land in Snowflake or AWS before finance starts close. Some days the file is late, a delete never arrives, or the job fails quietly.",
    challenge:
      "Analysts backfill by hand. The warehouse bill climbs because models and warehouses were never sized for the real grain. The last engineer who understood the run is gone, and there is no runbook for what to rerun and what not to backfill.",
    response:
      "The engagement designs the path from those sources into the warehouse, builds the load and the dbt or SQL models with tests, and leaves the repository and a runbook in the client’s cloud and git. The team can operate the job after handoff.",
  },
  {
    id: "one-metric-layer",
    service: "Analytics & AI-Ready Data",
    href: "/services/analytics",
    title: "The report and the copilot do not share a number",
    situation:
      "Tableau or Power BI shows one revenue. A workbook shows another. A copilot or internal agent answers a leader’s question with a third figure, confidently.",
    challenge:
      "Each tool kept its own calculation. Nothing on the warehouse was certified as the version the business agreed to. The pilot looks advanced and still quotes a number nobody will defend.",
    response:
      "The work writes the metric once, builds the certified mart, and points reporting at that layer. The agent is allowed to quote only after that boundary is written. The chart tool stays. The private calculation does not.",
  },
  {
    id: "audit-path",
    service: "Governance & Data Quality",
    href: "/services/governance",
    title: "An auditor asks where the number came from",
    situation:
      "Close is filed from the warehouse. An internal audit, a regulated pack, or a new controller asks for the path from source to the figure. The answer is a diagram in a wiki and a thread in chat.",
    challenge:
      "Tests exist and nobody owns the threshold. Lineage is stale. Exceptions were decided in Slack and not written down. The number may be right, and the organization still cannot show it.",
    response:
      "The engagement puts reconciliation, tests, and a named owner on the paths that land in close. Lineage is something an engineer or an auditor can follow. The exception path is written down. The client keeps the evidence after we leave.",
  },
  {
    id: "named-workstream",
    service: "Partners",
    href: "/services/partnership",
    title: "The program has a client and no data workstream",
    situation:
      "A prime or delivery partner has won the platform work. The program still needs pipelines, models, or a Snowflake or AWS workstream built inside the client’s security boundary.",
    challenge:
      "An open request for extra hands does not give the program manager a scope, acceptance criteria, or a handoff. The work drifts into Slack, and the subcontract never becomes something the program can accept.",
    response:
      "Havilah Technologies LLC takes a named workstream under a written statement of work, in the prime’s repository and cloud. Status and artifacts are what a program manager can file. Expansion is a change order, not silent staff.",
  },
] as const;
