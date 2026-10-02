import { Container } from "@/components/ui/container";
import { CountUp } from "@/components/ui/count-up";
import { WaveDivider } from "@/components/ui/wave-divider";

const stats = [
  { value: 300, label: "Kids Trained as Direct Beneficiaries" },
  { value: 124, label: "Indirect Beneficiaries" },
  { value: 42, label: "Job Openings Created" },
  { value: 500, label: "Youths Empowered" },
] as const;

export function Numbers() {
  return (
    <section aria-labelledby="numbers-heading" className="relative bg-blue text-white">
      <WaveDivider variant="crest" edge="top" className="h-12 text-white sm:h-16 md:h-24" />

      <Container className="py-14 text-center sm:py-20">
        <h2 id="numbers-heading" className="headline text-display-md text-white sm:text-display-lg">
          Tennista in numbers
        </h2>

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:mt-16 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <CountUp to={stat.value} className="headline block text-display-lg text-lime sm:text-display-xl" />
                <p className="mx-auto mt-3 max-w-[14rem] text-sm leading-snug text-white/90">{stat.label}</p>
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      <WaveDivider variant="valley" className="h-12 text-white sm:h-16 md:h-24" />
    </section>
  );
}
