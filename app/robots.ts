import type { MetadataRoute } from "next";
import { allowIndexing } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return { rules: allowIndexing ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" } };
}
