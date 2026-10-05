"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { isNavGroup, mainNav, primaryCta } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ArrowRight, ChevronDown, CloseIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { ease } from "@/lib/motion";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Lock the page behind the drawer and close on Escape.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="mobile-nav"
          id="mobile-navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-blue-deep/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.42, ease: ease.inOut }}
            className="absolute inset-y-0 right-0 flex w-[min(26rem,100%)] flex-col bg-blue text-white shadow-panel"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="headline text-2xl text-white">Menu</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-lime hover:text-blue-deep"
              >
                <CloseIcon className="size-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto overscroll-contain px-6 pb-8">
              <ul className="divide-y divide-white/15">
                {mainNav.map((item) => {
                  const isOpen = expanded === item.label;

                  if (!item.menu) {
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="flex items-center justify-between py-4 text-lg font-bold text-white"
                        >
                          {item.label}
                          <ArrowRight className="size-4 text-lime" />
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between py-4 text-left text-lg font-bold text-white"
                      >
                        {item.label}
                        <ChevronDown
                          className={`size-5 text-lime transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: ease.inOut }}
                            className="overflow-hidden"
                          >
                            <ul className="space-y-1 pb-4">
                              {item.href === "/programs" ? (
                                <li>
                                  <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="block rounded-lg py-2 text-[0.9375rem] font-medium text-white transition-colors hover:bg-white/10"
                                  >
                                    {item.menu.title}
                                  </Link>
                                </li>
                              ) : null}
                              {item.menu.sections.flatMap((section) =>
                                isNavGroup(section)
                                  ? [
                                      <li
                                        key={section.label}
                                        className="pt-2 pb-1 text-xs font-medium tracking-[0.2em] text-lime uppercase"
                                      >
                                        {section.label}
                                      </li>,
                                      ...section.links.map((link) => (
                                        <li key={link.href}>
                                          <Link
                                            href={link.href}
                                            onClick={onClose}
                                            className="block rounded-lg py-2 pl-3 text-[0.9375rem] text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                                          >
                                            {link.label}
                                          </Link>
                                        </li>
                                      )),
                                    ]
                                  : [
                                      <li key={section.href}>
                                        <Link
                                          href={section.href}
                                          onClick={onClose}
                                          className="block rounded-lg py-2 text-[0.9375rem] text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                                        >
                                          {section.label}
                                        </Link>
                                      </li>,
                                    ],
                              )}
                            </ul>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>

              <Button href={primaryCta.href} onClick={onClose} size="lg" className="mt-8 w-full">
                {primaryCta.label}
              </Button>

              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-6 block text-sm text-white/70 transition-colors hover:text-lime"
              >
                {siteConfig.email}
              </a>
            </nav>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
