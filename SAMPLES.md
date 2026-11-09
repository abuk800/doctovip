# SAMPLES.md

Beispielinhalte und TODOs, die vor dem Livegang ersetzt werden müssen. Solange in `content/*` ein Eintrag `isSample: true` hat, setzt `app/layout.tsx` automatisch `robots: noindex, nofollow`. Nach dem Ersetzen aller Beispiele die Flags entfernen oder auf `false` setzen, dann ist die Seite indexierbar.

## Inhalte in `content/`
- `partners.ts`: Namen, Funktionen, Werdegänge und Porträts sind Beispiele.
- `mandate.ts`: Alle vier Mandate sind Beispiele (Position, Einrichtung, Region, Dauer). Nur echte, freigegebene und anonymisierte Mandate verwenden.
- `faq.ts`: Antworten 2 (Vergütung), 4 (Garantie) und 6 (MVZ-Gruppen, Klinikverbünde) sind Entwürfe und müssen vom Kunden bestätigt werden.
- `einblicke.ts`: Titel, Daten und Artikeltexte sind Entwürfe. Der MVZ-Artikel enthält eine kurze rechtliche Aussage, die geprüft werden muss.

## Weitere TODOs
- Startseite, Kacheln in „Arbeitsweise“: Zahlen 4, 0, 1 beschreiben die Positionierung und müssen vom Kunden bestätigt werden (Kommentar im Code). Keine weiteren Zahlen ergänzen.
- `/fuer-haeuser`, „Honorar und Garantie“: Wortlaut vom Kunden bestätigen.
- `lib/site.ts`: Telefon, E-Mail, Adresse, Domain.
- `/impressum`, `/datenschutz`: Beispieltexte durch geprüfte Rechtstexte ersetzen.
- `components/Form.tsx`: Backend anbinden. Aktuell werden keine Daten übertragen, die Erfolgsmeldung erscheint trotzdem. Vor Livegang zwingend ersetzen.
- Bilder: siehe `IMAGES.md`.
- Open-Graph-Bild: fehlt noch.
