# DESIGN.md — Doctovip

Einzige Quelle für alle Gestaltungswerte. Im Code (Tailwind-Theme, CSS) werden ausschließlich diese Tokens verwendet. Keine Ad-hoc-Farben, keine freien Schriftgrößen, keine zusätzlichen Radien.

Umsetzung: `tailwind.config.ts` (Theme ersetzt die Standardpalette vollständig) und `app/globals.css` (CSS-Variablen) spiegeln diese Datei 1:1.

## Farben

| Token | Hex | Verwendung |
|---|---|---|
| `ink` Tinte | `#121417` | Haupttext, die eine dunkle Sektion |
| `paper` Papier | `#F7F7F5` | Hintergrund, Text auf Tinte |
| `graphite` Graphit | `#3A3D42` | Sekundärtext auf hell, Initialflächen |
| `stone` Stein | `#6B6F76` | Metadaten, nur auf Papier |
| `line` Linie | `#DCDCD8` | Trennlinien auf Papier |
| `brass` Messing | `#7E6236` | Einziger Akzent: Links, feine Linien, Fokus, Vorgehen-Nummern. Nie als Fläche |

Auf der dunklen Sektion: Text `paper`, Linien `paper` mit 24 % Deckkraft (`line-on-ink`, daraus abgeleitet, keine neue Farbe), Sekundärtext `paper` mit 72 % Deckkraft. Kein Messing auf Tinte (Kontrast zu gering).

Verboten: Verläufe, Glow, Glasmorphismus, radiale Auren, Lila, Cyan, Neon, Beige.

## Typografie

- Display: **Newsreader** (variable, `opsz` aktiv), aufrecht, Gewicht 300 bis 400. Nie kursiv als Headline-Stil.
- Text und UI: **Hanken Grotesk**, 400 und 500.

### Typoskala (rem)

| Token | rem | Verwendung |
|---|---|---|
| `sm` | 0.875 | Definiert, aber nicht im Einsatz: 14 px liegt unter dem UI-Minimum von 15 px |
| `base` | 1 | UI, Navigation (16 px), Formulare, Footer |
| `lg` | 1.125 | Fließtext |
| `xl` | 1.375 | Lead, Positionsnamen, h3 |
| `2xl` | 1.75 | h2 klein, Zitat mobil |
| `3xl` | 2.25 | h2 |
| `4xl` | 3 | h2 groß, Zitat |
| `5xl` | 3.75 | H1 Obergrenze |

Kleinste eingesetzte Stufe ist `base` (16 px). Versalien-Labels nutzen `base` mit Tracking 0.12 em.

- H1: `clamp(2.5rem, 5vw, 3.75rem)`, Newsreader 300, Zeilenhöhe 1.1.
- H2: `3xl` bis `4xl`, Newsreader 300, Zeilenhöhe 1.15.
- H3: `xl`, Newsreader 400, Zeilenhöhe 1.3.
- Fließtext: `lg` (1.125 rem), Zeilenhöhe 1.6, `max-width: 65ch`, Tracking normal.
- Tracking weit: Wortmarke 0.18 em (Nav), Labels in Versalien 0.12 em. Nirgends sonst.
- `text-wrap: balance` auf Headlines, `text-wrap: pretty` auf Absätzen. Linksbündig.

## Abstand (px)

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160`

Tailwind-Keys: `1`=4, `2`=8, `3`=12, `4`=16, `6`=24, `8`=32, `12`=48, `16`=64, `24`=96, `32`=128, `40`=160.

Regeln:
- Seitenrand: mobil 20 px (Ausnahme der Skala, vorgegeben), ab 768 px 32 px, ab 1280 px 64 px (`gutter`).
- Sektionsabstand vertikal: mobil 96, Desktop 128 bis 160.
- Über einer Sektionsüberschrift immer mehr Abstand als darunter (z. B. 128 oben, 32 darunter).
- Zusammengehöriges 8 bis 16, getrennte Gruppen 48 und mehr.

## Radien

- `none` 0: Flächen, Bilder, Porträts.
- `control` 2 px: Buttons, Inputs.
- Keine weiteren.

## Schatten

Keine. Trennung über Linien (1 px `line`) und Weißraum.

## Motion

- Einziger Effekt: Einblenden, `opacity` 0 → 1, 500 ms, `ease-out` (`cubic-bezier(0, 0, 0.2, 1)`).
- Kein Federn, kein Überschwingen, keine Parallax, keine Laufbänder, keine Counter.
- Inhalte sind ohne JS sichtbar. Ausgeblendet wird erst, nachdem JS läuft (`html.js`-Klasse) und der Browser `IntersectionObserver` kennt. Sicherheitsnetz: nach 2 s werden alle Elemente sichtbar.
- `prefers-reduced-motion: reduce`: keine Animation.
- Mobiles Menü: nur Fade (200 ms).

## Fokus

2 px Messing-Outline, 2 px Offset, auf allen interaktiven Elementen. Auf Tinte: Outline in Papier (Messing hätte dort zu wenig Kontrast).

## Komponenten-Regeln

- Button primär: Fläche Tinte, Text Papier, Radius 2 px, Höhe 48 px, Padding 24 px horizontal. Hover: Fläche Graphit.
- Button auf Tinte: Fläche Papier, Text Tinte.
- Textlink: Messing, Unterstreichung 1 px, Offset 4 px. Pfeil als Textzeichen „→“.
- Inputs: Rahmen 1 px `stone` (Kontrast über 3:1, `line` wäre zu schwach), Radius 2 px, Label immer sichtbar darüber.
- Fehlermeldungen: Klartext in Tinte mit Messing-Linie links ist verboten (Seitenstreifen). Stattdessen Text in Tinte unter dem Feld, Feldrahmen Tinte 2 px.
- Zeilenlisten (Positionen, Diskretion, Mandate): Linien 1 px, keine Karten.

## Bild

Architektur, Licht, Material, Schwarz-Weiß-Porträts. Radius 0. Kein Overlay. Fehlt ein Bild: ruhige Graphit-Fläche (Porträt mit Initialen) oder weglassen. Kein leeres `src`.

## Layout

- Maximale Seitenbreite 80 rem (`page`), Lesemaß 65 ch (`measure`), Headline-Breite 26 ch (`heading`), Porträt-Breite 20 rem (`portrait`, Seitenverhältnis 4:5).
- Breakpoints: 768 (`md`), 1024 (`lg`), 1280 (`xl`). Desktop-Navigation ab `lg`.
- Navigation: Wortmarke Hanken Grotesk 500, Versalien, Tracking 0.18 em. Links 16 px.
