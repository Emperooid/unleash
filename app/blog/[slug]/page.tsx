import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS, AUTHOR } from "@/lib/site";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — UNLEASH Hub`, description: post.excerpt };
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article>
      <section className="bg-cream py-12 sm:py-16">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink/60 transition-colors hover:text-ink"
          >
            <ArrowLeft size={16} />
            All articles
          </Link>

          <Reveal className="mt-6">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-orange-600">
                {post.category}
              </span>
              <span className="text-ink/45">{formatDate(post.date)}</span>
              <span className="text-ink/45">·</span>
              <span className="text-ink/45">{post.readTime}</span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink [text-wrap:balance] sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink/60">
              {post.excerpt}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-12 sm:py-16">
        <Container className="max-w-3xl">
          <Reveal className="space-y-6">
            {post.blocks.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="pt-4 font-display text-2xl font-bold text-ink sm:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-orange-500 bg-cream px-6 py-5 font-display text-xl font-semibold leading-relaxed text-ink sm:text-2xl"
                  >
                    {block.text}
                  </blockquote>
                );
              }
              return (
                <p
                  key={i}
                  className="text-base leading-[1.85] text-ink/75 sm:text-lg"
                >
                  {block.text}
                </p>
              );
            })}
          </Reveal>

          <Reveal className="mt-12 flex items-center gap-4 rounded-3xl bg-cream p-6 sm:p-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-500 font-display text-lg font-bold text-white">
              {AUTHOR.nickname}
            </span>
            <div>
              <p className="font-semibold text-ink">{AUTHOR.name}</p>
              <p className="text-sm text-ink/55">
                {AUTHOR.role} — sharing principles for a life that attracts
                uncommon opportunities.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* More reads */}
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Keep reading
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {others.map((other) => (
              <Reveal key={other.slug}>
                <Link
                  href={`/blog/${other.slug}`}
                  className="group flex h-full flex-col rounded-3xl bg-white p-6 ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(11,12,15,0.25)]"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-orange-600">
                    {other.category}
                  </span>
                  <p className="mt-3 font-display text-lg font-bold leading-snug text-ink">
                    {other.title}
                  </p>
                  <p className="mt-2 flex-1 text-sm text-ink/55">
                    {other.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Read the book that started it.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              UNLEASH: The Blueprint for a Life that Attracts Uncommon
              Opportunities.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Button
              href="/book"
              size="lg"
              className="!bg-cream !text-orange-600 hover:!bg-white"
            >
              Explore the book
            </Button>
          </Reveal>
        </Container>
      </section>
    </article>
  );
}
