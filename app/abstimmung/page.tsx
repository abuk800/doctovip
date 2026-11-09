import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import klaerung from "@/content/klaerung.json";

// Nicht in Navigation oder Footer verlinkt, nur für den Kunden-Call.
export const metadata: Metadata = {
  title: "Abstimmung zum Entwurf",
  robots: { index: false, follow: false },
};

const th = "px-6 py-4 text-sm font-medium text-stone md:px-8";

export default function Abstimmung() {
  const { vorschlaege, fragen, weggelassen, belegt, bildnachweise } = klaerung;
  return (
    <>
      <PageHeader title="Abstimmung zum Entwurf">
        <p>
          Alle Inhalte dieses Entwurfs leiten sich aus Ihrem Briefing ab. Folgende Punkte brauchen Ihre Freigabe oder
          Ihre Angaben.
        </p>
      </PageHeader>

      <section aria-labelledby="vorschlaege" className="bg-white">
        <div className="wrap section">
          <h2 id="vorschlaege">Textvorschläge zur Freigabe</h2>
          <p className="mt-6 max-w-measure">
            Arbeitsweisen und Begründungen, die aus der Positionierung folgen, aber operative Zusagen sind. Sie stehen
            als Vorschlag im Entwurf.
          </p>
          <div className="mt-12 overflow-hidden rounded-panel border border-line bg-paper">
            <table className="w-full text-left">
              <caption className="sr-only">Textvorschläge mit Seite, Sektion und Status</caption>
              <thead className="sr-only md:not-sr-only">
                <tr>
                  <th scope="col" className={`${th} w-1/2`}>Aussage (wörtlich)</th>
                  <th scope="col" className={th}>Seite und Sektion</th>
                  <th scope="col" className={th}>Status</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {vorschlaege.map((v) => (
                  <tr key={v.aussage + v.ort} className="block border-t border-line px-6 py-6 md:table-row md:px-0 md:py-0">
                    <td className="block text-base text-ink md:table-cell md:px-8 md:py-6 md:align-top">{v.aussage}</td>
                    <td className="block pt-2 text-sm text-graphite md:table-cell md:px-8 md:py-6 md:pt-6 md:align-top">{v.ort}</td>
                    <td className="block pt-2 text-sm text-graphite md:table-cell md:px-8 md:py-6 md:pt-6 md:align-top">Vorschlag</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section aria-labelledby="fragen" className="wrap section">
        <h2 id="fragen">Offene Fragen</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {fragen.map((g) => (
            <div key={g.gruppe} className="rounded-card border border-line bg-white p-8">
              <h3>{g.gruppe}</h3>
              <ul className="mt-4 space-y-3">
                {g.items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-graphite">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brass" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="weggelassen" className="bg-white">
        <div className="wrap section">
          <h2 id="weggelassen">Bewusst weggelassen bis zur Freigabe</h2>
          <ul className="mt-12 border-b border-line">
            {weggelassen.map((w) => (
              <li key={w.was} className="grid gap-2 border-t border-line py-6 md:grid-cols-12 md:gap-8">
                <h3 className="md:col-span-4">{w.was}</h3>
                <p className="text-base md:col-span-7 md:col-start-6">{w.warum}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="belegt" className="wrap section">
        <h2 id="belegt">Belegte allgemeine Fakten</h2>
        <ul className="mt-12 border-b border-line">
          {belegt.map((b) => (
            <li key={b.aussage + b.ort} className="grid gap-2 border-t border-line py-6 md:grid-cols-12 md:gap-8">
              <p className="text-base text-ink md:col-span-5">{b.aussage}</p>
              <div className="md:col-span-7 md:col-start-6">
                <p className="text-base">{b.quelle}</p>
                <p className="mt-2 text-sm text-stone">{b.ort}</p>
                <p className="mt-2 text-sm">
                  <a href={b.url} className="tlink text-sm" rel="noopener noreferrer">
                    {b.url}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="bilder" className="bg-white">
        <div className="wrap section">
          <h2 id="bilder">Bildnachweise</h2>
          <p className="mt-6 max-w-measure">
            Alle Fotos sind Stockfotos (Pexels) und dienen nur diesem Entwurf. Die Personen im Bild haben keinen Bezug
            zu Doctovip.
          </p>
          <ul className="mt-12 border-b border-line">
            {bildnachweise.map((b) => (
              <li key={b.datei} className="grid gap-2 border-t border-line py-6 md:grid-cols-12 md:gap-8">
                <h3 className="font-text text-base font-medium md:col-span-3">{b.datei}</h3>
                <p className="text-base md:col-span-4">{b.motiv}</p>
                <div className="md:col-span-5">
                  <p className="text-base">{b.lizenz}, {b.einsatz}</p>
                  <a href={b.quelle} className="tlink text-sm" rel="noopener noreferrer">
                    {b.quelle}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
