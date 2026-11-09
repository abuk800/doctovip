import type { Metadata } from "next";
import { ArrowLink, ButtonLink } from "@/components/Links";
import { Portrait } from "@/components/Portrait";

export const metadata: Metadata = {
  title: { absolute: "Doctovip | Ärztliche Leitungspositionen in Kliniken und MVZ" },
  description:
    "Doctovip besetzt Chefärzte, Ärztliche Direktion, Ärztliche Leitung MVZ und Medizinische Geschäftsführung. Persönlich begleitet, vertraulich geführt, ohne öffentliche Ausschreibung.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Doctovip | Für Positionen, die man nicht ausschreibt.",
    description: "Ärztliche Leitungs- und Geschäftsführungspositionen in Kliniken und MVZ. Vertraulich besetzt.",
    url: "/",
  },
};

const positionen = [
  ["Chefärztin, Chefarzt", "Fachliche und personelle Verantwortung für eine Abteilung."],
  ["Ärztliche Direktion", "Medizinische Gesamtverantwortung für ein Haus oder einen Verbund."],
  ["Ärztliche Leitung MVZ", "Die Position, ohne die ein MVZ nicht betrieben werden darf."],
  ["Medizinische Geschäftsführung", "Ärztliche Kompetenz in der Unternehmensleitung."],
];

const vorgehen = [
  ["Analyse", "Wir verstehen das Haus, die Abteilung und die Erwartungen an die Position."],
  ["Direktansprache", "Wir sprechen geeignete Persönlichkeiten gezielt und vertraulich an."],
  ["Auswahl", "Sie lernen wenige, sorgfältig geprüfte Kandidatinnen und Kandidaten kennen."],
  ["Begleitung", "Wir begleiten Vertragsverhandlung, Wechsel und die ersten Monate."],
];

const diskretion = [
  "Keine öffentlichen Ausschreibungen.",
  "Keine Kandidatendatenbank.",
  "Ansprache ausschließlich durch den verantwortlichen Partner.",
  "Unterlagen gehen nur mit ausdrücklicher Zustimmung weiter.",
];

// PLATZHALTER: vor Livegang durch echte, freigegebene Mandate ersetzen
const mandate = [
  ["Chefärztin oder Chefarzt, Kardiologie", "Klinikverbund", "Süddeutschland", "14 Wochen"],
  ["Ärztliche Leitung", "MVZ, mehrere Standorte", "Nordrhein-Westfalen", "9 Wochen"],
  ["Medizinische Geschäftsführung", "Privatklinik", "Norddeutschland", "18 Wochen"],
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="wrap pb-24 pt-24 md:pb-32 md:pt-32 xl:pb-40 xl:pt-40">
        <h1 id="hero-title" className="max-w-heading">
          Für Positionen, die man nicht ausschreibt.
        </h1>
        <p className="mt-8 max-w-measure text-xl text-graphite">
          Doctovip besetzt ärztliche Leitungs- und Geschäftsführungspositionen in Kliniken und MVZ. Persönlich
          begleitet, vertraulich geführt und ausschließlich auf Leitungsebene.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-6">
          <ButtonLink href="/fuer-haeuser#kontakt">Mandat besprechen</ButtonLink>
          <ArrowLink href="/fuer-aerzte">Vertrauliches Gespräch für Ärztinnen und Ärzte</ArrowLink>
        </div>
      </section>

      {/* Positionen */}
      <section aria-labelledby="positionen" className="wrap border-t border-line pb-24 pt-24 md:pb-32 md:pt-32 xl:pt-40">
        <div data-reveal>
          <h2 id="positionen" className="max-w-heading">
            Wir besetzen vier Arten von Positionen.
          </h2>
          <ul className="mt-12 border-b border-line md:mt-16">
            {positionen.map(([name, text]) => (
              <li key={name} className="grid gap-2 border-t border-line py-8 md:grid-cols-12 md:gap-8">
                <h3 className="font-display text-2xl font-light md:col-span-5">{name}</h3>
                <p className="text-lg text-graphite md:col-span-6 md:col-start-7">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Arbeitsweise */}
      <section aria-labelledby="arbeitsweise" className="wrap pb-24 md:pb-32 xl:pb-40">
        <div data-reveal>
          <h2 id="arbeitsweise" className="max-w-heading">
            Wenige Mandate. Jedes persönlich geführt.
          </h2>
          <p className="mt-8 max-w-measure text-graphite">
            Wer eine Abteilung, ein Haus oder ein MVZ medizinisch führt, prägt es über Jahre. Deshalb begleiten wir nur
            wenige Mandate gleichzeitig. Jedes liegt vom ersten Gespräch bis nach dem ersten Arbeitstag in der Hand
            eines Partners.
          </p>
        </div>
      </section>

      {/* Vorgehen */}
      <section aria-labelledby="vorgehen" className="wrap border-t border-line pb-24 pt-24 md:pb-32 md:pt-32 xl:pb-40 xl:pt-40">
        <div data-reveal>
          <h2 id="vorgehen" className="max-w-heading">
            Vier Schritte vom ersten Gespräch bis zum Wechsel.
          </h2>
          <ol className="mt-12 border-b border-line lg:grid lg:grid-cols-4 lg:gap-x-8 lg:border-b-0 md:mt-16">
            {vorgehen.map(([titel, text], i) => (
              <li
                key={titel}
                className="grid grid-cols-[32px_1fr] gap-x-4 border-t border-line py-6 lg:block lg:py-0 lg:pt-6"
              >
                <span className="pt-1 text-base font-medium tabular-nums text-brass lg:block lg:pt-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="lg:mt-3">
                  <h3>{titel}</h3>
                  <p className="mt-2 text-base text-graphite">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Diskretion: die eine dunkle Sektion */}
      <section aria-labelledby="diskretion" className="on-ink bg-ink text-paper">
        <div className="wrap section" data-reveal>
          <h2 id="diskretion" className="max-w-heading">
            Unsere Mandate erscheinen in keiner Stellenbörse.
          </h2>
          <ul className="mt-12 max-w-measure border-b border-paper/24 md:mt-16">
            {diskretion.map((t) => (
              <li key={t} className="border-t border-paper/24 py-4 text-lg">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MVZ */}
      <section aria-labelledby="mvz" className="wrap section">
        <div data-reveal>
          <h2 id="mvz" className="max-w-heading">
            Ohne ärztliche Leitung kein MVZ.
          </h2>
          <p className="mt-8 max-w-measure text-graphite">
            Jedes MVZ braucht eine benannte ärztliche Leitung, die selbst im MVZ ärztlich tätig ist. Wird diese Position
            frei, ist der Betrieb betroffen und nicht nur der Dienstplan. Solche Mandate behandeln wir mit Vorrang.
          </p>
          <p className="mt-8">
            <ArrowLink href="/fuer-haeuser#mvz">Mehr für MVZ-Betreiber</ArrowLink>
          </p>
        </div>
      </section>

      {/* Ausgewählte Mandate */}
      <section aria-labelledby="mandate" className="wrap border-t border-line pb-24 pt-24 md:pb-32 md:pt-32 xl:pb-40 xl:pt-40">
        {/* PLATZHALTER: vor Livegang durch echte, freigegebene Mandate ersetzen */}
        <div data-reveal>
          <h2 id="mandate">Ausgewählte Mandate</h2>
          <p className="mt-4 max-w-measure text-base text-graphite">
            Beispiele. Diese Einträge sind Platzhalter und beschreiben keine tatsächlich besetzten Mandate.
          </p>
          <table className="mt-12 w-full border-b border-line text-left md:mt-16">
            <caption className="sr-only">Beispielhafte Mandate mit Position, Einrichtung, Region und Besetzungsdauer</caption>
            <thead className="sr-only md:not-sr-only">
              <tr className="text-base text-stone">
                <th scope="col" className="w-5/12 pb-4 pr-6 font-normal">Position</th>
                <th scope="col" className="pb-4 pr-6 font-normal">Einrichtung</th>
                <th scope="col" className="pb-4 pr-6 font-normal">Region</th>
                <th scope="col" className="pb-4 font-normal">Besetzungsdauer</th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {mandate.map(([pos, typ, region, dauer]) => (
                <tr key={pos} className="block border-t border-line py-6 md:table-row md:py-0">
                  <th scope="row" className="block font-display text-xl font-normal md:table-cell md:py-6 md:pr-6 md:align-top">
                    {pos}
                  </th>
                  <td className="block text-base text-graphite md:table-cell md:py-6 md:pr-6 md:align-top">{typ}</td>
                  <td className="block text-base text-graphite md:table-cell md:py-6 md:pr-6 md:align-top">{region}</td>
                  <td className="block text-base text-graphite md:table-cell md:py-6 md:align-top">{dauer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Partner */}
      <section aria-labelledby="partner" className="wrap pb-24 md:pb-32 xl:pb-40">
        {/* PLATZHALTER: Porträts, Namen und Werdegänge vor Livegang ersetzen */}
        <div data-reveal>
          <h2 id="partner" className="max-w-heading">
            Wer Ihr Mandat führt.
          </h2>
          <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-16 xl:gap-x-32">
            {[
              ["VN", "Vorname Nachname", "Partnerin"],
              ["VN", "Vorname Nachname", "Partner"],
            ].map(([ini, name, funktion], i) => (
              <article key={i} className="max-w-portrait">
                <Portrait initials={ini} alt={`Porträt folgt: ${name}, ${funktion}`} />
                <h3 className="mt-6">{name}</h3>
                <p className="mt-1 text-base text-stone">{funktion}</p>
                <p className="mt-4 text-base text-graphite">[Platzhalter: zwei Sätze zum Werdegang.]</p>
              </article>
            ))}
          </div>
          <p className="mt-12">
            <ArrowLink href="/partner">Partner kennenlernen</ArrowLink>
          </p>
        </div>
      </section>

      {/* Abschluss */}
      <section aria-labelledby="abschluss" className="wrap border-t border-line pb-24 pt-24 md:pb-32 md:pt-32 xl:pb-40 xl:pt-40">
        <div data-reveal>
          <h2 id="abschluss" className="max-w-heading">
            Sprechen wir über Ihre Position.
          </h2>
          <div className="mt-12 md:mt-16 md:grid md:grid-cols-2">
            <div className="md:pr-12 xl:pr-24">
              <h3>Für Häuser</h3>
              <p className="mt-3 text-base text-graphite">
                Sie suchen eine ärztliche Leitung und möchten, dass die Suche im Haus unbemerkt bleibt.
              </p>
              <p className="mt-6">
                <ButtonLink href="/fuer-haeuser#kontakt">Mandat besprechen</ButtonLink>
              </p>
            </div>
            <div className="mt-12 border-t border-line pt-12 md:mt-0 md:border-l md:border-t-0 md:pl-12 md:pt-0 xl:pl-24">
              <h3>Für Ärztinnen und Ärzte</h3>
              <p className="mt-3 text-base text-graphite">
                Sie führen bereits und möchten wissen, was möglich ist. Das Gespräch bleibt unter uns.
              </p>
              <p className="mt-6">
                <ArrowLink href="/fuer-aerzte#rueckruf">Vertraulichen Rückruf anfragen</ArrowLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
