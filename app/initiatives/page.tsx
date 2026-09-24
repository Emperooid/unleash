import type { Metadata } from "next";
import Link from "next/link";
import {
  BookMarked,
  School,
  Rocket,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { INITIATIVES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Initiatives — UNLEASH Hub",
  description:
    "The initiatives turning UNLEASH principles into action — the Readers Programme, Campus Chapters, and Community Projects.",
};

const INITIATIVE_ICONS: Record<string, LucideIcon> = {
  "book-marked": BookMarked,
  school: School,
  rocket: Rocket,
};

const LINKS: Record<string, string> = {
  "readers-programme": "/readers-programme",
  "campus-chapters": "/hub",
  "community-projects": "/hub",
};

export default function InitiativesPage() {
  return (
    <>
      <PageHero
        tone="orange"
        eyebrow="Initiatives"
        title="Principles that become action."
        description="Ideas become meaningful when they move beyond conversation. Explore the initiatives turning UNLEASH principles into measurable impact."
        crumbs={[{ label: "Home", href: "/" }, { label: "Initiatives" }]}
      />

      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <RevealGroup className="space-y-8">
            {INITIATIVES.map((initiative, i) => {
              const Icon = INITIATIVE_ICONS[initiative.icon] ?? Rocket;
              const href = LINKS[initiative.slug] ?? "/hub";
              return (
                <Reveal key={initiative.slug} variants={staggerItem}>
                  <div className="grid gap-8 rounded-[1.75rem] bg-white p-7 ring-1 ring-ink/5 sm:p-10 lg:grid-cols-[1fr_220px] lg:items-center lg:gap-12">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                          <Icon size={24} strokeWidth={1.75} />
                        </span>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/45">
                          Initiative {String(i + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <h2 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl">
                        {initiative.title}
                      </h2>
                      <p className="mt-2 font-display text-base font-semibold text-orange-600 sm:text-lg">
                        {initiative.tagline}
                      </p>
                      <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink/65 sm:text-base">
                        {initiative.description.map((paragraph, j) => (
                          <p key={j}>{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 lg:items-end">
                      <div className="rounded-2xl bg-cream px-5 py-4 text-center">
                        <p className="font-display text-2xl font-bold text-ink">
                          {initiative.stat.value}
                        </p>
                        <p className="text-xs text-ink/55">{initiative.stat.label}</p>
                      </div>
                      <Link
                        href={href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700"
                      >
                        Learn more
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Want to start something?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/75">
              Whether it&apos;s a chapter on your campus or a project in your
              community — the Hub is where ideas get the support to become real.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap justify-center gap-3">
            <Button href="/join" size="lg">
              Join the Hub
            </Button>
            <Button href="/connect" size="lg" variant="outline-light">
              Talk to us
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
