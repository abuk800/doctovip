import { partners } from "./partners";
import { mandate } from "./mandate";
import { faq } from "./faq";
import { einblicke } from "./einblicke";

/** Solange irgendein Beispielinhalt existiert, setzt das Layout noindex, nofollow. */
export const hasSamples = [...partners, ...mandate, ...faq, ...einblicke].some((x) => x.isSample);
