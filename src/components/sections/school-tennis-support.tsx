import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { cn } from "@/lib/utils";

const rows = [
  {
    image: "Player hitting a forehand",
    tone: "bg-blue-tint",
    body: "Rather than waiting for young players to find their way to us, we go to them, partnering directly with schools to bring tennis, coaching, and opportunity right onto their own campuses.",
  },
  {
    image: "School clay court from above",
    tone: "bg-[#f7f6dc]",
    body: "The Tennista Foundation School Tennis Program is a flagship grassroots initiative that partners with primary and secondary schools to establish sustainable tennis programs that develop the next generation of student-athletes and leaders.",
  },
  {
    image: "Player preparing a backhand",
    tone: "bg-blue-tint",
    body: "The program combines sports, education, and character development to help young people succeed both on and off the court.",
  },
  {
    image: "Player standing on a clay court",
    tone: "bg-[#f7f6dc]",
    body: "The program was officially launched with Igbobi College, Lagos, as its pioneer partner school, where the Foundation donated tennis equipment and ₦250,000 toward court maintenance while providing professional coaching and life-skills education for a 1-year period.",
  },
  {
    image: "Two players at the net",
    tone: "bg-blue-tint",
    body: "At the core of it, the School Tennis Support Program is about meeting young people where they already are – in the classroom, on the tennis court, among their friends – and showing them that tennis, and everything that comes with it, belongs to them too.",
  },
] as const;

export function SchoolTennisSupport() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <p className="eyebrow text-center text-ink-muted">Our programs</p>
        <h1 className="headline mt-4 text-center text-display-lg text-blue sm:text-display-xl">
          School Tennis
          <br />
          Support Program
        </h1>

        <div className="mt-14 flex flex-col gap-8 sm:mt-16">
          {rows.map((row, index) => (
            <article
              key={row.body}
              className="grid items-center gap-6 bg-white lg:sticky lg:top-[5.75rem] lg:min-h-[28rem] lg:grid-cols-2 lg:gap-10"
              style={{ zIndex: index + 1 }}
            >
              <MediaPlaceholder label={row.image} className="aspect-[16/10] w-full rounded-[1.25rem]" />
              <div>
                {index === 0 ? (
                  <>
                    <h2 className="text-[clamp(1.15rem,1.6vw,1.45rem)] leading-snug font-bold tracking-wide text-blue uppercase">
                      Bringing tennis straight to the classroom.
                    </h2>
                    <p className="mt-3 text-[0.98rem] leading-relaxed text-ink">
                      Not every child gets the chance to walk onto a tennis court and discover what
                      they&apos;re capable of. For many students, the biggest barrier isn&apos;t talent;
                      it&apos;s access, and Tennista Foundation School Tennis Support Programme closes that
                      gap.
                    </p>
                  </>
                ) : null}
                <p
                  className={cn(
                    "rounded-[1.35rem] px-6 py-8 text-[0.98rem] leading-relaxed text-blue sm:px-8 sm:py-10",
                    row.tone,
                    index === 0 && "mt-6",
                  )}
                >
                  {row.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button href="/programs" variant="outlineBlue">
            Go Back To Programs
          </Button>
          <Button href="/junior-tennis-open">Next Pillar</Button>
        </div>
      </Container>
    </section>
  );
}
