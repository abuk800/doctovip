import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Form } from "@/components/Form";
import { Photo } from "@/components/Photo";
import { arztFields, confidentialNote, draftNotice } from "@/lib/forms";

export const metadata: Metadata = {
  title: "Für Ärzte",
  description:
    "Für leitende und geschäftsführende Ärztinnen und Ärzte: ein vertrauliches Gespräch mit Doctovip anfragen.",
  openGraph: { title: "Für Ärztinnen und Ärzte | Doctovip" },
};

const zusagen = [
  "Ihren Namen nennen wir einem Haus erst, wenn Sie ausdrücklich zugestimmt haben.",
  "Wir führen keine Kandidatendatenbank.",
  "Für ein erstes Gespräch brauchen wir keinen Lebenslauf.",
];

export default function FuerAerzte() {
  return (
    <>
      <PageHeader title="Ein Gespräch, das nur Sie und uns betrifft.">
        <p className="font-medium text-ink">Wir sprechen Sie an, Sie müssen sich nicht bewerben.</p>
        <p>
          Wer eine Abteilung oder ein Haus führt, möchte Möglichkeiten vertraulich prüfen können. Dafür braucht es
          Diskretion, und die nehmen wir ernst.
        </p>
      </PageHeader>

      <section aria-labelledby="vertraulichkeit" className="bg-white">
        <div className="wrap section">
          <div data-reveal>
            <h2 id="vertraulichkeit" className="max-w-heading">
              So gehen wir mit Ihren Angaben um
            </h2>
            <ul className="mt-12 max-w-measure border-b border-line md:mt-16">
              {zusagen.map((z) => (
                <li key={z} className="border-t border-line py-6 text-base text-ink">
                  {z}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="beginn" className="wrap section">
        <div data-reveal className="grid gap-12 xl:grid-cols-12 xl:items-center xl:gap-8">
          <div className="xl:col-span-4">
            <Photo
              src="/images/arbeitsweise.webp"
              alt="Schwarz-Weiß-Aufnahme einer hellen, geschwungenen Treppe in einem ruhigen Gebäude"
              width={1000}
              height={1250}
              sizes="(min-width: 1280px) 30vw, 100vw"
              className="aspect-portrait w-full max-w-portrait rounded-panel object-cover"
            />
          </div>
          <div className="xl:col-span-7 xl:col-start-6">
            <h2 id="beginn" className="max-w-heading">
              Wie ein Gespräch beginnt
            </h2>
            <div className="mt-8 max-w-measure space-y-6">
              <p>
                Sie hinterlassen Ihren Namen, Ihre Nummer und eine Zeit, zu der wir Sie gut erreichen. Ein Partner ruft
                Sie zurück. Im ersten Gespräch hören wir zu, erzählen Ihnen, welche Positionen wir begleiten, und Sie
                entscheiden, ob es einen zweiten Termin gibt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="rueckruf" aria-labelledby="rueckruf-titel" className="bg-white">
        <div className="wrap section">
          <div data-reveal>
            <h2 id="rueckruf-titel" className="max-w-heading">
              Vertraulichen Rückruf anfragen
            </h2>
            <div className="mt-12 max-w-measure rounded-panel border border-line bg-paper p-6 md:mt-16 md:p-12">
              <Form id="arzt" fields={arztFields} submitLabel="Rückruf anfragen" success={draftNotice} note={confidentialNote} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
