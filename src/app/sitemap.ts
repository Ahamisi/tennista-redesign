import type { MetadataRoute } from "next";
import { footerNav, mainNav, isNavGroup, primaryCta } from "@/config/navigation";
import { siteConfig } from "@/config/site";

/**
 * Derived from the navigation config, so a new page in the menu is a new entry
 * in the sitemap automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = new Set<string>(["/", primaryCta.href, "/contact"]);

  for (const item of mainNav) {
    routes.add(item.href);
    for (const section of item.menu?.sections ?? []) {
      if (isNavGroup(section)) {
        section.links.forEach((link) => routes.add(link.href));
      } else {
        routes.add(section.href);
      }
    }
  }

  for (const group of footerNav) {
    group.links.forEach((link) => routes.add(link.href));
  }

  const lastModified = new Date();

  return [...routes].map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === primaryCta.href ? 0.9 : 0.7,
  }));
}
