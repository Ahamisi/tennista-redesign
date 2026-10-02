"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ease } from "@/lib/motion";

const faqs = [
  {
    question: "What is Tennista Foundation?",
    answer:
      "Tennista Foundation is a 501(c)(3) nonprofit that uses tennis as a platform for youth development, combining sports training with academic support and life-skills coaching to help young people build both athletic and personal excellence.",
  },
  {
    question: "When was Tennista Foundation founded?",
    answer:
      "The foundation was established in 2021 as a non-profit in Nigeria and in 2024 it was incorporated as a 501(c)(3) non-profit organization in the US with a mission to expand access to tennis and its life-shaping benefits for underserved youth globally.",
  },
  {
    question: "Where does Tennista Foundation operate?",
    answer:
      "The foundation is based in Maryland, USA with active programming in Lagos, Nigeria, including junior tournaments and school partnerships.",
  },
  {
    question: "Who can participate in Tennista programs?",
    answer:
      "Our programs are designed primarily for young people, with tournaments and initiatives open to boys and girls from age 8-16.",
  },
  {
    question: "How do the scholarships work?",
    answer:
      "Winners and top performers in Tennista's junior tournaments receive scholarships as part of their prize package, alongside sports gear and other rewards.",
  },
  {
    question: "How is Tennista Foundation funded?",
    answer:
      "As a registered 501(c)(3), Tennista relies on donations, corporate sponsorships, and community partnerships to sustain and grow its programs.",
  },
  {
    question: "How can I get involved or support the foundation?",
    answer:
      "Individuals and organizations can support Tennista through donations, sponsorships, or partnership opportunities.",
  },
] as const;

function PlusMark({ open }: { open: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      animate={{ rotate: open ? 45 : 0 }}
      transition={reduce ? { duration: 0 } : { duration: 0.28, ease: ease.out }}
      className="grid size-8 shrink-0 place-items-center text-blue"
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none">
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
      </svg>
    </motion.span>
  );
}

export function FaqList() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-list-heading" className="bg-white px-5 pt-10 pb-20 sm:px-8 sm:pt-14 sm:pb-24">
      <h2 id="faq-list-heading" className="sr-only">
        Questions
      </h2>
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {faqs.map((item, index) => {
          const open = openIndex === index;
          return (
            <article key={item.question} className="overflow-hidden rounded-[1.75rem] bg-blue-tint">
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left sm:px-7"
                >
                  <span className="text-[1.02rem] font-medium text-blue">{item.question}</span>
                  <PlusMark open={open} />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    key="answer"
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: reduce ? 0 : 0.35, ease: ease.out }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-[0.95rem] leading-relaxed text-ink sm:px-7">{item.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
      <div className="mt-12 flex justify-center">
        <Button href="/get-involved">Get Involved</Button>
      </div>
    </section>
  );
}
