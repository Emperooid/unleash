import { BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Book3D } from "@/components/ui/Book3D";

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

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-orange-600/25 via-ink to-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 38%, rgba(243,144,31,0.35), transparent 55%)",
              }}
              aria-hidden
            />
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
              aria-hidden
            />

            <span className="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-200 backdrop-blur-sm">
              Bestseller
            </span>

            <div className="absolute inset-0 flex items-center justify-center p-10 sm:p-14">
              <Book3D size="lg" speed={16} />
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent px-7 pb-6 pt-14">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
                UNLEASH
              </p>
              <p className="mt-1 text-xs text-white/60">
                By Topsy Kola-Oyeneyin — Get your copy today
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
