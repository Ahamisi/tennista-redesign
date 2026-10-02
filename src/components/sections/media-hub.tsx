"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "news", label: "Tennis News" },
  { id: "photos", label: "Photo Gallery" },
  { id: "videos", label: "Video Gallery" },
  { id: "events", label: "Events" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const shots = [
  { label: "Close-up at the net", x: -560, y: 42, rotate: -18 },
  { label: "Player in a yellow jacket", x: -330, y: 6, rotate: -11, anchor: true },
  { label: "Three players on court", x: -70, y: -36, rotate: -1 },
  { label: "Player with a headscarf", x: 210, y: -6, rotate: 9 },
  { label: "Racket in the foreground", x: 390, y: 22, rotate: 14 },
  { label: "Player walking off court", x: 560, y: 52, rotate: 18 },
] as const;

const news = [
  { title: "Atilola, Zara, others shine at Tennista Foundation Junior Tennis' tourney", image: "Winners with trophies" },
  { title: "Tennista offer junior tennis tournament winners, runner-ups scholarship", image: "Scholarship cheque presentation" },
  { title: "55 kids serve off maiden Tennista Junior Tennis Open", image: "Players gathered at the tournament" },
  { title: "Tennista Foundation to exhibit at 2025 Olney Community Day", image: "Olney community day" },
  { title: "Tennista boosts tennis development at Igbobi College", image: "Cheque presentation at Igbobi" },
  { title: "Djokovic vs Brooksby: Match insights with Watson", image: "Match ranking graphic" },
  { title: "Dreaming big: 8 unforgettable 2021 US Open breakthroughs", image: "Two players on court" },
  { title: "Emma Raducanu leads British invasion at the 2021 US Open", image: "Player with a trophy" },
] as const;

const photos = [
  "Forehand on a clay court",
  "Guest in the stands",
  "Spectator in a blue cap",
  "Supporters at a table",
  "Player behind the net",
  "Rally on court",
  "Player watching a point",
  "Close-up in the stands",
] as const;

const videos = ["Clinic session", "Match point", "Award moment", "Court warm-up", "Group drill", "Closing rally"] as const;

export function MediaHub({ initialTab = "news" }: { initialTab?: TabId }) {
  const reduced = useReducedMotion();
  const stageRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });
  const folded = useTransform(scrollYProgress, [0, 0.18, 0.32, 1], [0, 1, 1, 0]);
  const followed = useSpring(folded, { stiffness: 28, damping: 18, mass: 1.15, restDelta: 0.0005 });
  const heldOpen = useMotionValue(1);
  const spread = reduced ? heldOpen : followed;

  const [tab, setTab] = useState<TabId>(initialTab);
  const [query, setQuery] = useState("");

  const term = query.trim().toLowerCase();
  const stories = news.filter((item) => item.title.toLowerCase().includes(term));

  return (
    <>
      <section ref={stageRef} className={reduced ? "bg-white" : "relative h-[280vh] bg-white"}>
        <div
          className={cn(
            "overflow-x-hidden bg-white px-5 pt-8 pb-6 sm:px-8 lg:px-12",
            !reduced && "sticky top-[5.25rem]",
          )}
        >
          <div className="relative h-[16rem] w-full sm:h-[20rem] lg:h-[24rem]">
            {shots.map((shot) => (
              <CollageShot key={shot.label} shot={shot} spread={spread} />
            ))}
          </div>

          <h1 className="headline mt-2 text-center text-display-lg text-blue sm:text-display-xl">Feed your eyes</h1>

          <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <label className="relative block w-[17.5rem] shrink-0">
              <span className="sr-only">Search</span>
              <svg viewBox="0 0 24 24" className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-black" fill="none" aria-hidden>
                <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="2.2" />
                <path d="M16 16.5L20 20.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                className="h-12 w-full rounded-full border-[2.5px] border-black bg-white pr-5 pl-11 text-sm text-blue outline-none placeholder:text-black/50"
              />
            </label>
            <div className="flex flex-wrap gap-2 sm:justify-end" role="tablist" aria-label="Media">
              {tabs.map((item) => {
                const selected = tab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setTab(item.id)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-bold",
                      selected ? "bg-blue text-white" : "border-2 border-blue bg-white text-blue",
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pt-4 pb-16 sm:px-8 lg:px-12">
        <GalleryPane key={`${tab}:${term}`} tab={tab} stories={stories} />
      </section>
    </>
  );
}

function GalleryPane({ tab, stories }: { tab: TabId; stories: readonly (typeof news)[number][] }) {
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), reduced ? 0 : 700);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  if (!ready) return <GalleryLoader tab={tab} />;

  if (tab === "news" && stories.length === 0) {
    return <p className="mx-auto w-full py-16 text-center text-blue">Nothing matches that search.</p>;
  }

  if (tab === "events") {
    const events = stories.filter((story) => story.title.startsWith("Atilola"));
    if (events.length === 0) {
      return <p className="mx-auto w-full py-16 text-center text-blue">Nothing matches that search.</p>;
    }
    return (
      <FadeGrid className="grid w-full">
        {events.map((story) => (
          <article key={story.title} className="rounded-[1.25rem] bg-blue-tint p-4">
            <MediaPlaceholder label={story.image} className="aspect-[16/10] w-full rounded-[1rem]" />
            <h2 className="mt-4 text-sm leading-snug font-bold tracking-wide text-blue uppercase">{story.title}</h2>
            <p className="mt-4 border-t border-blue/15 pt-3 text-sm text-ink-muted">01 April 2025</p>
          </article>
        ))}
      </FadeGrid>
    );
  }

  if (tab === "photos") {
    return (
      <FadeGrid className="mx-auto grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
        {photos.map((label) => (
          <MediaPlaceholder key={label} label={label} className="aspect-square w-full rounded-[1rem]" />
        ))}
      </FadeGrid>
    );
  }

  if (tab === "videos") {
    return (
      <FadeGrid className="mx-auto grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((label) => (
          <div key={label} className="relative">
            <MediaPlaceholder label={label} className="aspect-video w-full rounded-[1rem]" />
            <span className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-blue">
              <svg viewBox="0 0 24 24" className="ml-0.5 size-5" fill="currentColor" aria-hidden>
                <path d="M8 6.5v11l9-5.5-9-5.5z" />
              </svg>
              <span className="sr-only">Play {label}</span>
            </span>
          </div>
        ))}
      </FadeGrid>
    );
  }

  return (
    <FadeGrid className="mx-auto grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stories.map((story) => (
        <article key={story.title} className="rounded-[1.25rem] bg-[#f7f6dc] p-3">
          <MediaPlaceholder label={story.image} className="aspect-[4/3] w-full rounded-[1rem]" />
          <h2 className="mt-4 px-2 text-sm leading-snug font-bold tracking-wide text-blue uppercase">{story.title}</h2>
          <div className="mx-2 mt-4 flex items-center justify-between border-t border-blue/15 pt-3 text-sm text-ink-muted">
            <span>tennismaster</span>
            <span>0 Comments</span>
          </div>
        </article>
      ))}
    </FadeGrid>
  );
}

function FadeGrid({ className, children }: { className: string; children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: ease.out }}
    >
      {children}
    </motion.div>
  );
}

function GalleryLoader({ tab }: { tab: TabId }) {
  const photo = tab === "photos";
  const count = photo ? 8 : tab === "videos" ? 6 : 6;
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className={cn(
        "mx-auto grid w-full gap-4",
        photo ? "grid-cols-2 sm:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      <span className="sr-only">Loading {tab}</span>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="rounded-[1.25rem] bg-[#f7f6dc] p-3">
          <div className={cn("animate-pulse rounded-[1rem] bg-blue/10", photo ? "aspect-square" : "aspect-[4/3]")} />
          {photo ? null : (
            <>
              <div className="mt-4 h-3 w-4/5 animate-pulse rounded-full bg-blue/10" />
              <div className="mt-2 h-3 w-3/5 animate-pulse rounded-full bg-blue/10" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

function CollageShot({
  shot,
  spread,
}: {
  shot: (typeof shots)[number];
  spread: MotionValue<number>;
}) {
  const anchor = "anchor" in shot && shot.anchor;
  const x = useTransform(spread, (value) => value * shot.x);
  const y = useTransform(spread, (value) => value * shot.y);
  const rotate = useTransform(spread, (value) => value * shot.rotate);
  const opacity = useTransform(spread, (value) => (anchor ? 1 : Math.min(1, value * 1.6)));
  const scale = useTransform(spread, (value) => (anchor ? 0.62 + value * 0.38 : 0.5 + value * 0.5));

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-[9.5rem] sm:w-[11.5rem] lg:w-[13.5rem]"
      style={{ x, y, rotate, opacity, scale, translateX: "-50%", translateY: "-50%", willChange: "transform" }}
    >
      <MediaPlaceholder
        label={shot.label}
        className="aspect-[3/4] w-full rounded-[1.15rem] shadow-[0_16px_36px_rgba(15,23,42,0.14)] ring-4 ring-white"
      />
    </motion.div>
  );
}
