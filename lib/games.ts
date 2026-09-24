// The UNLEASH Hub games — a small interactive set that turns the
// twelve principles into something you can play with.

export type Game = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  icon: string;
  accent: string;
  accentSoft: string;
};

export const GAMES: Game[] = [
  {
    slug: "principle-quiz",
    name: "Principle Quiz",
    blurb: "Test how well you know the 12 principles.",
    description:
      "Eight quick questions on the twelve UNLEASH principles. How sharp is your knowledge?",
    icon: "help-circle",
    accent: "bg-orange-500",
    accentSoft: "bg-orange-50",
  },
  {
    slug: "word-puzzle",
    name: "Word Puzzle",
    blurb: "Unscramble a principle a day.",
    description:
      "Unscramble the letters to reveal the principle. Five rounds \u2014 no timer, just focus.",
    icon: "puzzle",
    accent: "bg-card-purple",
    accentSoft: "bg-card-purple/10",
  },
  {
    slug: "daily-challenge",
    name: "Daily Challenge",
    blurb: "One small action, every day.",
    description:
      "A fresh, principle-driven action every single day. Do it, mark it, and keep the streak going.",
    icon: "flame",
    accent: "bg-card-green",
    accentSoft: "bg-card-green/10",
  },
  {
    slug: "reflection-game",
    name: "Reflection Game",
    blurb: "Prompts that make you pause and think.",
    description:
      "Open-ended prompts that turn the principles into honest self-reflection. Write it out.",
    icon: "pen-line",
    accent: "bg-card-pink",
    accentSoft: "bg-card-pink/10",
  },
];
