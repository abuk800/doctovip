type Variant = "light" | "dark";

/** Monogramm: D in 1-px-Messing-Kreis. Auf Hell Tinte und Messing, auf Dunkel Papier und Messing hell. */
export function Monogram({ variant = "light", size = 32, className }: { variant?: Variant; size?: number; className?: string }) {
  const ring = variant === "light" ? "#7E6236" : "#B8A07A";
  const letter = variant === "light" ? "#121417" : "#F7F7F5";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false" className={className}>
      <circle cx="16" cy="16" r="15.5" fill="none" stroke={ring} strokeWidth="1" />
      <text
        x="16"
        y="16"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-display), Georgia, serif"
        fontSize="19"
        fontWeight="400"
        fill={letter}
      >
        D
      </text>
    </svg>
  );
}

export function Logo({ variant = "light" }: { variant?: Variant }) {
  return (
    <span className="inline-flex items-center gap-3">
      <Monogram variant={variant} />
      <span
        className={`text-base font-medium uppercase tracking-mark ${variant === "light" ? "text-ink" : "text-paper"}`}
      >
        Doctovip
      </span>
    </span>
  );
}

/** Großes, dezentes Monogramm als Kontur (dekorativ). */
export function MonogramOutline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 480" aria-hidden="true" focusable="false" className={className}>
      <circle cx="240" cy="240" r="238" fill="none" stroke="#B8A07A" strokeWidth="2" />
      <text
        x="240"
        y="244"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-display), Georgia, serif"
        fontSize="300"
        fontWeight="400"
        fill="none"
        stroke="#B8A07A"
        strokeWidth="2"
      >
        D
      </text>
    </svg>
  );
}
