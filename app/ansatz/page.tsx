import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ArrowLink } from "@/components/Links";
import { Photo } from "@/components/Photo";

export const metadata: Metadata = {
  title: "Ansatz",
  description:
    "Der Ansatz von Doctovip: nur leitende und geschäftsführende ärztliche Positionen in Kliniken und MVZ, kuratiert und diskret.",
  openGraph: { title: "Ansatz | Doctovip" },
};

const abschnitte = [
  {
    id: "leitungsebene",
    titel: "Warum nur Leitungsebene",
    text: [
      "Eine Leitungsposition ist keine größere Version einer Facharztstelle. Wer eine Abteilung, ein Haus oder ein MVZ führt, entscheidet über Personal, Qualität und Kultur. Die Erwartungen der Träger, der Teams und der Kandidatin oder des Kandidaten greifen hier ineinander.",
      "Diese Besetzungen folgen eigenen Regeln. Die Zahl möglicher Persönlichkeiten ist klein, jede ist in ihrem Haus sichtbar, und ein Wechsel hat Folgen für viele Menschen. Deshalb arbeiten wir ausschließlich auf dieser Ebene.",
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
          Unser Ansatz folgt aus der Aufgabe: Leitungspositionen besetzen wir kuratiert und diskret, im persönlichen
          Gespräch.
        </p>
      </PageHeader>

      <div className="wrap pb-24 md:pb-32">
        <Photo
          src="/images/mvz.webp"
          alt="Schwarz-Weiß-Aufnahme eines hellen Flurs mit Sitzreihe am Fenster"
          width={1200}
          height={900}
          sizes="(min-width: 1280px) 1152px, 100vw"
          priority
          className="aspect-wide w-full rounded-panel object-cover md:aspect-banner"
        />
      </div>

      <div className="bg-white">
        <div className="wrap">
          {abschnitte.map((a, i) => (
            <section
              key={a.id}
              aria-labelledby={a.id}
              className="grid gap-8 border-line py-16 md:grid-cols-12 md:gap-8 md:py-24 [&:not(:first-child)]:border-t"
            >
              <h2 id={a.id} className="text-2xl md:col-span-4 md:text-h2">
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
                    <p className="font-display text-2xl font-light leading-heading text-ink">
                      „Wer eine Abteilung führt, prägt sie länger, als jede Strategie dauert.“
                    </p>
                  </blockquote>
                </figure>
              )}
            </section>
          ))}
        </div>
      </div>

      <section aria-labelledby="weiter" className="wrap section">
        <h2 id="weiter" className="text-2xl md:text-h2">
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
