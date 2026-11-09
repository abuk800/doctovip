// BEISPIELINHALT: Artikeltexte sind Entwürfe und müssen fachlich und redaktionell freigegeben werden.
export type Einblick = {
  slug: string;
  title: string;
  date: string;
  dateISO: string;
  teaser: string;
  image: string;
  alt: string;
  body: string[];
  isSample: boolean;
};

export const einblicke: Einblick[] = [
  {
    slug: "was-eine-chefarztsuche-kostet",
    title: "Was eine Chefarztsuche kostet und wovon es abhängt",
    date: "14. Oktober 2026",
    dateISO: "2026-10-14",
    teaser: "Aufwand und Honorar hängen weniger vom Titel ab als von Fachgebiet, Region und der Frage, wie sichtbar die Suche sein darf.",
    image: "/images/einblick-1.webp",
    alt: "Schwarz-Weiß-Aufnahme einer Gebäudefassade mit regelmäßigen Fensterreihen",
    body: [
      "Die Kosten einer Chefarztbesetzung lassen sich nicht aus dem Titel ableiten. Entscheidend sind Fachgebiet, Region, die Größe des möglichen Kandidatenkreises und die Anforderungen, die ein Haus an die Position stellt.",
      "Je kleiner der Kreis geeigneter Persönlichkeiten, desto mehr Zeit braucht die persönliche Ansprache. Auch die Vertraulichkeit hat Folgen für den Aufwand: Eine Suche, die im Haus unbemerkt bleiben soll, lässt sich nicht über Anzeigen führen.",
      "Wir empfehlen, vor Beginn eines Mandats Aufgabe, Struktur und Zeitrahmen gemeinsam zu klären. Daraus ergibt sich ein Rahmen, den beide Seiten verlässlich einschätzen können.",
    ],
    isSample: true,
  },
  {
    slug: "aerztliche-leitung-im-mvz",
    title: "Ärztliche Leitung im MVZ: was der Gesetzgeber verlangt",
    date: "29. September 2026",
    dateISO: "2026-09-29",
    teaser: "Ein MVZ muss ärztlich geleitet werden. Was das für die Besetzung bedeutet und warum eine freie Position den Betrieb betrifft.",
    image: "/images/einblick-2.webp",
    alt: "Schwarz-Weiß-Aufnahme eines lichtdurchfluteten Treppenhauses mit Glasdach",
    body: [
      "Ein medizinisches Versorgungszentrum muss ärztlich geleitet werden. Die ärztliche Leitung ist selbst im MVZ ärztlich tätig und in medizinischen Fragen weisungsfrei.",
      "Wird diese Position frei, ist nicht nur der Dienstplan betroffen. Träger sollten früh klären, wer die Leitung übernehmen kann und wie ein Übergang aussieht.",
      "Dieser Beitrag ist eine Einführung und ersetzt keine rechtliche Beratung. Maßgeblich sind die aktuellen gesetzlichen Vorgaben und die Anforderungen der zuständigen Stellen.",
    ],
    isSample: true,
  },
  {
    slug: "vertrauliche-direktansprache",
    title: "Wie eine vertrauliche Direktansprache abläuft",
    date: "8. September 2026",
    dateISO: "2026-09-08",
    teaser: "Warum eine Ansprache durch den verantwortlichen Partner geschieht und was Kandidatinnen und Kandidaten dabei erwarten dürfen.",
    image: "/images/einblick-3.webp",
    alt: "Schwarz-Weiß-Aufnahme einer frei schwebenden Treppe an einer Betonwand",
    body: [
      "Eine Direktansprache beginnt mit einem kurzen, persönlichen Kontakt. Der verantwortliche Partner nennt weder das suchende Haus noch Details der Position, solange kein Interesse besteht.",
      "Wer angesprochen wird, entscheidet allein, ob ein Gespräch stattfindet. Unterlagen geben wir nur mit ausdrücklicher Zustimmung weiter.",
      "Erst wenn beide Seiten bereit sind, folgt ein vertrauliches Kennenlernen. Bis dahin bleibt jede Information bei uns.",
    ],
    isSample: true,
  },
];
