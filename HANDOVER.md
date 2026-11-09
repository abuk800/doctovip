# Übergabe Doctovip

## 1. Bewusst verwendete Anti-Slop-Muster
- **Wortmarke und Labels in Versalien mit weitem Tracking:** nur Wortmarke (Header, Footer). Im Spec erlaubt.
- **Nummern 01 bis 04:** nur in „Vorgehen“ (Startseite) und „Ablauf“ (/fuer-haeuser), beides echte Reihenfolgen.
- **Vier gleich breite Spalten bei „Vorgehen“ (Desktop):** Zeitleiste mit Linien, keine Karten, wie gefordert.
- **Zitat auf /ansatz** in Newsreader aufrecht, ohne erfundene Person; Unterzeile „Leitgedanke von Doctovip“.
- **Tabelle „Ausgewählte Mandate“:** echte Tabelle für Semantik, optisch Zeilen mit Linien.
- Typo-Stufe `sm` (14 px) ist in DESIGN.md definiert, wird aber nicht verwendet (UI-Minimum 15 px). Kleinste Schrift im Einsatz: 16 px.
- Schriften sind selbst gehostet (woff2 in `app/fonts`) statt über next/font/google. Grund: DSGVO (keine Anfrage an Google) und ein Fehler des Google-Loaders in der Build-Umgebung. Newsreader variable mit opsz und wght.

## 2. Platzhalter und TODOs vor Livegang
- Ausgewählte Mandate (Startseite, `app/page.tsx`, Kommentar PLATZHALTER) und Hinweis „Beispiele“
- Partner: Namen, Porträts (Schwarz-Weiß, 4:5, `Portrait` unterstützt `src`), Werdegänge (Startseite, `/partner`)
- Honorar und Garantie (`app/fuer-haeuser/page.tsx`)
- Kontaktdaten, Adresse, Domain (`lib/site.ts`)
- Impressum und Datenschutz (`app/impressum`, `app/datenschutz`)
- Formular-Backend: `components/Form.tsx` überträgt aktuell nichts, zeigt aber die Erfolgsmeldung. Vor Livegang anbinden.
- Open-Graph-Bild fehlt (kein geeignetes Motiv vorhanden); Texte und Titel sind je Seite gesetzt.
- Zitat auf /ansatz und alle Fließtexte der Unterseiten sind Entwürfe und sollten fachlich und rechtlich gegengelesen werden.

## 3. Kontraste (WCAG)
| Kombination | Verhältnis |
|---|---|
| Tinte auf Papier | 17,20 : 1 |
| Graphit auf Papier | 10,16 : 1 |
| Stein auf Papier | 4,71 : 1 |
| Messing auf Papier | 5,31 : 1 |
| Papier auf Tinte | 17,20 : 1 |
| Papier 72 % auf Tinte | 9,20 : 1 |
| Papier auf Graphit (Initialen, Button-Hover) | 10,16 : 1 |
| Tinte auf Papier 72 % (Button auf Tinte, Hover) | 9,20 : 1 |
| Stein-Formularrahmen auf Papier (UI, Ziel 3:1) | 4,71 : 1 |
| Linie auf Papier (nur dekorativ) | 1,28 : 1 |

## Prüfung
- 360, 768, 1440 px: kein horizontaler Überlauf, keine JS-Fehler, keine Schrift unter 16 px, saubere Überschriftenebenen, ein h1 pro Seite (Playwright).
- Lighthouse (Startseite / Für Häuser): Performance 97 / 96, Accessibility 100, Best Practices 96, SEO 100.
