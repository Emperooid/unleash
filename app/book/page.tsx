import type { Metadata } from "next";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Book3D } from "@/components/ui/Book3D";
import { AUTHOR, GLOBAL_LEADERS, PRAISE } from "@/lib/site";
import { BOOK_VENDORS } from "@/lib/content";

export const metadata: Metadata = {
  title: "UNLEASH — The Book",
  description:
    "UNLEASH: The Blueprint for a Life that Attracts Uncommon Opportunities — by Topsy Kola-Oyeneyin. Read the story, the praise, and get your copy.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        tone="ink"
        eyebrow="The Book"
        title={
          <>
            UNLEASH
            <span className="mt-2 block text-2xl font-semibold tracking-tight text-white/80 sm:text-3xl">
              The Blueprint for a Life that Attracts Uncommon Opportunities
            </span>
          </>
        }
        description="A practical manual for building a meaningful, impactful life — twelve principles, honest stories, and clear steps to position yourself for uncommon opportunities."
        crumbs={[{ label: "Home", href: "/" }, { label: "The Book" }]}
      >
        <Button href="/shop" size="lg">
          Get the book
        </Button>
        <Button href="#praise" size="lg" variant="outline-light">
          Read the praise
        </Button>
      </PageHero>

      {/* You're not too young */}
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <SectionHeading
                eyebrow="Opening pages"
                title="You are not too young."
                description="The book opens with a conviction — and a story that proves it."
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/70 sm:text-lg">
                {AUTHOR.story.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                <p className="font-display text-xl font-semibold text-ink">
                  {AUTHOR.storyClose}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="order-1 lg:order-2">
              <div className="flex items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-orange-500 via-orange-600 to-ink p-10 sm:p-14">
                <Book3D size="lg" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Global leaders */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Endorsements"
              title="What global leaders are saying"
              description="Leaders building across the continent weigh in on the book's impact."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2">
            {GLOBAL_LEADERS.map((item) => (
              <Reveal key={item.name} variants={staggerItem} className="h-full">
                <figure className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/5 sm:p-8">
                  <Quote
                    size={28}
                    className="text-orange-400"
                    strokeWidth={1.5}
                  />
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink/80">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 font-display text-sm font-bold text-orange-600">
                      {item.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">
                        {item.name}
                      </span>
                      <span className="block text-xs text-ink/55">
                        {item.title}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Look inside */}
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Look inside"
              title="A book meant to be worked through."
              description="Each chapter pairs honest stories with practical, applied wisdom."
            />
          </Reveal>
          <RevealGroup className="mt-12 grid grid-cols-2 gap-6 sm:mt-16">
            {[
              { src: "/book/front.jpg", alt: "UNLEASH front cover" },
              { src: "/book/back.jpg", alt: "UNLEASH back cover" },
            ].map((img) => (
              <Reveal key={img.src} variants={staggerItem}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-30px_rgba(11,12,15,0.5)]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 560px, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Meet the author */}
      <section className="bg-ink py-16 text-white sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="Meet the author"
                title={AUTHOR.name}
                description={AUTHOR.role}
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-white/70">
                {AUTHOR.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <Button
                href={AUTHOR.linkedin}
                size="lg"
                variant="outline-light"
                className="mt-8"
                showArrow
              >
                Connect on LinkedIn
              </Button>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/book/launch-event.jpg"
                  alt="Topsy Kola-Oyeneyin signing UNLEASH"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Praise */}
      <section id="praise" className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Praise for UNLEASH"
              title="Readers, in their own words."
              description="From first-time readers to repeat ones — what stays with people after the last page."
            />
          </Reveal>

          <Reveal className="mt-12 columns-1 gap-6 sm:mt-16 sm:columns-2 lg:columns-3">
            {PRAISE.map((item) => (
              <figure
                key={item.name}
                className="mb-6 break-inside-avoid rounded-3xl bg-white p-6 ring-1 ring-ink/5"
              >
                <div className="flex items-center gap-1 text-orange-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-ink/75">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-ink">
                  {item.name}
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Get the book */}
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Get your copy"
              title="Start your UNLEASH journey."
              description="Available in stores and online — grab a copy and begin."
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-7">
            {BOOK_VENDORS.map((vendor) => (
              <a
                key={vendor.name}
                href={vendor.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={vendor.name}
                className="shrink-0 transition-transform duration-200 hover:scale-110"
              >
                <Image
                  src={vendor.logo}
                  alt={vendor.name}
                  width={vendor.logoWidth}
                  height={vendor.logoHeight}
                  className="h-11 w-auto object-contain sm:h-14"
                />
              </a>
            ))}
          </Reveal>
          <Reveal delay={0.18} className="mt-12 flex justify-center">
            <Button href="/shop" size="lg">
              Shop the book &amp; more
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
