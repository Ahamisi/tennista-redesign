import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This Tennista Foundation page is not available.",
};

const waysBack = [
  { label: "Programs", href: "/programs" },
  { label: "Get involved", href: "/get-involved" },
  { label: "Tennis news", href: "/media/tennis-news" },
] as const;

export default function NotFound() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-[46rem] text-center">
          <p className="text-sm font-bold tracking-[0.16em] text-blue uppercase">Page not found</p>
          <h1 className="headline mt-4 text-[clamp(6rem,16vw,11rem)] leading-[0.72] text-blue-bright">404</h1>
          <p className="mx-auto mt-6 max-w-[32rem] text-[1.125rem] leading-relaxed text-gray">
            This page is not on the court. The link may be out of date, or the address may have moved.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" variant="blue">
              Back home
            </Button>
            <Button href="/fund-a-child">Fund a child</Button>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-[52rem] gap-4 sm:grid-cols-3">
          {waysBack.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[1.25rem] bg-blue-tint px-6 py-7 text-center transition-colors hover:bg-lime-tint"
            >
              <span className="headline text-[1.35rem] leading-none text-blue">{item.label}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
