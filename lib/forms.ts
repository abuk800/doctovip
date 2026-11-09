import type { FieldDef } from "@/components/Form";
import { positions } from "./site";

export const draftNotice = "Dies ist ein Entwurf. Das Formular ist noch nicht verbunden.";
export const confidentialNote = "Ihre Angaben behandeln wir vertraulich.";

export const hausFields: FieldDef[] = [
  { name: "position", label: "Position", type: "select", options: positions, required: true },
  { name: "einrichtung", label: "Art der Einrichtung", type: "select", options: ["Klinik", "Klinikverbund", "MVZ", "Sonstige"], required: true },
  { name: "region", label: "Region", required: true },
  { name: "zeitrahmen", label: "Gewünschter Zeitrahmen", required: true },
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "funktion", label: "Funktion", required: true, autoComplete: "organization-title" },
  { name: "email", label: "E-Mail", type: "email", required: true, autoComplete: "email" },
  { name: "telefon", label: "Telefon", type: "tel", required: true, autoComplete: "tel" },
  { name: "nachricht", label: "Nachricht", type: "textarea", wide: true },
];

export const arztFields: FieldDef[] = [
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "telefon", label: "Telefon", type: "tel", required: true, autoComplete: "tel" },
  { name: "zeit", label: "Bevorzugte Zeit", type: "select", options: ["Vormittags", "Mittags", "Nachmittags", "Abends", "Nach Vereinbarung"], required: true },
  { name: "hinweis", label: "Hinweis", type: "textarea", wide: true },
];
