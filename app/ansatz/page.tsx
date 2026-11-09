import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ArrowLink } from "@/components/Links";

export const metadata: Metadata = {
  title: "Ansatz",
  description:
    "Warum Doctovip nur Leitungspositionen besetzt, warum wir wenige Mandate führen und wie die vertrauliche Direktansprache funktioniert.",
  alternates: { canonical: "/ansatz" },
  openGraph: { title: "Ansatz | Doctovip", url: "/ansatz" },
};

const abschnitte = [
  {
    id: "leitungsebene",
    titel: "Warum nur Leitungsebene",
    text: [
      "Eine Leitungsposition ist keine größere Version einer Facharztstelle. Wer eine Abteilung, ein Haus oder ein MVZ führt, entscheidet über Personal, Qualität und Kultur. Die Erwartungen der Träger, der Teams und der Kandidatin oder des Kandidaten greifen hier ineinander.",
      "Diese Besetzungen folgen eigenen Regeln. Die Zahl möglicher Persönlichkeiten ist klein, jede ist in ihrem Haus sichtbar, und ein Wechsel hat Folgen für viele Menschen. Deshalb arbeiten wir ausschließlich auf dieser Ebene und kennen sie genau.",
    ],
  },
  {
    id: "wenige-mandate",
    titel: "Warum wenige Mandate",
    text: [
      "Wir führen nur so viele Mandate, wie ein Partner persönlich begleiten kann. Das bedeutet: Der Partner, der Ihr Haus im ersten Gespräch kennenlernt, spricht auch mit den Kandidatinnen und Kandidaten und sitzt bei der Vertragsverhandlung mit am Tisch.",
      "Ein Mandat endet für uns nicht mit der Unterschrift. Wir bleiben in den ersten Monaten ansprechbar, für das Haus und für die neue Leitung.",
    ],
  },
  {
    id: "direktansprache",
    titel: "Wie die Direktansprache funktioniert",
    text: [
      "Wir schreiben keine Stelle aus. Stattdessen entwickeln wir aus dem Profil der Position eine überschaubare Liste von Persönlichkeiten, die dafür in Frage kommen. Jede Ansprache erfolgt durch den verantwortlichen Partner, persönlich und ohne Hinweis auf das suchende Haus, solange die Kandidatin oder der Kandidat nicht zugestimmt hat.",
      "Wer angesprochen wird, entscheidet allein, ob ein Gespräch stattfindet. Unterlagen geben wir nur mit ausdrücklicher Zustimmung weiter. Eine Kandidatendatenbank führen wir nicht.",
    ],
  },
];

export default function Ansatz() {
  return (
    <>
      <PageHeader title="Wenige Mandate, nur Leitungsebene, ohne Ausschreibung.">
        <p>
          Unser Ansatz folgt aus der Aufgabe. Eine ärztliche Leitung wird selten über eine Anzeige gefunden. Sie wird
          gefunden, indem jemand mit Sorgfalt und Diskretion die richtigen Gespräche führt.
        </p>
      </PageHeader>

      <div className="wrap border-t border-line pb-24 md:pb-32 xl:pb-40">
        {abschnitte.map((a, i) => (
          <section
            key={a.id}
            aria-labelledby={a.id}
            className="grid gap-8 border-b border-line py-16 first:border-t-0 last:border-b-0 md:grid-cols-12 md:gap-8 md:py-24"
          >
            <h2 id={a.id} className="text-2xl md:col-span-4 md:text-3xl">
              {a.titel}
            </h2>
            <div data-reveal className="space-y-6 md:col-span-7 md:col-start-6">
              {a.text.map((t) => (
                <p key={t} className="max-w-measure">
                  {t}
                </p>
              ))}
            </div>
            {i === 1 && (
              <figure className="md:col-span-7 md:col-start-6" data-reveal>
                <blockquote className="max-w-measure">
                  <p className="font-display text-2xl font-light leading-heading text-ink md:text-3xl">
                    „Wer eine Abteilung führt, prägt sie länger, als jede Strategie dauert.“
                  </p>
                </blockquote>
                <figcaption className="mt-4 text-base text-stone">Leitgedanke von Doctovip</figcaption>
              </figure>
            )}
          </section>
        ))}
      </div>

      <section aria-labelledby="weiter" className="wrap border-t border-line pb-24 pt-16 md:pb-32 md:pt-24">
        <h2 id="weiter" className="text-2xl md:text-3xl">
          Wie es weitergeht
        </h2>
        <div className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
          <ArrowLink href="/fuer-haeuser">Für Häuser</ArrowLink>
          <ArrowLink href="/fuer-aerzte">Für Ärztinnen und Ärzte</ArrowLink>
        </div>
      </section>
    </>
  );
}
