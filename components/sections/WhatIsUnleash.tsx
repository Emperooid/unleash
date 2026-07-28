"use client";

import {
  BarChart3,
  BookOpen,
  Globe,
  LayoutGrid,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { WHAT_IS_UNLEASH_ITEMS } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  "book-open": BookOpen,
  users: Users,
  "layout-grid": LayoutGrid,
  target: Target,
  "bar-chart-3": BarChart3,
  globe: Globe,
};

export function WhatIsUnleash() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What is UNLEASH?"
          align="center"
          className="mx-auto"
          title="A movement, not just a message."
          description="A movement helping young people build lives that naturally attract uncommon opportunities through timeless principles, practical action and meaningful community."
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_IS_UNLEASH_ITEMS.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group rounded-2xl border border-ink/8 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_20px_40px_-24px_rgba(207,90,10,0.35)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
