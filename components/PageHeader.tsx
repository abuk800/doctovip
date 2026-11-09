import type { ReactNode } from "react";

export function PageHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <section className="wrap pb-16 pt-16 md:pb-24 md:pt-24 xl:pt-32">
      <h1 className="max-w-heading">{title}</h1>
      {children && <div className="mt-8 max-w-measure space-y-4 text-graphite [&>p]:text-xl">{children}</div>}
    </section>
  );
}
