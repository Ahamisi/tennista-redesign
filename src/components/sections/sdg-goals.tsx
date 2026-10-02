"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Goal = {
  id: number;
  title: string;
  color: string;
  body: string;
  icon: React.ReactNode;
};

const iconProps = {
  viewBox: "0 0 64 48",
  fill: "currentColor",
  "aria-hidden": true,
  focusable: false,
  className: "h-16 w-24",
} as const;

const goals: Goal[] = [
  {
    id: 1,
    title: "No poverty",
    color: "#e02030",
    body: "Our objective is to use the platform of tennis to develop talents. Although tennis is perceived to be a sport of privilege and wealth, we want to change this narrative and encourage young people to aspire for wealth creation by offering a unique sport-based training programme for character development and financial literacy.",
    icon: (
      <svg {...iconProps}>
        <circle cx="8" cy="10" r="3.2" />
        <path d="M3 28c0-4 2.2-6.5 5-6.5s5 2.5 5 6.5v4H3v-4z" />
        <circle cx="20" cy="14" r="4" />
        <path d="M13 34c0-5 3-8 7-8s7 3 7 8v4H13v-4z" />
        <circle cx="34" cy="12" r="3.4" />
        <path d="M28 30c0-4.2 2.6-7 6-7s6 2.8 6 7v4h-12v-4z" />
        <circle cx="46" cy="13" r="3.6" />
        <path d="M40 32c0-4.4 2.6-7.2 6-7.2s6 2.8 6 7.2v4H40v-4z" />
        <circle cx="57" cy="11" r="3" />
        <path d="M52 28c0-4 2.2-6.4 5-6.4S62 24 62 28v4h-10v-4z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Quality education",
    color: "#bc1428",
    body: "School is part of the training. Tennista pairs time on the court with classroom support and scholarships, so a young person can stay in school and build a future that reaches past the baseline.",
    icon: (
      <svg {...iconProps}>
        <path d="M8 10h22c2 6 2 14 0 22H8c2-8 2-14 0-22z" />
        <path d="M30 10h22c-2 6-2 14 0 22H30c-2-8-2-14 0-22z" />
        <path d="M48 8l12 4-12 4v22h-4V8z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Gender equality",
    color: "#ec3824",
    body: "Our aim is to drive gender equality; we are encouraging more girls to participate in our Tennis training programme by providing equal opportunities for both boys and girls. We want to see more young girls playing Tennis in Africa.",
    icon: (
      <svg {...iconProps}>
        <circle cx="28" cy="18" r="9" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M28 27v12M22 33h12" stroke="currentColor" strokeWidth="4" />
        <path d="M36 12l12-8v8h-8" />
        <path d="M40 8h10M40 13h8" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Decent work and economic growth",
    color: "#981838",
    body: "The work reaches past the court. Coaching, mentoring and programme roles create decent jobs, and the skills young people build here travel with them into the wider economy.",
    icon: (
      <svg {...iconProps}>
        <path d="M6 40h8V24H6v16zm14 0h8V16H20v24zm14 0h8V22h-8v18zm14 0h8V10h-8v30z" />
        <path d="M6 22l16-10 10 6 22-14v6L32 24 22 18 8 28v-6z" />
      </svg>
    ),
  },
];

export function SdgGoals() {
  const [openId, setOpenId] = useState<number | null>(null);
  const reduced = useReducedMotion();

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
      {goals.map((goal) => {
        const open = openId === goal.id;
        return (
          <motion.div
            key={goal.id}
            role="group"
            tabIndex={0}
            aria-expanded={open}
            onMouseEnter={() => setOpenId(goal.id)}
            onMouseLeave={() => setOpenId((current) => (current === goal.id ? null : current))}
            onFocus={() => setOpenId(goal.id)}
            onBlur={() => setOpenId((current) => (current === goal.id ? null : current))}
            onClick={() => {
              if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
              setOpenId(open ? null : goal.id);
            }}
            animate={{ flexGrow: open ? 2.7 : 1 }}
            transition={reduced ? { duration: 0 } : { duration: 0.5, ease: ease.inOut }}
            style={{ backgroundColor: goal.color, flexBasis: 0 }}
            className={cn(
              "flex min-h-[16.5rem] min-w-0 cursor-pointer flex-col rounded-[1.35rem] p-5 text-left text-white sm:p-6",
              "outline-offset-4 transition-shadow hover:shadow-card",
              openId && "md:min-h-[23rem]",
            )}
          >
            <span className="flex items-start gap-3">
              <span className="text-[2.4rem] leading-none font-bold">{goal.id}</span>
              <span className="pt-1 text-left text-[0.72rem] leading-tight font-bold tracking-[0.04em] uppercase">
                {goal.title}
              </span>
            </span>
            <span className="mt-4 block">{goal.icon}</span>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.p
                  key="body"
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: 4 }}
                  transition={{ duration: 0.35, ease: ease.out, delay: reduced ? 0 : 0.12 }}
                  className="mt-auto max-w-md pt-6 text-[0.92rem] leading-relaxed text-white/95"
                >
                  {goal.body}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
