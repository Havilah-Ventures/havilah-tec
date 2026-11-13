import {
  buckets,
  collected,
  earnedTotal,
  invoices,
  jobs,
  largestBucket,
  money,
  unbilledTotal,
  unpaidTotal,
} from "@/lib/flowSample";

const kpis = [
  {
    color: "var(--fl-bad)",
    label: "Overdue invoices",
    value: money.format(unpaidTotal),
    note: `▲ ${invoices.length} accounts`,
  },
  {
    color: "var(--fl-warn)",
    label: "Done, not billed",
    value: money.format(unbilledTotal),
    note: `▲ ${jobs.length} jobs waiting`,
  },
  {
    color: "var(--fl-ok)",
    label: "Collected in November",
    value: money.format(collected),
    note: "✓ 31 invoices paid",
  },
];

export function FlowRevenueSummary() {
  return (
    <>
      <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-xl border border-[var(--fl-line)] bg-[var(--fl-card)] p-5">
          <p className="text-[13px] text-[var(--fl-muted)]">
            Earned but not yet collected
          </p>
          <p className="mt-1 font-display text-5xl leading-tight text-[var(--fl-figure)] sm:text-6xl">
            {money.format(earnedTotal)}
          </p>
          <p className="text-[13px] text-[var(--fl-muted)]">
            {invoices.length} invoices are unpaid and {jobs.length} completed
            jobs have not been billed.
          </p>
          <div className="mt-4 flex h-2 overflow-hidden rounded bg-[var(--fl-raised)]">
            <i
              className="block h-full"
              style={{
                width: `${(unpaidTotal / earnedTotal) * 100}%`,
                background: "var(--fl-bad)",
              }}
            />
            <i
              className="block h-full"
              style={{
                width: `${(unbilledTotal / earnedTotal) * 100}%`,
                background: "var(--fl-warn)",
              }}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-5 text-[13px]">
            <span className="flex items-center gap-2">
              <i className="block h-2.5 w-2.5 rounded-full bg-[var(--fl-bad)]" />
              Unpaid {money.format(unpaidTotal)}
            </span>
            <span className="flex items-center gap-2">
              <i className="block h-2.5 w-2.5 rounded-full bg-[var(--fl-warn)]" />
              Unbilled {money.format(unbilledTotal)}
            </span>
          </div>
        </div>
        <div className="rounded-xl border border-[var(--fl-line)] bg-[var(--fl-card)] p-5">
          <p className="text-sm font-semibold">Unpaid invoices by age</p>
          <div className="mt-4 space-y-3">
            {buckets.map((bucket) => (
              <div
                key={bucket.label}
                className="grid grid-cols-[72px_1fr_80px] items-center gap-3 text-[13px]"
              >
                <span>{bucket.label}</span>
                <div className="h-3.5 overflow-hidden rounded bg-[var(--fl-raised)]">
                  <i
                    className="block h-full rounded"
                    style={{
                      width: `${(bucket.value / largestBucket) * 100}%`,
                      background: bucket.color,
                    }}
                  />
                </div>
                <span className="text-right">{money.format(bucket.value)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="border-l-[3px] pl-4"
            style={{ borderColor: kpi.color }}
          >
            <p className="text-[13px] text-[var(--fl-muted)]">{kpi.label}</p>
            <p className="mt-0.5 text-2xl font-semibold">{kpi.value}</p>
            <p className="text-[13px] text-[var(--fl-muted)]">{kpi.note}</p>
          </div>
        ))}
      </div>
    </>
  );
}
