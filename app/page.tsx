import type { Metadata } from "next";
import { ArrowLink, PillLink } from "@/components/Links";
import { Photo } from "@/components/Photo";
import { Accordion } from "@/components/Accordion";
import { Monogram, MonogramOutline } from "@/components/Logo";
import { IconLock, IconPerson } from "@/components/Icons";
import { positions } from "@/lib/site";
import { faq } from "@/content/faq";
import { anlaesse } from "@/content/anlaesse";

export const metadata: Metadata = {
  title: { absolute: "Doctovip | Ärztliche Leitungspositionen in Kliniken und MVZ" },
  description:
    "Doctovip vermittelt leitende und geschäftsführende Ärztinnen und Ärzte an Kliniken und MVZ. Kuratiert, reduziert und diskret.",
  openGraph: {
    title: "Doctovip | Für Positionen, die man nicht ausschreibt.",
    description: "Leitende und geschäftsführende Ärztinnen und Ärzte für Kliniken und MVZ. Kuratiert und diskret.",
  },
};

const karten = [
  { t: "Chefärztin, Chefarzt", d: "Fachliche und personelle Verantwortung für eine Abteilung.", l: "Mehr zur Chefarztposition" },
  { t: "Ärztliche Direktion", d: "Medizinische Gesamtverantwortung für ein Haus.", l: "Mehr zur Ärztlichen Direktion" },
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

const heroAlt = "Stimmungsbild: lächelnde Frau im hellen Blazer, Schwarz-Weiß";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden bg-paper">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 select-none whitespace-nowrap text-center font-display text-wordmark font-light uppercase leading-none tracking-normal text-ink opacity-6"
        >
          Doctovip
        </div>

        <div className="wrap relative z-10 xl:grid xl:min-h-hero xl:grid-cols-12">
          {/* Porträt: mobil gestapelt, ab xl unten bündig neben dem Textblock */}
          <div className="relative mx-auto w-2/3 max-w-portrait pt-12 xl:absolute xl:bottom-0 xl:left-figure xl:mx-0 xl:h-4/5 xl:w-auto xl:max-w-none xl:-translate-x-1/2 xl:pt-0">
            <Photo
              src="/images/hero-portrait.webp"
              alt={heroAlt}
              width={930}
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

          <div className="relative z-10 grid gap-4 pb-24 md:grid-cols-2 xl:col-span-3 xl:col-start-10 xl:flex xl:flex-col xl:items-end xl:justify-between xl:gap-8 xl:py-12">
            <div className="rounded-tile border border-line bg-white p-6 xl:w-info">
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
            <div className="flex items-start gap-3 rounded-tile border border-line bg-white p-6 text-brass xl:w-info">
              <IconLock />
              <p className="text-base text-ink">Keine Ausschreibung. Keine Datenbank. Kein Aufsehen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Arbeitsweise */}
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
                <p className="mt-3 break-words text-base text-current">Positionstypen auf Leitungsebene.</p>
              </div>
              <div className="rounded-card bg-brass p-6 text-paper">
                <p className="font-display text-3xl font-light leading-none text-current">0</p>
                <p className="mt-3 break-words text-base text-current">Öffentliche Ausschreibungen.</p>
              </div>
              <div className="rounded-card bg-ink p-6 text-paper">
                <p className="font-display text-3xl font-light leading-none text-current">2</p>
                <p className="mt-3 break-words text-base text-current">Einrichtungsarten: Kliniken und MVZ.</p>
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

      {/* Positionen */}
      <section aria-labelledby="positionen" className="bg-paper">
        <div className="wrap section">
          <div data-reveal>
            <h2 id="positionen" className="mx-auto max-w-heading text-center">
              Wir besetzen vier Arten von Positionen.
            </h2>
            <p className="mx-auto mt-6 max-w-measure text-center">
              Ausschließlich leitende und geschäftsführende ärztliche Positionen.
            </p>
            <ul className="mt-16 grid gap-4 md:grid-cols-3">
              {karten.map((k) => (
                <li key={k.t} className="flex flex-col rounded-card border border-line bg-white p-8">
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
                  Position frei, ist der Betrieb betroffen.
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

      {/* Typische Anlässe */}
      <section aria-labelledby="anlaesse" className="bg-white">
        <div className="wrap section">
          <div data-reveal>
            <h2 id="anlaesse" className="max-w-heading">
              Wann Häuser eine Leitungsposition vertraulich besetzen.
            </h2>
            <p className="mt-6 max-w-measure">Die Anlässe unterscheiden sich, der Anspruch an Diskretion ist derselbe.</p>
            <ul className="mt-16 rounded-panel border border-line bg-paper">
              {anlaesse.map((a) => (
                <li key={a.t} className="grid gap-2 border-line px-6 py-6 md:grid-cols-12 md:gap-8 md:px-8 [&:not(:first-child)]:border-t">
                  <h3 className="md:col-span-5">{a.t}</h3>
                  <p className="text-base md:col-span-6 md:col-start-7">{a.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Vorgehen */}
      <section aria-labelledby="vorgehen" className="bg-paper">
        <div className="wrap section">
          <div data-reveal>
            <h2 id="vorgehen" className="max-w-heading">
              Vier Schritte vom ersten Gespräch bis zum Wechsel.
            </h2>
            <ol className="mt-16 space-y-12 border-l border-line pl-8 xl:grid xl:grid-cols-4 xl:gap-8 xl:space-y-0 xl:border-l-0 xl:pl-0">
              {vorgehen.map(([t, d], i) => (
                <li key={t} className="relative">
                  <span aria-hidden="true" className="absolute -left-8 top-4 h-px w-4 bg-brass xl:hidden" />
                  {/* Eine durchgehende Haarlinie auf Höhe der Nummern über alle Spalten */}
                  <div className="relative flex items-center">
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-1/2 hidden h-px bg-line xl:block ${i === vorgehen.length - 1 ? "right-0" : "-right-8"}`}
                    />
                    <p className="relative z-10 bg-paper pr-4 font-display text-3xl font-light leading-none text-brass">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <h3 className="mt-6">{t}</h3>
                  <p className="mt-3 text-base">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Diskretion (Tinte, erste von zwei dunklen Sektionen) */}
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

      {/* Häufige Fragen */}
      <section aria-labelledby="faq" className="bg-white">
        <div className="wrap section">
          <div data-reveal>
            <h2 id="faq" className="text-center">
              Häufige Fragen.
            </h2>
            <div className="mx-auto mt-16 max-w-partners">
              <Accordion items={faq} />
            </div>
          </div>
        </div>
      </section>

      {/* Abschluss-Banner (zweite dunkle Fläche) */}
      <section aria-labelledby="abschluss" className="bg-paper">
        <div className="wrap section">
          <div data-reveal className="on-ink mx-auto max-w-banner rounded-banner bg-ink px-6 pb-8 pt-16 text-center md:px-16 md:pb-12 md:pt-24">
            <h2 id="abschluss" className="mx-auto max-w-heading">
              Sprechen wir über Ihre Position.
            </h2>
            <p className="mx-auto mt-6 max-w-card text-paper/72">
              Ein erstes Gespräch ist vertraulich. Sie entscheiden, wie es weitergeht.
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
