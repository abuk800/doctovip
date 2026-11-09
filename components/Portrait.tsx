/** Ruhige Graphit-Fläche mit Initialen, solange kein Porträt vorliegt. */
export function Portrait({ initials, alt, src }: { initials: string; alt: string; src?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className="aspect-portrait w-full object-cover grayscale" />;
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className="flex aspect-portrait w-full items-center justify-center bg-graphite font-display text-4xl font-light text-paper"
    >
      <span aria-hidden="true">{initials}</span>
    </div>
  );
}
