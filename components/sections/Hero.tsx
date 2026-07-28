import Image from "next/image";
import { BookOpen, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const AVATAR_GRADIENTS = [
  "from-orange-400 to-orange-600",
  "from-orange-300 to-orange-500",
  "from-orange-500 to-ink",
  "from-ink to-orange-700",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-orange-600/25 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-orange-400/15 blur-[120px]"
        aria-hidden
      />

      <Container className="relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
              You were born for more
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]">
              You&apos;re <span className="text-orange-400">Not</span> Too
              Young.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">
              You were born for more. Build the life. Impact the world.
              Attract uncommon opportunities.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/book" size="lg" icon={<BookOpen size={18} />}>
              Get the Book
            </Button>
            <Button href="/join" variant="outline-light" size="lg" showArrow>
              Join the Hub
            </Button>
          </Reveal>

          <Reveal delay={0.32} className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {AVATAR_GRADIENTS.map((gradient, i) => (
                <span
                  key={i}
                  className={`h-10 w-10 rounded-full border-2 border-ink bg-gradient-to-br ${gradient}`}
                />
              ))}
            </div>
            <p className="text-sm text-white/60">
              <span className="font-semibold text-white">10,000+</span> young
              people growing, learning and leading together.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:ml-auto lg:max-w-md">
          <div className="relative aspect-[3/4] w-full">
            <div
              className="absolute -inset-10 rounded-[3rem] bg-orange-500/25 blur-[90px]"
              aria-hidden
            />

            <div className="group relative h-full w-full -rotate-2 overflow-hidden rounded-2xl shadow-[0_50px_100px_-25px_rgba(0,0,0,0.7)] ring-1 ring-white/10 transition-transform duration-500 ease-out hover:rotate-0">
              <Image
                src="/book/front.jpg"
                alt="UNLEASH book cover — The Blueprint for a Life that Attracts Uncommon Opportunities"
                fill
                priority
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 340px, 260px"
                className="object-cover"
              />
            </div>

            <span className="absolute -top-4 left-6 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink shadow-lg">
              <Star size={12} className="fill-orange-500 text-orange-500" />
              Bestseller
            </span>

            <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl bg-white p-4 shadow-2xl sm:block">
              <p className="text-xs font-semibold text-ink">UNLEASH</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-ink/55">
                By Topsy Kola-Oyeneyin — get your copy today
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
