import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, Users, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { AUTHOR } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — UNLEASH Hub",
  description:
    "The story behind UNLEASH and the movement it's building — equipping a generation to seize uncommon opportunities.",
};

const PILLARS = [
  {
    icon: BookOpen,
    title: "Equip",
    description:
      "The twelve principles, taught clearly and practically, so young people are prepared for the opportunities in front of them.",
  },
  {
    icon: Users,
    title: "Connect",
    description:
      "A community of changemakers — students, graduates, and early professionals — learning and growing together.",
  },
  {
    icon: Rocket,
    title: "Act",
    description:
      "Programmes, chapters, and projects that turn principles into measurable, real-world impact.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tone="orange"
        eyebrow="About UNLEASH"
        title="A movement for uncommon opportunity."
        description="UNLEASH exists to bridge the gap between where young people are and where they're capable of going — equipping them with timeless principles, real community, and a reason to act."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* The story */}
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="The story"
                title="You are not too young."
                description="At twenty-eight, Topsy Kola-Oyeneyin became a General Manager in Nigeria's oldest bank — a role typically occupied by people in their fifties."
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/70 sm:text-lg">
                {AUTHOR.story.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-ink/5">
                <Image
                  src="/book/launch-event.jpg"
                  alt="Topsy Kola-Oyeneyin at the UNLEASH book launch"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-[1.75rem] bg-ink p-7 text-white sm:p-9">
                <p className="font-display text-xl font-semibold leading-snug sm:text-2xl">
                  &ldquo;{AUTHOR.storyClose}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-orange-300">
                  — {AUTHOR.name}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Meet TKO */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-ink/5">
                <Image
                  src="/book/front.jpg"
                  alt="UNLEASH book cover"
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="Meet the author"
                title={AUTHOR.name}
                description={AUTHOR.role}
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70 sm:text-lg">
                {AUTHOR.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/book" size="lg">
                  Read about the book
                </Button>
                <Button
                  href={AUTHOR.linkedin}
                  size="lg"
                  variant="outline"
                  showArrow
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="What we do"
              title="Equip. Connect. Act."
              description="Three movements in one — because a principle you never apply is just a quote."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3">
            {PILLARS.map((pillar) => (
              <Reveal
                key={pillar.title}
                variants={staggerItem}
                className="h-full"
              >
                <div className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/5 sm:p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <pillar.icon size={24} strokeWidth={1.75} />
                  </span>
                  <p className="mt-5 font-display text-2xl font-bold text-ink">
                    {pillar.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to become part of the movement?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              Join a community of changemakers committed to living out the
              principles — and helping each other rise.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap justify-center gap-3">
            <Button
              href="/join"
              size="lg"
              className="!bg-cream !text-orange-600 hover:!bg-white"
            >
              Join the Hub
            </Button>
            <Button href="/hub" size="lg" variant="outline-light">
              Explore the community
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
