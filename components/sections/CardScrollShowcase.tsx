"use client";

import { useRef } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { VALUE_CARDS } from "@/lib/content";

// The little "+" badge marking each card — a plain, blended-in glass circle
// rather than a per-value icon. Rotates into a "×" once its card opens and
// pops slightly in scale so the open state has a touch of snap.
function PlusBadge({
  size = 44,
  rotate,
  scale,
}: {
  size?: number;
  rotate?: MotionValue<number>;
  scale?: MotionValue<number>;
}) {
  return (
    <motion.span
      style={{ width: size, height: size, rotate, scale }}
      className="flex shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40 backdrop-blur-sm"
    >
      <Plus size={size * 0.5} strokeWidth={2.5} className="text-white" />
    </motion.span>
  );
}

// Orange shades cycled by card position — the accordion uses the site's own
// brand color instead of the multi-hue palette used elsewhere. Each entry
// keeps both the Tailwind fill class and its hex so the active card can cast
// a matching glow.
const ORANGE_SHADES = [
  { bg: "bg-orange-500", hex: "#e8710f" },
  { bg: "bg-orange-700", hex: "#a8450a" },
  { bg: "bg-orange-400", hex: "#f3901f" },
  { bg: "bg-orange-800", hex: "#7c3208" },
  { bg: "bg-orange-600", hex: "#cf5a0a" },
  { bg: "bg-orange-500", hex: "#e8710f" },
];

// Accordion panel sizing in viewport units, so the row always fits the screen
// — the active card stays square-ish and the spines (the cards still to be
// seen) are wide enough to read at a glance.
const ACTIVE_WIDTH_VW = 30.5;
const SPINE_WIDTH_VW = 4.6;
const ROW_GAP_VW = 0.8;

// Keep the accordion order aligned with the official UNLEASH principles.
const SHOWCASE_ORDER = [
  "justice",
  "knowledge",
  "planning",
  "diligence",
  "compassion",
  "honor",
  "teachability",
  "trustworthiness",
  "quality-relationships",
  "prudence",
  "intentionality-of-speech",
  "discipline-self-control",
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
            const shade = ORANGE_SHADES[i % ORANGE_SHADES.length].bg;
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
                  <p className="text-sm leading-relaxed text-white/70">
                    {card.definition.join(" ")}
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
// a spine marked with a "+" and blows open as the section scrolls past. The
// opening is layered — the spine morphs into a wide panel, the badge pops and
// flips to a "×", and the content cascades in one piece at a time. A
// Chowdeck-style step rail below fills in as you move through the principles.
function DesktopAccordion() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Springs the raw scroll fraction so the accordion trails and settles
  // instead of snapping 1:1 to the scrollbar. Under reduced motion the spring
  // is bypassed and the accordion follows the scroll position directly.
  const spring = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
    restDelta: 0.0005,
  });
  const progress = reduced ? scrollYProgress : spring;

  // Fan-out amount: 0 at the very top (a single centered card) → 1 once the
  // other cards have slid in beside it. Completes early so the spines settle
  // at full width before the panels start taking turns.
  const fan = useTransform(progress, [0, 0.04], [0, 1]);

  // Continuous position along the row of cards. It holds on the first card
  // while the row fans out, then advances so card i is fully open at
  // activeIndex === i.
  const activeIndex = useTransform(progress, [0.04, 1], [0, CARDS.length - 1]);

  // Gap grows with the fan-out so the single centered card has no dead space.
  const rowGap = useTransform(fan, (f) => `${f * ROW_GAP_VW}vw`);

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

        <motion.div
          style={{ gap: rowGap }}
          className="mt-6 flex h-[74vh] w-full max-w-[1900px] justify-center px-6 sm:px-8 lg:px-10 xl:h-[76vh] xl:px-12"
        >
          {CARDS.map((card, i) => (
            <AccordionCard
              key={card.slug}
              card={card}
              index={i}
              activeIndex={activeIndex}
              fan={fan}
            />
          ))}
        </motion.div>

        <StepNav activeIndex={activeIndex} />
      </div>
    </section>
  );
}

// Chowdeck-style step rail — twelve numbered dots that fill with the matching
// orange as their panel passes, with the live step slightly enlarged.
function StepNav({ activeIndex }: { activeIndex: MotionValue<number> }) {
  return (
    <div className="mt-6 flex items-center justify-center gap-2 sm:gap-2.5">
      {CARDS.map((card, i) => (
        <StepIndicator
          key={card.slug}
          index={i}
          activeIndex={activeIndex}
          shade={ORANGE_SHADES[i % ORANGE_SHADES.length]}
        />
      ))}
    </div>
  );
}

function StepIndicator({
  index,
  activeIndex,
  shade,
}: {
  index: number;
  activeIndex: MotionValue<number>;
  shade: (typeof ORANGE_SHADES)[number];
}) {
  const number = String(index + 1).padStart(2, "0");

  // 0 before this step is reached, ramping to 1 as the active panel reaches it.
  const filled = useTransform(activeIndex, (v) =>
    Math.max(0, Math.min(1, v - index + 1))
  );
  // 1 when this step is the live one, 0 otherwise.
  const active = useTransform(activeIndex, (v) =>
    Math.max(0, 1 - Math.abs(v - index))
  );
  const scale = useTransform(active, [0, 1], [1, 1.22]);
  // Number flips from light-on-dark to dark-on-orange as the dot fills.
  const numberColor = useTransform(
    filled,
    [0, 1],
    ["rgba(255,255,255,0.72)", "rgba(11,12,15,0.72)"]
  );

  return (
    <motion.div
      aria-hidden
      style={{ scale }}
      className="relative h-8 w-8 shrink-0"
    >
      <span className="absolute inset-0 rounded-full border border-white/20 bg-white/5" />
      <motion.span
        style={{ opacity: filled }}
        className={`absolute inset-0 rounded-full ${shade.bg}`}
      />
      <motion.span
        style={{ opacity: active }}
        className="absolute inset-0 rounded-full ring-2 ring-white/40"
      />
      <motion.span
        style={{ color: numberColor }}
        className="absolute inset-0 flex items-center justify-center text-[11px] font-bold tabular-nums"
      >
        {number}
      </motion.span>
    </motion.div>
  );
}

function AccordionCard({
  card,
  index,
  activeIndex,
  fan,
}: {
  card: (typeof VALUE_CARDS)[number];
  index: number;
  activeIndex: MotionValue<number>;
  fan: MotionValue<number>;
}) {
  const shade = ORANGE_SHADES[index % ORANGE_SHADES.length];
  const number = String(index + 1).padStart(2, "0");

  // 1 when this card is the active one, easing to 0 within one card-width.
  const closeness = useTransform(activeIndex, (v) =>
    Math.max(0, 1 - Math.abs(v - index))
  );

  // Panel geometry: a square-ish active card rides alongside sturdy spines that
  // slide in as the row fans out, and corners that morph from a soft capsule to
  // a top-rounded slab. Viewport-based so the whole row always fits.
  const width = useTransform(
    [closeness, fan],
    ([c, f]: number[]) =>
      `${c * ACTIVE_WIDTH_VW + (1 - c) * f * SPINE_WIDTH_VW}vw`
  );
  const radius = useTransform(
    closeness,
    [0, 0.5],
    ["999px 999px 999px 999px", "28px 28px 0px 0px"]
  );

  // Collapsed spine: label drifts up and fades as the panel opens.
  const collapsedOpacity = useTransform(closeness, [0.3, 0.55], [1, 0]);
  const collapsedY = useTransform(closeness, [0.3, 0.55], [0, -16]);
  const collapsedPointerEvents = useTransform(closeness, (c) =>
    c < 0.5 ? "auto" : "none"
  );

  // Badge: pops in scale and rotates "+" → "×".
  const badgeScale = useTransform(closeness, [0, 0.6], [1, 1.18]);
  const badgeRotate = useTransform(closeness, [0, 1], [0, 45]);

  // Active glow / edge highlight, matched to this card's orange shade.
  const glowOpacity = useTransform(closeness, [0, 0.6], [0, 1]);

  // Expanded content cascades in — badge first, then the word, then the
  // supporting lines and the call-to-action — each slightly behind the last.
  const topOpacity = useTransform(closeness, [0.5, 0.7], [0, 1]);
  const topY = useTransform(closeness, [0.5, 0.8], [16, 0]);
  const wordOpacity = useTransform(closeness, [0.55, 0.8], [0, 1]);
  const wordY = useTransform(closeness, [0.55, 0.9], [40, 0]);
  const wordScale = useTransform(closeness, [0.55, 0.9], [0.92, 1]);
  const phoneticOpacity = useTransform(closeness, [0.65, 0.85], [0, 1]);
  const phoneticY = useTransform(closeness, [0.65, 0.9], [24, 0]);
  const taglineOpacity = useTransform(closeness, [0.7, 0.9], [0, 1]);
  const taglineY = useTransform(closeness, [0.7, 0.95], [22, 0]);
  const definitionOpacity = useTransform(closeness, [0.75, 0.95], [0, 1]);
  const definitionY = useTransform(closeness, [0.75, 1], [18, 0]);
  const ctaOpacity = useTransform(closeness, [0.8, 1], [0, 1]);
  const ctaY = useTransform(closeness, [0.8, 1], [14, 0]);
  const expandedPointerEvents = useTransform(closeness, (c) =>
    c > 0.5 ? "auto" : "none"
  );

  return (
    <motion.div
      style={{ width, borderRadius: radius }}
      className="relative flex-none overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.65)]"
    >
      {/* Solid fill + depth gradient */}
      <div className={`absolute inset-0 ${shade.bg}`} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/12 via-transparent to-black/25" />

      {/* Active glow: a matching top bloom, a bright top edge, and a hairline ring */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-x-0 top-0 h-48 blur-2xl"
          style={{
            background: `radial-gradient(70% 100% at 50% 0%, ${shade.hex}99, transparent 70%)`,
          }}
        />
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        <div className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/25" />
      </motion.div>

      {/* Collapsed: plus badge + rotated label — clickable, links to the card's page */}
      <motion.div
        style={{
          opacity: collapsedOpacity,
          y: collapsedY,
          pointerEvents: collapsedPointerEvents,
        }}
        className="absolute inset-0"
      >
        <Link
          href={`/values/${card.slug}`}
          className="flex h-full w-full flex-col items-center py-12"
        >
          <PlusBadge size={44} rotate={badgeRotate} scale={badgeScale} />
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
        style={{ pointerEvents: expandedPointerEvents }}
        className="absolute inset-0"
      >
        <Link
          href={`/values/${card.slug}`}
          className="flex h-full w-full min-w-[440px] flex-col p-11 xl:p-12"
        >
          <motion.div
            style={{ opacity: topOpacity, y: topY }}
            className="flex w-full items-start justify-between"
          >
            <PlusBadge size={44} rotate={badgeRotate} scale={badgeScale} />
            <span className="text-sm font-bold tracking-[0.2em] text-white/50">
              {number} / {CARDS.length}
            </span>
          </motion.div>

          <motion.p
            style={{ opacity: wordOpacity, y: wordY, scale: wordScale }}
            className="mt-7 origin-left font-display text-6xl font-bold leading-none text-white xl:text-7xl"
          >
            {card.word}
          </motion.p>

          <motion.p
            style={{ opacity: phoneticOpacity, y: phoneticY }}
            className="mt-3 text-base font-semibold uppercase tracking-[0.1em] text-white/70"
          >
            {card.phonetic}
          </motion.p>

          <motion.p
            style={{ opacity: taglineOpacity, y: taglineY }}
            className="mt-5 max-w-md text-lg leading-relaxed text-white/85 xl:text-xl"
          >
            {card.tagline}
          </motion.p>

          <motion.p
            style={{ opacity: definitionOpacity, y: definitionY }}
            className="mt-4 max-w-md text-sm leading-relaxed text-white/60"
          >
            {card.definition.join(" ")}
          </motion.p>

          <motion.span
            style={{ opacity: ctaOpacity, y: ctaY }}
            className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/25"
          >
            Read the definition →
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
