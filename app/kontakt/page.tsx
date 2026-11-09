import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Form } from "@/components/Form";
import { arztFields, confidentialNote, draftNotice, hausFields } from "@/lib/forms";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt zu Doctovip: Mandat besprechen oder vertraulichen Rückruf anfragen.",
  openGraph: { title: "Kontakt | Doctovip" },
};

export default function Kontakt() {
  return (
    <>
      <PageHeader title="Kontakt">
        <p>Wir antworten persönlich. Jede Anfrage behandeln wir vertraulich.</p>
      </PageHeader>

      <section aria-labelledby="haus-titel" className="bg-white">
        <div className="wrap section">
          <h2 id="haus-titel">Für Häuser: Mandat besprechen</h2>
          <div className="mt-12 rounded-panel border border-line bg-paper p-6 md:p-12">
            <Form id="k-haus" fields={hausFields} submitLabel="Anfrage senden" success={draftNotice} note={confidentialNote} />
          </div>
        </div>
      </section>

      <section aria-labelledby="arzt-titel" className="wrap section">
        <h2 id="arzt-titel">Für Ärztinnen und Ärzte: Rückruf anfragen</h2>
        <div className="mt-12 max-w-measure rounded-panel border border-line bg-white p-6 md:p-12">
          <Form id="k-arzt" fields={arztFields} submitLabel="Rückruf anfragen" success={draftNotice} note={confidentialNote} />
        </div>
      </section>
    </>
  );
}
