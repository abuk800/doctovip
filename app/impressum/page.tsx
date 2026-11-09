import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <PageHeader title="Impressum">
        {/* TODO: Vor Livegang durch geprüften Rechtstext ersetzen */}
        <p>[Platzhalter] Dieser Text wird vor Veröffentlichung der Seite durch den geprüften Rechtstext ersetzt.</p>
      </PageHeader>
    </>
  );
}
