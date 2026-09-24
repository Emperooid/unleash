import type { Metadata } from "next";
import {
  BookOpen,
  Presentation,
  Users,
  MonitorPlay,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { CONNECT_WAYS, SOCIALS } from "@/lib/site";
import {
  InstagramBrandIcon,
  LinkedInBrandIcon,
  TikTokBrandIcon,
  XBrandIcon,
} from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Connect — UNLEASH Hub",
  description:
    "Events, masterclasses, community meetups, and the newsletter — every way to stay connected to the UNLEASH Hub.",
};

const WAY_ICONS: Record<string, LucideIcon> = {
  "book-open": BookOpen,
  presentation: Presentation,
  users: Users,
  "monitor-play": MonitorPlay,
};

const SOCIAL_ICONS = {
  instagram: InstagramBrandIcon,
  linkedin: LinkedInBrandIcon,
  x: XBrandIcon,
  tiktok: TikTokBrandIcon,
};

export default function ConnectPage() {
  return (
    <>
      <PageHero
        tone="ink"
        eyebrow="Connect"
        title="Stay close to the movement."
        description="Events, masterclasses, meetups, and a weekly insight — every way to stay connected, keep learning, and find your people."
        crumbs={[{ label: "Home", href: "/" }, { label: "Connect" }]}
      />

      {/* Ways to connect */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Ways to connect"
              title="There's always something happening."
              description="From intimate readings to skills-based workshops — here's how the community gathers."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2">
            {CONNECT_WAYS.map((way) => {
              const Icon = WAY_ICONS[way.icon] ?? Users;
              return (
                <Reveal key={way.title} variants={staggerItem} className="h-full">
                  <div className="flex h-full gap-5 rounded-3xl bg-white p-7 ring-1 ring-ink/5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                      <Icon size={24} strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-display text-lg font-bold text-ink">
                        {way.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                        {way.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="bg-cream py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 rounded-[1.75rem] bg-ink p-8 text-white sm:p-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="Newsletter"
                title="One practical insight, every week."
                description="Join thousands of young people living intentionally. A short, useful read on the principles and the opportunities around them."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <NewsletterForm variant="dark" className="max-w-md" />
              <p className="mt-3 text-xs text-white/50">
                No spam. Unsubscribe anytime.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Socials */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Follow along"
              title="Connect with us online."
              description="Daily encouragement, updates, and the community in motion."
            />
          </Reveal>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {Object.entries(SOCIALS).map(([key, social]) => {
              const Icon = SOCIAL_ICONS[key as keyof typeof SOCIAL_ICONS];
              if (!Icon) return null;
              return (
                <a
                  key={key}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-2.5"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon size={48} />
                  </span>
                  <span className="text-xs font-semibold text-ink/55">
                    {social.handle}
                  </span>
                </a>
              );
            })}
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to get involved?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              The best way to stay close is to be part of it. Join the
              community and never miss a thing.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Button
              href="/join"
              size="lg"
              className="!bg-cream !text-orange-600 hover:!bg-white"
            >
              Join the Hub
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
