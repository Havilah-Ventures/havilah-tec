"use client";

import { FormEvent, useState } from "react";
import { inquiryTypes, siteConfig } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          role: formData.get("role"),
          workstream: formData.get("workstream"),
          metric: formData.get("metric"),
          sources: formData.get("sources"),
          deadline: formData.get("deadline"),
          systems: formData.get("systems"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });
      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setError(
          result?.error ??
            `We could not send that. Write to ${siteConfig.email}.`,
        );
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(`We could not send that. Write to ${siteConfig.email}.`);
    }
  }

  const fieldClass =
    "mt-2 w-full rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors focus:border-gold/50";

  return (
    <form onSubmit={handleSubmit} className="relative space-y-6">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm text-secondary">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-secondary">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm text-secondary">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm text-secondary">
            Role
          </label>
          <input
            id="role"
            name="role"
            type="text"
            placeholder="Head of Data, Controller, program manager…"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="workstream" className="block text-sm text-secondary">
          What do you need
        </label>
        <select
          id="workstream"
          name="workstream"
          required
          defaultValue=""
          className={fieldClass}
        >
          <option value="" disabled>
            Select a workstream
          </option>
          {inquiryTypes.map((item) => (
            <option key={item} value={item} className="bg-navy text-white">
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="metric" className="block text-sm text-secondary">
          Which metric is being disputed{" "}
          <span className="text-secondary/60">(optional)</span>
        </label>
        <input
          id="metric"
          name="metric"
          type="text"
          placeholder="Revenue, bookings, headcount…"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="sources" className="block text-sm text-secondary">
            Which two sources or reports disagree{" "}
            <span className="text-secondary/60">(optional)</span>
          </label>
          <input
            id="sources"
            name="sources"
            type="text"
            placeholder="ERP and the board pack, warehouse and Sales…"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="deadline" className="block text-sm text-secondary">
            Decision or deadline{" "}
            <span className="text-secondary/60">(optional)</span>
          </label>
          <input
            id="deadline"
            name="deadline"
            type="text"
            placeholder="Close, audit, board, migration…"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="systems" className="block text-sm text-secondary">
          Systems / stack{" "}
          <span className="text-secondary/60">(optional)</span>
        </label>
        <input
          id="systems"
          name="systems"
          type="text"
          placeholder="Snowflake, dbt, AWS, Tableau…"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-secondary">
          Scope
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="What you need delivered, current systems, and any constraints."
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-sm border border-gold/40 bg-gold/10 px-6 py-3 text-sm uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/20 disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending" ? "Sending" : "Send inquiry"}
      </button>

      {status === "sent" ? (
        <p className="text-sm text-secondary">
          Sent. Your inquiry is on its way to {siteConfig.email}.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-secondary">{error}</p>
      ) : null}
    </form>
  );
}
