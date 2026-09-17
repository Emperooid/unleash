"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { VALUE_CARDS } from "@/lib/content";
import { CARD_COLOR_CLASSES } from "@/lib/cardColors";

export function ValueCardsGrid() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
            The Principles
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            One word. One idea. One shift at a time.
          </h2>
          <p className="mt-3 text-base text-ink/60">
            Tap a card to see what it means — and how to live it.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {VALUE_CARDS.map((card) => {
            const colors = CARD_COLOR_CLASSES[card.color];
            return (
              <motion.div key={card.slug} variants={staggerItem}>
                <Link
                  href={`/values/${card.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-paper shadow-[0_1px_0_0_rgba(11,12,15,0.06)] ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(11,12,15,0.25)]"
                >
                  <div
                    className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden ${colors.bg}`}
                  >
                    <span className="font-display text-4xl font-bold text-white/95 drop-shadow-sm sm:text-5xl">
                      {card.word}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-display text-lg font-bold text-ink">
                          {card.word}
                        </p>
                        <p className={`text-xs font-semibold ${colors.text}`}>
                          {card.phonetic}
                        </p>
                      </div>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${colors.softBg} ${colors.text} transition-transform duration-300 group-hover:rotate-45`}
                      >
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-ink/60">
                      {card.tagline}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
