export type FlowTheme = "dark" | "light";

export const flowThemes: Record<FlowTheme, Record<string, string>> = {
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

export const invoices = [
  { id: "INV-2041", client: "Desert Ridge Dental", amount: 12400, overdue: 47, last: "Oct 2" },
  { id: "INV-2057", client: "Copper State Logistics", amount: 28750, overdue: 62, last: "Sep 21" },
  { id: "INV-2063", client: "Saguaro Property Group", amount: 9180, overdue: 18, last: "Oct 29" },
  { id: "INV-2070", client: "Gilbert Family Clinic", amount: 15600, overdue: 9, last: "Nov 4" },
  { id: "INV-2018", client: "Mesa Cold Storage", amount: 21300, overdue: 96, last: "Aug 30" },
  { id: "INV-2082", client: "Sonoran Hospitality", amount: 7420, overdue: 3, last: "Nov 10" },
  { id: "INV-2029", client: "Chandler Schools Co-op", amount: 18900, overdue: 34, last: "Oct 14" },
];

export const jobs = [
  { id: "JOB-7712", client: "Desert Ridge Dental", job: "Rooftop unit replacement", amount: 18400, waiting: 21, done: "Oct 23" },
  { id: "JOB-7730", client: "Copper State Logistics", job: "Dock cooling repair", amount: 9650, waiting: 14, done: "Oct 30" },
  { id: "JOB-7741", client: "Saguaro Property Group", job: "Quarterly maintenance (6 sites)", amount: 12300, waiting: 9, done: "Nov 4" },
  { id: "JOB-7755", client: "Mesa Cold Storage", job: "Compressor diagnostics", amount: 6800, waiting: 6, done: "Nov 7" },
  { id: "JOB-7760", client: "Sonoran Hospitality", job: "Kitchen exhaust install", amount: 14200, waiting: 4, done: "Nov 9" },
];

export const followUps = [
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

export const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const unpaidTotal = invoices.reduce((sum, row) => sum + row.amount, 0);
export const unbilledTotal = jobs.reduce((sum, row) => sum + row.amount, 0);
export const earnedTotal = unpaidTotal + unbilledTotal;
export const collected = 96400;

export const buckets = [
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
export const largestBucket = Math.max(...buckets.map((bucket) => bucket.value));
