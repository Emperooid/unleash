import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Privacy Policy — UNLEASH Hub",
  description: "How the UNLEASH Hub handles your information.",
};

const SECTIONS = [
  {
    title: "What we collect",
    body: "We collect only what you choose to share — for example, the email address you provide when subscribing to the newsletter or the details you submit through the join form.",
  },
  {
    title: "How we use it",
    body: "Your information is used to keep you informed, welcome you into the community, and improve your experience. We do not sell or rent your personal information to third parties.",
  },
  {
    title: "Your choices",
    body: "You can unsubscribe from the newsletter at any time using the link in any email, and you can ask us to remove your information at any time.",
  },
  {
    title: "Third-party services",
    body: "Some features use trusted third-party services (such as forms and newsletter tools). Each of these services handles your data according to its own privacy policy.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        tone="ink"
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we handle your information — clearly and honestly."
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
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
              Questions about your data? We&apos;re happy to help.
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
