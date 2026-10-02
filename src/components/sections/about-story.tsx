"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { cn } from "@/lib/utils";

const chapters = [
  {
    tone: "bg-blue-tint",
    image: "Ready position",
    imageFirst: false,
    body: "Tennista aims to extend tennis, education, and life skills to underserved youth. As a 501(c)(3) nonprofit, we focus on communities where talent often lacks access, providing spaces for young people to not only learn tennis but also develop leadership skills.",
  },
  {
    tone: "bg-[#f7f6dc]",
    image: "Rally",
    imageFirst: true,
    body: "Since 2021, our mission has remained to inspire and nurture the next generation of leaders while fostering positive societal change by combining tennis, education, and life skills programmes.",
  },
  {
    tone: "bg-blue-tint",
    image: "Serve",
    imageFirst: false,
    body: "We're building healthier bodies, sharper minds, and the next generation of changemakers. Today, we reach 300 young people across various communities.",
  },
  {
    tone: "bg-[#f7f6dc]",
    image: "Forehand",
    imageFirst: true,
    body: "We believe access to tennis and education isn't a privilege. It's a right.",
  },
] as const;

export function AboutStory() {
  return (
    <section aria-label="Our story" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-5 sm:gap-6">
          {chapters.map((chapter, index) => (
            <article
              key={chapter.body}
              className={cn(
                "rounded-[1.75rem] p-4 sm:p-6 lg:sticky lg:top-[5.75rem] lg:p-8",
                chapter.tone,
              )}
              style={{ zIndex: index + 1 }}
            >
              <div
                className={cn(
                  "grid items-center gap-6 lg:grid-cols-2 lg:gap-12",
                  chapter.imageFirst && "lg:[&>*:first-child]:order-2",
                )}
              >
                <p className="max-w-xl px-2 text-[1.05rem] leading-relaxed font-medium text-blue sm:px-4 sm:text-lg">
                  {chapter.body}
                </p>
                <MediaPlaceholder label={chapter.image} className="aspect-[4/3] w-full rounded-[1.15rem]" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/what-defines-us">See What Defines Us</Button>
        </div>
      </Container>
    </section>
  );
}
