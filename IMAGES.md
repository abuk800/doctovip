# IMAGES.md

Alle Bilder liegen unter `public/images/` als WebP. Quelle: Pexels (außer dem Hero-Bild) (Pexels-Lizenz, kommerzielle Nutzung ohne Namensnennung erlaubt, Bilder dürfen bearbeitet werden). Die Fotos sind Pitch-Material und werden vor Livegang durch eigene Aufnahmen des Kunden ersetzt.

**Einheitliche Bearbeitung:** Schwarz-Weiß, abgebildet auf die Palette (Schwarz wird Tinte `#121417`, Weiß wird Papier `#F7F7F5`, Mittelton leicht warm). Zuschnitt auf das jeweilige Seitenverhältnis. Das Hero-Porträt ist freigestellt (u2net_human_seg), Alpha-Kanten leicht zurückgenommen.

| Datei | Motiv | Quelle (Pexels-Foto-ID) | Einsatz |
|---|---|---|---|
| `hero-portrait.webp` | Frau im hellen Blazer, freigestellt (Stimmungsbild, vom Auftraggeber bereitgestellt) | Vom Auftraggeber bereitgestellt, Nutzungsrechte vor Livegang klären | Hero Startseite |
| `arbeitsweise.webp` | Helle, geschwungene Treppe in weißem Raum | https://www.pexels.com/photo/5184791/ | Startseite Arbeitsweise, Für Ärzte |
| `mvz.webp` | Heller Flur mit Sitzreihe am Fenster | https://www.pexels.com/photo/19921278/ | Startseite MVZ-Karte, Ansatz, Für Häuser |

Hinweis: Das Hero-Bild hat der Auftraggeber geliefert. Der Alt-Text beschreibt nur die Stimmung und nennt keine Person. Rechte und Einwilligung der abgebildeten Person vor Livegang klären. Die Bilder aus Version 2 (Partnerporträts, Einblicke) sind gelöscht.

Regeln: keine Kittel, Stethoskope, Händeschüttel- oder Teamfotos, keine Overlays über Bildern, keine Logos. Fehlt ein Bild, zeigt `components/Photo.tsx` eine Graphit-Fläche mit Monogramm, nie eine leere `src`.
