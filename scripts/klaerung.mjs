// Erzeugt KLAERUNG.md aus content/klaerung.json (gleiche Quelle wie die Seite /abstimmung).
import { readFileSync, writeFileSync } from "node:fs";
const d = JSON.parse(readFileSync(new URL("../content/klaerung.json", import.meta.url), "utf8"));
const esc = (s) => s.replace(/\|/g, "\\|");
let md = `# KLAERUNG.md

Abstimmung zum Entwurf. Dieselben Inhalte stehen auf der Seite /abstimmung (nicht verlinkt, noindex). Alle Inhalte des Entwurfs leiten sich aus dem Briefing ab. Folgende Punkte brauchen Freigabe oder Angaben.

Briefing: „Darüber hinaus soll eine neue Marke (Doctovip) etabliert werden, die auf Boutique Niveau kuratiert nur leitende und geschäftsführende Ärzte in Kliniken und MVZ vermittelt. Das Design von Doctovip soll edel, reduziert, hochprofessionell und absolut diskret sein.“

## 1. Textvorschläge zur Freigabe

| Aussage (wörtlich) | Seite und Sektion | Status |
|---|---|---|
${d.vorschlaege.map((v) => `| ${esc(v.aussage)} | ${esc(v.ort)} | Vorschlag |`).join("\n")}

## 2. Offene Fragen

${d.fragen.map((g) => `**${g.gruppe}**\n${g.items.map((i) => `- ${i}`).join("\n")}`).join("\n\n")}

## 3. Bewusst weggelassen bis zur Freigabe

${d.weggelassen.map((w) => `- **${w.was}:** ${w.warum}`).join("\n")}

## 4. Belegte allgemeine Fakten

| Aussage | Quelle | Seite und Sektion |
|---|---|---|
${d.belegt.map((b) => `| ${esc(b.aussage)} | ${esc(b.quelle)} ${b.url} | ${esc(b.ort)} |`).join("\n")}

## 5. Bildnachweise

| Datei | Motiv | Quelle | Lizenz | Einsatz |
|---|---|---|---|---|
${d.bildnachweise.map((b) => `| ${b.datei} | ${esc(b.motiv)} | ${b.quelle} | ${b.lizenz} | ${esc(b.einsatz)} |`).join("\n")}
`;
writeFileSync(new URL("../KLAERUNG.md", import.meta.url), md);
console.log("KLAERUNG.md geschrieben");
