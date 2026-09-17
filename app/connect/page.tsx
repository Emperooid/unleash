import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Connect — UNLEASH Hub",
  description: "Events and activities near you — page coming soon.",
};

export default function ConnectPage() {
  return (
    <ComingSoon
      tone="ink"
      title="Connect"
      blurb="Find events, activities, and opportunities near you — city listings coming soon."
    />
  );
}
