"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ease } from "@/lib/motion";

const lines = [
  [
    { text: "Every", tone: "white" },
    { text: "Serve", tone: "lime" },
  ],
  [
    { text: "Starts A", tone: "white" },
    { text: "Story", tone: "lime" },
  ],
] as const;

/**
 * Hero band. Photography drops into the left/right media slots once the
 * designer hands over the final cut-outs.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-blue pt-14 pb-[clamp(6rem,18vw,13rem)]">
      {/* Net posts */}
      <div aria-hidden className="absolute inset-x-0 top-0 z-0 flex justify-between px-[8%]">
        <span className="h-[clamp(5rem,14vw,11rem)] w-[6px] bg-white/85" />
        <span className="h-[clamp(5rem,14vw,11rem)] w-[6px] bg-white/85" />
      </div>

      {/* Photography slots — intentionally empty until final cut-outs land. */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 z-0 hidden w-[24%] bg-gradient-to-r from-blue-deep/35 to-transparent lg:block"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 z-0 hidden w-[24%] bg-gradient-to-l from-blue-deep/35 to-transparent lg:block"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="headline text-display-xl text-white">
            {lines.map((line, lineIndex) => (
              <motion.span
                key={lineIndex}
                initial={{ opacity: 0, y: "0.35em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: ease.out, delay: 0.12 * lineIndex }}
                className="block"
              >
                {line.map((word, wordIndex) => (
                  <span key={word.text} className={word.tone === "lime" ? "text-lime" : "text-white"}>
                    {wordIndex > 0 ? " " : ""}
                    {word.text}
                  </span>
                ))}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: ease.out, delay: 0.4 }}
            className="mx-auto mt-7 max-w-xl text-[0.975rem] leading-normal text-white/85 sm:text-base sm:leading-relaxed"
          >
            Every champion starts somewhere with a chance. At Tennista Foundation, we use tennis, education,
            and life skills to unlock potential in young people and turn it into confidence, direction, and
            possibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: ease.out, delay: 0.58 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/fund-a-child" size="lg">
              Fund A Child
            </Button>
            <Button href="/programs" size="lg" variant="outlineWhite">
              Programs
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Lime court shapes */}
      <svg
        aria-hidden
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 z-0 h-[clamp(7rem,20vw,16rem)] w-full"
      >
        <path d="M0,300 V124 C150,58 350,104 492,236 C524,266 540,300 540,300 Z" fill="var(--color-lime)" />
        <path
          d="M1440,300 V104 C1288,44 1086,94 946,230 C914,262 900,300 900,300 Z"
          fill="var(--color-lime)"
        />
        <path
          d="M0,192 C146,128 326,172 462,286"
          fill="none"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M1440,172 C1296,112 1108,156 976,276"
          fill="none"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    </section>
  );
}
