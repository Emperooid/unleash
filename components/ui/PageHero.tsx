import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "orange" | "ink" | "cream";
  align?: "left" | "center";
  crumbs?: { label: string; href?: string }[];
  children?: ReactNode;
};

const TONES = {
  orange: {
    section: "bg-orange-500",
    eyebrow: "bg-white/15 text-white",
    title: "text-white",
    desc: "text-white/85",
    crumb: "text-white/60 hover:text-white",
    sep: "text-white/40",
  },
  ink: {
    section: "bg-ink",
    eyebrow: "bg-white/10 text-orange-300",
    title: "text-white",
    desc: "text-white/70",
    crumb: "text-white/60 hover:text-white",
    sep: "text-white/40",
  },
  cream: {
    section: "bg-cream",
    eyebrow: "bg-orange-100 text-orange-600",
    title: "text-ink",
    desc: "text-ink/65",
    crumb: "text-ink/50 hover:text-ink",
    sep: "text-ink/30",
  },
};

export function PageHero({
  eyebrow,
  title,
  description,
  tone = "orange",
  align = "left",
  crumbs,
  children,
}: PageHeroProps) {
  const t = TONES[tone];

  return (
    <section className={cn("relative overflow-hidden", t.section)}>
      {/* soft radial glow for depth */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full blur-3xl",
          tone === "orange"
            ? "bg-white/20"
            : tone === "ink"
              ? "bg-orange-500/15"
              : "bg-orange-200/40"
        )}
      />
      <Container
        className={cn(
          "relative py-14 sm:py-20 lg:py-24",
          align === "center" && "text-center"
        )}
      >
        {crumbs && crumbs.length > 0 && (
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className={cn(
                "mb-6 flex flex-wrap items-center gap-1.5 text-sm font-semibold",
                align === "center" && "justify-center"
              )}
            >
              {crumbs.map((crumb, i) => (
                <span key={crumb.label} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight size={14} className={t.sep} />}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className={cn("transition-colors", t.crumb)}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={cn(t.title)}>{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        {eyebrow && (
          <Reveal>
            <span
              className={cn(
                "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]",
                t.eyebrow
              )}
            >
              {eyebrow}
            </span>
          </Reveal>
        )}

        <Reveal delay={0.06}>
          <h1
            className={cn(
              "mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight [text-wrap:balance] sm:text-5xl lg:text-6xl",
              t.title,
              align === "center" && "mx-auto max-w-3xl"
            )}
          >
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={0.12}>
            <p
              className={cn(
                "mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
                t.desc,
                align === "center" && "mx-auto"
              )}
            >
              {description}
            </p>
          </Reveal>
        )}

        {children && (
          <Reveal
            delay={0.18}
            className={cn(
              "mt-8 flex flex-wrap items-center gap-3",
              align === "center" && "justify-center"
            )}
          >
            {children}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
