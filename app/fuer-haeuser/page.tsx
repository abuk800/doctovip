import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Form, type FieldDef } from "@/components/Form";
import { positions, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Für Häuser",
  description:
    "Ärztliche Leitung besetzen, ohne dass die Suche im Haus bekannt wird. Ablauf, Zeitrahmen und vertrauliche Mandatsanfrage für Kliniken, Verbünde und MVZ.",
  alternates: { canonical: "/fuer-haeuser" },
  openGraph: { title: "Für Häuser | Doctovip", url: "/fuer-haeuser" },
};

const ablauf = [
  ["Analyse", "Im ersten Gespräch klären wir Aufgabe, Struktur und Erwartungen. Daraus entsteht ein Profil, das Sie freigeben."],
  ["Direktansprache", "Wir sprechen geeignete Persönlichkeiten an, ohne Ihr Haus zu nennen, solange niemand zugestimmt hat."],
  ["Auswahl", "Sie erhalten wenige, sorgfältig geprüfte Vorschläge und lernen die Kandidatinnen und Kandidaten persönlich kennen."],
  ["Begleitung", "Wir begleiten Vertragsverhandlung und Wechsel und bleiben in den ersten Monaten ansprechbar."],
];

const fields: FieldDef[] = [
  { name: "position", label: "Position", type: "select", options: positions, required: true },
  {
    name: "einrichtung",
    label: "Art der Einrichtung",
    type: "select",
    options: ["Klinik", "Klinikverbund", "MVZ", "Sonstige"],
    required: true,
  },
  { name: "region", label: "Region", required: true },
  { name: "zeitrahmen", label: "Gewünschter Zeitrahmen", required: true },
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "funktion", label: "Funktion", required: true, autoComplete: "organization-title" },
  { name: "email", label: "E-Mail", type: "email", required: true, autoComplete: "email" },
  { name: "telefon", label: "Telefon", type: "tel", required: true, autoComplete: "tel" },
  { name: "nachricht", label: "Nachricht", type: "textarea", wide: true },
];

export default function FuerHaeuser() {
  return (
    <>
      <PageHeader title="Wenn eine ärztliche Leitung neu zu besetzen ist.">
        <p>
          Sie suchen an der Spitze eines Hauses, einer Abteilung oder eines MVZ. Wir führen die Suche so, dass Ihre
          Mitarbeitenden davon nichts erfahren, bis Sie es wollen.
        </p>
      </PageHeader>

      <section aria-labelledby="ablauf" className="wrap border-t border-line pb-24 pt-24 md:pb-32 md:pt-32">
        <div data-reveal>
          <h2 id="ablauf">Ablauf</h2>
          <ol className="mt-12 border-b border-line md:mt-16">
            {ablauf.map(([t, text], i) => (
              <li key={t} className="grid gap-2 border-t border-line py-8 md:grid-cols-12 md:gap-8">
                <div className="flex gap-4 md:col-span-5">
                  <span className="w-8 pt-1 text-base font-medium tabular-nums text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{t}</h3>
                </div>
                <p className="text-base text-graphite md:col-span-6 md:col-start-7">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="zeitrahmen" className="wrap pb-24 md:pb-32">
        <div data-reveal className="grid gap-8 md:grid-cols-12">
          <h2 id="zeitrahmen" className="text-2xl md:col-span-4 md:text-3xl">
            Zeitrahmen
          </h2>
          <p className="max-w-measure md:col-span-7 md:col-start-6">
            Der Zeitrahmen hängt von Position, Fachgebiet und Region ab. Im ersten Gespräch nennen wir Ihnen eine
            realistische Einschätzung, auf die Sie planen können.
          </p>
        </div>
      </section>

      <section aria-labelledby="honorar" className="wrap pb-24 md:pb-32">
        {/* TODO: Honorarmodell und Garantieregelung vor Livegang ersetzen */}
        <div data-reveal className="grid gap-8 md:grid-cols-12">
          <h2 id="honorar" className="text-2xl md:col-span-4 md:text-3xl">
            Honorar und Garantie
          </h2>
          <p className="max-w-measure md:col-span-7 md:col-start-6">
            [Platzhalter] Honorarmodell und Garantieregelung besprechen wir im ersten Gespräch. Verbindliche Angaben
            folgen vor Veröffentlichung dieser Seite.
          </p>
        </div>
      </section>

      <section id="mvz" aria-labelledby="mvz-titel" className="wrap border-t border-line pb-24 pt-24 md:pb-32 md:pt-32">
        <div data-reveal className="grid gap-8 md:grid-cols-12">
          <h2 id="mvz-titel" className="text-2xl md:col-span-4 md:text-3xl">
            Für MVZ-Betreiber
          </h2>
          <div className="max-w-measure space-y-6 md:col-span-7 md:col-start-6">
            <p>
              Ein MVZ braucht eine benannte ärztliche Leitung, die selbst im MVZ ärztlich tätig ist. Ist diese Position
              unbesetzt, ist der Betrieb betroffen.
            </p>
            <p>
              Wir behandeln solche Mandate mit Vorrang und sprechen mit Ihnen auch über Übergangslösungen, damit der
              Betrieb gesichert bleibt, während die Besetzung vorbereitet wird.
            </p>
          </div>
        </div>
      </section>

      <section id="kontakt" aria-labelledby="kontakt-titel" className="wrap border-t border-line pb-24 pt-24 md:pb-32 md:pt-32 xl:pb-40">
        <div data-reveal>
          <h2 id="kontakt-titel" className="max-w-heading">
            Mandat besprechen
          </h2>
          <p className="mt-4 max-w-measure text-graphite">
            Ihre Anfrage behandeln wir vertraulich. Sie erreichen uns auch telefonisch unter{" "}
            <a href={site.phoneHref} className="tlink">
              {site.phone}
            </a>
            .
          </p>
          <div className="mt-12 md:mt-16">
            <Form
              id="haus"
              fields={fields}
              submitLabel="Anfrage senden"
              success="Vielen Dank. Der verantwortliche Partner meldet sich persönlich bei Ihnen."
              note="Ihre Angaben sieht ausschließlich der verantwortliche Partner."
            />
          </div>
        </div>
      </section>
    </>
  );
}
