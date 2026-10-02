"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const years = [2024, 2025, 2026] as const;

const title = "Atilola, Zara, others shine at Tennista Foundation Junior Tennis' tourney";

function ReportCover({ year }: { year: number }) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-blue text-white">
      <div className="absolute inset-3 border border-white/90">
        <div className="absolute inset-x-0 top-[22%] border-t border-white/90" />
        <div className="absolute top-[22%] bottom-0 left-1/2 border-l border-white/90" />
      </div>
      <img
        src="/tennista-logo.png"
        alt=""
        className="absolute top-5 left-1/2 h-7 -translate-x-1/2 object-contain"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-8 text-center">
        <p className="headline text-[clamp(1.6rem,2.4vw,2.15rem)] leading-[0.95] text-white">
          Impact
          <br />
          Report
        </p>
        <p className="headline mt-1 text-[clamp(2.4rem,4vw,3.4rem)] leading-none text-lime">{year}</p>
        <p className="mt-3 max-w-[11rem] text-[0.62rem] leading-snug text-white/90">
          Empowering Young People Through Tennis, Education and Life Skills.
        </p>
      </div>
    </div>
  );
}

export function ImpactReports() {
  const [year, setYear] = useState<(typeof years)[number]>(2026);

  return (
    <section aria-labelledby="impact-heading" className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
      <h1 id="impact-heading" className="headline text-display-xl">
        <span className="text-blue">Impact </span>
        <span className="text-blue-bright">Report</span>
      </h1>

      <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label="Report year">
        {years.map((option) => {
          const selected = option === year;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => setYear(option)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-bold",
                selected ? "bg-blue text-white" : "border-2 border-blue text-blue",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((index) => (
          <article key={index} className="rounded-[1.25rem] bg-[#f8f8dc] p-3 sm:p-4">
            <ReportCover year={year} />
            <h2 className="headline mt-5 px-2 text-[1.05rem] leading-[1.2] text-blue sm:text-[1.2rem]">{title}</h2>
            <div className="mt-5 px-2 pb-2">
              <Button size="sm" type="button">
                Download Report
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
