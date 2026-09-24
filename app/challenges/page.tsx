import type { Metadata } from "next";
import Link from "next/link";
import {
  HelpCircle,
  Puzzle,
  Flame,
  PenLine,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DailyChallenge } from "@/components/games/DailyChallenge";
import { GAMES } from "@/lib/games";

export const metadata: Metadata = {
  title: "Challenges — UNLEASH Hub",
  description:
    "Daily challenges and games that build the twelve UNLEASH principles into habit.",
};

const ICONS: Record<string, LucideIcon> = {
  "help-circle": HelpCircle,
  puzzle: Puzzle,
  flame: Flame,
  "pen-line": PenLine,
};

export default function ChallengesPage() {
  return (
    <>
      <PageHero
        tone="orange"
        eyebrow="Challenges"
        title="Build the principles into habit."
        description="A different challenge every day, plus games that make learning the principles something you actually look forward to."
        crumbs={[{ label: "Home", href: "/" }, { label: "Challenges" }]}
      />

      {/* Today's challenge */}
      <section className="bg-cream py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal className="text-center">
            <SectionHeading
              align="center"
              eyebrow="Today's challenge"
              title="One small action, every day."
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <DailyChallenge />
          </Reveal>
        </Container>
      </section>

      {/* More ways to play */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="More ways to play"
              title="Turn the principles into practice."
              description="Quizzes, puzzles, and reflection — a growing set of games to keep you sharp."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2">
            {GAMES.map((game) => {
              const Icon = ICONS[game.icon] ?? HelpCircle;
              return (
                <Reveal key={game.slug} variants={staggerItem} className="h-full">
                  <Link
                    href={`/games/${game.slug}`}
                    className="group flex h-full flex-col gap-4 rounded-3xl bg-white p-7 ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(11,12,15,0.25)] sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${game.accent}`}
                      >
                        <Icon size={24} strokeWidth={1.75} />
                      </span>
                      <ArrowRight
                        size={20}
                        className="text-ink/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink/60"
                      />
                    </div>
                    <div>
                      <p className="font-display text-xl font-bold text-ink">
                        {game.name}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                        {game.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-12 flex justify-center">
            <Button href="/games" size="lg" variant="outline">
              View all games
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
