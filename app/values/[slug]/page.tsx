import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VALUE_CARDS, VALUE_DETAILS } from "@/lib/content";
import { CARD_COLOR_CLASSES } from "@/lib/cardColors";

export function generateStaticParams() {
  return VALUE_CARDS.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const card = VALUE_CARDS.find((c) => c.slug === slug);
  if (!card) return {};
  return {
    title: `${card.word} — UNLEASH Hub`,
    description: card.tagline,
  };
}

export default async function ValuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = VALUE_CARDS.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();

  const card = VALUE_CARDS[index];
  const details = VALUE_DETAILS[card.slug];
  const next = VALUE_CARDS[(index + 1) % VALUE_CARDS.length];
  const colors = CARD_COLOR_CLASSES[card.color];

  return (
    <article className={`${colors.bg} min-h-screen`}>
      <Container className="max-w-3xl py-14 sm:py-20">
        <Reveal>
          <Link
            href="/#principles"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            All principles
          </Link>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-8 font-display text-6xl font-bold leading-none text-cream sm:text-7xl">
            {card.word}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 font-display text-xl text-white/85 sm:text-2xl">
            (n.) {card.phonetic}
          </p>
        </Reveal>

        <Reveal delay={0.16} className="mt-8 space-y-5 sm:mt-10">
          {card.definition.map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-white/90 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        {details && (
          <>
            <Reveal delay={0.2} className="mt-12 sm:mt-14">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                In practice
              </h2>
              <ul className="mt-5 space-y-3">
                {details.inPractice.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <Check size={12} className="text-white" />
                    </span>
                    <span className="text-base leading-relaxed text-white/90 sm:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26} className="mt-12 sm:mt-14">
              <div className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/15 sm:p-8">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  <Sparkles size={14} className="text-white/70" />
                  Reflect
                </p>
                <p className="mt-3 font-display text-xl font-bold leading-snug text-cream sm:text-2xl">
                  {details.reflection}
                </p>
              </div>
            </Reveal>
          </>
        )}

        <Reveal delay={0.32} className="mt-12 border-t border-white/15 pt-8 sm:mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            Next principle
          </p>
          <Link
            href={`/values/${next.slug}`}
            className="mt-2 inline-flex items-center gap-2 font-display text-2xl font-bold text-cream transition-opacity hover:opacity-80"
          >
            {next.word} →
          </Link>
        </Reveal>
      </Container>
    </article>
  );
}
