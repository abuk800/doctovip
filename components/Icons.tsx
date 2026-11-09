import type { ReactNode } from "react";

/** Linienicons, 24 px, Strich 1.5, Farbe über currentColor (Messing). */
function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      {children}
    </svg>
  );
}

export const IconLock = () => (
  <Svg>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </Svg>
);
export const IconFocus = () => (
  <Svg>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </Svg>
);
export const IconDirect = () => (
  <Svg>
    <path d="M4 12h13" />
    <path d="M12 6l6 6-6 6" />
    <path d="M20 5v14" />
  </Svg>
);
export const IconSupport = () => (
  <Svg>
    <path d="M4 19c0-4 3-6 8-6s8 2 8 6" />
    <circle cx="12" cy="8" r="3.5" />
  </Svg>
);
export const IconPerson = () => (
  <Svg>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-4 3-6 7-6s7 2 7 6" />
  </Svg>
);

export function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
