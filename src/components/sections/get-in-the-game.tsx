import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type GameCardData = {
  title: string;
  body: string;
  cta: string;
  href: string;
  panel: string;
  titleClass: string;
  bodyClass: string;
  button: "outlineBlue" | "outlineWhite" | "lime";
  image: string;
  alt: string;
};

const cards: GameCardData[] = [
  {
    title: "Serve",
    body: "Be part of the story.",
    cta: "Become A Volunteer",
    href: "/get-involved/volunteer",
    panel: "bg-lime",
    titleClass: "text-blue",
    bodyClass: "text-blue-dark",
    button: "outlineBlue",
    image: "/geg-serve-circle.png",
    alt: "A woman helping two children with their schoolwork",
  },
  {
    title: "Support",
    body: "Help expand access to opportunities where it is needed most.",
    cta: "Partner With Us",
    href: "/get-involved/partner",
    panel: "bg-blue",
    titleClass: "text-white",
    bodyClass: "text-white/90",
    button: "outlineWhite",
    image: "/geg-support-circle.png",
    alt: "A coach handing supply bags to young players in the stands",
  },
  {
    title: "Sponsor",
    body: "Put a racket and a future into the hands of a kid who's ready.",
    cta: "Sponsor A Student",
    href: "/get-involved/sponsor-a-student",
    panel: "bg-black",
    titleClass: "text-white",
    bodyClass: "text-white/90",
    button: "outlineWhite",
    image: "/geg-sponsor-circle.png",
    alt: "A boy holding a trophy and a tennis racket",
  },
  {
    title: "Student",
    body: "Become a TenniSTAR and harness your full potential!",
    cta: "Apply Now",
    href: "/get-involved/enrol",
    panel: "bg-blue",
    titleClass: "text-lime",
    bodyClass: "text-white/90",
    button: "lime",
    image: "/geg-student-circle.png",
    alt: "A girl filling in an application at a table",
  },
];

function GameCard({ card, index }: { card: GameCardData; index: number }) {
  return (
    <div className="lg:sticky lg:top-[5.25rem]" style={{ zIndex: index + 1 }}>
      <article className={`relative isolate overflow-hidden rounded-[1.75rem] ${card.panel}`}>
        <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[23rem] lg:max-w-[46%] lg:px-14 lg:py-14">
          <h3 className={`headline text-display-lg leading-[0.85] ${card.titleClass}`}>{card.title}</h3>
          <p className={`mt-3 max-w-[18rem] text-[0.975rem] leading-relaxed ${card.bodyClass}`}>{card.body}</p>
          <div className="mt-6">
            <Button href={card.href} variant={card.button}>
              {card.cta}
            </Button>
          </div>
        </div>

        <div className="relative z-20 h-64 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[62%]">
          <img
            src={card.image}
            alt={card.alt}
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </article>
    </div>
  );
}

export function GetInTheGame() {
  return (
    <section aria-labelledby="game-heading" className="bg-white py-16 sm:py-20">
      <Container>
        <h2 id="game-heading" className="headline text-center text-display-lg text-blue sm:text-display-xl">
          Get in the game.
        </h2>
        <div className="mt-10 flex flex-col gap-20 sm:mt-14 lg:gap-[11.25rem]">
          {cards.map((card, index) => (
            <GameCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
