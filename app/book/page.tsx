import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "The Book — UNLEASH Hub",
  description: "The UNLEASH book — dedicated page coming soon.",
};

export default function BookPage() {
  return (
    <ComingSoon
      title="The Book"
      blurb="A full page for the book — excerpts, reviews, and more — is coming. In the meantime, you can already get a copy."
    >
      <Button
        href="/shop"
        size="lg"
        className="mt-8 !bg-cream !text-orange-600 hover:!bg-white"
      >
        Shop the book
      </Button>
    </ComingSoon>
  );
}
