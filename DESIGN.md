# DESIGN.md — Doctovip (Version 3)

Einzige Quelle für alle Gestaltungswerte. Im Code (Tailwind-Theme, CSS) werden ausschließlich diese Tokens verwendet. Keine Ad-hoc-Farben, keine freien Schriftgrößen, keine zusätzlichen Radien. `tailwind.config.ts` und `app/globals.css` spiegeln diese Datei 1:1; die Standardpalette und alle Standardskalen sind ersetzt.

Kompositionsvorlage: Framer-Template „MedDocX“ (Aufbau, Bildanteil, Sektionsrhythmus, Komponententypen). Nicht übernommen: Blau, Montserrat/Inter, Stockfotos lächelnder Ärzte im Kittel, Pillen-Labels über Headlines, Glas- oder halbtransparente Karten, Sterne-Bewertungen, Avatar-Gruppen, automatische Karussells, Icon-Kacheln über Titeln, Datums-Pillen auf Bildern, erfundene Kennzahlen, Patientensprache, Social-Icons, Newsletter-Feld.

## Farben

| Token | Hex | Verwendung |
|---|---|---|
| `ink` Tinte | `#121417` | Haupttext, dunkle Flächen |
| `paper` Papier | `#F7F7F5` | Grundhintergrund, Text auf Tinte |
| `white` Weiß | `#FFFFFF` | Wechsel-Hintergrund zu Papier, Karten und Container auf Papier |
| `mist` Nebel | `#EEEEEB` | Ruhige Kachelflächen |
| `graphite` Graphit | `#3A3D42` | Fließtext auf hell, Sekundärtext |
| `stone` Stein | `#6B6F76` | Metadaten (Datum), nur auf Papier und Weiß |
| `line` Linie | `#DCDCD8` | Trennlinien auf hell |
| `brass` Messing | `#7E6236` | Akzent auf hell: Links, feine Linien, Icons, Fokus, Nummern, zweite Hero-Zeile; Fläche nur bei der einen Fakten-Kachel |
| `brass-light` Messing hell | `#B8A07A` | Nur auf Tinte: Linien, Links, Monogramm |

Version 3: Die Hero-Wortmarke steht bei 6 % Deckkraft (Token `opacity-6`). Die Hero-Info-Karten sind höchstens 15 rem (`max-w-info`) breit, das Hero-Porträt sitzt bei `left-figure` (57 %), damit die Karten die Figur nicht überdecken. Titel der Anlässe-Zeilen: `xl` (1.5 rem), da 1.375 rem nicht in der Skala liegt. Die Desktop-Navigation beginnt ab `lg`, weil sie nur drei Links hat.

Auf Tinte: Text `paper`, Haarlinien `paper` mit 15 % Deckkraft, Sekundärtext `paper` mit 72 %.

**Sektionsrhythmus (Startseite):** Papier und Weiß wechseln sich ab. Tinte genau zweimal: Diskretion und Abschluss-Banner. Zusätzlich je eine Tinte-Karte (MVZ) und eine Tinte-Kachel (Fakten) innerhalb heller Sektionen.

Verboten: Verläufe, Glow, Glasmorphismus, radiale Auren, Lila, Cyan, Neon, Beige.

## Typografie

- Display: **Newsreader** (variable, `opsz`), aufrecht, Gewicht 300 bis 400. Nie kursiv.
- Text und UI: **Hanken Grotesk** 400 und 500.

| Token | rem | px | Verwendung |
|---|---|---|---|
| `sm` | 0.9375 | 15 | Kleinster Text überhaupt: Navigation, Datum, Hinweise, Formularhinweise |
| `base` | 1.125 | 18 | Listen, Tabellen, Kartentexte, Buttons, Formularfelder |
| `body` | 1.1875 | 19 | Fließtext |
| `xl` | 1.5 | 24 | H3, Partnernamen, Positionsnamen in Tabellen |
| `2xl` | 2.25 | 36 | Zitat mobil, große Zwischentitel |
| `3xl` | 3.25 | 52 | Fakten-Zahlen, Vorgehen-Nummern |
| `4xl` | 5.25 | 84 | Obergrenze H1 |
| `h1` | `clamp(3rem, 6vw, 5.25rem)` | | Newsreader 300, Zeilenhöhe 1.1 |
| `h2` | `clamp(2.25rem, 4vw, 3.25rem)` | | Newsreader 300, Zeilenhöhe 1.15 |
| `wordmark` | 15vw | | Nur die dekorative Hero-Wortmarke |

- H3 1.5 rem Newsreader 400. H1 ist immer deutlich größer als H2.
- Fließtext 1.1875 rem, Zeilenhöhe 1.6, `max-width: 65ch`, Graphit oder Tinte, nie heller als Graphit.
- Zweifarbige Headline nur im Hero (zweite Zeile Messing).
- Tracking weit nur für Wortmarke (0.18 em) und sehr kurze Versalien-Labels (0.12 em).
- `text-wrap: balance` auf Headlines, `pretty` auf Absätzen. Linksbündig (Ausnahme: zentrierte Sektionsüberschriften nach Vorlage).

## Abstand (px)

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160`, dazu `nav` = 72 (Höhe Navigationsleiste), `mono` = 480 (großes Monogramm), `gutter` = 20 (Seitenrand mobil). Seitenrand ab 768: 32, ab 1280: 64. Sektionsabstand (Version 3, gekürzt): mobil 64, ab Tablet 128 (vorher mobil 96, Desktop 160). Über einer Sektionsüberschrift mehr Abstand als darunter.

## Radien

| Token | px | Verwendung |
|---|---|---|
| `nav` | 16 | Navigationsleiste |
| `panel` | 20 | Große Bild- und Containerflächen (Arbeitsweise-Bild, Weiß-Container, Tinte-Karte) |
| `banner` | 24 | Abschluss-Banner |
| `card` | 16 | Karten, Fakten-Kacheln, Partnerbilder |
| `tile` | 12 | Info-Karten im Hero, Bilder in Karten, Einblicke-Bilder |
| `input` | 8 | Formularfelder |
| `pill`, `full` | 9999 | Buttons, Kreise |

## Schatten

Keine. Trennung über 1 px `line` und Weißraum. Karten auf Bildern sind deckend (Weiß) mit 1 px Linie.

## Komponenten

- **Pillen-Button:** Tinte-Pille, Höhe 48, Text `base` 500 in Papier, rechts innen ein 32-px-Kreis in Papier mit Tinte-Pfeil. Auf Tinte invertiert (Papier-Pille, Tinte-Kreis). Outline-Variante: 1 px Tinte-Rand, transparent, gleicher Pfeil-Kreis.
- **Textlink:** Messing (auf Tinte `brass-light`), Unterstreichung 1 px, Pfeil „→“.
- **Logo:** Monogramm „D“ (Newsreader 400) im 1-px-Messing-Kreis, 32 px in der Navigation, daneben Wortmarke „DOCTOVIP“ (Hanken 500, Versalien, Tracking 0.18 em). Varianten hell (Tinte, Messing) und dunkel (Papier, Messing hell).
- **Info-Karte:** Weiß, 1 px Linie, Radius `tile`, Padding 24.
- **Linienicons:** 24 px, Strichstärke 1.5, Messing, inline links neben dem Titel. Nie als Kachel über dem Titel.
- **Akkordeon:** Weiß-Container, Haarlinien, rechts 32-px-Kreis (1 px Linie) mit Plus/Minus, erste Frage offen.

## Motion

- Inhalte sind per CSS immer sichtbar. JS markiert nur Elemente, die beim Laden unterhalb des sichtbaren Bereichs liegen (`reveal-pending`).
- Reveal: `opacity` 0 → 1 und `translateY` 8 px → 0, 400 ms, `ease-out`. Auslösung vor dem Sichtbarwerden (IntersectionObserver, `rootMargin: 0px 0px 20% 0px`). Elemente oberhalb des Viewports werden sofort eingeblendet.
- Zusätzlich erlaubt: Bild-Zoom 1.02 über 600 ms beim Hover auf Einblicke-Karten, Akkordeon-Höhe 250 ms ease-out, Fade 200 ms beim mobilen Menü. Sonst nichts.
- `prefers-reduced-motion: reduce`: keine Animation.

## Fokus

2 px Messing-Outline, 2 px Offset. Auf Tinte `brass-light`.

## Bild

Alle Bilder in Schwarz-Weiß, abgebildet auf die Palette (Schwarz → Tinte, Weiß → Papier). Keine Kittel, Stethoskope, Händeschütteln, Teamfotos, Overlays, Logos. Motive: Architektur, Licht, Material, Porträts. Dokumentation in `IMAGES.md`. Fehlt ein Bild: Graphit-Fläche mit Monogramm.
