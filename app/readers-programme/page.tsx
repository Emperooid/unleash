import type { Metadata } from "next";
import {
  BookMarked,
  Users,
  NotebookPen,
  Target,
  CalendarCheck,
  Award,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Readers Programme — UNLEASH Hub",
  description:
    "The Unleashed Readers Programme — an immersive journey through UNLEASH where readers go deeper, apply the principles, and grow in community.",
};

const BENEFITS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: BookMarked,
    title: "Structured curriculum",
    description:
      "Work through UNLEASH chapter by chapter with a guided plan that keeps you moving.",
  },
  {
    icon: Users,
    title: "Cohort community",
    description:
      "Process the book with peers who are on the same journey — not in isolation.",
  },
  {
    icon: NotebookPen,
    title: "Reflection prompts",
    description:
      "Turn each principle from a highlight into a habit with guided reflection.",
  },
  {
    icon: Target,
    title: "Accountability",
    description:
      "Structures that help you show up consistently, even on the hard weeks.",
  },
  {
    icon: CalendarCheck,
    title: "Live sessions",
    description:
      "Group discussions and Q&As that bring the pages to life.",
  },
  {
    icon: Award,
    title: "Recognition",
    description:
      "Celebrate completion with the community and carry the momentum forward.",
  },
];

const STEPS = [
  {
    title: "Register",
    description:
      "Sign up and join the next cohort. No prior experience needed — just the book and a willingness to engage.",
  },
  {
    title: "Read & reflect",
    description:
      "Follow the weekly curriculum, reading and reflecting on one principle at a time.",
  },
  {
    title: "Gather & grow",
    description:
      "Join group discussions, share your takeaways, and hold each other accountable.",
  },
  {
    title: "Apply & finish",
    description:
      "Put the principles into action, complete the journey, and graduate with the community.",
  },
];

export default function ReadersProgrammePage() {
  return (
    <>
      <PageHero
        tone="orange"
        eyebrow="Readers Programme"
        title="Go deeper than the last page."
        description="An immersive programme where readers work through UNLEASH together — applying each principle to real life and growing in community."
        crumbs={[{ label: "Home", href: "/" }, { label: "Readers Programme" }]}
      >
        <Button
          href="https://forms.gle/3e1FMJmHskNZTAFX9"
          size="lg"
          className="!bg-cream !text-orange-600 hover:!bg-white"
        >
          Register interest
        </Button>
      </PageHero>

      {/* What you get */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="What you get"
              title="Reading alone is good. Reading together is transformative."
              description="The programme is designed so the principles don't stay on the page — they become part of how you live."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <Reveal key={benefit.title} variants={staggerItem} className="h-full">
                <div className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <benefit.icon size={24} strokeWidth={1.75} />
                  </span>
                  <p className="mt-5 font-display text-xl font-bold text-ink">
                    {benefit.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="How it works"
              title="A simple journey, a lasting habit."
            />
          </Reveal>

          <RevealGroup className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} variants={staggerItem} className="h-full">
                <div className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/5 sm:p-8">
                  <span className="font-display text-4xl font-bold text-orange-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 font-display text-lg font-bold text-ink">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              The next cohort is forming.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/75">
              Bring the book and a willingness to engage — we&apos;ll handle the
              structure. Register your interest to be first to know.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap justify-center gap-3">
            <Button
              href="https://forms.gle/3e1FMJmHskNZTAFX9"
              size="lg"
            >
              Register interest
            </Button>
            <Button href="/book" size="lg" variant="outline-light">
              Get the book first
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
