import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Terms & Support — UNLEASH Hub",
  description: "Terms of use and support for the UNLEASH Hub.",
};

const SECTIONS = [
  {
    title: "Welcome",
    body: "This website (and the UNLEASH Hub community it supports) is provided by The UNLEASH Hub. By using the site you agree to these terms. They are simple and kept intentionally short.",
  },
  {
    title: "The content",
    body: "The principles, articles, and materials shared here are provided for educational and inspirational purposes. They are not professional, financial, legal, or medical advice.",
  },
  {
    title: "Your conduct",
    body: "Treat others with respect and honesty. Anything you contribute to the community should reflect the very principles we celebrate — integrity, justice, and compassion.",
  },
  {
    title: "Support",
    body: "Need help with an order, the community, or the site? Reach out through the Connect page and we'll get back to you as quickly as we can.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        tone="ink"
        eyebrow="Legal"
        title="Terms & Support"
        description="The essentials of using the UNLEASH Hub site and community."
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms & Support" }]}
      />

      <section className="bg-paper py-16 sm:py-24">
        <Container className="max-w-2xl">
          <Reveal className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-2xl font-bold text-ink">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink/70">
                  {section.body}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-14 flex flex-wrap items-center gap-4 rounded-3xl bg-cream p-7 sm:p-8">
            <p className="flex-1 text-sm text-ink/70">
              Questions about these terms? We&apos;re happy to help.
            </p>
            <Button href="/connect" size="md">
              Contact us
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
