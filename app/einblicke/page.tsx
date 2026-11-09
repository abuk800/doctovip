import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Photo } from "@/components/Photo";
import { einblicke } from "@/content/einblicke";

export const metadata: Metadata = {
  title: "Einblicke",
  description: "Einblicke für Träger und Ärzte: Kosten einer Chefarztsuche, ärztliche Leitung im MVZ und der Ablauf einer vertraulichen Direktansprache.",
  alternates: { canonical: "/einblicke" },
  openGraph: { title: "Einblicke | Doctovip", url: "/einblicke" },
};

export default function Einblicke() {
  return (
    <>
      <PageHeader title="Einblicke für Träger und Ärzte." />
      <section aria-label="Artikel" className="bg-white">
        <div className="wrap section">
          <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
            {einblicke.map((e) => (
              <li key={e.slug}>
                <Link href={`/einblicke/${e.slug}`} className="group block">
                  <div className="overflow-hidden rounded-tile">
                    <Photo src={e.image} alt={e.alt} width={1200} height={750} sizes="(min-width: 1280px) 384px, (min-width: 768px) 33vw, 100vw" className="aspect-wide w-full object-cover transition-transform duration-zoom group-hover:scale-102" />
                  </div>
                  <time dateTime={e.dateISO} className="mt-6 block text-sm text-stone">{e.date}</time>
                  <h2 className="mt-2 text-xl">{e.title}</h2>
                  <p className="mt-3 text-base">{e.teaser}</p>
                  <span className="tlink mt-4 inline-block">Lesen <span aria-hidden="true">→</span></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
