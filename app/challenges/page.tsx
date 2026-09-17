import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Challenges — UNLEASH Hub",
  description: "Daily challenges and games — page coming soon.",
};

export default function ChallengesPage() {
  return (
    <ComingSoon
      tone="ink"
      title="Challenges"
      blurb="Daily actions and games that build the principles into habit — a few are already live."
    >
      <Button href="/#principles" size="lg" className="mt-8">
        See the principles
      </Button>
    </ComingSoon>
  );
}
