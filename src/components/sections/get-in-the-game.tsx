"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

type GameCardData = {
  title: string;
  body: string;
  cta: string;
  href: string;
  panel: string;
  titleClass: string;
  bodyClass: string;
  button: "outlineBlue" | "outlineWhite" | "lime";
  /** The crescent between the panel and the photo. */
  curve: string;
  photo: string;
};

const cards: GameCardData[] = [
  {
    title: "Serve",
    body: "Be part of the story.",
    cta: "Become A Volunteer",
    href: "/get-involved/volunteer",
    panel: "bg-lime",
    titleClass: "text-blue",
    bodyClass: "text-blue-dark",
    button: "outlineBlue",
    curve: "bg-white",
    photo: "Serve",
  },
  {
    title: "Support",
    body: "Help expand access to opportunities where it is needed most.",
    cta: "Partner With Us",
    href: "/get-involved/partner",
    panel: "bg-blue",
    titleClass: "text-white",
    bodyClass: "text-white/90",
    button: "outlineWhite",
    curve: "bg-white",
    photo: "Support",
  },
  {
    title: "Sponsor",
    body: "Put a racket and a future into the hands of a kid who's ready.",
    cta: "Sponsor A Student",
    href: "/get-involved/sponsor-a-student",
    panel: "bg-black",
    titleClass: "text-white",
    bodyClass: "text-white/90",
    button: "outlineWhite",
    curve: "bg-white",
    photo: "Sponsor",
  },
  {
    title: "Student",
    body: "Become a TenniSTAR and harness your full potential!",
    cta: "Apply Now",
    href: "/get-involved/enrol",
    panel: "bg-blue",
    titleClass: "text-lime",
    bodyClass: "text-white/90",
    button: "lime",
    curve: "bg-lime",
    photo: "Student",
  },
];

function GameCard({ card, index }: { card: GameCardData; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    // From the moment the card enters until it locks into the shared slot.
    offset: ["start end", "start 0.12"],
  });
  // The photo drifts on the way in, then settles at the same crop the first card holds.
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["14%", "0%"]);

  return (
    <div ref={ref} className="lg:sticky lg:top-[5.5rem]" style={{ zIndex: index + 1 }}>
      <article className={`relative overflow-hidden rounded-[1.75rem] ${card.panel}`}>
        <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[26rem] lg:max-w-[46%] lg:px-14 lg:py-16">
          <h3 className={`headline text-display-md ${card.titleClass}`}>{card.title}</h3>
          <p className={`mt-3 max-w-[18rem] text-[0.975rem] leading-relaxed ${card.bodyClass}`}>{card.body}</p>
          <div className="mt-6">
            <Button href={card.href} variant={card.button}>
              {card.cta}
            </Button>
          </div>
        </div>

        <div className="relative h-64 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[60%]">
          <div
            className={`absolute inset-y-0 -left-4 right-0 ${card.curve}`}
            style={{ clipPath: "ellipse(100% 132% at 102% 48%)" }}
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: "ellipse(97% 126% at 104% 48%)" }}
          >
            <motion.div style={{ y }} className="absolute inset-x-0 -top-[14%] h-[128%]">
              <MediaPlaceholder label={card.photo} className="h-full w-full" />
            </motion.div>
          </div>
        </div>
      </article>
    </div>
  );
}

export function GetInTheGame() {
  return (
    <section aria-labelledby="game-heading" className="bg-white py-16 sm:py-20">
      <Container>
        <h2 id="game-heading" className="headline text-center text-display-lg text-blue sm:text-display-xl">
          Get in the game.
        </h2>
        <div className="mt-10 flex flex-col gap-6 sm:mt-14 sm:gap-8">
          {cards.map((card, index) => (
            <GameCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
