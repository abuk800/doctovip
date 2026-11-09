/** Noch nicht bestätigt: Domain, Kontaktdaten und Anschrift. Sie stehen bewusst nirgends auf der Seite (siehe KLAERUNG.md). */
export const site = {
  name: "Doctovip",
  positioning: "Besetzung ärztlicher Leitungspositionen in Kliniken und MVZ.",
};

/** Indexierung erst freigeben, wenn Domain, Inhalte und Marke bestätigt sind (Umgebungsvariable NEXT_PUBLIC_ALLOW_INDEXING=true). */
export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const nav = [
  { href: "/ansatz", label: "Ansatz" },
  { href: "/fuer-haeuser", label: "Für Häuser" },
  { href: "/fuer-aerzte", label: "Für Ärzte" },
];

export const positions = [
  "Chefärztin, Chefarzt",
  "Ärztliche Direktion",
  "Ärztliche Leitung MVZ",
  "Medizinische Geschäftsführung",
];
