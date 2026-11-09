import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealInit } from "@/components/RevealInit";
import { site } from "@/lib/site";

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
  metadataBase: new URL(site.url),
  title: { default: "Doctovip | Ärztliche Leitungspositionen", template: "%s | Doctovip" },
  description:
    "Doctovip besetzt ärztliche Leitungs- und Geschäftsführungspositionen in Kliniken und MVZ. Persönlich begleitet, vertraulich geführt, ohne öffentliche Ausschreibung.",
  openGraph: { siteName: "Doctovip", locale: "de_DE", type: "website" },
};

export const viewport: Viewport = { themeColor: "#F7F7F5", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${text.variable}`}>
      <body>
        <a
          href="#inhalt"
          className="fixed left-gutter top-2 z-50 -translate-y-24 rounded-control bg-ink px-4 py-3 text-base text-paper focus:translate-y-0"
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
