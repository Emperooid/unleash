"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { NAV_LINKS, VALUE_CARDS } from "@/lib/content";
import { Marquee } from "@/components/ui/Marquee";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Book3D } from "@/components/ui/Book3D";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="sticky top-0 z-50">
      <div className="border-b border-ink/10 bg-ink text-orange-200">
        <Marquee items={VALUE_CARDS.map((c) => c.word)} />
      </div>

      <header
        className={cn(
          "border-b border-ink/10 bg-paper/90 backdrop-blur transition-shadow duration-300",
          scrolled && "shadow-[0_1px_0_0_rgba(11,12,15,0.06)]"
        )}
      >
        <Container className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <Book3D size="xs" speed={9} />
            <span className="font-display text-lg font-bold tracking-tight">
              UNLEASH<span className="text-orange-500"> HUB</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-ink/10 bg-white/60 p-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-ink/70 transition-colors hover:bg-orange-50 hover:text-orange-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/join" size="md">
              Join the Hub
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-ink/10 bg-paper lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-cream hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/join" className="mt-3 w-full">
                Join the Hub
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
