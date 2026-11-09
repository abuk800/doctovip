import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLink, PillLink } from "@/components/Links";
import { Photo } from "@/components/Photo";
import { Accordion } from "@/components/Accordion";
import { MonogramOutline, Monogram } from "@/components/Logo";
import { IconDirect, IconFocus, IconLock, IconPerson, IconSupport } from "@/components/Icons";
import { positions } from "@/lib/site";
import { partners } from "@/content/partners";
import { mandate } from "@/content/mandate";
import { einblicke } from "@/content/einblicke";
import { faq } from "@/content/faq";

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

const erwarten = [
  { icon: <IconLock />, t: "Diskretion", d: "Ihre Suche bleibt im Haus unbemerkt." },
  { icon: <IconFocus />, t: "Fokus", d: "Wir besetzen ausschließlich Leitungspositionen." },
  { icon: <IconDirect />, t: "Direktansprache", d: "Wir erreichen Persönlichkeiten, die keine Anzeigen lesen." },
  { icon: <IconSupport />, t: "Begleitung", d: "Wir bleiben bis nach den ersten Monaten an Ihrer Seite." },
];

const karten = [
  { t: "Chefärztin, Chefarzt", d: "Fachliche und personelle Verantwortung für eine Abteilung.", l: "Mehr zur Chefarztposition" },
  { t: "Ärztliche Direktion", d: "Medizinische Gesamtverantwortung für ein Haus oder einen Verbund.", l: "Mehr zur Ärztlichen Direktion" },
  { t: "Medizinische Geschäftsführung", d: "Ärztliche Kompetenz in der Unternehmensleitung.", l: "Mehr zur Geschäftsführung" },
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

export default function Home() {
  return (
    <>
      {/* 4.2 Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden bg-paper">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 select-none whitespace-nowrap text-center font-display text-wordmark font-light uppercase leading-none tracking-normal text-ink opacity-4"
        >
          Doctovip
        </div>

        <div className="wrap relative z-10 xl:grid xl:min-h-hero xl:grid-cols-12">
          {/* Porträt: mobil gestapelt, ab xl unten bündig und mittig rechts */}
          <div className="relative mx-auto w-2/3 max-w-portrait pt-12 xl:absolute xl:bottom-0 xl:left-2/3 xl:mx-0 xl:h-5/6 xl:w-auto xl:max-w-none xl:-translate-x-1/2 xl:pt-0">
            <Photo
              src="/images/hero-portrait.webp"
              alt="Porträt einer ärztlichen Führungspersönlichkeit im dunklen Anzug, Schwarz-Weiß"
              width={922}
              height={1400}
              sizes="(min-width: 1280px) 30vw, 66vw"
              priority
              className="h-auto w-full xl:h-full xl:w-auto xl:max-w-none"
            />
          </div>

          <div className="relative z-10 pb-16 pt-8 xl:col-span-6 xl:flex xl:flex-col xl:justify-end xl:pb-24 xl:pt-0">
            <h1 id="hero-title">
              <span className="block">Für Positionen,</span>
              <span className="block text-brass">die man nicht ausschreibt.</span>
            </h1>
            <p className="mt-8 max-w-card">
              Doctovip besetzt ärztliche Leitungs- und Geschäftsführungspositionen in Kliniken und MVZ. Persönlich,
              vertraulich und ausschließlich auf Leitungsebene.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-6">
              <PillLink href="/fuer-haeuser#kontakt">Mandat besprechen</PillLink>
              <ArrowLink href="/fuer-aerzte">Vertrauliches Gespräch für Ärztinnen und Ärzte</ArrowLink>
            </div>
          </div>

          <div className="relative z-10 grid gap-4 pb-24 md:grid-cols-2 xl:col-span-3 xl:col-start-10 xl:flex xl:flex-col xl:justify-between xl:gap-8 xl:py-12">
            <div className="rounded-tile border border-line bg-white p-6">
              <p className="text-base font-medium text-ink">Ausschließlich Leitungsebene</p>
              <ul className="mt-4 space-y-3">
                {positions.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-base text-graphite">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brass" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-start gap-3 rounded-tile border border-line bg-white p-6 text-brass md:items-center">
              <IconLock />
              <p className="text-base text-ink">Keine Ausschreibung. Keine Datenbank. Kein Aufsehen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.3 Arbeitsweise */}
      <section aria-labelledby="arbeitsweise" className="bg-white">
        <div className="wrap section grid gap-16 xl:grid-cols-12 xl:items-center xl:gap-8">
          <div data-reveal className="relative mb-8 xl:col-span-4">
            <Photo
              src="/images/arbeitsweise.webp"
              alt="Schwarz-Weiß-Aufnahme einer hellen, geschwungenen Treppe in einem ruhigen Gebäude"
              width={1000}
              height={1250}
              sizes="(min-width: 1280px) 40vw, 100vw"
              className="aspect-portrait w-full rounded-panel object-cover"
            />
            <div className="absolute -bottom-6 left-6 max-w-card rounded-tile border border-line bg-white p-6 text-brass">
              <div className="flex items-center gap-3">
                <IconPerson />
                <p className="text-base font-medium text-ink">Ein Partner, ein Mandat.</p>
              </div>
              <p className="mt-2 text-base text-graphite">Vom ersten Gespräch bis nach dem ersten Arbeitstag.</p>
            </div>
          </div>

          <div data-reveal className="xl:col-span-7 xl:col-start-6">
            <h2 id="arbeitsweise" className="max-w-heading">
              Wenige Mandate. Jedes persönlich geführt.
            </h2>
            <p className="mt-8 max-w-measure">
              Wer eine Abteilung, ein Haus oder ein MVZ medizinisch führt, prägt es über Jahre. Deshalb begleiten wir nur
              wenige Mandate gleichzeitig. Jedes liegt vom ersten Gespräch bis nach dem ersten Arbeitstag in der Hand
              eines Partners.
            </p>
            {/* Vom Kunden bestätigen lassen. Keine weiteren Zahlen erfinden. */}
            <div className="mt-12 grid gap-3 md:grid-cols-3">
              <div className="rounded-card bg-mist p-6 text-ink">
                <p className="font-display text-3xl font-light leading-none text-current">4</p>
                <p className="mt-3 break-words text-base text-current">Positionstypen. Mehr besetzen wir nicht.</p>
              </div>
              <div className="rounded-card bg-brass p-6 text-paper">
                <p className="font-display text-3xl font-light leading-none text-current">0</p>
                <p className="mt-3 break-words text-base text-current">Öffentliche Ausschreibungen.</p>
              </div>
              <div className="rounded-card bg-ink p-6 text-paper">
                <p className="font-display text-3xl font-light leading-none text-current">1</p>
                <p className="mt-3 break-words text-base text-current">Verantwortlicher Partner pro Mandat.</p>
              </div>
            </div>
            <div className="mt-12">
              <PillLink href="/ansatz" outline>
                Unser Ansatz
              </PillLink>
            </div>
          </div>
        </div>
      </section>

      {/* 4.4 Was Sie erwarten können */}
      <section aria-labelledby="erwarten" className="bg-paper">
        <div className="wrap section">
          <div data-reveal>
            <h2 id="erwarten" className="mx-auto max-w-heading text-center">
              Was Häuser und Ärzte von uns erwarten können.
            </h2>
            <ul className="mt-16 grid rounded-panel border border-line bg-white md:grid-cols-2 xl:grid-cols-4">
              {erwarten.map((e) => (
                <li
                  key={e.t}
                  className="border-line p-8 [&:not(:first-child)]:border-t md:[&:not(:first-child)]:border-t-0 md:[&:nth-child(n+3)]:border-t md:[&:nth-child(even)]:border-l xl:[&:nth-child(n+3)]:border-t-0 xl:[&:not(:first-child)]:border-l"
                >
                  <div className="flex items-center gap-3 text-brass">
                    {e.icon}
                    <h3 className="font-text text-body font-medium text-ink">{e.t}</h3>
                  </div>
                  <p className="mt-4 text-base">{e.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4.5 Positionen */}
      <section aria-labelledby="positionen" className="bg-white">
        <div className="wrap section">
          <div data-reveal>
            <h2 id="positionen" className="mx-auto max-w-heading text-center">
              Wir besetzen vier Arten von Positionen.
            </h2>
            <p className="mx-auto mt-6 max-w-measure text-center">
              Jede dieser Positionen trägt Verantwortung für Menschen, Qualität und den Betrieb eines Hauses.
            </p>
            <ul className="mt-16 grid gap-4 md:grid-cols-3">
              {karten.map((k) => (
                <li key={k.t} className="flex flex-col rounded-card border border-line bg-paper p-8">
                  <h3>{k.t}</h3>
                  <p className="mt-4 flex-1 text-base">{k.d}</p>
                  <p className="mt-8">
                    <ArrowLink href="/fuer-haeuser">{k.l}</ArrowLink>
                  </p>
                </li>
              ))}
            </ul>

            <div className="on-ink mt-4 grid overflow-hidden rounded-panel bg-ink md:grid-cols-2">
              <div className="p-8 md:p-12 xl:p-16">
                <h3 className="text-2xl font-light">Ohne ärztliche Leitung kein MVZ.</h3>
                <p className="mt-6 max-w-measure text-base">
                  Jedes MVZ braucht eine benannte ärztliche Leitung, die selbst im MVZ ärztlich tätig ist. Wird diese
                  Position frei, ist der Betrieb betroffen und nicht nur der Dienstplan. Solche Mandate behandeln wir
                  mit Vorrang.
                </p>
                <p className="mt-8">
                  <ArrowLink href="/fuer-haeuser#mvz">Mehr für MVZ-Betreiber</ArrowLink>
                </p>
              </div>
              <div className="p-4 md:p-6">
                <Photo
                  src="/images/mvz.webp"
                  alt="Schwarz-Weiß-Aufnahme eines hellen Flurs mit Sitzreihe am Fenster"
                  width={1200}
                  height={900}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="aspect-photo h-full w-full rounded-tile object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.6 Vorgehen */}
      <section aria-labelledby="vorgehen" className="bg-paper">
        <div className="wrap section">
          <div data-reveal>
            <h2 id="vorgehen" className="max-w-heading">
              Vier Schritte vom ersten Gespräch bis zum Wechsel.
            </h2>
            <ol className="mt-16 space-y-12 border-l border-line pl-8 xl:grid xl:grid-cols-4 xl:gap-8 xl:space-y-0 xl:border-l-0 xl:border-t xl:pl-0">
              {vorgehen.map(([t, d], i) => (
                <li key={t} className="relative xl:pt-8">
                  <span aria-hidden="true" className="absolute -left-8 top-4 h-px w-4 bg-brass xl:left-0 xl:top-0 xl:w-12" />
                  <p className="font-display text-3xl font-light leading-none text-brass">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4">{t}</h3>
                  <p className="mt-3 text-base">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 4.7 Diskretion (Tinte, erste von zwei dunklen Sektionen) */}
      <section aria-labelledby="diskretion" className="on-ink relative overflow-hidden bg-ink">
        <MonogramOutline className="pointer-events-none absolute -bottom-16 -right-16 h-mono w-mono opacity-10" />
        <div className="wrap section relative grid gap-12 xl:grid-cols-2 xl:items-center xl:gap-16">
          <div data-reveal>
            <h2 id="diskretion" className="max-w-heading">
              Unsere Mandate erscheinen in keiner Stellenbörse.
            </h2>
            <p className="mt-8 max-w-measure text-paper/72">
              Für Häuser und für Kandidaten gilt dasselbe Prinzip: Niemand erfährt etwas, das er nicht erfahren soll.
            </p>
          </div>
          <ul data-reveal className="border-b border-paper/15">
            {diskretion.map((t) => (
              <li key={t} className="border-t border-paper/15 py-6 text-base text-paper">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4.8 Wer Ihr Mandat führt */}
      <section aria-labelledby="partner" className="bg-white">
        <div className="wrap section">
          <div data-reveal>
            <h2 id="partner" className="mx-auto max-w-heading text-center">
              Wer Ihr Mandat führt.
            </h2>
            <div className="mx-auto mt-16 grid max-w-partners gap-12 md:grid-cols-2 md:gap-8">
              {partners.map((p) => (
                <article key={p.slug}>
                  <Photo src={p.image} alt={p.alt} width={800} height={1000} sizes="(min-width: 960px) 480px, 100vw" className="aspect-portrait w-full rounded-card object-cover" />
                  <h3 className="mt-6">{p.name}</h3>
                  <p className="mt-1 text-sm font-medium text-stone">{p.role}</p>
                  <p className="mt-4 text-base">{p.summary}</p>
                  <p className="mt-4">
                    <ArrowLink href={`/partner#${p.slug}`}>Profil von {p.name.replace(/^(Prof\. )?Dr\. /, "")} ansehen</ArrowLink>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4.9 Ausgewählte Mandate */}
      <section aria-labelledby="mandate" className="bg-paper">
        <div className="wrap section">
          <div data-reveal>
            <h2 id="mandate">Ausgewählte Mandate</h2>
            <p className="mt-6 max-w-measure">Anonymisiert, weil Diskretion auch nach der Besetzung gilt.</p>
            <div className="mt-16 overflow-hidden rounded-panel border border-line bg-white">
              <table className="w-full text-left">
                <caption className="sr-only">Ausgewählte, anonymisierte Mandate mit Position, Einrichtung, Region und Besetzungsdauer</caption>
                <thead className="sr-only md:not-sr-only">
                  <tr className="text-sm text-stone">
                    <th scope="col" className="w-5/12 px-8 py-4 font-medium">Position</th>
                    <th scope="col" className="py-4 pr-6 font-medium">Einrichtung</th>
                    <th scope="col" className="py-4 pr-6 font-medium">Region</th>
                    <th scope="col" className="py-4 pr-8 font-medium">Besetzungsdauer</th>
                  </tr>
                </thead>
                <tbody className="block md:table-row-group">
                  {mandate.map((m) => (
                    <tr key={m.position} className="block border-t border-line px-6 py-6 md:table-row md:px-0 md:py-0">
                      <th scope="row" className="block font-display text-xl font-normal text-ink md:table-cell md:px-8 md:py-6 md:align-top">
                        {m.position}
                      </th>
                      <td className="block pt-2 text-base text-graphite md:table-cell md:py-6 md:pr-6 md:pt-6 md:align-top">{m.einrichtung}</td>
                      <td className="block text-base text-graphite md:table-cell md:py-6 md:pr-6 md:align-top">{m.region}</td>
                      <td className="block text-base text-graphite md:table-cell md:py-6 md:pr-8 md:align-top">{m.dauer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4.10 Einblicke */}
      <section aria-labelledby="einblicke" className="bg-white">
        <div className="wrap section">
          <div data-reveal>
            <h2 id="einblicke" className="max-w-heading">
              Einblicke für Träger und Ärzte.
            </h2>
            <ul className="mt-16 grid gap-8 md:grid-cols-3">
              {einblicke.map((e) => (
                <li key={e.slug}>
                  <Link href={`/einblicke/${e.slug}`} className="group block">
                    <div className="overflow-hidden rounded-tile">
                      <Photo
                        src={e.image}
                        alt={e.alt}
                        width={1200}
                        height={750}
                        sizes="(min-width: 1280px) 384px, (min-width: 768px) 33vw, 100vw"
                        className="aspect-wide w-full object-cover transition-transform duration-zoom group-hover:scale-102"
                      />
                    </div>
                    <time dateTime={e.dateISO} className="mt-6 block text-sm text-stone">
                      {e.date}
                    </time>
                    <h3 className="mt-2 text-xl">{e.title}</h3>
                    <p className="mt-3 text-base">{e.teaser}</p>
                    <span className="tlink mt-4 inline-block">
                      Lesen <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-16 text-center">
              <PillLink href="/einblicke" outline>
                Alle Einblicke
              </PillLink>
            </div>
          </div>
        </div>
      </section>

      {/* 4.11 FAQ */}
      <section aria-labelledby="faq" className="bg-paper">
        <div className="wrap section">
          <div data-reveal>
            <h2 id="faq" className="text-center">
              Häufige Fragen.
            </h2>
            <div className="mx-auto mt-16 max-w-partners">
              <Accordion items={faq.map(({ q, a }) => ({ q, a }))} />
            </div>
          </div>
        </div>
      </section>

      {/* 4.12 Abschluss-Banner (zweite dunkle Fläche) */}
      <section aria-labelledby="abschluss" className="bg-white">
        <div className="wrap section">
          <div data-reveal className="on-ink mx-auto max-w-banner rounded-banner bg-ink px-6 py-16 text-center md:px-16 md:py-24">
            <h2 id="abschluss" className="mx-auto max-w-heading">
              Sprechen wir über Ihre Position.
            </h2>
            <p className="mx-auto mt-6 max-w-card text-paper/72">
              Ein erstes Gespräch ist vertraulich und unverbindlich. Sie entscheiden, wie es weitergeht.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
              <PillLink href="/fuer-haeuser#kontakt">Mandat besprechen</PillLink>
              <ArrowLink href="/fuer-aerzte#rueckruf">Vertraulichen Rückruf anfragen</ArrowLink>
            </div>
            <div aria-hidden="true" className="mt-16 flex items-center gap-6">
              <span className="h-px flex-1 bg-brass-light" />
              <Monogram variant="dark" />
              <span className="h-px flex-1 bg-brass-light" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
