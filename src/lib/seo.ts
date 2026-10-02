import { siteConfig } from "@/config/site";

/**
 * Structured data. Search engines and AI crawlers use this to understand that
 * Tennista is a registered non-profit, where it operates, and how to reach it.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/tennista-logo.png`,
    image: `${siteConfig.url}/og-image.png`,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    nonprofitStatus: "Nonprofit501c3",
    taxID: siteConfig.ein,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    sameAs: Object.values(siteConfig.social),
    knowsAbout: ["Youth tennis", "Educational scholarships", "Life skills training", "Youth development"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-US",
  };
}

type BreadcrumbEntry = { name: string; href: string };

export function breadcrumbSchema(entries: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: `${siteConfig.url}${entry.href}`,
    })),
  };
}
