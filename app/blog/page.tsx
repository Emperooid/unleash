import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { BlogList } from "@/components/BlogList";
import { BLOG_POSTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — UNLEASH Hub",
  description:
    "Articles and reflections on living out the twelve UNLEASH principles — mindset, growth, and opportunity.",
};

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <>
      <PageHero
        tone="ink"
        eyebrow="Blog"
        title="Reflections on living unleashed."
        description="Short, practical reads on the principles, the mindset, and the opportunities that come to those who pursue them."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <BlogList posts={posts} />
        </Container>
      </section>
    </>
  );
}
