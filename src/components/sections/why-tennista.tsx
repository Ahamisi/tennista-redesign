import { Container } from "@/components/ui/container";
import { SdgGoals } from "@/components/sections/sdg-goals";

export function WhyTennista() {
  return (
    <section aria-labelledby="why-heading" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <h2 id="why-heading" className="headline text-display-lg">
            <span className="text-blue">Why </span>
            <span className="text-blue-bright">Tennista?</span>
          </h2>
          <p className="max-w-md text-[0.975rem] leading-[1.6] text-ink-muted lg:justify-self-end">
            Because we are making a DIFFERENCE through sports, education and life skill development that
            contribute to the achievement of the United Nations Sustainable Development Goals.
          </p>
        </div>

        <div className="mt-12">
          <SdgGoals />
        </div>
      </Container>
    </section>
  );
}
