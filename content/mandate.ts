// BEISPIELINHALT: Vor Livegang durch echte, freigegebene und anonymisierte Mandate ersetzen.
export type Mandat = { position: string; einrichtung: string; region: string; dauer: string; isSample: boolean };

export const mandate: Mandat[] = [
  { position: "Chefärztin oder Chefarzt Kardiologie", einrichtung: "Klinikverbund", region: "Süddeutschland", dauer: "14 Wochen", isSample: true },
  { position: "Ärztliche Leitung", einrichtung: "MVZ, mehrere Standorte", region: "Nordrhein-Westfalen", dauer: "9 Wochen", isSample: true },
  { position: "Medizinische Geschäftsführung", einrichtung: "Privatklinik", region: "Norddeutschland", dauer: "18 Wochen", isSample: true },
  { position: "Ärztliche Direktion", einrichtung: "Schwerpunktkrankenhaus", region: "Mitteldeutschland", dauer: "16 Wochen", isSample: true },
];
