# Übergabe Doctovip, Version 3 (Pitch-Entwurf ohne erfundene Inhalte)

Abstimmungsliste für den Kunden-Call: Seite `/abstimmung` (nicht verlinkt, `noindex`) und `KLAERUNG.md`, beide aus `content/klaerung.json`. `node scripts/klaerung.mjs` erzeugt `KLAERUNG.md` neu. Design-Tokens: `DESIGN.md`. Bildquellen: `IMAGES.md`.

## Gelöscht
**Sektionen und Seiten:** „Was Häuser und Ärzte von uns erwarten können“, „Wer Ihr Mandat führt“ (beide Partnerprofile), Seite `/partner`, „Ausgewählte Mandate“, „Einblicke“ samt `/einblicke` und drei Artikelseiten, Abschnitt „Honorar und Garantie“ (Für Häuser), Nav-Links „Partner“ und „Einblicke“, Sitemap (Domain unbestätigt).
**Bilder:** partner-1, partner-2, einblick-1 bis 3.
**Code:** `content/partners.ts`, `mandate.ts`, `einblicke.ts`, `index.ts` (Beispiel-Flags), `components/Portrait.tsx` (schon in V2), ungenutzte Icons, `SAMPLES.md`.
**Aussagen (Kategorie A, nie auf der Seite):** Telefonnummer, Postadresse, E-Mail, Domain; erfundene Partner mit Titeln, Namen, Funktionen und Werdegängen; Beispielmandate mit Regionen und Besetzungsdauern; drei Artikel mit Titeln, Daten und Texten; „über viele Jahre“-Werdegänge; Honorar- und Garantietexte inklusive der FAQ „Wie wird ein Mandat vergütet?“, „Was passiert, wenn eine Besetzung nicht passt?“ und „Arbeiten Sie auch für MVZ-Gruppen und Klinikverbünde?“; „oder einen Verbund“ in der Beschreibung der Ärztlichen Direktion; „Solche Mandate behandeln wir mit Vorrang“; der Satz über Übergangslösungen; „und kennen sie genau“; „Eine ärztliche Leitung wird selten über eine Anzeige gefunden“; „Leitgedanke von Doctovip“ unter dem Zitat; „auf die Sie planen können“; „unverbindlich“; „Ihren Arbeitgeber kontaktieren wir nicht“; „Ort und Zeit unserer Gespräche bestimmen Sie“; „Ihre Angaben sieht ausschließlich der verantwortliche Partner“; die alten Erfolgsmeldungen der Formulare („Der verantwortliche Partner meldet sich persönlich …“); die alten Meta-Descriptions mit operativen Zusagen; Canonical- und Open-Graph-URLs.

## Volltextsuche (Quelltext und gerenderte Seiten, ohne /abstimmung, KLAERUNG.md, Code-Kommentare)
Gesucht: „Dr.“, „Prof.“, „Jahre“, „seit“, „Wochen“, „+49“, „@“, „straße“, „2026“, „Garantie“, „Honorar“, „unverbindlich“, „Übergang“.
Treffer: (1) „prägt es über Jahre“ (Startseite, Arbeitsweise): allgemeine Aussage über Leitungsfunktionen, keine Zeitangabe zu Doctovip, Teil des Textvorschlags auf `/abstimmung`. (2) „© 2026 Doctovip“ im Footer: wird zur Laufzeit aus dem aktuellen Jahr gebildet, wie vorgegeben („© [aktuelles Jahr]“). Der Treffer „@“ im Formular-Fehlertext wurde entfernt. Alle anderen Begriffe: keine Treffer.

## Prüfung (Playwright, Produktions-Build)
- 375, 768 und 1440 px, acht Seiten: kein Überlauf, keine Konsolenfehler, kleinste Schrift 15 px, ein h1 pro Seite, keine übersprungenen Überschriftenebenen.
- Schnell-Scroll-Test 1440 px (18 Schritte): nie ausgeblendeter Inhalt im sichtbaren Bereich.
- Startseitenlänge: 7.229 px bei 1440 px (Ziel unter 7.500) und 10.955 px bei 375 px (Ziel unter 11.000).
- Alle 60 Textvorschläge auf `/abstimmung` kommen wörtlich auf der jeweils genannten Seite vor (automatisch geprüft).
- Tote Links: keine (Partner, Einblicke, Anker `#kontakt`, `#rueckruf`, `#mvz` vorhanden).
- Lighthouse (Startseite / Ansatz / Für Häuser / Für Ärzte / Kontakt): Performance 96 / 96 / 95 / 96 / 97, Accessibility 100, Best Practices 100, SEO 100. Die Messung lief mit `NEXT_PUBLIC_ALLOW_INDEXING=true`. Die interne Abstimmungsseite kommt auf Performance 94 und SEO 63 (bewusst `noindex`, lange Tabelle).
- Funktionstest: Akkordeon, Mobilmenü (Escape schließt), Formularvalidierung und Entwurfsmeldung funktionieren.

## Kontraste (WCAG AA)
Unverändert zu Version 2: Tinte auf Papier 17,20, Graphit auf Papier 10,16, Stein auf Papier 4,71, Messing auf Papier 5,31, Papier auf Messing 5,31, Papier auf Tinte 17,20, Papier 72 % auf Tinte 9,20, Messing hell auf Tinte 7,33, Stein-Rahmen auf Weiß 5,05 (je : 1). Alle erfüllen AA.

## Indexierung
Die Seite steht auf `noindex, nofollow`, solange `NEXT_PUBLIC_ALLOW_INDEXING` nicht auf `true` gesetzt ist (`lib/site.ts`). Domain, Inhalte und Marke sind unbestätigt, deshalb ist das der Standard.

## Technische Hinweise
- `next.config.ts` ersetzt die Next-Devtools in Produktions-Builds durch ein leeres Modul. Next 15.5 bündelt sie sonst trotz NODE_ENV-Prüfungen in den Client (217 kB gzip). Ergebnis: First Load JS 115 statt 339 kB.
- Abweichungen von der Vorgabe: Titel der Anlässe-Zeilen stehen in 1.5 rem statt 1.375 rem (nicht in der Typoskala). Sektionsabstand mobil 64 px statt 96 px (die Skala hat keinen Zwischenschritt, nötig für das Längenziel auf 375 px). Auf Desktop 128 statt 160 px (minus 20 %).
- Formularoption „Klinikverbund“ und „Sonstige“ stammen aus dem ursprünglichen Auftrag und gehen über „Kliniken und MVZ“ hinaus. Sie stehen als offene Frage auf `/abstimmung` (Zielgruppe).
