"use client";

import { useMemo, useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import { cn } from "@/lib/cn";

type Entry = { word: string; hint: string };

const WORDS: Entry[] = [
  { word: "Diligence", hint: "Steady, earnest, energetic effort." },
  { word: "Justice", hint: "Giving every person what they are rightly due." },
  { word: "Vision", hint: "A vivid mental image of what could be." },
  { word: "Discipline", hint: "The bridge between goals and accomplishment." },
  { word: "Integrity", hint: "Wholeness between what you believe, say, and do." },
  { word: "Courage", hint: "Strength in the face of pain, fear, or grief." },
];

function scramble(word: string): string {
  const chars = word.toUpperCase().split("");
  let shuffled = [...chars];
  do {
    shuffled = [...chars].sort(() => Math.random() - 0.5);
  } while (shuffled.join("") === chars.join(""));
  return shuffled.join(" ");
}

export function WordPuzzle() {
  const [round, setRound] = useState(0);
  const [guess, setGuess] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const scrambled = useMemo(() => scramble(WORDS[round].word), [round]);
  const entry = WORDS[round];
  const correct = guess.trim().toLowerCase() === entry.word.toLowerCase();

  function submit() {
    if (!guess.trim()) return;
    setRevealed(true);
    if (correct) setScore((s) => s + 1);
  }

  function next() {
    if (round + 1 >= WORDS.length) {
      setFinished(true);
      return;
    }
    setRound((r) => r + 1);
    setGuess("");
    setRevealed(false);
  }

  function restart() {
    setRound(0);
    setGuess("");
    setRevealed(false);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/5 sm:p-10">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
            <Check size={28} strokeWidth={2.5} />
          </div>
          <p className="mt-5 font-display text-3xl font-bold text-ink">
            {score} / {WORDS.length}
          </p>
          <p className="mt-4 text-ink/65">
            {score === WORDS.length
              ? "Every principle unscrambled. Sharp mind."
              : "Nice work \u2014 run it back and catch them all."}
          </p>
          <button
            type="button"
            onClick={restart}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            <RotateCcw size={16} />
            Play again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/5 sm:p-10">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink/50">
          Round {round + 1} of {WORDS.length}
        </p>
        <p className="text-sm font-semibold text-purple-600">Score {score}</p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {scrambled.split(" ").map((letter, i) => (
          <span
            key={i}
            className="flex h-14 w-10 items-center justify-center rounded-xl bg-cream font-display text-2xl font-bold text-ink sm:h-16 sm:w-12 sm:text-3xl"
          >
            {letter}
          </span>
        ))}
      </div>

      <p className="mt-5 text-center text-sm text-ink/55">
        <span className="font-semibold text-ink/70">Hint:</span> {entry.hint}
      </p>

      {!revealed ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          className="mx-auto mt-7 flex max-w-md gap-3"
        >
          <input
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Type the principle"
            autoCapitalize="none"
            className="w-full flex-1 rounded-full border border-ink/10 bg-paper px-5 py-3 text-base font-semibold text-ink outline-none transition-colors focus:border-purple-400"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-600"
          >
            Check
          </button>
        </form>
      ) : (
        <div className="mx-auto mt-7 max-w-md">
          <div
            className={cn(
              "flex items-center justify-between gap-3 rounded-2xl px-5 py-4 font-semibold",
              correct ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"
            )}
          >
            <span className="font-display text-xl font-bold">{entry.word}</span>
            {correct ? <Check size={20} /> : <X size={20} />}
          </div>
          <button
            type="button"
            onClick={next}
            className="mt-4 w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-600"
          >
            {round + 1 >= WORDS.length ? "See results" : "Next word"}
          </button>
        </div>
      )}
    </div>
  );
}
