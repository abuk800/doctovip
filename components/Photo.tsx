import Image from "next/image";
import { Monogram } from "./Logo";

/** Bild mit Fallback: ruhige Graphit-Fläche mit Monogramm, nie eine leere src. */
export function Photo({
  src,
  alt,
  width,
  height,
  sizes,
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <div role="img" aria-label={alt} className={`flex items-center justify-center bg-graphite ${className}`} style={{ aspectRatio: `${width} / ${height}` }}>
        <Monogram variant="dark" size={64} />
      </div>
    );
  }
  return <Image src={src} alt={alt} width={width} height={height} sizes={sizes} priority={priority} className={className} />;
}
