import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Form } from "@/components/Form";
import { Photo } from "@/components/Photo";
import { confidentialNote, draftNotice, hausFields } from "@/lib/forms";

export const metadata: Metadata = {
  title: "Für Häuser",
  description:
    "Für Kliniken und MVZ: ärztliche Leitungs- und Geschäftsführungspositionen diskret besetzen. Mandatsanfrage an Doctovip.",
  openGraph: { title: "Für Häuser | Doctovip" },
};

const ablauf = [
  ["Analyse", "Im ersten Gespräch klären wir Aufgabe, Struktur und Erwartungen. Daraus entsteht ein Profil, das Sie freigeben."],
  ["Direktansprache", "Wir sprechen geeignete Persönlichkeiten an, ohne Ihr Haus zu nennen, solange niemand zugestimmt hat."],
  ["Auswahl", "Sie erhalten wenige, sorgfältig geprüfte Vorschläge und lernen die Kandidatinnen und Kandidaten persönlich kennen."],
  ["Begleitung", "Wir begleiten Vertragsverhandlung und Wechsel und bleiben in den ersten Monaten ansprechbar."],
];

export default function FuerHaeuser() {
  return (
    <>
      <PageHeader title="Wenn eine ärztliche Leitung neu zu besetzen ist.">
        <p>
          Sie suchen an der Spitze eines Hauses, einer Abteilung oder eines MVZ. Wir führen die Suche diskret, damit sie
          im Haus nicht früher bekannt wird, als Sie es wollen.
        </p>
      </PageHeader>

      <section aria-labelledby="ablauf" className="bg-white">
        <div className="wrap section">
          <div data-reveal>
            <h2 id="ablauf">Ablauf</h2>
            <ol className="mt-12 border-b border-line md:mt-16">
              {ablauf.map(([t, text], i) => (
                <li key={t} className="grid gap-2 border-t border-line py-8 md:grid-cols-12 md:gap-8">
                  <div className="flex items-baseline gap-4 md:col-span-5">
                    <span className="w-8 text-base font-medium tabular-nums text-brass">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{t}</h3>
                  </div>
                  <p className="text-base md:col-span-6 md:col-start-7">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section aria-labelledby="zeitrahmen" className="wrap section">
        <div data-reveal className="grid gap-8 md:grid-cols-12">
          <h2 id="zeitrahmen" className="text-2xl md:col-span-4 md:text-h2">
            Zeitrahmen
          </h2>
          <p className="max-w-measure md:col-span-7 md:col-start-6">
            Der Zeitrahmen hängt von Position, Fachrichtung und Region ab. Eine realistische Einschätzung geben wir nach
            dem ersten Gespräch.
          </p>
        </div>
      </section>

      <section id="mvz" aria-labelledby="mvz-titel" className="bg-white">
        <div className="wrap section">
          <div data-reveal className="grid gap-12 xl:grid-cols-12 xl:items-center xl:gap-8">
            <div className="xl:col-span-6">
              <h2 id="mvz-titel">Für MVZ-Betreiber</h2>
              <p className="mt-8 max-w-measure">
                Ein MVZ braucht eine benannte ärztliche Leitung, die selbst im MVZ ärztlich tätig ist. Ist diese Position
                unbesetzt, ist der Betrieb betroffen.
              </p>
            </div>
            <div className="xl:col-span-5 xl:col-start-8">
              <Photo
                src="/images/mvz.webp"
                alt="Schwarz-Weiß-Aufnahme eines hellen Flurs mit Sitzreihe am Fenster"
                width={1200}
                height={900}
                sizes="(min-width: 1280px) 40vw, 100vw"
                className="aspect-photo w-full rounded-panel object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" aria-labelledby="kontakt-titel" className="wrap section">
        <div data-reveal>
          <h2 id="kontakt-titel" className="max-w-heading">
            Mandat besprechen
          </h2>
          <p className="mt-6 max-w-measure">Ihre Anfrage behandeln wir vertraulich.</p>
          <div className="mt-12 rounded-panel border border-line bg-white p-6 md:mt-16 md:p-12">
            <Form id="haus" fields={hausFields} submitLabel="Anfrage senden" success={draftNotice} note={confidentialNote} />
          </div>
        </div>
      </section>
    </>
  );
}
