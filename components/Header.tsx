"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";
import { PillLink } from "./Links";

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

  const current = (href: string) => (pathname === href || pathname.startsWith(href + "/") ? "page" : undefined);

  return (
    <header className="pointer-events-none sticky top-0 z-40 pt-4">
      <div className="wrap">
        <div className="pointer-events-auto flex h-nav items-center justify-between rounded-nav border border-line bg-white px-4 md:px-6">
          <Link href="/">
            <Logo />
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current(item.href)}
                className="text-sm text-graphite hover:text-ink aria-[current=page]:text-ink aria-[current=page]:underline aria-[current=page]:decoration-brass aria-[current=page]:underline-offset-8"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <PillLink href="/fuer-haeuser#kontakt">Mandat besprechen</PillLink>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 h-12 px-4 text-base font-medium text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="menue"
            onClick={() => setOpen(true)}
          >
            Menü
          </button>
        </div>
      </div>

      {open && (
        <div
          id="menue"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menü"
          className="fade-in pointer-events-auto fixed inset-0 z-50 overflow-y-auto bg-paper"
        >
          <div className="wrap pt-4">
            <div className="flex h-nav items-center justify-between rounded-nav border border-line bg-white px-4 md:px-6">
              <Link href="/">
                <Logo />
              </Link>
              <button
                ref={closeRef}
                type="button"
                className="-mr-2 h-12 px-4 text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                Schließen
              </button>
            </div>
          </div>
          <nav aria-label="Hauptnavigation mobil" className="wrap pb-16 pt-12">
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
              <PillLink href="/fuer-haeuser#kontakt">Mandat besprechen</PillLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
