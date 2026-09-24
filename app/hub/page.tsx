import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Sprout,
  GraduationCap,
  BookOpen,
  MessageCircle,
  Calendar,
  Handshake,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { HUB_AUDIENCES, HUB_GETTING_STARTED, HUB_MAXIMIZE } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Hub — UNLEASH Hub",
  description:
    "A vibrant community of young changemakers — students, graduates, and early professionals equipped to seize uncommon opportunities.",
};

const AUDIENCE_ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  sprout: Sprout,
  "graduation-cap": GraduationCap,
  "book-open": BookOpen,
};

const MAXIMIZE_ICONS: Record<string, LucideIcon> = {
  "message-circle": MessageCircle,
  calendar: Calendar,
  handshake: Handshake,
};

const GUIDELINES = [
  "Lead with respect — every member, every time.",
  "Engage in discussions, ask questions, and share insights.",
  "Introduce yourself and connect with others.",
  "Offer support and constructive feedback to peers.",
  "What is shared here stays here — protect each other's trust.",
];

export default function HubPage() {
  return (
    <>
      <PageHero
        tone="orange"
        eyebrow="The Hub"
        title="Welcome to The UNLEASH Hub."
        description="A vibrant community of young changemakers designed to equip students and early-stage professionals with the tools, knowledge, and network to seize uncommon opportunities."
        crumbs={[{ label: "Home", href: "/" }, { label: "The Hub" }]}
      >
        <Button
          href="https://forms.gle/3e1FMJmHskNZTAFX9"
          size="lg"
          className="!bg-cream !text-orange-600 hover:!bg-white"
        >
          Join the community
        </Button>
      </PageHero>

      {/* Who it's for */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Who it's for"
              title="This is for you, if you're a…"
              description="The Hub is built for a wide range of young people — wherever you are in the journey."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {HUB_AUDIENCES.map((audience) => {
              const Icon = AUDIENCE_ICONS[audience.icon] ?? Sparkles;
              return (
                <Reveal key={audience.title} variants={staggerItem} className="h-full">
                  <div className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                      <Icon size={24} strokeWidth={1.75} />
                    </span>
                    <p className="mt-5 font-display text-xl font-bold text-ink">
                      {audience.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">
                      {audience.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      {/* You're not too young */}
      <section className="bg-ink py-16 text-white sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
              The message
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold sm:text-6xl">
              You&apos;re not too young!
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
              The Hub is built on a simple conviction: your age was never the
              barrier. Readiness was. And readiness is something you can build,
              with the right principles and the right people around you.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Guidelines / maximize */}
      <section id="guidelines" className="bg-cream py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Community"
              title="How to maximize your experience."
              description="A few simple expectations and opportunities that make the Hub work for everyone."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3">
            {HUB_MAXIMIZE.map((group) => {
              const Icon = MAXIMIZE_ICONS[group.icon] ?? Sparkles;
              return (
                <Reveal key={group.title} variants={staggerItem} className="h-full">
                  <div className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/5 sm:p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                      <Icon size={24} strokeWidth={1.75} />
                    </span>
                    <p className="mt-5 font-display text-xl font-bold capitalize text-ink">
                      {group.title}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/65"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-12 rounded-[1.75rem] bg-white p-7 ring-1 ring-ink/5 sm:p-10">
            <p className="font-display text-xl font-bold text-ink">
              Community guidelines at a glance
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {GUIDELINES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/65"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Getting started */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Getting started"
              title="Three steps to join us."
            />
          </Reveal>

          <RevealGroup className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3">
            {HUB_GETTING_STARTED.map((step, i) => (
              <Reveal key={step.title} variants={staggerItem} className="h-full">
                <Link
                  href={step.href}
                  target={step.external ? "_blank" : undefined}
                  rel={step.external ? "noreferrer" : undefined}
                  className="group flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(11,12,15,0.25)]"
                >
                  <span className="font-display text-4xl font-bold text-orange-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 font-display text-lg font-bold text-ink">
                    {step.title}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                    {step.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600">
                    {step.cta}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to join The UNLEASH Hub?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              Take the first step by filling out our form. We can&apos;t wait to
              welcome you into the community of changemakers.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Button
              href="https://forms.gle/3e1FMJmHskNZTAFX9"
              size="lg"
              className="!bg-cream !text-orange-600 hover:!bg-white"
            >
              Fill the form
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
