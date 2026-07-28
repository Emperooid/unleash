import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Book3D } from "@/components/ui/Book3D";
import {
  InstagramIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/ui/SocialIcons";
import { FOOTER_COLUMNS, SOCIAL_LINKS } from "@/lib/content";

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  Twitter: XIcon,
  YouTube: YouTubeIcon,
  TikTok: TikTokIcon,
};

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="py-16 sm:py-20">
        <Reveal className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-14 lg:flex-row lg:items-center">
          <div className="max-w-md">
            <p className="font-display text-2xl font-semibold sm:text-3xl">
              Get one practical insight every week.
            </p>
            <p className="mt-2 text-sm text-white/60">
              Join thousands of young people living intentionally.
            </p>
          </div>
          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-orange-400"
            />
            <Button type="submit" size="md" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </Reveal>

        <div className="grid gap-12 py-14 lg:grid-cols-[1.2fr_2fr]">
          <Reveal>
            <Link href="/" className="flex items-center gap-2.5">
              <Book3D size="xs" speed={9} />
              <span className="font-display text-lg font-bold tracking-tight">
                UNLEASH<span className="text-orange-400"> HUB</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              A movement helping young people build lives that naturally
              attract uncommon opportunities.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon =
                  SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS] ??
                  InstagramIcon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-orange-400 hover:text-orange-400"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="grid grid-cols-2 gap-8 sm:grid-cols-3"
          >
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-white/65 transition-colors hover:text-white"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} The UNLEASH Hub. All rights reserved.
          </p>
          <Button href="/join" variant="outline-light" size="md">
            Be Part of the Movement
          </Button>
        </div>
      </Container>
    </footer>
  );
}
