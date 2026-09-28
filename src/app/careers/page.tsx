import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Careers",
  description: `${siteConfig.legalName} has no openings at this time. Check back for future roles.`,
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Careers"
        description={`${siteConfig.legalName} posts open roles on this page. There are none at this time.`}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <FadeIn>
          <div className="max-w-2xl rounded-sm border border-white/10 p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Current openings
            </p>
            <h2 className="mt-4 font-display text-3xl text-white">
              No openings at this time
            </h2>
            <p className="mt-4 text-base leading-8 text-secondary">
              Please check back. When a role is open, it will be listed here.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
