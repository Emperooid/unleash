import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Initiatives — UNLEASH Hub",
  description: "UNLEASH Hub initiatives — page coming soon.",
};

export default function InitiativesPage() {
  return (
    <ComingSoon
      tone="ink"
      title="Initiatives"
      blurb="This page will cover the Readers Programme, campus chapters, and community projects in detail — content is on the way."
    />
  );
}
