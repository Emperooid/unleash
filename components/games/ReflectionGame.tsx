"use client";

import { useEffect, useRef, useState } from "react";
import { Shuffle, Sparkles } from "lucide-react";

const PROMPTS = [
  {
    principle: "Vision",
    text: "Describe, in concrete detail, the person you intend to be in five years. What are you doing, with whom, and contributing what?",
  },
  {
    principle: "Diligence",
    text: "Where are you currently \u201cdoing your bit\u201d instead of doing whatever it takes for the outcome? What would the outcome-focused version of you do differently?",
  },
  {
    principle: "Courage",
    text: "What is one thing you\u2019ve been afraid to do that you know, deep down, is the right next step? What is that fear actually protecting you from?",
  },
  {
    principle: "Integrity",
    text: "Where is there a gap between what you say and what you do? Pick the smallest one and write out how you\u2019ll close it this week.",
  },
  {
    principle: "Gratitude",
    text: "List three things you\u2019ve been given that you\u2019ve stopped noticing. How does noticing them change how you show up today?",
  },
  {
    principle: "Patience",
    text: "What are you tempted to rush? What is one reason the waiting might actually be working for you?",
  },
  {
    principle: "Knowledge",
    text: "What is one thing you know that you haven\u2019t applied yet? What is the smallest way to test it this week?",
  },
  {
    principle: "Justice",
    text: "Where have you seen unfairness recently and said nothing? What would it have cost you to speak up \u2014 and what did silence cost?",
  },
  {
    principle: "Self-Control",
    text: "Where are you reacting instead of responding? What is the pause that would change the outcome?",
  },
  {
    principle: "Trustworthiness",
    text: "What small commitment to yourself have you broken recently? What would it take to keep it for the next seven days?",
  },
  {
    principle: "Compassion",
    text: "Who around you is carrying something heavy right now? What is one practical way you could lighten it?",
  },
  {
    principle: "Discipline",
    text: "What is the unglamorous repetition you\u2019ve been avoiding? What becomes possible if you simply don\u2019t miss it for a month?",
  },
];

export function ReflectionGame() {
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * PROMPTS.length)
  );
  const [text, setText] = useState<string>(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("unleash-reflection") ?? "";
  });
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const id = setTimeout(() => {
      localStorage.setItem("unleash-reflection", text);
    }, 400);
    return () => clearTimeout(id);
  }, [text]);

  const prompt = PROMPTS[index];

  function shufflePrompt() {
    let next = Math.floor(Math.random() * PROMPTS.length);
    if (next === index) next = (next + 1) % PROMPTS.length;
    setIndex(next);
    textareaRef.current?.focus();
  }

  return (
    <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/5 sm:p-10">
      <div className="mx-auto max-w-xl">
        <div className="flex items-center gap-2 text-pink-500">
          <Sparkles size={18} />
          <span className="text-xs font-bold uppercase tracking-[0.16em]">
            {prompt.principle}
          </span>
        </div>

        <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
          {prompt.text}
        </h2>

        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write freely. This is for you \u2014 it stays on your device."
          rows={8}
          className="mt-6 w-full resize-y rounded-2xl border border-ink/10 bg-paper p-5 text-base leading-relaxed text-ink outline-none transition-colors focus:border-pink-400"
        />

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-ink/45">
            Saved automatically on this device.
          </p>
          <button
            type="button"
            onClick={shufflePrompt}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pink-600"
          >
            <Shuffle size={16} />
            New prompt
          </button>
        </div>
      </div>
    </div>
  );
}
