import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/ansatz", "/fuer-haeuser", "/fuer-aerzte", "/partner", "/kontakt"].map((p) => ({
    url: `${site.url}${p}`,
  }));
}
