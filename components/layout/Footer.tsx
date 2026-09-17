import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
  InstagramBrandIcon,
  LinkedInBrandIcon,
  TikTokBrandIcon,
  XBrandIcon,
} from "@/components/ui/SocialIcons";
import { FOOTER_COLUMNS, SOCIAL_LINKS } from "@/lib/content";

const SOCIAL_ICONS = {
  LinkedIn: LinkedInBrandIcon,
  Twitter: XBrandIcon,
  TikTok: TikTokBrandIcon,
  Instagram: InstagramBrandIcon,
};

export function Footer() {
  return (
    <footer>
      {/* Newsletter */}
      <div className="bg-ink text-white">
        <Container className="py-14 sm:py-16">
          <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
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
        </Container>
      </div>

      {/* Main footer */}
      <div className="bg-paper text-ink">
        <Container className="py-16 sm:py-20">
          <Reveal className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="font-display text-lg font-bold text-ink">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-base text-ink/65 transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>

          <Reveal
            delay={0.1}
            className="mt-16 flex flex-col items-start justify-between gap-10 sm:mt-24 sm:flex-row sm:items-end"
          >
            <Image
              src="/brand/unleash-head.png"
              alt="UNLEASH"
              width={220}
              height={220}
              className="h-40 w-40 sm:h-56 sm:w-56"
            />
            <div className="flex flex-col items-start gap-4 sm:items-end">
              <p className="text-sm font-semibold text-ink/60">
                Connect with us
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon =
                    SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="block transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <Icon size={40} />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </Container>
      </div>

      {/* Legal bar */}
      <div className="bg-ink text-white/60">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
          <div className="flex items-center gap-6">
            <Link href="#" className="transition-colors hover:text-white">
              Terms &amp; Support
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
          </div>
          <p>© {new Date().getFullYear()} The UNLEASH Hub. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
