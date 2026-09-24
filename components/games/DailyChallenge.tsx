"use client";

import { useState } from "react";
import { Check, Flame } from "lucide-react";
import { cn } from "@/lib/cn";

type Challenge = { principle: string; action: string };

const CHALLENGES: Challenge[] = [
  {
    principle: "Diligence",
    action:
      "Pick one task you\u2019ve been \u201cdoing your bit\u201d on and finish it to the outcome \u2014 not the attempt \u2014 before the day ends.",
  },
  {
    principle: "Justice",
    action:
      "Defend someone or something that is right today \u2014 speak up, credit someone\u2019s work, or correct an unfairness you notice.",
  },
  {
    principle: "Knowledge",
    action:
      "Learn one new thing and apply it the same day. Turn information into understanding.",
  },
  {
    principle: "Discipline",
    action:
      "Do the one thing you\u2019ve been avoiding \u2014 no negotiating with the feeling, just do it.",
  },
  {
    principle: "Compassion",
    action:
      "Notice someone struggling and reach out. One genuine message or act of help.",
  },
  {
    principle: "Trustworthiness",
    action:
      "Keep a small commitment nobody is watching. Your word to yourself counts.",
  },
  {
    principle: "Integrity",
    action:
      "Close the gap between what you say and what you do today \u2014 even in one small area.",
  },
  {
    principle: "Self-Control",
    action:
      "Pause before reacting once today. Respond on purpose, not on impulse.",
  },
  {
    principle: "Courage",
    action:
      "Do one thing that scares you a little \u2014 send the message, make the ask, take the step.",
  },
  {
    principle: "Gratitude",
    action:
      "Write down three things you\u2019ve been given that you\u2019ve been overlooking, and thank someone.",
  },
  {
    principle: "Patience",
    action:
      "Stick with a long-term goal for one more deliberate step today, without checking for quick results.",
  },
  {
    principle: "Vision",
    action:
      "Spend ten minutes writing a clear picture of who you want to become in five years.",
  },
];

function dayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date.getTime() - start.getTime()) / 86400000);
}

export function DailyChallenge() {
  const today = new Date();
  const key = `unleash-daily-${today.toISOString().slice(0, 10)}`;
  const challenge = CHALLENGES[dayOfYear(today) % CHALLENGES.length];

  const [done, setDone] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(key) === "done";
  });

  function markDone() {
    localStorage.setItem(key, "done");
    setDone(true);
  }

  function undo() {
    localStorage.removeItem(key);
    setDone(false);
  }

  const formatted = today.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/5 sm:p-10">
      <div className="mx-auto max-w-xl">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink/50">
          {formatted}
        </p>

        <div className="mt-6 rounded-3xl bg-gradient-to-br from-green-600 to-green-700 p-6 text-white sm:p-8">
          <div className="flex items-center gap-2 text-green-100">
            <Flame size={18} />
            <span className="text-xs font-bold uppercase tracking-[0.16em]">
              Today\u2019s principle
            </span>
          </div>
          <p className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            {challenge.principle}
          </p>
          <p className="mt-3 text-base leading-relaxed text-white/90">
            {challenge.action}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          {done ? (
            <div className="flex items-center gap-2 text-green-600">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <Check size={18} strokeWidth={2.5} />
              </span>
              <span className="font-semibold">Done for today \u2014 well played.</span>
            </div>
          ) : (
            <p className="text-sm text-ink/55">
              A different challenge arrives tomorrow. Come back daily.
            </p>
          )}

          <button
            type="button"
            onClick={done ? undo : markDone}
            className={cn(
              "rounded-full px-6 py-3 text-sm font-semibold transition-colors",
              done
                ? "bg-cream text-ink/60 hover:bg-cream/70"
                : "bg-green-600 text-white hover:bg-green-700"
            )}
          >
            {done ? "Undo" : "I did it"}
          </button>
        </div>
      </div>
    </div>
  );
}
