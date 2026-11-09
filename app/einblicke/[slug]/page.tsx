import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { ArrowLink } from "@/components/Links";
import { einblicke } from "@/content/einblicke";

export function generateStaticParams() {
  return einblicke.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const e = einblicke.find((x) => x.slug === slug);
  if (!e) return {};
  return {
    title: e.title,
    description: e.teaser,
    alternates: { canonical: `/einblicke/${e.slug}` },
    openGraph: { title: `${e.title} | Doctovip`, description: e.teaser, url: `/einblicke/${e.slug}`, type: "article" },
  };
}

export default async function Artikel({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = einblicke.find((x) => x.slug === slug);
  if (!e) notFound();
  return (
    <article>
      <header className="wrap pb-16 pt-16 md:pb-24 md:pt-24">
        <time dateTime={e.dateISO} className="block text-sm text-stone">{e.date}</time>
        <h1 className="mt-4 max-w-heading">{e.title}</h1>
      </header>
      <div className="wrap pb-16 md:pb-24">
        <Photo src={e.image} alt={e.alt} width={1200} height={750} sizes="(min-width: 1280px) 1152px, 100vw" priority className="aspect-wide w-full rounded-panel object-cover md:aspect-banner" />
      </div>
      <div className="wrap pb-24 md:pb-32">
        <div className="max-w-measure space-y-6">
          {e.body.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
        <p className="mt-16">
          <ArrowLink href="/einblicke">Alle Einblicke</ArrowLink>
        </p>
      </div>
    </article>
  );
}
