import type { Metadata } from "next";
import {
  Users,
  BookOpen,
  Rocket,
  MessageCircle,
  Sparkles,
  Sprout,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JOIN_FORM_URL, HUB_AUDIENCES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join the Hub — UNLEASH Hub",
  description:
    "Join the UNLEASH Hub — a community of changemakers. Fill the short form and receive an email to join the WhatsApp community.",
};

const WHY: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Users,
    title: "A real community",
    description:
      "Connect with students, graduates, and early professionals who are building with intention.",
  },
  {
    icon: BookOpen,
    title: "Tools & knowledge",
    description:
      "Access articles, videos, training materials, and the principles that underpin it all.",
  },
  {
    icon: Rocket,
    title: "Opportunities to act",
    description:
      "Mentorship, projects, chapters, and collaborations that turn learning into impact.",
  },
];

const STEPS = [
  {
    title: "Fill the short form",
    description: "Tell us a little about you and where you are in the journey.",
  },
  {
    title: "Get the invite email",
    description: "Receive an email with everything you need to join.",
  },
  {
    title: "Join the community",
    description: "Step into the WhatsApp community and start connecting.",
  },
];

const AUDIENCE_ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  sprout: Sprout,
  "graduation-cap": GraduationCap,
  "book-open": BookOpen,
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        tone="orange"
        eyebrow="Join the Hub"
        title="Become part of the movement."
        description="Join a vibrant community of young changemakers equipped to seize uncommon opportunities — and help each other rise."
        crumbs={[{ label: "Home", href: "/" }, { label: "Join" }]}
      >
        <Button
          href={JOIN_FORM_URL}
          size="lg"
          className="!bg-cream !text-orange-600 hover:!bg-white"
        >
          Fill the form
        </Button>
      </PageHero>

      {/* Why join */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Why join"
              title="More than a community. A launchpad."
              description="The Hub exists to help you prepare, position, and take advantage of uncommon opportunities."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3">
            {WHY.map((item) => (
              <Reveal key={item.title} variants={staggerItem} className="h-full">
                <div className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/5 sm:p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <item.icon size={24} strokeWidth={1.75} />
                  </span>
                  <p className="mt-5 font-display text-xl font-bold text-ink">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Who it's for"
              title="Wherever you are, there's a seat for you."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {HUB_AUDIENCES.map((audience) => {
              const Icon = AUDIENCE_ICONS[audience.icon] ?? Sparkles;
              return (
                <Reveal key={audience.title} variants={staggerItem} className="h-full">
                  <div className="flex h-full flex-col rounded-3xl bg-white p-6 ring-1 ring-ink/5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <p className="mt-4 font-display text-lg font-bold text-ink">
                      {audience.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                      {audience.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      {/* How to join */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="How to join"
              title="Three simple steps."
            />
          </Reveal>

          <RevealGroup className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} variants={staggerItem} className="h-full">
                <div className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 font-display text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="mt-5 font-display text-lg font-bold text-ink">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-12 flex items-center justify-center gap-3 text-sm text-ink/55">
            <MessageCircle size={16} />
            Joined via WhatsApp community invite
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Ready to join The UNLEASH Hub?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/75">
              Take the first step by filling out our form. We can&apos;t wait to
              welcome you into the community of changemakers.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap justify-center gap-3">
            <Button href={JOIN_FORM_URL} size="lg">
              Fill the form
            </Button>
            <Button
              href="https://www.instagram.com/theunleashhub"
              size="lg"
              variant="outline-light"
            >
              Follow on Instagram
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
