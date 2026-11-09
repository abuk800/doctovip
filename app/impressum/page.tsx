import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = { title: "Impressum", robots: { index: false, follow: true } };

export default function Page() {
  return (
    <PageHeader title="Impressum">
      <p>Wird vor der Veröffentlichung ergänzt.</p>
    </PageHeader>
  );
}
