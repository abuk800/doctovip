import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Photo } from "@/components/Photo";
import { ArrowLink } from "@/components/Links";
import { partners } from "@/content/partners";

export const metadata: Metadata = {
  title: "Partner",
  description: "Die Partner von Doctovip führen jedes Mandat persönlich, vom ersten Gespräch bis nach dem ersten Arbeitstag.",
  alternates: { canonical: "/partner" },
  openGraph: { title: "Partner | Doctovip", url: "/partner" },
};

export default function Partner() {
  return (
    <>
      <PageHeader title="Die Partner von Doctovip.">
        <p>Jedes Mandat liegt in der Hand eines Partners. Sie sprechen mit derselben Person, vom ersten Gespräch an.</p>
      </PageHeader>

      <div className="bg-white">
        <div className="wrap">
          {partners.map((p) => (
            <article
              key={p.slug}
              id={p.slug}
              data-reveal
              className="grid gap-8 py-16 md:grid-cols-12 md:gap-8 md:py-24 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-line"
            >
              <div className="md:col-span-4">
                <Photo src={p.image} alt={p.alt} width={800} height={1000} sizes="(min-width: 1280px) 30vw, 100vw" className="aspect-portrait w-full max-w-portrait rounded-card object-cover" />
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <h2 className="text-2xl md:text-h2">{p.name}</h2>
                <p className="mt-2 text-base font-medium text-stone">{p.role}</p>
                <div className="mt-8 max-w-measure space-y-4">
                  {p.profile.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <section aria-labelledby="gespraech" className="wrap section">
        <h2 id="gespraech" className="text-2xl md:text-h2">
          Gespräch vereinbaren
        </h2>
        <div className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
          <ArrowLink href="/fuer-haeuser#kontakt">Mandat besprechen</ArrowLink>
          <ArrowLink href="/fuer-aerzte#rueckruf">Vertraulichen Rückruf anfragen</ArrowLink>
        </div>
      </section>
    </>
  );
}
