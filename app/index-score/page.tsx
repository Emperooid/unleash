import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Unleash Index — UNLEASH Hub",
  description: "The Unleash Index — page coming soon.",
};

export default function IndexScorePage() {
  return (
    <ComingSoon
      title="Unleash Index"
      blurb="Measure where you stand on each principle and track your progress over time — coming soon."
    />
  );
}
