"use client";

import { BarChart3, Flame, HelpCircle, PenLine, Puzzle } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { CHALLENGE_CARDS } from "@/lib/content";

const ICONS = [Flame, HelpCircle, Puzzle, BarChart3, PenLine];

const ACCENTS: Record<(typeof CHALLENGE_CARDS)[number]["accent"], string> = {
  orange: "bg-orange-500 text-white",
  ink: "bg-ink text-white",
  amber: "bg-orange-200 text-ink",
  forest: "bg-gradient-to-br from-ink via-ink to-orange-700 text-white",
  cream: "bg-cream text-ink border border-ink/10",
};

export function ChallengeYourself() {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Challenge Yourself. Grow Daily."
            title="Small daily actions, compounding growth."
          />
          <Button href="/challenges" variant="outline" size="md" showArrow>
            Explore All Activities
          </Button>
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHALLENGE_CARDS.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={card.title}
                variants={staggerItem}
                className={`flex min-h-[220px] flex-col justify-between rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
                  ACCENTS[card.accent]
                } ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <Icon size={26} strokeWidth={1.75} />
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-70">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
