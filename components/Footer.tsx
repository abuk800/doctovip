import Link from "next/link";
import { nav, positions, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-paper">
      <div className="wrap grid gap-12 pb-12 pt-24 md:grid-cols-3 xl:grid-cols-12 xl:gap-8">
        <div className="xl:col-span-5">
          <Link href="/">
            <Logo />
          </Link>
          <p className="mt-6 max-w-card text-base">{site.positioning}</p>
        </div>
        <nav aria-label="Seiten" className="xl:col-span-3 xl:col-start-7">
          <p className="text-sm font-medium text-stone">Seiten</p>
          <ul className="mt-4 space-y-3 text-base">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-ink hover:text-brass">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/kontakt" className="text-ink hover:text-brass">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
        <div className="xl:col-span-3">
          <p className="text-sm font-medium text-stone">Positionen</p>
          <ul className="mt-4 space-y-3 text-base text-ink">
            {positions.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-line py-8">
          <p className="text-sm">© {year} Doctovip</p>
          <ul className="flex gap-8 text-sm text-graphite">
            <li>
              <Link href="/impressum" className="hover:text-ink">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-ink">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
