import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Readers Programme — UNLEASH Hub",
  description: "The Unleashed Readers Programme — page coming soon.",
};

export default function ReadersProgrammePage() {
  return (
    <ComingSoon
      tone="ink"
      title="Readers Programme"
      blurb="An immersive programme where readers go deeper, apply the principles, and grow in community — details coming soon."
    />
  );
}
