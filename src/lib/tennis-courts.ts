export type TennisCourt = {
  id: string;
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  imageUrl: string | null;
  latitude: number | null;
  longitude: number | null;
  source: "curated" | "openstreetmap";
};

export const fallbackCourts: TennisCourt[] = [
  {
    id: "lagos-lawn-tennis-club",
    slug: "lagos-lawn-tennis-club",
    name: "Lagos Lawn Tennis Club",
    address: "12 Tafawa Balewa Road, Onikan, Lagos Island",
    city: "Lagos Island",
    state: "Lagos",
    country: "Nigeria",
    imageUrl: "/lagos-tennis-club.jpg",
    latitude: null,
    longitude: null,
    source: "curated",
  },
  {
    id: "lagos-country-club",
    slug: "lagos-country-club",
    name: "Lagos Country Club",
    address: "2 Joel Ogunnaike Street, GRA, Ikeja",
    city: "Ikeja",
    state: "Lagos",
    country: "Nigeria",
    imageUrl: "/lagos-tennis-club.jpg",
    latitude: null,
    longitude: null,
    source: "curated",
  },
  {
    id: "teslim-balogun-stadium",
    slug: "teslim-balogun-stadium",
    name: "Teslim Balogun Stadium",
    address: "Alhaji Masha Road, Surulere",
    city: "Surulere",
    state: "Lagos",
    country: "Nigeria",
    imageUrl: "/teslim-balogun.jpg",
    latitude: null,
    longitude: null,
    source: "curated",
  },
];
