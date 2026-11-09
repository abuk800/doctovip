import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { einblicke } from "@/content/einblicke";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/ansatz", "/fuer-haeuser", "/fuer-aerzte", "/partner", "/einblicke", "/kontakt", ...einblicke.map((e) => `/einblicke/${e.slug}`)].map((p) => ({
    url: `${site.url}${p}`,
  }));
}
