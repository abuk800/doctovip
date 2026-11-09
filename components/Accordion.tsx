"use client";

import { useId, useState } from "react";

export type AccItem = { q: string; a: string };

export function Accordion({ items }: { items: AccItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  return (
    <div className="rounded-panel border border-line bg-white">
      {items.map((it, i) => {
        const isOpen = open === i;
        const id = `${base}-${i}`;
        return (
          <div key={it.q} className={i > 0 ? "border-t border-line" : undefined}>
            <h3 className="font-text text-base">
              <button
                type="button"
                id={`${id}-b`}
                aria-expanded={isOpen}
                aria-controls={`${id}-p`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left text-xl font-normal md:px-8"
              >
                <span className="font-display">{it.q}</span>
                <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink" aria-hidden="true">
                  <span className="absolute h-px w-3 bg-ink" />
                  <span className={`absolute h-3 w-px bg-ink ${isOpen ? "opacity-0" : "opacity-100"}`} />
                </span>
              </button>
            </h3>
            <div id={`${id}-p`} role="region" aria-labelledby={`${id}-b`} className="acc-panel" data-open={isOpen} inert={!isOpen}>
              <div>
                <p className="max-w-measure px-6 pb-6 text-base md:px-8">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
