import { Award, BookOpen, Check, Play, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CURRICULUM_HIGHLIGHTS, PROGRAMME_THUMBNAILS } from "@/lib/content";

const THUMB_ICONS = [BookOpen, Users, Award];

export function ReadersProgramme() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
            <span className="h-px w-6 bg-current" />
            Grow Together
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Unleashed Readers Programme
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/65 sm:text-lg">
            An immersive experience where readers go deeper, apply the
            principles, and grow in community.
          </p>

          <ul className="mt-8 space-y-4">
            {CURRICULUM_HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-ink/80 sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <Button href="/readers-programme" size="lg" className="mt-9" showArrow>
            Explore Programme
          </Button>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-ink via-ink-soft to-ink shadow-xl">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 70% 30%, rgba(243,144,31,0.5), transparent 55%)",
              }}
              aria-hidden
            />
            <button
              type="button"
              aria-label="Play cohort 1 graduation video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-ink shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Play size={22} fill="currentColor" className="ml-1" />
              </span>
            </button>
            <p className="absolute bottom-5 left-6 text-sm font-semibold text-white/85">
              Cohort 1 Graduation
            </p>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            {PROGRAMME_THUMBNAILS.map((thumb, i) => {
              const Icon = THUMB_ICONS[i];
              return (
                <div
                  key={thumb.label}
                  className="flex aspect-square flex-col justify-between rounded-xl bg-ink p-3.5 shadow-sm"
                >
                  <Icon size={18} className="text-orange-400" strokeWidth={1.75} />
                  <div>
                    <p className="text-xs font-semibold text-white">{thumb.label}</p>
                    <p className="text-[11px] text-white/50">{thumb.caption}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
