import { NextResponse } from "next/server";
import { inquiryTypes, siteConfig } from "@/lib/site";

const workstreams: readonly string[] = inquiryTypes;

function line(value: unknown, max: number) {
  return String(value ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);
}

function block(value: unknown, max: number) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .trim()
    .slice(0, max);
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "We could not read that inquiry." },
      { status: 400 },
    );
  }

  if (line(payload.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = line(payload.name, 120);
  const email = line(payload.email, 200);
  const company = line(payload.company, 160);
  const role = line(payload.role, 120);
  const workstream = line(payload.workstream, 80);
  const metric = line(payload.metric, 160);
  const sources = line(payload.sources, 240);
  const deadline = line(payload.deadline, 160);
  const systems = line(payload.systems, 200);
  const message = block(payload.message, 4000);

  if (!name || !email || !workstream || !message) {
    return NextResponse.json(
      { error: "Name, email, workstream, and scope are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  if (!workstreams.includes(workstream)) {
    return NextResponse.json(
      { error: "Choose a workstream from the list." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error: `We could not send that from the site yet. Write to ${siteConfig.email}.`,
      },
      { status: 503 },
    );
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Role: ${role}`,
    `Workstream: ${workstream}`,
    `Disputed metric: ${metric}`,
    `Two sources or reports: ${sources}`,
    `Decision or deadline: ${deadline}`,
    `Systems / stack: ${systems}`,
    "",
    "Scope:",
    message,
  ].join("\n");

  const sent = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.RESEND_FROM ??
        "Havilah Technologies <inquiries@havilahtec.com>",
      to: [process.env.INQUIRY_TO ?? siteConfig.email],
      reply_to: email,
      subject: `Inquiry — ${workstream}`,
      text,
    }),
  });

  if (!sent.ok) {
    const detail = await sent.text();
    console.error("Inquiry mail failed", sent.status, detail);
    return NextResponse.json(
      { error: `We could not send that. Write to ${siteConfig.email}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
