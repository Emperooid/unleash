import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "About — UNLEASH Hub",
  description: "About the UNLEASH Hub — page coming soon.",
};

export default function AboutPage() {
  return (
    <ComingSoon
      tone="ink"
      title="About"
      blurb="The story behind UNLEASH and the movement it's building — full page on the way."
    />
  );
}
