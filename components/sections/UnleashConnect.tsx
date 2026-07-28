import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CONNECT_CITIES } from "@/lib/content";

const PINS = [
  { top: "28%", left: "22%" },
  { top: "48%", left: "38%" },
  { top: "34%", left: "58%" },
  { top: "62%", left: "70%" },
  { top: "20%", left: "76%" },
];

export function UnleashConnect() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative order-2 aspect-square w-full overflow-hidden rounded-3xl border border-ink/8 bg-paper lg:order-1">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(11,12,15,0.14) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
            aria-hidden
          />
          {PINS.map((pin, i) => (
            <span
              key={i}
              className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-full items-center justify-center rounded-full bg-orange-500 text-white shadow-lg"
              style={{ top: pin.top, left: pin.left }}
            >
              <MapPin size={16} fill="currentColor" className="text-white" />
            </span>
          ))}
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              <span className="h-px w-6 bg-current" />
              Build Quality Relationships
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Unleash Connect
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/65 sm:text-lg">
              Find events, activities and opportunities near you. Connect,
              serve, grow.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
            {CONNECT_CITIES.map((city) => (
              <span
                key={city}
                className="rounded-full border border-ink/12 bg-paper px-4 py-2 text-sm font-medium text-ink/75 transition-colors hover:border-orange-400 hover:text-ink"
              >
                {city}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.2} className="mt-9">
            <Button href="/connect" size="lg" showArrow>
              Explore All Cities
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
