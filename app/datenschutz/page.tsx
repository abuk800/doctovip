import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <PageHeader title="Datenschutz">
        {/* TODO: Vor Livegang durch geprüften Rechtstext ersetzen */}
        <p>[Platzhalter] Dieser Text wird vor Veröffentlichung der Seite durch den geprüften Rechtstext ersetzt.</p>
      </PageHeader>
    </>
  );
}
