export const situations = [
  {
    id: "unbilled-work",
    service: "Havilah Flow",
    href: "/services/havilah-flow",
    title: "The job is done, and the invoice never went out",
    situation:
      "A crew marks the job complete in the field-service app. The accounting system has no invoice for it. Overdue accounts are tracked in a spreadsheet, or in the head of the one person who chases payments.",
    challenge:
      "Nobody has a single list of what was earned, what was billed, and what is still unpaid. Completed work slips through between two systems. Reminders go out late, or not at all, because following up depends on someone remembering.",
    response:
      "The pilot starts with a conversation about how invoices and completed work are tracked today. With written authorization, it looks at a sample and labels each finding confirmed, suspected, or needing verification. A person approves any reminder before it is sent.",
  },
  {
    id: "two-revenues",
    service: "Contested Metric Diagnostic",
    href: "/services/diagnostic",
    title: "Two official revenues for the same month",
    situation:
      "Finance closes on one revenue figure. Sales or operations reports another for the same month. Both extracts refreshed overnight. The board pack cannot pick a side.",
    challenge:
      "The jobs are green, so nobody can call it a pipeline failure. The disagreement sits in the level of detail — an order total versus the line items — or in a filter, a copied business rule, or a delete the load did not keep. Close slips while someone reconciles it in a spreadsheet. Commissions or a forecast may already be using the other figure.",
    response:
      "The diagnostic takes that one metric and the two artifacts. It traces the number from the source system through the warehouse to the report and writes which figure is valid for which decision, with evidence SQL the team can re-run. The rebuild, if they want it, is a separate statement of work.",
  },
  {
    id: "feed-at-close",
    service: "Data Engineering & Intelligence",
    href: "/services/data-engineering",
    title: "The warehouse is not ready when close starts",
    situation:
      "ERP, CRM, files, or an API are supposed to land in Snowflake or AWS before finance starts close. Some days the file is late, a delete never arrives, or the job fails quietly.",
    challenge:
      "Analysts backfill by hand. The warehouse bill climbs because models and warehouses were never sized for the actual level of detail. The last engineer who understood the run is gone, and there is no runbook for what to rerun and what not to backfill.",
    response:
      "The engagement designs the path from those sources into the warehouse, builds the load and the dbt or SQL models with tests, and leaves the repository and a runbook in the client’s cloud and git. The team can operate the job after handoff.",
  },
  {
    id: "one-metric-layer",
    service: "Data Engineering & Intelligence",
    href: "/services/data-engineering",
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
    service: "Data Engineering & Intelligence",
    href: "/services/data-engineering",
    title: "An auditor asks where the number came from",
    situation:
      "Close is filed from the warehouse. An internal audit, a regulated pack, or a new controller asks for the path from source to the figure. The answer is a diagram in a wiki and a thread in chat.",
    challenge:
      "Tests exist and nobody owns the threshold. Lineage is stale. Exceptions were decided in Slack and not written down. The number may be right, and the organization still cannot show it.",
    response:
      "The engagement puts reconciliation, tests, and a named owner on the paths that land in close. Lineage is something an engineer or an auditor can follow. The exception path is written down. The client keeps the evidence after we leave.",
  },
  {
    id: "manual-handoff",
    service: "AI Automation & Digital Solutions",
    href: "/services/ai-automation",
    title: "Someone re-keys the same record every day",
    situation:
      "An order, an intake form, or a status update arrives in one system and has to be typed into another. One person does it by hand, every day, and the work stops when that person is out.",
    challenge:
      "Copying by hand introduces errors nobody catches until a customer or a report does. Buying another tool would only add a third place where the record lives. The team wants the step automated and still wants control over what changes.",
    response:
      "The engagement automates that one named workflow between the systems already in use. A person approves any step that changes a record. The workflow is documented so the team can run it, adjust it, or switch it off.",
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
