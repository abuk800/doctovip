"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/site";

const markClass = "text-base font-medium uppercase tracking-mark text-ink";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && panelRef.current) {
        const items = panelRef.current.querySelectorAll<HTMLElement>("a[href], button");
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <header className="border-b border-line">
      <div className="wrap flex h-16 items-center justify-between md:h-24">
        <Link href="/" className={markClass} aria-label="Doctovip, zur Startseite">
          Doctovip
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current(item.href)}
              className="text-base text-graphite hover:text-ink aria-[current=page]:text-ink aria-[current=page]:underline aria-[current=page]:decoration-brass aria-[current=page]:underline-offset-8"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/kontakt" aria-current={current("/kontakt")} className="btn">
            Kontakt
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-3 h-12 px-3 text-base font-medium text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menue"
          onClick={() => setOpen(true)}
        >
          Menü
        </button>
      </div>

      {open && (
        <div
          id="menue"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menü"
          className="fade-in fixed inset-0 z-50 overflow-y-auto bg-paper"
        >
          <div className="wrap flex h-16 items-center justify-between md:h-24">
            <Link href="/" className={markClass}>
              Doctovip
            </Link>
            <button
              ref={closeRef}
              type="button"
              className="-mr-3 h-12 px-3 text-base font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              Schließen
            </button>
          </div>
          <nav aria-label="Hauptnavigation mobil" className="wrap pb-16 pt-8">
            <ul className="border-t border-line">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    aria-current={current(item.href)}
                    className="block py-4 font-display text-2xl font-light text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <Link href="/kontakt" className="btn">
                Kontakt
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
