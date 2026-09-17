import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Join the Hub — UNLEASH Hub",
  description: "Join the UNLEASH Hub — page coming soon.",
};

export default function JoinPage() {
  return (
    <ComingSoon
      title="Join the Hub"
      blurb="Sign-up and membership are being built. Check back soon — or follow along on Instagram for the moment it opens."
    >
      <Button
        href="https://www.instagram.com/theunleashhub/"
        size="lg"
        className="mt-8 !bg-cream !text-orange-600 hover:!bg-white"
      >
        Follow on Instagram
      </Button>
    </ComingSoon>
  );
}
