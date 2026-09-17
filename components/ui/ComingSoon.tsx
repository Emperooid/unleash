import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ComingSoon({
  title,
  blurb,
  tone = "orange",
  children,
}: {
  title: string;
  blurb: string;
  tone?: "orange" | "ink";
  children?: ReactNode;
}) {
  const isOrange = tone === "orange";

  return (
    <section className={isOrange ? "bg-orange-500 py-28 sm:py-40" : "bg-ink py-28 text-white sm:py-40"}>
      <Container className="max-w-2xl text-center">
        <span
          className={
            isOrange
              ? "inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white"
              : "inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-orange-300"
          }
        >
          Coming Soon
        </span>
        <h1
          className={
            isOrange
              ? "mt-6 font-display text-4xl font-bold text-white sm:text-5xl"
              : "mt-6 font-display text-4xl font-bold sm:text-5xl"
          }
        >
          {title}
        </h1>
        <p className={isOrange ? "mt-4 text-white/85" : "mt-4 text-white/65"}>{blurb}</p>
        {children ?? (
          <Button
            href="/"
            size="lg"
            className={isOrange ? "mt-8 !bg-cream !text-orange-600 hover:!bg-white" : "mt-8"}
          >
            Back home
          </Button>
        )}
      </Container>
    </section>
  );
}
