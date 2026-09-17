import Image from "next/image";
import { Play, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BOOK_TESTIMONIAL, BOOK_VENDORS } from "@/lib/content";

export function UnleashStory() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Left: event photo + story card */}
          <Reveal className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-ink/5">
              <Image
                src="/book/launch-event.jpg"
                alt="Topsy Kola-Oyeneyin signing a copy of UNLEASH at the book launch"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="rounded-[1.75rem] bg-paper p-7 shadow-[0_1px_0_0_rgba(11,12,15,0.06)] ring-1 ring-ink/5 sm:p-9">
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                The UNLEASH Story
              </h2>
              <p className="mt-3 text-ink/65">
                Curious to know how this journey started?
              </p>
              <Button
                href="https://www.youtube.com"
                size="md"
                className="mt-6"
                icon={<Play size={16} fill="currentColor" />}
              >
                Watch the book launch
              </Button>
            </div>
          </Reveal>

          {/* Right: book stack + testimonial + attribution + vendors */}
          <Reveal delay={0.1} className="flex flex-col">
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[180px_1fr] sm:gap-8">
              <div className="relative mx-auto aspect-square w-40 sm:mx-0 sm:w-full">
                <Image
                  src="/book/book-stack.png"
                  alt="UNLEASH book, front and back cover"
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>

              <blockquote className="text-lg leading-relaxed text-ink sm:text-xl">
                &ldquo;{BOOK_TESTIMONIAL.quote}&rdquo;
              </blockquote>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button
                href="/shop"
                size="md"
                className="!bg-[#1FA060] hover:!bg-[#188a51]"
              >
                Get the book
              </Button>

              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-md sm:h-20 sm:w-20">
                  <Image
                    src="/testimonials/shola-akinlade.png"
                    alt={BOOK_TESTIMONIAL.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-bold text-ink sm:text-lg">
                    {BOOK_TESTIMONIAL.name}
                  </p>
                  <p className="text-xs text-ink/55 sm:text-sm">{BOOK_TESTIMONIAL.title}</p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm italic text-ink/50">
              &hellip;also available on
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-9 gap-y-6 sm:gap-x-10">
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
            </div>

            <Button
              href="#"
              size="md"
              className="mt-8 w-fit"
              icon={<Star size={16} fill="currentColor" />}
            >
              Leave a review
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
