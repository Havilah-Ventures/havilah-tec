# Havilah Technologies LLC — Website

Public site for the IT operating company of Havilah Ventures LLC.

**Live:** [https://www.havilahtec.com](https://www.havilahtec.com). Parent site stays [haviventures.com](https://www.haviventures.com). Mail on the site is `info@havilahtec.com`.

**Offer:** Data engineering portfolio (pipelines, dbt, Snowflake/AWS, AI-ready data) plus the Contested Metric Diagnostic.

## Run locally

```bash
npm install
npm run dev
```

Opens at [http://localhost:3001](http://localhost:3001).

Send Inquiry posts to `/api/inquiry` and delivers to `info@havilahtec.com`. It needs a [Resend](https://resend.com) key: set `RESEND_API_KEY` in `.env.local` and in the Vercel project. Verify `havilahtec.com` in Resend so the from address `inquiries@havilahtec.com` is allowed. `RESEND_FROM` overrides that from address.

## Stack

Next.js 16, React 19, Tailwind CSS 4, Framer Motion. Brand tokens match the parent site (navy `#0B0F19`, gold `#C8A24A`).

## Pages

| Path | Purpose |
|------|---------|
| `/` | Home — the meeting, the diagnostic, practice areas |
| `/diagnostic` | The product |
| `/services` | Practice areas from the Ventures services offer |
| `/approach` | Methodology and engagement path |
| `/about` | The disputed number, how an engagement starts, capabilities, inquiry |
| `/careers` | No openings at this time; check back |
| `/contact` | Inquiry form |
| `/privacy` `/terms` | Legal |

Contracts and invoices: **Havilah Technologies LLC**. Parent brand: Havilah Ventures.
