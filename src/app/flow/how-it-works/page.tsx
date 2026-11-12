import { CtaBand } from "@/components/CtaBand";
import { FlowDashboardPreview } from "@/components/FlowDashboardPreview";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { getService } from "@/lib/site";

const flow = getService("havilah-flow");

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

      <FlowDashboardPreview />

      <CtaBand
        title="Request a conversation."
        copy="Tell us how you track unpaid invoices and completed work that has not been billed. We will say whether a conversation is the right next step."
        buttonLabel="Request a conversation"
        href="/contact?workstream=Havilah%20Flow"
      />
    </>
  );
}
