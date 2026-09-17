import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "The Hub — UNLEASH Hub",
  description: "The UNLEASH Hub community space — page coming soon.",
};

export default function HubPage() {
  return (
    <ComingSoon
      title="The Hub"
      blurb="A community space for K-12 students, university students, and young professionals — being built."
    />
  );
}
