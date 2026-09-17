import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Blog — UNLEASH Hub",
  description: "The UNLEASH Hub blog — coming soon.",
};

export default function BlogPage() {
  return (
    <ComingSoon
      title="Blog"
      blurb="Articles and reflections on living out the principles — first posts coming soon."
    />
  );
}
