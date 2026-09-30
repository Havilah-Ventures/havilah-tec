export const insights = [
  {
    slug: "two-reports-disagree",
    title: "Why two reports disagree on the same metric",
    description:
      "When both dashboards refreshed and the numbers still differ, the break is usually upstream of the chart.",
    paragraphs: [
      "Two official reports can both be current and still disagree. The jobs ran. The extracts landed. Finance and another function are looking at the same month and not the same figure.",
      "The break is rarely the chart tool. It is the level of detail — an order total versus the line items — a filter, a copied business rule, or a delete the load did not keep. Each side can show a query that returns their number.",
      "Settling it means tracing one metric from the source system through the warehouse to the report, then writing which figure is valid for which decision. A second dashboard does not do that.",
    ],
  },
  {
    slug: "certified-mart",
    title: "What a certified mart means",
    description:
      "A certified mart is the table both sides are allowed to call the source of truth.",
    paragraphs: [
      "A mart is certified when the business has agreed what the number means, the grain is tested, and a named person owns it. A table that merely refreshed last night is not certified.",
      "Reports and workbooks should read that table. When each tool keeps its own calculation, the organization has more than one version of the metric, even if every job is green.",
      "Certification is a decision plus tests and an owner. It is not a label in a slide.",
    ],
  },
  {
    slug: "before-an-agent-quotes",
    title: "Prepare the number before an agent quotes it",
    description:
      "A copilot repeats the join it finds. It does not notice that two revenues already exist.",
    paragraphs: [
      "An agent or copilot will answer with confidence from whatever table it can read. If two revenues already exist, it will not flag the disagreement.",
      "The preparation is the same work the business needed before the pilot: one metric definition, a certified mart, and a written boundary for what the tool may quote.",
      "Pointing a model at an uncertified warehouse does not settle the number. It publishes the argument faster.",
    ],
  },
] as const;

export function getInsight(slug: string) {
  return insights.find((post) => post.slug === slug);
}
