import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

const physicalSkills = [
  { title: "Footwork", image: "Players moving on a green court" },
  { title: "Serving", image: "Players tossing the ball to serve" },
  { title: "Balance", image: "Players standing with rackets" },
  { title: "Forehand strokes", image: "Player hitting a forehand" },
  { title: "Backhand strokes", image: "Player hitting a backhand" },
] as const;

const mentalSkills = [
  { title: "Discipline", image: "Player with racket raised" },
  { title: "Endurance", image: "Player holding a ready stance" },
  { title: "Flexibility", image: "Player stretching wide for a ball" },
  { title: "Motivation", image: "Coach presenting a certificate" },
  { title: "Concentration", image: "Player crouched low, watching the ball" },
  { title: "Team spirit", image: "Two players meeting at the net" },
] as const;

export function TennisClinic() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <p className="eyebrow text-center text-ink-muted">Our programs</p>
        <h1 className="headline mt-4 text-center text-display-lg text-blue sm:text-display-xl">
          Tennis Clinic for Kids
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-center text-[0.98rem] leading-relaxed text-ink">
          Our tennis program features eight weeks of beginner-to-expert training with meaningful and
          positive experiences that will be enjoyable and lead to positive development while keeping the
          focus on fun, being active and developing the right skills with lifelong benefits.
        </p>

        <SkillStack
          heading="While promoting being healthy and fit, our coaches will teach basic physical tennis skills such as:"
          skills={physicalSkills}
        />
        <SkillStack
          heading="For mental skills that are at the forefront of all trainings we've:"
          skills={mentalSkills}
        />

        <div className="relative mt-20 overflow-hidden rounded-[1.5rem] bg-blue-tint px-8 py-16 sm:px-16 sm:py-20">
          <MediaPlaceholder label="Tennis ball" className="absolute -top-8 -left-6 size-28 rounded-full sm:size-36" />
          <MediaPlaceholder label="Wristband" className="absolute -top-6 -right-8 h-20 w-32 rounded-[1rem] sm:h-24 sm:w-40" />
          <MediaPlaceholder label="Racket bag" className="absolute -bottom-8 -left-8 h-28 w-36 rounded-[1rem] sm:h-32 sm:w-44" />
          <MediaPlaceholder label="Racket" className="absolute -right-8 -bottom-10 size-32 rounded-full sm:size-40" />
          <p className="relative z-10 mx-auto max-w-xl text-center text-[1.02rem] leading-relaxed font-medium text-blue">
            Your kids will have access to free tennis equipment, gear, courts, and career growth
            opportunities in tennis through our partnerships and allies.
          </p>
        </div>

        <div className="mt-8 rounded-[1.75rem] bg-[#f7f6dc] px-6 py-14 text-center sm:px-12 sm:py-16">
          <p className="mx-auto max-w-3xl text-[clamp(1.55rem,2.8vw,2.25rem)] leading-[1.2] font-bold text-blue">
            Our beneficiaries will also get educational support in their pursuit of academic excellence
            as it is important to us that our participants excel in their academics.
          </p>
          <p className="mt-5 text-[0.95rem] text-ink-muted">
            Your donation puts a racket in the next child&apos;s hand and a shot at their own story of growth.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button href="/fund-a-child" variant="blue">
              Donate Here
            </Button>
            <Button type="button">Testimonials</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SkillStack({
  heading,
  skills,
}: {
  heading: string;
  skills: readonly { title: string; image: string }[];
}) {
  return (
    <div className="mt-16 grid items-start gap-8 lg:mt-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
      <h2 className="text-[clamp(1.7rem,3vw,2.35rem)] leading-[1.15] font-bold text-blue lg:sticky lg:top-[6.5rem]">
        {heading}
      </h2>
      <div className="flex flex-col gap-5">
        {skills.map((skill, index) => (
          <article
            key={skill.title}
            className="rounded-[1.35rem] bg-blue-tint p-4 sm:p-5 lg:sticky lg:top-[5.75rem]"
            style={{ zIndex: index + 1 }}
          >
            <h3 className="text-sm font-bold tracking-wide text-blue uppercase">{skill.title}</h3>
            <MediaPlaceholder label={skill.image} className="mt-3 aspect-[16/9] w-full rounded-[1rem]" />
          </article>
        ))}
      </div>
    </div>
  );
}
