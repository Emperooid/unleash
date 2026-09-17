"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { motion, useReducedMotion } from "framer-motion";
import { HUB_EXPRESSIONS } from "@/lib/content";

// Idle nudge to the right, on loop — plus a bigger diagonal-to-horizontal
// launch on hover. Idle motion pauses for anyone with reduced-motion set.
function ExpressionArrow() {
  const reduceMotion = useReducedMotion();

  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-md transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
      <motion.span
        className="flex items-center justify-center"
        animate={reduceMotion ? undefined : { x: [0, 5, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <ArrowRight
          size={20}
          strokeWidth={2.5}
          className="-rotate-45 transition-transform duration-300 group-hover:rotate-0"
        />
      </motion.span>
    </span>
  );
}

export function HubExpressions() {
  return (
    <section className="bg-[#FBE3A8] py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">
            Three expressions of the hub.
          </h2>
          <p className="mt-4 text-base text-ink/70 sm:text-lg">
            The Hub is more than a community. It is a space to discover,
            engage and take action around the principles that help us
            UNLEASH.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-3">
          {HUB_EXPRESSIONS.map((item) => (
            <motion.div key={item.title} variants={staggerItem} className="h-full">
              <Link
                href={item.href}
                className="group relative flex aspect-[3/4] w-full overflow-hidden rounded-[1.75rem] shadow-[0_20px_40px_-24px_rgba(0,0,0,0.35)]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="relative mt-auto flex w-full items-end justify-between gap-4 p-6 sm:p-7">
                  <p
                    className={`font-display text-3xl font-extrabold leading-[1.05] sm:text-4xl ${item.colorClass}`}
                  >
                    {item.title}
                  </p>
                  <ExpressionArrow />
                </div>
              </Link>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
