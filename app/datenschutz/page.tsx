import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

// BEISPIELINHALT: Vor Livegang durch den geprüften Rechtstext ersetzen (siehe SAMPLES.md).
export default function Page() {
  return (
    <PageHeader title="Datenschutz">
      <p>Wir verarbeiten personenbezogene Daten nur, soweit es für die Bearbeitung Ihrer Anfrage erforderlich ist. Diese Website bindet keine Tracking-Dienste ein und lädt Schriften von unserem eigenen Server.</p>
    </PageHeader>
  );
}
