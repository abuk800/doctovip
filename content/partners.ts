// BEISPIELINHALT: Namen, Porträts und Werdegänge vor Livegang durch freigegebene Angaben ersetzen.
export type Partner = {
  slug: string;
  name: string;
  role: string;
  image: string;
  alt: string;
  summary: string;
  profile: string[];
  isSample: boolean;
};

export const partners: Partner[] = [
  {
    slug: "sabine-winterfeld",
    name: "Dr. Sabine Winterfeld",
    role: "Partnerin, Chefarztsuche und Ärztliche Direktion",
    image: "/images/partner-1.webp",
    alt: "Schwarz-Weiß-Porträt einer Frau in dunklem Blazer vor hellem Hintergrund",
    summary:
      "Elf Jahre in der Klinikleitung eines Maximalversorgers, davor Fachärztin und Oberärztin. Sie führt Mandate für Chefärzte und Ärztliche Direktionen.",
    profile: [
      "Dr. Sabine Winterfeld war elf Jahre in der Leitung eines Maximalversorgers tätig, zuletzt in der Medizinischen Direktion. Davor arbeitete sie als Fachärztin und Oberärztin in Universitäts- und Schwerpunktkliniken.",
      "Sie führt bei Doctovip Mandate für Chefärztinnen, Chefärzte und Ärztliche Direktionen und begleitet Häuser und Kandidaten bis in die ersten Monate nach dem Wechsel.",
    ],
    isSample: true,
  },
  {
    slug: "henrik-brandt",
    name: "Prof. Dr. Henrik Brandt",
    role: "Partner, MVZ und Medizinische Geschäftsführung",
    image: "/images/partner-2.webp",
    alt: "Schwarz-Weiß-Porträt eines älteren Mannes mit Bart im dunklen Anzug",
    summary:
      "Langjährige Erfahrung als Ärztlicher Leiter und Geschäftsführer medizinischer Versorgungszentren. Er führt Mandate für MVZ und Geschäftsführungen.",
    profile: [
      "Prof. Dr. Henrik Brandt leitete über viele Jahre medizinische Versorgungszentren und war Geschäftsführer eines regionalen Klinikverbunds. Er kennt die Anforderungen an ärztliche Leitungen im ambulanten wie im stationären Bereich.",
      "Bei Doctovip führt er Mandate für Ärztliche Leitungen im MVZ und Medizinische Geschäftsführungen und berät Träger zur Struktur der Position.",
    ],
    isSample: true,
  },
];
