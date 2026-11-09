"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveal nur für Elemente, die beim Laden unterhalb des sichtbaren Bereichs liegen.
 * Alles andere bleibt unberührt und ist per CSS immer sichtbar.
 */
export function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
      const vh = window.innerHeight;
      const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)")).filter(
        (el) => el.getBoundingClientRect().top > vh,
      );
      if (!els.length) return;
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            const above = entry.rootBounds ? entry.boundingClientRect.top < entry.rootBounds.top : false;
            if (entry.isIntersecting || above) {
              entry.target.classList.add("is-in");
              io.unobserve(entry.target);
            }
          }),
        { rootMargin: "0px 0px 20% 0px" },
      );
      els.forEach((el) => {
        el.classList.add("reveal-pending");
        io.observe(el);
      });
      return () => {
        io.disconnect();
        els.forEach((el) => el.classList.add("is-in"));
      };
    } catch {
      document.querySelectorAll(".reveal-pending").forEach((el) => el.classList.add("is-in"));
    }
  }, [pathname]);

  return null;
}
