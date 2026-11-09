import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-6">
          <p className="text-base font-medium uppercase tracking-mark text-ink">Doctovip</p>
          <p className="mt-4 max-w-measure text-base text-graphite">{site.positioning}</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-base text-stone">Kontakt</p>
          <ul className="mt-4 space-y-2 text-base">
            <li>
              <a href={site.phoneHref} className="text-ink hover:text-brass">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-ink hover:text-brass">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-base text-stone">Rechtliches</p>
          <ul className="mt-4 space-y-2 text-base">
            <li>
              <Link href="/impressum" className="text-ink hover:text-brass">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="text-ink hover:text-brass">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
