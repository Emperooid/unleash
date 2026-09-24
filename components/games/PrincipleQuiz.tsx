"use client";

import { useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import { cn } from "@/lib/cn";

type Question = {
  prompt: string;
  options: string[];
  answer: number;
};

const QUESTIONS: Question[] = [
  {
    prompt: "Which principle means \u201csteady, earnest, and energetic effort\u201d?",
    options: ["Diligence", "Patience", "Courage", "Vision"],
    answer: 0,
  },
  {
    prompt:
      "Which principle is \u201cthe alignment between what you believe, what you say, and what you do\u201d?",
    options: ["Justice", "Integrity", "Compassion", "Self-Control"],
    answer: 1,
  },
  {
    prompt:
      "Which principle is called \u201cthe bridge between goals and accomplishment\u201d?",
    options: ["Discipline", "Knowledge", "Gratitude", "Trustworthiness"],
    answer: 0,
  },
  {
    prompt:
      "Which principle is \u201ca deep awareness of another\u2019s suffering, paired with the wish to relieve it\u201d?",
    options: ["Courage", "Compassion", "Justice", "Vision"],
    answer: 1,
  },
  {
    prompt: "Which principle means \u201cgiving every person what they are rightly due\u201d?",
    options: ["Knowledge", "Diligence", "Justice", "Patience"],
    answer: 2,
  },
  {
    prompt: "Which principle is \u201cthe capacity to endure delay without giving up\u201d?",
    options: ["Patience", "Discipline", "Self-Control", "Gratitude"],
    answer: 0,
  },
  {
    prompt: "Which principle is \u201ca vivid mental image of what could be\u201d?",
    options: ["Vision", "Courage", "Knowledge", "Integrity"],
    answer: 0,
  },
  {
    prompt: "Which principle is \u201creadiness to notice and return kindness\u201d?",
    options: ["Compassion", "Gratitude", "Trustworthiness", "Justice"],
    answer: 1,
  },
];

export function PrincipleQuiz() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = QUESTIONS[index];
  const total = QUESTIONS.length;

  function choose(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (i === question.answer) setScore((s) => s + 1);
  }

  function next() {
    if (index + 1 >= total) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
  }

  function restart() {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / total) * 100);
    const verdict =
      pct === 100
        ? "Flawless. You know your principles cold."
        : pct >= 75
          ? "Strong. A couple more reps and you\u2019ll have all twelve."
          : pct >= 50
            ? "Solid start \u2014 revisit the principles to sharpen up."
            : "Good effort. Spend a little time with the principles and run it back.";

    return (
      <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/5 sm:p-10">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <Check size={28} strokeWidth={2.5} />
          </div>
          <p className="mt-5 font-display text-3xl font-bold text-ink">
            {score} / {total}
          </p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-ink/50">
            {pct}%
          </p>
          <p className="mt-4 text-ink/65">{verdict}</p>
          <button
            type="button"
            onClick={restart}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            <RotateCcw size={16} />
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/5 sm:p-10">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink/50">
          Question {index + 1} of {total}
        </p>
        <p className="text-sm font-semibold text-orange-600">
          Score {score}
        </p>
      </div>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-cream">
        <div
          className="h-full rounded-full bg-orange-500 transition-all duration-500"
          style={{ width: `${((index + (picked !== null ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <h2 className="mt-7 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
        {question.prompt}
      </h2>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {question.options.map((option, i) => {
          const isAnswer = picked !== null && i === question.answer;
          const isWrongPick = picked === i && i !== question.answer;
          return (
            <button
              key={option}
              type="button"
              onClick={() => choose(i)}
              disabled={picked !== null}
              className={cn(
                "flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-base font-semibold transition-all",
                picked === null &&
                  "border-ink/10 bg-white text-ink hover:border-orange-400 hover:bg-orange-50",
                isAnswer && "border-orange-500 bg-orange-500 text-white",
                isWrongPick && "border-red-300 bg-red-50 text-red-600",
                picked !== null && !isAnswer && !isWrongPick && "border-ink/5 text-ink/40"
              )}
            >
              {option}
              {isAnswer && <Check size={18} strokeWidth={2.5} />}
              {isWrongPick && <X size={18} strokeWidth={2.5} />}
            </button>
          );
        })}
      </div>

      <div className="mt-7 flex justify-end">
        <button
          type="button"
          onClick={next}
          disabled={picked === null}
          className={cn(
            "rounded-full px-6 py-3 text-sm font-semibold transition-colors",
            picked === null
              ? "cursor-not-allowed bg-cream text-ink/40"
              : "bg-ink text-white hover:bg-orange-600"
          )}
        >
          {index + 1 >= total ? "See results" : "Next question"}
        </button>
      </div>
    </div>
  );
}
