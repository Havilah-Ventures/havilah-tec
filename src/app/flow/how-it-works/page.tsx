import { CtaBand } from "@/components/CtaBand";
import { FlowWorkflow } from "@/components/FlowWorkflow";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { getService } from "@/lib/site";

const flow = getService("havilah-flow");

const questions = [
  {
    question: "Do we have to replace our current software?",
    answer:
      "No. Flow is being designed as a layer over the field-service and accounting tools you already use. Those systems remain where your team manages jobs, invoices, and payments.",
  },
  {
    question: "Does Havilah Flow change invoices or payment records?",
    answer:
      "The first approach is to identify, explain, and prioritize exceptions. It does not edit financial records on its own. Someone you authorize decides what happens, in the system you already use.",
  },
  {
    question: "How would our information get into Havilah Flow?",
    answer:
      "Depending on your software and the pilot, records are shared through an authorized connection or a controlled export. What can be connected, and with which permissions, is confirmed before a pilot.",
  },
  {
    question: "Will it automatically text or email my customers?",
    answer:
      "Not by default. A person reviews a follow-up before it is sent. Any later automation would need your authorization, approved wording, and the applicable safeguards.",
  },
  {
    question: "What if a job has no matching invoice for a valid reason?",
    answer:
      "It is labeled for review. It is not treated as lost revenue. Your team can confirm the reason, or dismiss it.",
  },
  {
    question: "Do we need to change how our employees work?",
    answer:
      "The aim is a clearer view of the workflow you already have. A pilot first confirms which records are available and where a review step fits the way the office already works.",
  },
];

export const metadata = createPageMetadata({
  title: "How Havilah Flow works",
  description:
    "An interactive overview of how Havilah Flow is designed to sit alongside the field-service and accounting software a service business already uses.",
  path: "/flow/how-it-works",
  image: flow?.socialImage,
});

export default function FlowHowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Havilah Flow"
        title="Your software stays. Flow adds visibility."
        description="Havilah Flow is designed to work alongside the tools your team already uses. It does not replace your field-service, accounting, or payment systems."
      />

      <FlowWorkflow />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <h2 className="font-display text-3xl text-white">
          Questions owners usually ask
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-secondary">
          A short explanation of the intended approach.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {questions.map((item) => (
            <details
              key={item.question}
              className="rounded-sm border border-white/10 p-5"
            >
              <summary className="cursor-pointer font-display text-lg text-white">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-secondary">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
        <p className="mt-10 text-xs leading-6 text-secondary">
          A concept of the intended workflow. Capabilities, connections, and
          availability depend on validation and the pilot scope. No live system
          and no customer data are connected on this page. Havilah Flow is an
          emerging pilot.
        </p>
      </section>

      <CtaBand
        title="Request a conversation."
        copy="Tell us how you track unpaid invoices and completed work that has not been billed. We will say whether a conversation is the right next step."
        buttonLabel="Request a conversation"
        href="/contact?workstream=Havilah%20Flow"
      />
    </>
  );
}
