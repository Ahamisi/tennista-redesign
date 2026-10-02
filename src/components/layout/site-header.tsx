"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { mainNav, primaryCta } from "@/config/navigation";
import { Brand } from "@/components/layout/brand";
import { MegaMenu } from "@/components/layout/mega-menu";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { ChevronDown, MenuIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

/** Grace period so the pointer can cross the gap between trigger and panel. */
const CLOSE_DELAY = 140;

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollY, scrollYProgress } = useScroll();
  useMotionValueEvent(scrollY, "change", (value) => setCondensed(value > 24));

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY);
  }, [cancelClose]);

  const openWith = useCallback(
    (label: string) => {
      cancelClose();
      setOpenMenu(label);
    },
    [cancelClose],
  );

  // A route change dismisses whatever is open, adjusted during render rather
  // than in an effect so the menu never paints over the new page.
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => cancelClose, [cancelClose]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-blue focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300",
          condensed && "shadow-[0_8px_30px_-18px_rgb(0_31_82_/_0.35)]",
        )}
        onMouseLeave={scheduleClose}
      >
        <Container width="wide">
          <div
            className={cn(
              "flex items-center justify-between gap-6 transition-[height] duration-300 ease-[var(--ease-out-expo)]",
              condensed ? "h-[4.25rem]" : "h-[5.25rem]",
            )}
          >
            <Brand priority height={condensed ? 48 : 58} className="transition-all duration-300" />

            {/* Desktop navigation */}
            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {mainNav.map((item) => {
                  const active = openMenu === item.label;
                  const current = isCurrent(item.href);
                  const panelId = `mega-${item.label.replace(/\W+/g, "-").toLowerCase()}`;

                  return (
                    <li
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => (item.menu ? openWith(item.label) : scheduleClose())}
                    >
                      {item.menu ? (
                        <button
                          type="button"
                          aria-expanded={active}
                          aria-controls={panelId}
                          onClick={() => (active ? setOpenMenu(null) : openWith(item.label))}
                          onFocus={() => openWith(item.label)}
                          className={cn(
                            "relative flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[0.9375rem] font-bold transition-colors duration-200",
                            active || current ? "text-blue-bright" : "text-blue hover:text-blue-bright",
                          )}
                        >
                          {(active || current) && (
                            <motion.span
                              layoutId="nav-pill"
                              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                              className="absolute inset-0 -z-10 rounded-full bg-blue-tint"
                            />
                          )}
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "size-3.5 transition-transform duration-300 ease-[var(--ease-out-expo)]",
                              active && "rotate-180",
                            )}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          aria-current={current ? "page" : undefined}
                          className={cn(
                            "relative flex items-center rounded-full px-4 py-2.5 text-[0.9375rem] font-bold transition-colors duration-200",
                            current ? "text-blue-bright" : "text-blue hover:text-blue-bright",
                          )}
                        >
                          {current && (
                            <motion.span
                              layoutId="nav-pill"
                              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                              className="absolute inset-0 -z-10 rounded-full bg-blue-tint"
                            />
                          )}
                          {item.label}
                        </Link>
                      )}

                      <AnimatePresence>
                        {item.menu && active ? (
                          <MegaMenu
                            id={panelId}
                            menu={item.menu}
                            align={item.label === "Media & Events" ? "center" : "start"}
                            onNavigate={() => setOpenMenu(null)}
                          />
                        ) : null}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <Button href={primaryCta.href} size={condensed ? "sm" : "md"} className="hidden sm:inline-flex">
                {primaryCta.label}
              </Button>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                className="grid size-11 place-items-center rounded-full text-blue transition-colors hover:bg-blue-tint lg:hidden"
              >
                <MenuIcon className="size-6" />
              </button>
            </div>
          </div>
        </Container>

        {/* Reading progress — a quiet cue that the page is long. */}
        <motion.div
          aria-hidden
          style={{ scaleX: scrollYProgress }}
          className="h-[3px] origin-left bg-lime"
        />
      </header>

      {/* Dim the page while a mega-menu is open so the panel reads as a layer. */}
      <AnimatePresence>
        {openMenu ? (
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            className="fixed inset-0 z-40 hidden bg-blue-deep/25 backdrop-blur-[2px] lg:block"
          />
        ) : null}
      </AnimatePresence>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
