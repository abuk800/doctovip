import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ArrowLink } from "@/components/Links";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt zu Doctovip: Adresse, Telefon, E-Mail sowie vertrauliche Anfrage für Häuser und Rückruf für Ärztinnen und Ärzte.",
  alternates: { canonical: "/kontakt" },
  openGraph: { title: "Kontakt | Doctovip", url: "/kontakt" },
};

export default function Kontakt() {
  return (
    <>
      <PageHeader title="Kontakt">
        <p>Wir antworten persönlich. Jede Anfrage behandeln wir vertraulich.</p>
      </PageHeader>

      <section aria-labelledby="erreichbar" className="wrap border-t border-line pb-24 pt-24 md:pb-32 md:pt-32">
        <h2 id="erreichbar" className="sr-only">
          So erreichen Sie uns
        </h2>
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <h3>Telefon und E-Mail</h3>
            {/* TODO: echte Kontaktdaten eintragen (lib/site.ts) */}
            <ul className="mt-4 space-y-2 text-lg">
              <li>
                <a href={site.phoneHref} className="tlink">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="tlink">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h3>Adresse</h3>
            <address className="mt-4 text-lg not-italic leading-body text-graphite">
              {site.address.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </div>
          <div className="md:col-span-4">
            <h3>Formulare</h3>
            <ul className="mt-4 space-y-2 text-lg">
              <li>
                <ArrowLink href="/fuer-haeuser#kontakt">Mandat besprechen</ArrowLink>
              </li>
              <li>
                <ArrowLink href="/fuer-aerzte#rueckruf">Vertraulichen Rückruf anfragen</ArrowLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
