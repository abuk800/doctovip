import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./Icons";

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="tlink">
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}

/** Pillen-Button mit Pfeil im Kreis. */
export function PillLink({ href, children, outline = false }: { href: string; children: ReactNode; outline?: boolean }) {
  return (
    <Link href={href} className={outline ? "pill pill-outline" : "pill"}>
      {children}
      <span className="dot">
        <ArrowIcon />
      </span>
    </Link>
  );
}

export const ButtonLink = PillLink;
