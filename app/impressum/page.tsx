import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

// BEISPIELINHALT: Vor Livegang durch den geprüften Rechtstext ersetzen (siehe SAMPLES.md).
export default function Page() {
  return (
    <PageHeader title="Impressum">
      <p>Angaben gemäß § 5 DDG. Doctovip, Musterstraße 1, 10000 Berlin. Vertreten durch die Geschäftsführung. Kontakt: kontakt@doctovip.de.</p>
    </PageHeader>
  );
}
