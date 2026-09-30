import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { insights } from "@/lib/insights";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Insights",
  description:
    "Notes on disputed metrics, certified marts, and what has to be true before an agent quotes a number.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes on the number"
        description="Short explanations of problems we see in the work. No client names and no invented results."
      />
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <ul className="grid gap-6 md:grid-cols-3">
          {insights.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.05}>
              <li className="h-full rounded-sm border border-white/10 p-6">
                <h2 className="font-display text-xl text-white">
                  <Link
                    href={`/insights/${post.slug}`}
                    className="transition-colors hover:text-gold"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 text-sm leading-7 text-secondary">
                  {post.description}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>
    </>
  );
}
