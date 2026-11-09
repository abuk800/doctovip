// BEISPIELINHALT: Einträge mit isSample müssen vom Kunden bestätigt oder ersetzt werden.
export type Faq = { q: string; a: string; isSample: boolean };

export const faq: Faq[] = [
  {
    q: "Wie lange dauert eine Besetzung?",
    a: "Das hängt von Position, Fachrichtung und Region ab. Einen realistischen Zeitrahmen nennen wir nach dem ersten Gespräch.",
    isSample: false,
  },
  {
    q: "Wie wird ein Mandat vergütet?",
    // TODO Honorarmodell vom Kunden
    a: "Wir arbeiten mit einem Honorar, das wir vor Mandatsbeginn schriftlich mit Ihnen festlegen. Die Einzelheiten besprechen wir im ersten Gespräch.",
    isSample: true,
  },
  {
    q: "Wie stellen Sie die Vertraulichkeit sicher?",
    a: "Wir schreiben nicht öffentlich aus, führen keine Kandidatendatenbank und geben Unterlagen nur mit ausdrücklicher Zustimmung weiter.",
    isSample: false,
  },
  {
    q: "Was passiert, wenn eine Besetzung nicht passt?",
    // TODO Garantie vom Kunden
    a: "Wir begleiten die ersten Monate nach dem Wechsel und sprechen früh an, wenn etwas nicht trägt. Die Garantieregelung legen wir im Mandatsvertrag fest.",
    isSample: true,
  },
  {
    q: "Ich bin in einer Leitungsposition und offen für Neues. Wie gehe ich vor?",
    a: "Fragen Sie einen vertraulichen Rückruf an. Von Ihrem Gespräch erfährt nur der verantwortliche Partner.",
    isSample: false,
  },
  {
    q: "Arbeiten Sie auch für MVZ-Gruppen und Klinikverbünde?",
    // TODO vom Kunden
    a: "Ja. Wir besetzen ärztliche Leitungen für einzelne MVZ ebenso wie für Gruppen und Klinikverbünde und stimmen die Suche auf die Struktur des Trägers ab.",
    isSample: true,
  },
];
