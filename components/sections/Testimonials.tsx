"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = TESTIMONIALS[index];

  function go(dir: 1 | -1) {
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  return (
    <section className="bg-paper py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="What Readers Are Saying" title="Real stories, real impact." />
          <a
            href="#"
            className="text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
          >
            View all reviews →
          </a>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-3xl border border-ink/8 bg-cream px-6 py-14 sm:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-2xl text-center"
            >
              <div className="flex justify-center gap-1 text-orange-400">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-6 font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold text-ink/60">
                — {current.name}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-paper transition-colors hover:border-orange-400 hover:text-orange-500"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-orange-500" : "w-1.5 bg-ink/15"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-paper transition-colors hover:border-orange-400 hover:text-orange-500"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
