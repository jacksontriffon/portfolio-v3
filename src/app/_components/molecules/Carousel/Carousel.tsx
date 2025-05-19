"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export function ImageCarousel({
  images = [],
}: {
  images: { src: string; alt: string }[];
}) {
  const [emblaRef] = useEmblaCarousel({ align: "center" });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map(({ alt, src }) => (
          <div
            key={src}
            className="embla__slide cursor-grab active:cursor-grabbing"
          >
            <Image width={800} height={200} src={src} alt={alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
