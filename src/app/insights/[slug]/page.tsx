import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { getInsight, insights } from "@/lib/insights";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return { title: "Insight" };
  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/insights/${post.slug}`,
  });
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow="Insights" title={post.title} description={post.description} />
      <article className="mx-auto max-w-3xl space-y-6 px-6 py-20 lg:px-8">
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-base leading-8 text-secondary">
            {paragraph}
          </p>
        ))}
      </article>
      <CtaBand
        title="If this is the number you are stuck on, send it."
        copy="Name the metric, the two sources, and the decision that depends on it."
        buttonLabel="Request a fit call"
      />
    </>
  );
}
