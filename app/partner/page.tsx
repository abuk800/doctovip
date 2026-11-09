import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Portrait } from "@/components/Portrait";
import { ArrowLink } from "@/components/Links";

export const metadata: Metadata = {
  title: "Partner",
  description: "Die Partner von Doctovip führen jedes Mandat persönlich, vom ersten Gespräch bis nach dem ersten Arbeitstag.",
  alternates: { canonical: "/partner" },
  openGraph: { title: "Partner | Doctovip", url: "/partner" },
};

// PLATZHALTER: Porträts (Schwarz-Weiß, 4:5), Namen und Profile vor Livegang ersetzen
const partner = [
  { ini: "VN", name: "Vorname Nachname", funktion: "Partnerin" },
  { ini: "VN", name: "Vorname Nachname", funktion: "Partner" },
];

export default function Partner() {
  return (
    <>
      <PageHeader title="Die Partner von Doctovip.">
        <p>Jedes Mandat liegt in der Hand eines Partners. Sie sprechen mit derselben Person, vom ersten Gespräch an.</p>
      </PageHeader>

      <div className="wrap border-t border-line pb-24 md:pb-32 xl:pb-40">
        {partner.map((p, i) => (
          <article
            key={i}
            aria-label={`${p.name}, ${p.funktion}`}
            data-reveal
            className="grid gap-8 border-b border-line py-16 last:border-b-0 md:grid-cols-12 md:gap-8 md:py-24"
          >
            <div className="max-w-portrait md:col-span-4">
              <Portrait initials={p.ini} alt={`Porträt folgt: ${p.name}, ${p.funktion}`} />
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <h2 className="text-2xl md:text-3xl">{p.name}</h2>
              <p className="mt-2 text-base text-stone">{p.funktion}</p>
              <div className="mt-8 max-w-measure space-y-4">
                <p>[Platzhalter: Werdegang in zwei bis drei Sätzen, etwa Stationen in Klinikleitung, Medizin oder Personalberatung.]</p>
                <p>[Platzhalter: Schwerpunkte der Mandatsarbeit und Fachgebiete.]</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section aria-labelledby="gespraech" className="wrap border-t border-line pb-24 pt-16 md:pb-32 md:pt-24">
        <h2 id="gespraech" className="text-2xl md:text-3xl">
          Gespräch vereinbaren
        </h2>
        <div className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
          <ArrowLink href="/fuer-haeuser#kontakt">Mandat besprechen</ArrowLink>
          <ArrowLink href="/fuer-aerzte#rueckruf">Vertraulichen Rückruf anfragen</ArrowLink>
        </div>
      </section>
    </>
  );
}
