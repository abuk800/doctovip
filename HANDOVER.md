# Übergabe Doctovip, Version 2

Platzhalter und Beispielinhalte: siehe `SAMPLES.md`. Bildquellen: siehe `IMAGES.md`. Design-Tokens: `DESIGN.md`.

## Bewusste Ausnahmen von den Anti-Slop-Regeln
- **Zweifarbige Hero-Headline** (zweite Zeile Messing): von Version 2 vorgegeben, nur im Hero.
- **Pillen-Buttons mit Pfeil-Kreis** und große Radien: von Version 2 vorgegeben (ersetzt die 0/2-px-Regel).
- **Dekorative Wortmarke im Hero** (4 % Deckkraft, `aria-hidden`) und **großes Monogramm** in der Diskretion-Sektion (10 % Deckkraft, `aria-hidden`): vorgegebene Markenelemente.
- **Gleich aufgebaute Kartenreihen** (drei Positionen, drei Einblicke, vier Erwartungen): von der Vorlage vorgegeben. Die Erwartungen stehen bewusst in einem gemeinsamen Container mit Haarlinien, nicht als Einzelkarten.
- **Messing als Fläche** nur bei der einen Fakten-Kachel „0“ (vorgegeben).
- **Hero-H1 dreizeilig auf Desktop:** Bei 84 px bricht „die man nicht ausschreibt.“ in der linken Spalte um, damit der Text nicht über das Porträt läuft. Mobil entspricht es dem Vorgabe-Layout (zwei Zeilen Struktur: Tinte, Messing).
- **Link-Texte der Positionskarten** lauten „Mehr zur Chefarztposition“, „Mehr zur Ärztlichen Direktion“, „Mehr zur Geschäftsführung“ statt dreimal „Mehr erfahren“ (kein doppeltes Label im selben Block). Gleiches bei „Profil von … ansehen“.
- **Zahlen-Kacheln** (4, 0, 1): vorgegeben, beschreiben die Positionierung. Im Code kommentiert.
- **Hover-Zoom** 1.02 auf Einblicke-Bildern: vorgegeben.
- Typostufe `sm` (15 px) ist der kleinste Text. Navigation steht auf 15 px (Vorgabe 15 bis 16 px).

## Kontraste (WCAG)
| Kombination | Verhältnis |
|---|---|
| Tinte auf Papier | 17,20 : 1 |
| Tinte auf Weiß | 18,45 : 1 |
| Graphit auf Papier (Fließtext) | 10,16 : 1 |
| Graphit auf Weiß (Fließtext) | 10,90 : 1 |
| Stein auf Papier (Datum, Rolle) | 4,71 : 1 |
| Stein auf Weiß (Datum, Tabellenkopf) | 5,05 : 1 |
| Messing auf Papier (Links, zweite Hero-Zeile) | 5,31 : 1 |
| Messing auf Weiß (Links, Nummern) | 5,69 : 1 |
| Tinte auf Nebel (Kachel) | 15,87 : 1 |
| Papier auf Messing (Kachel) | 5,31 : 1 |
| Papier auf Tinte | 17,20 : 1 |
| Papier 72 % auf Tinte | 9,20 : 1 |
| Messing hell auf Tinte (Links) | 7,33 : 1 |
| Papier auf Graphit (Monogramm-Fläche) | 10,16 : 1 |
| Tinte auf Papier 72 % (Pille auf Tinte, Hover) | 9,20 : 1 |
| Stein-Formularrahmen auf Weiß (UI, Ziel 3 : 1) | 5,05 : 1 |

Alle Kombinationen erfüllen WCAG AA (4,5 : 1 normal, 3 : 1 groß und UI).

## Prüfung (Playwright, Produktions-Build)
- 375, 768 und 1440 px, zehn Seiten: kein horizontaler Überlauf, keine Konsolenfehler, kleinste Schrift 15 px, ein h1 pro Seite, keine übersprungenen Überschriftenebenen.
- Schnell-Scroll-Test 1440 px (18 Schritte in unter 2 Sekunden): kein Schritt mit ausgeblendetem Inhalt im sichtbaren Bereich.
- Lighthouse (Startseite / Für Häuser / Einblicke): Performance 95 / 97 / 95, Accessibility 100, Best Practices 100. SEO 69, weil die Seite wegen der Beispielinhalte bewusst `noindex` ist (einziger fehlgeschlagener SEO-Test: „Seite kann gecrawlt werden“). Ohne Beispielinhalte entfällt das.
