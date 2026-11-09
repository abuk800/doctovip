import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Form, type FieldDef } from "@/components/Form";

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
  {
    name: "zeit",
    label: "Bevorzugte Zeit",
    type: "select",
    options: ["Vormittags", "Mittags", "Nachmittags", "Abends", "Nach Vereinbarung"],
    required: true,
  },
  { name: "hinweis", label: "Hinweis", type: "textarea", wide: true },
];

export default function FuerAerzte() {
  return (
    <>
      <PageHeader title="Ein Gespräch, das nur Sie und uns betrifft.">
        <p>Wir sprechen Sie an, Sie müssen sich nicht bewerben.</p>
        <p className="!text-lg">
          Wer eine Abteilung oder ein Haus führt, hat meist gute Gründe, dort zu sein. Und trotzdem lohnt es sich zu
          wissen, welche Möglichkeiten es gibt. Dafür braucht es Vertraulichkeit, und die nehmen wir ernst.
        </p>
      </PageHeader>

      <section aria-labelledby="vertraulichkeit" className="wrap border-t border-line pb-24 pt-24 md:pb-32 md:pt-32">
        <div data-reveal>
          <h2 id="vertraulichkeit" className="max-w-heading">
            So gehen wir mit Ihren Angaben um
          </h2>
          <ul className="mt-12 max-w-measure border-b border-line md:mt-16">
            {zusagen.map((z) => (
              <li key={z} className="border-t border-line py-4 text-lg">
                {z}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="beginn" className="wrap pb-24 md:pb-32">
        <div data-reveal className="grid gap-8 md:grid-cols-12">
          <h2 id="beginn" className="text-2xl md:col-span-4 md:text-3xl">
            Wie ein Gespräch beginnt
          </h2>
          <div className="max-w-measure space-y-6 md:col-span-7 md:col-start-6">
            <p>
              Sie hinterlassen Ihren Namen, Ihre Nummer und eine Zeit, zu der wir Sie gut erreichen. Ein Partner ruft
              Sie zurück. Im ersten Gespräch hören wir zu, erzählen Ihnen, welche Positionen wir begleiten, und Sie
              entscheiden, ob es einen zweiten Termin gibt.
            </p>
            <p>Einen Lebenslauf benötigen wir dafür nicht.</p>
          </div>
        </div>
      </section>

      <section id="rueckruf" aria-labelledby="rueckruf-titel" className="wrap border-t border-line pb-24 pt-24 md:pb-32 md:pt-32 xl:pb-40">
        <div data-reveal>
          <h2 id="rueckruf-titel" className="max-w-heading">
            Vertraulichen Rückruf anfragen
          </h2>
          <div className="mt-12 md:mt-16">
            <Form
              id="arzt"
              fields={fields}
              submitLabel="Rückruf anfragen"
              success="Vielen Dank. Ein Partner ruft Sie zur gewünschten Zeit zurück."
              note="Ihre Angaben sieht ausschließlich der verantwortliche Partner."
            />
          </div>
        </div>
      </section>
    </>
  );
}
