import { BookOpen, MessageSquareQuote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Book3D } from "@/components/ui/Book3D";
import { VENDORS } from "@/lib/content";

export function BookPromo() {
  return (
    <section className="bg-ink py-24 text-white sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal className="relative mx-auto flex w-full max-w-xs items-center justify-center py-6 lg:mx-0">
          <div className="absolute -inset-4 rounded-[2rem] border border-white/10" aria-hidden />
          <div className="absolute bottom-4 h-10 w-4/5 rounded-full bg-black/50 blur-2xl" aria-hidden />
          <Book3D size="lg" speed={18} />
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
              <span className="h-px w-6 bg-current" />
              Get Unleashed
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              The blueprint for a life that attracts uncommon opportunities.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" icon={<BookOpen size={18} />}>
              Buy Now
            </Button>
            <Button variant="outline-light" size="lg" icon={<Star size={16} />}>
              Read Reviews
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:text-orange-300"
              icon={<MessageSquareQuote size={18} />}
              showArrow
            >
              Preview Chapter
            </Button>
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40">
              Get your copy from our trusted partners
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4">
              {VENDORS.map((vendor) => (
                <span
                  key={vendor}
                  className="font-display text-sm font-semibold text-white/50 transition-colors hover:text-white/90"
                >
                  {vendor}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
              <span>More locations coming soon.</span>
              <a
                href="#"
                className="font-semibold text-orange-300 transition-colors hover:text-orange-200"
              >
                View all vendors →
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
