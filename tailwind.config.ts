import type { Config } from "tailwindcss";

/**
 * Theme ausschließlich aus DESIGN.md. Die Standardpalette und alle Standardskalen
 * für Farben, Abstände, Schriftgrößen, Radien und Schatten sind ersetzt.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: { md: "768px", lg: "1024px", xl: "1280px" },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ink: "#121417",
      paper: "#F7F7F5",
      graphite: "#3A3D42",
      stone: "#6B6F76",
      line: "#DCDCD8",
      brass: "#7E6236",
    },
    fontFamily: {
      display: ["var(--font-display)", "Georgia", "serif"],
      text: ["var(--font-text)", "system-ui", "sans-serif"],
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.375rem",
      "2xl": "1.75rem",
      "3xl": "2.25rem",
      "4xl": "3rem",
      "5xl": "3.75rem",
      h1: "clamp(2.5rem, 5vw, 3.75rem)",
    },
    fontWeight: { light: "300", normal: "400", medium: "500" },
    lineHeight: { display: "1.1", heading: "1.2", body: "1.6" },
    letterSpacing: { normal: "0", label: "0.12em", mark: "0.18em" },
    spacing: {
      0: "0px",
      px: "1px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      6: "24px",
      8: "32px",
      12: "48px",
      16: "64px",
      24: "96px",
      32: "128px",
      40: "160px",
      gutter: "20px",
    },
    borderRadius: { none: "0px", control: "2px" },
    boxShadow: { none: "none" },
    borderColor: ({ theme }) => ({ ...theme("colors"), DEFAULT: theme("colors.line") }),
    maxWidth: {
      none: "none",
      full: "100%",
      page: "80rem",
      measure: "65ch",
      heading: "26ch",
      portrait: "20rem",
    },
    opacity: { 0: "0", 24: "0.24", 72: "0.72", 100: "1" },
    aspectRatio: { portrait: "4 / 5" },
    transitionDuration: { DEFAULT: "200ms", reveal: "500ms" },
    transitionTimingFunction: { DEFAULT: "cubic-bezier(0, 0, 0.2, 1)" },
    extend: {},
  },
  plugins: [],
};

export default config;
