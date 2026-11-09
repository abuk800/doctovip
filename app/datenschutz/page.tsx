import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = { title: "Datenschutz", robots: { index: false, follow: true } };

export default function Page() {
  return (
    <PageHeader title="Datenschutz">
      <p>Wird vor der Veröffentlichung ergänzt.</p>
    </PageHeader>
  );
}
