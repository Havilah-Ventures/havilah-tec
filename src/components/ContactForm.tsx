"use client";

import { FormEvent, useState } from "react";
import { inquiryTypes, siteConfig } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const company = String(formData.get("company") ?? "");
    const role = String(formData.get("role") ?? "");
    const workstream = String(formData.get("workstream") ?? "");
    const systems = String(formData.get("systems") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(
      `Inquiry — ${workstream || "Havilah Technologies LLC"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role}\nWorkstream: ${workstream}\nSystems / stack: ${systems}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const fieldClass =
    "mt-2 w-full rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors focus:border-gold/50";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        className="inline-flex items-center justify-center rounded-sm border border-gold/40 bg-gold/10 px-6 py-3 text-sm uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/20"
      >
        Send inquiry
      </button>

      {submitted ? (
        <p className="text-sm text-secondary">
          Your email client should open shortly. If it does not, write to{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-gold hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
