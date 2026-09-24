"use client";

import { useEffect, useMemo, useState } from "react";
import { RotateCcw, TrendingUp } from "lucide-react";
import { cn } from "@/lib/cn";
import { VALUE_CARDS } from "@/lib/content";
import { CARD_COLOR_CLASSES } from "@/lib/cardColors";

const LEVELS = [
  { value: 1, label: "Rarely" },
  { value: 2, label: "Sometimes" },
  { value: 3, label: "Often" },
  { value: 4, label: "Usually" },
  { value: 5, label: "Consistently" },
];

export function IndexScore() {
  const [ratings, setRatings] = useState<Record<string, number>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const saved = localStorage.getItem("unleash-index");
      return saved ? (JSON.parse(saved) as Record<string, number>) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    const id = setTimeout(() => {
      localStorage.setItem("unleash-index", JSON.stringify(ratings));
    }, 400);
    return () => clearTimeout(id);
  }, [ratings]);

  const answered = VALUE_CARDS.filter((c) => ratings[c.slug]);
  const answeredCount = answered.length;
  const total = answered.reduce((sum, c) => sum + (ratings[c.slug] ?? 0), 0);
  const index =
    answeredCount > 0
      ? Math.round((total / (answeredCount * 5)) * 100)
      : 0;

  const strongest = useMemo(() => {
    if (answeredCount === 0) return null;
    return answered.reduce((best, c) =>
      (ratings[c.slug] ?? 0) > (ratings[best.slug] ?? 0) ? c : best
    );
  }, [answered, ratings, answeredCount]);

  const weakest = useMemo(() => {
    if (answeredCount === 0) return null;
    return answered.reduce((low, c) =>
      (ratings[c.slug] ?? 6) < (ratings[low.slug] ?? 6) ? c : low
    );
  }, [answered, ratings, answeredCount]);

  const verdict =
    index >= 85
      ? "You're living these principles. Keep leading by example."
      : index >= 70
        ? "Strong footing. A little consistency turns this into a lifestyle."
        : index >= 50
          ? "You're on the way. Pick one principle and build it into a daily habit."
          : "Early days — and that's exactly where everyone starts. Begin with one."

  function setRating(slug: string, value: number) {
    setRatings((r) => ({ ...r, [slug]: value }));
  }

  function reset() {
    setRatings({});
    localStorage.removeItem("unleash-index");
  }

  return (
    <div className="space-y-6">
      {/* Score card */}
      <div className="rounded-3xl bg-ink p-7 text-white sm:p-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
              Your Unleash Index
            </p>
            <p className="mt-2 font-display text-5xl font-bold sm:text-6xl">
              {answeredCount === 0 ? "—" : `${index}`}
              <span className="text-2xl text-white/50 sm:text-3xl">/100</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-white/60">
              {answeredCount === 0
                ? "Rate each principle below to reveal your index."
                : `Based on ${answeredCount} of 12 principles.`}
            </p>
          </div>

          {answeredCount > 0 && (
            <div className="w-full max-w-xs rounded-2xl bg-white/5 p-5">
              <p className="text-sm text-white/60">{verdict}</p>
              {strongest && weakest && strongest.slug !== weakest.slug && (
                <div className="mt-4 space-y-3 text-sm">
                  <p className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-green-400" />
                    <span className="text-white/70">Strongest:</span>
                    <span className="font-semibold text-white">
                      {strongest.word}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-400" />
                    <span className="text-white/70">Next focus:</span>
                    <span className="font-semibold text-white">
                      {weakest.word}
                    </span>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Ratings */}
      <div className="space-y-4">
        {VALUE_CARDS.map((card, i) => {
          const colors = CARD_COLOR_CLASSES[card.color];
          const value = ratings[card.slug] ?? 0;
          return (
            <div
              key={card.slug}
              className="rounded-3xl bg-white p-5 ring-1 ring-ink/5 sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="sm:max-w-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-display text-lg font-bold text-ink">
                      {card.word}
                    </p>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-ink/50">
                    {card.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  {LEVELS.map((level) => {
                    const active = value >= level.value;
                    return (
                      <button
                        key={level.value}
                        type="button"
                        title={level.label}
                        aria-label={`${card.word}: ${level.label}`}
                        onClick={() => setRating(card.slug, level.value)}
                        className={cn(
                          "h-9 w-9 rounded-full text-xs font-bold transition-all sm:h-10 sm:w-10",
                          active
                            ? cn(colors.bg, "text-white")
                            : "bg-cream text-ink/40 hover:bg-orange-100 hover:text-ink/60"
                        )}
                      >
                        {level.value}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-ink/45">
          {LEVELS.map((l) => `${l.value} = ${l.label}`).join(" · ")}
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink/70 transition-colors hover:border-orange-400 hover:text-ink"
        >
          <RotateCcw size={15} />
          Reset
        </button>
      </div>
    </div>
  );
}
