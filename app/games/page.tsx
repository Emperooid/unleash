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
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { GAMES } from "@/lib/games";

export const metadata: Metadata = {
  title: "UNLEASH Play — Games & Challenges",
  description:
    "Playful ways to learn and live the twelve UNLEASH principles — quizzes, puzzles, daily challenges, and reflection prompts.",
};

const ICONS: Record<string, LucideIcon> = {
  "help-circle": HelpCircle,
  puzzle: Puzzle,
  flame: Flame,
  "pen-line": PenLine,
};

export default function GamesPage() {
  return (
    <>
      <PageHero
        tone="orange"
        eyebrow="UNLEASH Play"
        title="Turn the principles into practice."
        description="A growing set of games and challenges that make the twelve principles stick — play, reflect, and build the habits a day at a time."
      />

      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {GAMES.map((game) => {
              const Icon = ICONS[game.icon] ?? HelpCircle;
              return (
                <Reveal key={game.slug} variants={staggerItem} className="h-full">
                  <Link
                    href={`/games/${game.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(11,12,15,0.25)]"
                  >
                    <div
                      className={`flex items-center justify-between p-6 sm:p-7 ${game.accent}`}
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white">
                        <Icon size={24} strokeWidth={1.75} />
                      </span>
                      <ArrowRight
                        size={20}
                        className="text-white/70 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-6 sm:p-7">
                      <p className="font-display text-xl font-bold text-ink sm:text-2xl">
                        {game.name}
                      </p>
                      <p className="text-sm leading-relaxed text-ink/60">
                        {game.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
