import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const brands = [
  { name: "USTA", src: "/brands/usta.png" },
  { name: "Google for Nonprofits", src: "/brands/google.png" },
  { name: "Microsoft", src: "/brands/microsoft.png" },
  { name: "Lagos Country Club", src: "/brands/lagos-country-club.png" },
  { name: "Munch It", src: "/brands/munch-it.png" },
  { name: "American Business Council", src: "/brands/abc.png" },
  { name: "Lagos State Sports Commission", src: "/brands/lssc.png" },
  { name: "Minimie", src: "/brands/minimie.png" },
  { name: "Indomie", src: "/brands/indomie.png" },
  { name: "Coca-Cola", src: "/brands/coca-cola.png" },
  { name: "Ewing Marion Kauffman Foundation", src: "/brands/ewing-kauffman.png" },
  { name: "goodstack", src: "/brands/goodstack.png" },
  { name: "Domain Influence Leadership Initiative", src: "/brands/domain-influence.png" },
];

const mentions = [
  { name: "Punch", src: "/public-eyes/punch.png" },
  { name: "ThisDay", src: "/public-eyes/this-day.png" },
  { name: "The Sun", src: "/public-eyes/the-sun.png" },
  { name: "SportXvibe", src: "/public-eyes/sportxvibe.png" },
  { name: "Independent", src: "/public-eyes/independent.png" },
  { name: "msn", src: "/public-eyes/msn.png" },
  { name: "The Guardian", src: "/public-eyes/the-guardian.png" },
  { name: "Daily Trust", src: "/public-eyes/daily-trust.png" },
  { name: "BusinessDay", src: "/public-eyes/business-day.png" },
];

function LogoSlot({ name, src }: { name: string; src: string }) {
  return (
    <div className="grid h-24 place-items-center px-3 sm:h-28">
      <img
        src={src}
        alt={name}
        className="max-h-16 w-auto max-w-[12.5rem] object-contain transition-transform duration-500 ease-[var(--ease-out-expo)] hover:scale-105 sm:max-h-[4.5rem]"
      />
    </div>
  );
}

function LogoWall({ logos }: { logos: { name: string; src: string }[] }) {
  const loneLast = logos.length % 3 === 1;

  return (
    <RevealGroup
      as="ul"
      gap={0.07}
      className="mt-14 grid grid-cols-2 items-center gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-14"
    >
      {logos.map((logo, index) => (
        <RevealItem
          as="li"
          key={logo.name}
          className={loneLast && index === logos.length - 1 ? "col-span-2 sm:col-span-1 sm:col-start-2" : undefined}
        >
          <LogoSlot name={logo.name} src={logo.src} />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export function Brands() {
  return (
    <section aria-labelledby="brands-heading" className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 id="brands-heading" className="headline text-center text-display-lg sm:text-display-xl">
            <span className="text-blue">Brands that have taken</span>
            <span className="block text-blue-bright">a bet on our youths</span>
          </h2>
        </Reveal>
        <LogoWall logos={brands} />
      </Container>
    </section>
  );
}

export function PublicEyes() {
  return (
    <section aria-labelledby="press-heading" className="bg-white pb-10 sm:pb-12">
      <Container>
        <Reveal>
          <h2 id="press-heading" className="headline text-center text-display-lg text-blue sm:text-display-xl">
            Tennista from
            <span className="block">the public eyes</span>
          </h2>
        </Reveal>
        <LogoWall logos={mentions} />
      </Container>
    </section>
  );
}
