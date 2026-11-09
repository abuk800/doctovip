import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Form, type FieldDef } from "@/components/Form";
import { Photo } from "@/components/Photo";

export const metadata: Metadata = {
  title: "Für Ärzte",
  description:
    "Vertrauliches Gespräch für Chefärztinnen, Chefärzte und ärztliche Leitungen. Wir sprechen Sie an, Sie müssen sich nicht bewerben.",
  alternates: { canonical: "/fuer-aerzte" },
  openGraph: { title: "Für Ärztinnen und Ärzte | Doctovip", url: "/fuer-aerzte" },
};

const zusagen = [
  "Ihren Namen nennen wir einem Haus erst, wenn Sie ausdrücklich zugestimmt haben.",
  "Ihren Arbeitgeber kontaktieren wir nicht.",
  "Wir führen keine Kandidatendatenbank. Was Sie uns mitteilen, sieht ausschließlich der verantwortliche Partner.",
  "Ort und Zeit unserer Gespräche bestimmen Sie.",
];

const fields: FieldDef[] = [
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "telefon", label: "Telefon", type: "tel", required: true, autoComplete: "tel" },
  { name: "zeit", label: "Bevorzugte Zeit", type: "select", options: ["Vormittags", "Mittags", "Nachmittags", "Abends", "Nach Vereinbarung"], required: true },
  { name: "hinweis", label: "Hinweis", type: "textarea", wide: true },
];

export default function FuerAerzte() {
  return (
    <>
      <PageHeader title="Ein Gespräch, das nur Sie und uns betrifft.">
        <p className="font-medium text-ink">Wir sprechen Sie an, Sie müssen sich nicht bewerben.</p>
        <p>
          Wer eine Abteilung oder ein Haus führt, hat meist gute Gründe, dort zu sein. Und trotzdem lohnt es sich zu
          wissen, welche Möglichkeiten es gibt. Dafür braucht es Vertraulichkeit, und die nehmen wir ernst.
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
              <p>Einen Lebenslauf benötigen wir dafür nicht.</p>
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
              <Form
                id="arzt"
                fields={fields}
                submitLabel="Rückruf anfragen"
                success="Vielen Dank. Ein Partner ruft Sie zur gewünschten Zeit zurück."
                note="Ihre Angaben sieht ausschließlich der verantwortliche Partner."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
