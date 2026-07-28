import { Camera, Mic2, Play, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { YouTubeIcon } from "@/components/ui/SocialIcons";

const COLLAGE_ICONS = [Users, Mic2, Camera, Sparkles];

export function BookLaunchVideo() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"
        aria-hidden
      />
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
            <span className="h-px w-6 bg-current" />
            Relive the Moment
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Catch the UNLEASH Book Launch
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
            Relive the historic moment as it was made. Watch the full launch
            on YouTube.
          </p>
          <Button
            href="https://www.youtube.com"
            size="lg"
            className="mt-8"
            icon={<YouTubeIcon size={18} />}
          >
            Watch on YouTube
          </Button>
        </Reveal>

        <Reveal delay={0.15} className="grid grid-cols-3 gap-3">
          <div className="group relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-ink">
            <button
              type="button"
              aria-label="Play book launch highlights"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-ink shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Play size={20} fill="currentColor" className="ml-1" />
              </span>
            </button>
          </div>
          {COLLAGE_ICONS.map((Icon, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-xl bg-white/8"
            >
              <Icon size={20} className="text-white/30" strokeWidth={1.5} />
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
