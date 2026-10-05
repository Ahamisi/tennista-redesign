import { neon } from "@neondatabase/serverless";
import { fallbackCourts, type TennisCourt } from "@/lib/tennis-courts";

export const dynamic = "force-dynamic";

type CourtRow = {
  id: string | number;
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  image_url: string | null;
  latitude: number | null;
  longitude: number | null;
  source: string;
};

type OverpassElement = {
  id: number;
  lat?: number;
  lon?: number;
  center?: { lat: number; lon: number };
  tags?: Record<string, string>;
};

function asCourt(row: CourtRow): TennisCourt {
  return {
    id: String(row.id),
    slug: row.slug,
    name: row.name,
    address: row.address,
    city: row.city,
    state: row.state,
    country: row.country,
    imageUrl: row.image_url,
    latitude: row.latitude,
    longitude: row.longitude,
    source: row.source === "openstreetmap" ? "openstreetmap" : "curated",
  };
}

function safePlace(value: string) {
  return value.replace(/[^\p{L}\p{N}\s.'-]/gu, "").trim().slice(0, 80);
}

async function findOpenStreetMapCourts(country: string, state: string): Promise<TennisCourt[]> {
  const safeCountry = safePlace(country);
  const safeState = safePlace(state);
  if (!safeCountry || !safeState) return [];

  const query = `
    [out:json][timeout:12];
    area["name"="${safeCountry}"]["boundary"="administrative"]["admin_level"="2"]->.country;
    area(area.country)["name"="${safeState}"]["boundary"="administrative"]->.searchArea;
    (
      nwr["leisure"="pitch"]["sport"~"(^|;)tennis(;|$)"](area.searchArea);
      nwr["leisure"="sports_centre"]["sport"~"(^|;)tennis(;|$)"](area.searchArea);
    );
    out center tags 30;
  `;

  const response = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body: new URLSearchParams({ data: query }),
    signal: AbortSignal.timeout(14_000),
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!response.ok) return [];

  const data = (await response.json()) as { elements?: OverpassElement[] };
  return (data.elements ?? [])
    .filter((element) => element.tags?.name)
    .map((element) => {
      const tags = element.tags ?? {};
      const city = tags["addr:city"] || tags["addr:suburb"] || safeState;
      const street = [tags["addr:housenumber"], tags["addr:street"]].filter(Boolean).join(" ");
      const address = street || tags["addr:full"] || city;
      return {
        id: `osm-${element.id}`,
        slug: `osm-${element.id}`,
        name: tags.name,
        address,
        city,
        state: safeState,
        country: safeCountry,
        imageUrl: null,
        latitude: element.lat ?? element.center?.lat ?? null,
        longitude: element.lon ?? element.center?.lon ?? null,
        source: "openstreetmap" as const,
      };
    });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = safePlace(searchParams.get("country") ?? "");
  const state = safePlace(searchParams.get("state") ?? "");
  let courts: TennisCourt[] = [];
  let source: "database" | "fallback" | "openstreetmap" = "fallback";

  if (process.env.DATABASE_URL) {
    try {
      const sql = neon(process.env.DATABASE_URL);
      let rows: CourtRow[];
      if (country && state) {
        rows = (await sql`
          SELECT id, slug, name, address, city, state, country, image_url, latitude, longitude, source
          FROM tennis_courts
          WHERE active = TRUE
            AND LOWER(country) = LOWER(${country})
            AND LOWER(state) = LOWER(${state})
          ORDER BY id
        `) as CourtRow[];
      } else if (country) {
        rows = (await sql`
          SELECT id, slug, name, address, city, state, country, image_url, latitude, longitude, source
          FROM tennis_courts
          WHERE active = TRUE AND LOWER(country) = LOWER(${country})
          ORDER BY id
        `) as CourtRow[];
      } else {
        rows = (await sql`
          SELECT id, slug, name, address, city, state, country, image_url, latitude, longitude, source
          FROM tennis_courts
          WHERE active = TRUE
          ORDER BY id
        `) as CourtRow[];
      }
      courts = rows.map(asCourt);
      source = "database";
    } catch (error) {
      console.error("Court database query failed", error);
    }
  }

  if (!courts.length) {
    courts = fallbackCourts.filter(
      (court) =>
        (!country || court.country.toLowerCase() === country.toLowerCase()) &&
        (!state || court.state.toLowerCase() === state.toLowerCase()),
    );
  }

  if (!courts.length && country && state) {
    try {
      courts = await findOpenStreetMapCourts(country, state);
      if (courts.length) source = "openstreetmap";
    } catch (error) {
      console.error("OpenStreetMap court search failed", error);
    }
  }

  return Response.json({ courts, source });
}
