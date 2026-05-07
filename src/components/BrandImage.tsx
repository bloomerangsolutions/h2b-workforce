import Image from "next/image";
import { IMAGES, unsplashUrl, type ImageKey } from "@/lib/site";

type Props = {
  imageKey: ImageKey;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  overlay?: "none" | "navy" | "navy-bottom" | "duotone";
};

export function BrandImage({
  imageKey,
  alt,
  className = "",
  width = 1200,
  height = 800,
  priority = false,
  fill = false,
  overlay = "none",
}: Props) {
  const id = IMAGES[imageKey];
  const src = unsplashUrl(id, width * 2); // 2x for retina

  const overlayClass = {
    none: "",
    navy: "bg-navy/40",
    "navy-bottom": "bg-gradient-to-t from-navy/80 via-navy/20 to-transparent",
    duotone: "bg-navy/60 mix-blend-multiply",
  }[overlay];

  if (fill) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          unoptimized
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {overlay !== "none" ? (
          <div className={`pointer-events-none absolute inset-0 ${overlayClass}`} />
        ) : null}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover"
        priority={priority}
        unoptimized
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {overlay !== "none" ? (
        <div className={`pointer-events-none absolute inset-0 ${overlayClass}`} />
      ) : null}
    </div>
  );
}
