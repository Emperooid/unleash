import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IndexScore } from "@/components/IndexScore";

export const metadata: Metadata = {
  title: "Unleash Index — UNLEASH Hub",
  description:
    "Measure where you stand on each of the twelve UNLEASH principles and track your progress over time.",
};

export default function IndexScorePage() {
  return (
    <>
      <PageHero
        tone="orange"
        eyebrow="Unleash Index"
        title="Measure where you stand."
        description="Rate yourself honestly on each of the twelve principles. Your Unleash Index is a starting point — not a judgement — to help you see where you're strongest and where to focus next."
        crumbs={[{ label: "Home", href: "/" }, { label: "Unleash Index" }]}
      />

      <section className="bg-cream py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal className="mb-10 text-center">
            <SectionHeading
              align="center"
              eyebrow="How it works"
              title="Be honest. Start anywhere."
              description="Rate each principle from rarely (1) to consistently (5). Your answers are saved on this device so you can come back and track progress."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <IndexScore />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
