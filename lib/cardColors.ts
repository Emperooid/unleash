import type { ValueCardColor } from "@/lib/content";

// Explicit (non-dynamic) class strings so Tailwind's compiler can see them
// — template-literal class composition (e.g. `group-hover:${colors.bg}`)
// is invisible to Tailwind's static scanner and silently produces no CSS.
export const CARD_COLOR_CLASSES: Record<
  ValueCardColor,
  {
    bg: string;
    text: string;
    ink: string;
    ring: string;
    softBg: string;
    groupHoverBg: string;
  }
> = {
  blue: {
    bg: "bg-card-blue",
    text: "text-card-blue",
    ink: "text-card-blue-ink",
    ring: "ring-card-blue",
    softBg: "bg-card-blue/10",
    groupHoverBg: "group-hover:bg-card-blue",
  },
  green: {
    bg: "bg-card-green",
    text: "text-card-green",
    ink: "text-card-green-ink",
    ring: "ring-card-green",
    softBg: "bg-card-green/10",
    groupHoverBg: "group-hover:bg-card-green",
  },
  purple: {
    bg: "bg-card-purple",
    text: "text-card-purple",
    ink: "text-card-purple-ink",
    ring: "ring-card-purple",
    softBg: "bg-card-purple/10",
    groupHoverBg: "group-hover:bg-card-purple",
  },
  pink: {
    bg: "bg-card-pink",
    text: "text-card-pink",
    ink: "text-card-pink-ink",
    ring: "ring-card-pink",
    softBg: "bg-card-pink/10",
    groupHoverBg: "group-hover:bg-card-pink",
  },
  teal: {
    bg: "bg-card-teal",
    text: "text-card-teal",
    ink: "text-card-teal-ink",
    ring: "ring-card-teal",
    softBg: "bg-card-teal/10",
    groupHoverBg: "group-hover:bg-card-teal",
  },
  yellow: {
    bg: "bg-card-yellow",
    text: "text-card-yellow",
    ink: "text-card-yellow-ink",
    ring: "ring-card-yellow",
    softBg: "bg-card-yellow/10",
    groupHoverBg: "group-hover:bg-card-yellow",
  },
};
