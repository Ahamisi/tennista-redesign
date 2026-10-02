import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { Reveal } from "@/components/ui/reveal";

export type Quote = {
  text: string;
  /** Person credit, rendered with an em dash. Omit when `caption` carries the line instead. */
  attribution?: string;
  /** Supporting line under the quote, in lime, without a dash. */
  caption?: string;
  /** Label for the photo slot until the design export replaces it. */
  photo: string;
};

const quotes: Quote[] = [
  {
    text: "I think sports standardises everything... but more importantly, it teaches you about life, mentorship, and how to respect your opponent.",
    attribution: "Billie Jean King",
    photo: "Billie Jean King",
  },
];

function QuoteMark() {
  return (
    <span aria-hidden className="block text-[4.25rem] leading-none font-black text-lime">
      “
    </span>
  );
}

/**
 * Pull-quote band. Add another entry to `quotes` and it renders as its own card.
 * Photography is a placeholder until the export lands.
 */
export function Quotes({
  items = quotes,
  id = "quotes-heading",
  /** `page` matches a full-width band such as the mission photo row. */
  edge = "site",
}: {
  items?: readonly Quote[];
  id?: string;
  edge?: "site" | "page";
}) {
  const frame =
    edge === "page" ? (
      "space-y-6 px-5 sm:px-8 lg:px-12"
    ) : undefined;

  return (
    <section aria-labelledby={id} className="bg-white py-6 sm:py-10">
      <h2 id={id} className="sr-only">
        Quotes
      </h2>
      <Container className={frame ?? "space-y-6"} width={edge === "page" ? "wide" : "default"}>
        {items.map((quote) => (
          <Reveal key={quote.attribution ?? quote.caption ?? quote.text}>
            <figure className="grid overflow-hidden rounded-panel bg-blue lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div className="relative z-10 px-7 py-9 sm:px-12 sm:py-12 lg:py-14 lg:pr-6">
                <QuoteMark />
                <blockquote className="mt-4 max-w-[38rem] text-[clamp(1.35rem,2.1vw,1.85rem)] leading-[1.35] font-bold text-white">
                  <p>{quote.text}</p>
                </blockquote>
                {quote.caption ? (
                  <figcaption className="mt-6 max-w-md text-sm leading-relaxed text-lime">{quote.caption}</figcaption>
                ) : (
                  <figcaption className="mt-6 text-sm font-medium text-lime">— {quote.attribution}</figcaption>
                )}
              </div>

              <div className="relative min-h-52 lg:min-h-full">
                <MediaPlaceholder label={quote.photo} className="absolute inset-0 h-full" />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-blue via-blue/55 to-blue/10 lg:bg-gradient-to-r lg:from-blue lg:via-blue/75 lg:to-blue/15"
                />
              </div>
            </figure>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
