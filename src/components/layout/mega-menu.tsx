"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { isNavGroup, type NavItem } from "@/config/navigation";
import { megaItem, megaPanel, stagger } from "@/lib/motion";
import { ArrowRight } from "@/components/ui/icons";

type MegaMenuProps = {
  menu: NonNullable<NavItem["menu"]>;
  /** Called when a link inside the panel is activated. */
  onNavigate: () => void;
  id: string;
  /** About and Programs open from the start of the word. Media sits on the centre of its label. */
  align?: "start" | "center";
  /** When set, the panel heading links to the section overview. */
  href?: string;
};

/**
 * The dropdown panel: a display heading and brand illustration on the left,
 * the link rail on the right. Rows cascade in as the panel opens.
 */
/** Keeps a centred panel inside the viewport when its trigger sits near an edge. */
function useEdgeClamp() {
  const ref = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);

  const measure = () => {
    const element = ref.current;
    if (!element) return;
    const margin = 20;
    const { left, right, width } = element.getBoundingClientRect();
    // Undo the current shift to measure the panel's natural position.
    const naturalLeft = left - shift;
    const naturalRight = right - shift;
    if (naturalLeft < margin) setShift(margin - naturalLeft);
    else if (naturalRight > window.innerWidth - margin)
      setShift(Math.min(0, window.innerWidth - margin - naturalRight));
    else if (width > 0) setShift(0);
  };

  useLayoutEffect(measure);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  });

  return { ref, shift };
}

export function MegaMenu({ menu, onNavigate, id, align = "start", href }: MegaMenuProps) {
  const [titleFirst, ...titleRest] = menu.title.split(" ");
  const { ref, shift } = useEdgeClamp();

  return (
    <motion.div
      id={id}
      ref={ref}
      variants={megaPanel}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ marginLeft: shift }}
      className={
        align === "center"
          ? "absolute top-full left-1/2 z-50 -translate-x-1/2 pt-14"
          : "absolute top-full left-4 z-50 pt-14"
      }
    >
      <div className="w-[min(92vw,44rem)] overflow-hidden rounded-panel bg-white shadow-panel ring-1 ring-blue/5">
        <div className="grid min-h-[29rem] grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          {/* Left rail: title stays clear; the racket and ball fill the width and sit on the bottom. */}
          <div className="relative h-full bg-white px-7 pt-7">
            {href ? (
              <Link href={href} onClick={onNavigate} className="relative z-10 w-fit">
                <h2 className="headline text-[2rem] leading-[0.92] text-blue transition-colors hover:text-blue-bright">
                  {titleFirst}
                  <br />
                  {titleRest.join(" ")}
                </h2>
              </Link>
            ) : (
              <h2 className="headline relative z-10 text-[2rem] leading-[0.92] text-blue">
                {titleFirst}
                <br />
                {titleRest.join(" ")}
              </h2>
            )}
            {menu.blurb ? (
              <p className="relative z-10 mt-3 max-w-[13rem] text-[0.8125rem] leading-snug text-ink-subtle">
                {menu.blurb}
              </p>
            ) : null}
            <motion.img
              src="/tennis-man.svg"
              alt=""
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-auto w-full"
            />
          </div>

          {/* Right rail: links */}
          <motion.ul variants={stagger(0.05, 0.08)} initial="hidden" animate="visible" className="relative z-10 bg-white p-5 sm:p-6">
            {menu.sections.map((section) =>
              isNavGroup(section) ? (
                <motion.li key={section.label} variants={megaItem} className="mb-2">
                  <p className="px-2 pt-1 pb-2 text-[0.9375rem] font-medium text-ink">{section.label}</p>
                  <ul className="rounded-card bg-blue-tint/80 p-1.5">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onNavigate}
                          className="block rounded-lg px-3 py-2 text-[0.875rem] text-blue transition-colors duration-200 hover:bg-white hover:text-blue-bright"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.li>
              ) : (
                <motion.li key={section.href} variants={megaItem}>
                  <Link
                    href={section.href}
                    onClick={onNavigate}
                    className="group/row flex items-center justify-between gap-4 rounded-lg border-b border-hairline px-2 py-3.5 transition-colors duration-200 last:border-b-0 hover:bg-blue-tint/60"
                  >
                    <span className="min-w-0">
                      <span className="block text-[0.9375rem] font-medium text-blue transition-colors duration-200 group-hover/row:text-blue-bright">
                        {section.label}
                      </span>
                      {section.description ? (
                        <span className="mt-0.5 hidden text-[0.75rem] text-ink-subtle sm:block">
                          {section.description}
                        </span>
                      ) : null}
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-blue transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover/row:translate-x-1" />
                  </Link>
                </motion.li>
              ),
            )}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}
