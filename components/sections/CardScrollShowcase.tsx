"use client";

import { useRef } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { VALUE_CARDS } from "@/lib/content";

// The little "+" badge marking each card — a plain, blended-in glass circle
// rather than a per-value icon. Rotates into a "×" once its card opens.
function PlusBadge({
  size = 44,
  rotate,
}: {
  size?: number;
  rotate?: MotionValue<number>;
}) {
  return (
    <motion.span
      style={{ width: size, height: size, rotate }}
      className="flex shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40 backdrop-blur-sm"
    >
      <Plus size={size * 0.5} strokeWidth={2.5} className="text-white" />
    </motion.span>
  );
}

// Orange shades cycled by card position — the accordion uses the site's own
// brand color instead of the multi-hue palette used elsewhere.
const ORANGE_SHADES = [
  "bg-orange-500",
  "bg-orange-700",
  "bg-orange-400",
  "bg-orange-800",
  "bg-orange-600",
  "bg-orange-500",
];

// Order for this showcase specifically — starts Justice, then Knowledge,
// independent of VALUE_CARDS' own (Diligence-first) order.
const SHOWCASE_ORDER = [
  "justice",
  "knowledge",
  "diligence",
  "discipline",
  "compassion",
  "trustworthiness",
  "integrity",
  "self-control",
  "courage",
  "gratitude",
  "patience",
  "vision",
];

const CARDS = SHOWCASE_ORDER.map((slug) =>
  VALUE_CARDS.find((c) => c.slug === slug)
).filter((c): c is (typeof VALUE_CARDS)[number] => Boolean(c));

export function CardScrollShowcase() {
  return (
    <>
      <MobilePrincipleList />
      <DesktopAccordion />
    </>
  );
}

// Mobile & tablet: a plain, straight-up stacked list. No scroll-jacking, no
// expand/collapse animation to manage on a small viewport — just readable
// full-width cards you can tap straight through to the definition page.
function MobilePrincipleList() {
  return (
    <section className="bg-ink py-16 lg:hidden">
      <Container>
        <Reveal className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-orange-300">
            The Twelve Principles
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white">
            One word. One idea. One shift at a time.
          </h2>
        </Reveal>

        <RevealGroup className="flex flex-col gap-4">
          {CARDS.map((card, i) => {
            const shade = ORANGE_SHADES[i % ORANGE_SHADES.length];
            return (
              <motion.div key={card.slug} variants={staggerItem}>
                <Link
                  href={`/values/${card.slug}`}
                  className={`flex min-h-[44px] flex-col gap-4 rounded-3xl p-6 shadow-[0_16px_32px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition-transform active:scale-[0.98] ${shade}`}
                >
                  <div className="flex items-start gap-4">
                    <PlusBadge size={38} />
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-2xl font-bold leading-none text-white">
                        {card.word}
                      </p>
                      <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/70">
                        {card.phonetic}
                      </p>
                      <p className="mt-2.5 text-sm leading-relaxed text-white/85">
                        {card.tagline}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="mt-1 shrink-0 text-lg text-white/60"
                    >
                      →
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/70 line-clamp-2">
                    {card.definition[0]}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}

// Desktop / laptop: the big scroll-driven accordion. Each panel collapses to
// a thin spine marked with a "+" and blows open as the section scrolls past.
function DesktopAccordion() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Springs the raw scroll fraction so the accordion trails and settles
  // instead of snapping 1:1 to the scrollbar.
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    mass: 0.4,
  });

  // Continuous position along the row of cards — at activeIndex === i,
  // card i is fully open; everything else is collapsed.
  const activeIndex = useTransform(progress, [0, 1], [0, CARDS.length - 1]);

  return (
    <section
      ref={ref}
      className="relative hidden bg-ink lg:block"
      style={{ height: `${CARDS.length * 95}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden py-10">
        <Container>
          <span className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-orange-300">
            The Twelve UNLEASH Principles
          </span>
          <p className="mt-4 text-center text-sm text-white/45">
            Scroll to open each card
          </p>
        </Container>

        <div className="mt-8 flex h-[80vh] w-full max-w-[1900px] gap-5 px-6 sm:px-8 lg:px-10 xl:h-[82vh] xl:px-12">
          {CARDS.map((card, i) => (
            <AccordionCard
              key={card.slug}
              card={card}
              index={i}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionCard({
  card,
  index,
  activeIndex,
}: {
  card: (typeof VALUE_CARDS)[number];
  index: number;
  activeIndex: MotionValue<number>;
}) {
  const shade = ORANGE_SHADES[index % ORANGE_SHADES.length];
  const number = String(index + 1).padStart(2, "0");

  // 1 when this card is the active one, easing to 0 within one card-width.
  const closeness = useTransform(activeIndex, (v) =>
    Math.max(0, 1 - Math.abs(v - index))
  );
  const grow = useTransform(closeness, [0, 1], [1, 11]);
  const expandedOpacity = useTransform(closeness, [0.5, 0.9], [0, 1]);
  const expandedPointerEvents = useTransform(closeness, (c) =>
    c > 0.6 ? "auto" : "none"
  );
  const collapsedOpacity = useTransform(closeness, [0.35, 0.7], [1, 0]);
  const badgeRotate = useTransform(closeness, [0, 1], [0, 45]);

  return (
    <motion.div
      style={{ flexGrow: grow }}
      className={`relative min-w-[68px] flex-1 shrink-0 basis-0 overflow-hidden rounded-t-2xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.65)] xl:rounded-t-3xl ${shade}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />

      {/* Collapsed: plus badge + rotated label — clickable, links to the card's page */}
      <motion.div style={{ opacity: collapsedOpacity }} className="absolute inset-0">
        <Link
          href={`/values/${card.slug}`}
          className="flex h-full w-full flex-col items-center py-12"
        >
          <PlusBadge size={44} rotate={badgeRotate} />
          <span className="mt-3 text-xs font-bold tracking-[0.2em] text-white/50">
            {number}
          </span>
          <span
            className="mb-1 mt-auto whitespace-nowrap text-base font-bold uppercase tracking-[0.16em] text-white/85 [writing-mode:vertical-rl]"
            style={{ transform: "rotate(180deg)" }}
          >
            {card.word}
          </span>
        </Link>
      </motion.div>

      {/* Expanded: number, title, phonetic, tagline, excerpt — also clickable */}
      <motion.div
        style={{ opacity: expandedOpacity, pointerEvents: expandedPointerEvents }}
        className="absolute inset-0"
      >
        <Link
          href={`/values/${card.slug}`}
          className="flex h-full w-full min-w-[420px] flex-col p-11 xl:p-12"
        >
          <div className="flex w-full items-start justify-between">
            <PlusBadge size={44} rotate={badgeRotate} />
            <span className="text-sm font-bold tracking-[0.2em] text-white/50">
              {number} / {CARDS.length}
            </span>
          </div>
          <p className="mt-7 font-display text-6xl font-bold leading-none text-white xl:text-7xl">
            {card.word}
          </p>
          <p className="mt-3 text-base font-semibold uppercase tracking-[0.1em] text-white/70">
            {card.phonetic}
          </p>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/85 xl:text-xl">
            {card.tagline}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 line-clamp-3">
            {card.definition[0]}
          </p>
          <span className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/25">
            Read the definition →
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
