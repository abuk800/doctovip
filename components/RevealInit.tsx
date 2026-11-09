"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Sanftes Einblenden beim Scrollen. Ohne JS (oder bei einem Fehler) bleibt alles sichtbar:
 * Die Klasse `js` wird erst gesetzt, nachdem alle Elemente im ersten Screen markiert sind.
 */
export function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
    const showAll = () => els.forEach((el) => el.classList.add("is-in"));
    try {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || !("IntersectionObserver" in window)) {
        showAll();
        return;
      }
      const vh = window.innerHeight;
      els.forEach((el) => {
        if (el.getBoundingClientRect().top < vh) el.classList.add("is-in");
      });
      document.documentElement.classList.add("js");
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              io.unobserve(entry.target);
            }
          }),
        { rootMargin: "0px 0px -8% 0px" },
      );
      els.filter((el) => !el.classList.contains("is-in")).forEach((el) => io.observe(el));
      return () => io.disconnect();
    } catch {
      showAll();
    }
  }, [pathname]);

  return null;
}
