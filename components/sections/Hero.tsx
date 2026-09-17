"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const line = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  return (
    <section className="bg-orange-500 pb-6 pt-4 sm:pb-8 sm:pt-6">
      <Container className="max-w-[1400px]">
        <Reveal className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem]">
          <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[21/9]">
            <Image
              src="/book/front.jpg"
              alt="Young people from the UNLEASH movement"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/65" />

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={container}
              className="relative flex h-full flex-col items-center justify-center px-6 text-center sm:px-10"
            >
              <motion.span
                variants={line}
                className="mb-6 inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm"
              >
                Join the hub
              </motion.span>
              <h1 className="font-display font-bold tracking-tight text-white [text-wrap:balance]">
                <motion.span
                  variants={line}
                  className="block text-[2.5rem] leading-[1.02] sm:text-[3.75rem] lg:text-[5rem]"
                >
                  You&apos;re Not
                </motion.span>
                <motion.span
                  variants={line}
                  className="my-3 block text-sm font-medium normal-case tracking-normal text-white/85 sm:my-4 sm:text-lg"
                >
                  For a life that attracts uncommon opportunities starts here.
                </motion.span>
                <motion.span
                  variants={line}
                  className="block text-[2.5rem] leading-[1.02] sm:text-[3.75rem] lg:text-[5rem]"
                >
                  Too Young
                </motion.span>
              </h1>

              <motion.div
                variants={line}
                className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10"
              >
                <Button
                  href="/book"
                  size="lg"
                  variant="outline-light"
                  icon={<Play size={16} fill="currentColor" />}
                >
                  Watch the book launch
                </Button>
                <Button
                  href="/shop"
                  size="lg"
                  className="!bg-cream !text-orange-600 hover:!bg-white"
                >
                  Get the book
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
