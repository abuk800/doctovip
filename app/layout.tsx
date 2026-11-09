import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealInit } from "@/components/RevealInit";
import { allowIndexing } from "@/lib/site";

// Selbst gehostet (OFL): Newsreader variable mit opsz- und wght-Achse, Hanken Grotesk 400 und 500.
// Keine Anfrage an Google-Server, daher DSGVO-unkritisch.
const display = localFont({
  src: [{ path: "./fonts/Newsreader-latin-variable.woff2", weight: "200 800", style: "normal" }],
  display: "swap",
  variable: "--font-display",
});

const text = localFont({
  src: [
    { path: "./fonts/HankenGrotesk-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/HankenGrotesk-500.woff2", weight: "500", style: "normal" },
  ],
  display: "swap",
  variable: "--font-text",
});

export const metadata: Metadata = {
  title: { default: "Doctovip | Ärztliche Leitungspositionen in Kliniken und MVZ", template: "%s | Doctovip" },
  description:
    "Doctovip vermittelt leitende und geschäftsführende Ärztinnen und Ärzte an Kliniken und MVZ. Kuratiert, reduziert und diskret.",
  openGraph: { siteName: "Doctovip", locale: "de_DE", type: "website" },
  // Entwurf: Suchmaschinen erst zulassen, wenn NEXT_PUBLIC_ALLOW_INDEXING=true gesetzt ist (siehe lib/site.ts).
  robots: allowIndexing ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#F7F7F5", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${text.variable}`}>
      <body>
        <a
          href="#inhalt"
          className="fixed left-gutter top-2 z-50 -translate-y-24 rounded-pill bg-ink px-6 py-3 text-base text-paper focus:translate-y-0"
        >
          Zum Inhalt
        </a>
        <Header />
        <main id="inhalt" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <RevealInit />
      </body>
    </html>
  );
}
