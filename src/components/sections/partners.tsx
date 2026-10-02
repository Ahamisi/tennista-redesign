import { Container } from "@/components/ui/container";

const brands = [
  "USTA",
  "Google for Nonprofits",
  "Microsoft",
  "Lagos Country Club",
  "Munch It",
  "American Business Council",
  "Lagos State Sports Commission",
  "Minimie",
  "Indomie",
  "Coca-Cola",
  "Ewing Marion Kauffman Foundation",
  "goodstack",
  "Domain Influence Leadership Initiative",
];

const mentions = [
  "Punch",
  "ThisDay",
  "The Sun",
  "SportXvibe",
  "Independent",
  "msn",
  "The Guardian",
  "Daily Trust",
  "BusinessDay",
];

function LogoSlot({ name }: { name: string }) {
  return (
    <div
      role="img"
      aria-label={`${name}. Logo placeholder.`}
      className="grid h-24 place-items-center px-3 text-center text-[0.8rem] leading-tight font-bold tracking-[0.08em] text-blue/55 uppercase sm:h-28"
    >
      {name}
    </div>
  );
}

function LogoWall({ names }: { names: string[] }) {
  const loneLast = names.length % 3 === 1;

  return (
    <ul className="mt-14 grid grid-cols-2 items-center gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-14">
      {names.map((name, index) => (
        <li
          key={name}
          className={loneLast && index === names.length - 1 ? "col-span-2 sm:col-span-1 sm:col-start-2" : undefined}
        >
          <LogoSlot name={name} />
        </li>
      ))}
    </ul>
  );
}

export function Brands() {
  return (
    <section aria-labelledby="brands-heading" className="bg-white py-16 sm:py-20">
      <Container>
        <h2 id="brands-heading" className="headline text-center text-display-lg sm:text-display-xl">
          <span className="text-blue">Brands that have taken</span>
          <span className="block text-blue-bright">a bet on our youths</span>
        </h2>
        <LogoWall names={brands} />
      </Container>
    </section>
  );
}

export function PublicEyes() {
  return (
    <section aria-labelledby="press-heading" className="bg-white pb-10 sm:pb-12">
      <Container>
        <h2 id="press-heading" className="headline text-center text-display-lg text-blue sm:text-display-xl">
          Tennista from
          <span className="block">the public eyes</span>
        </h2>
        <LogoWall names={mentions} />
      </Container>
    </section>
  );
}
