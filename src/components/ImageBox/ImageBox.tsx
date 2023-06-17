import React from "react";
import Image from "next/image";

interface ImagesBoxProps {
  images: Image[];
}

interface Image {
  src: string;
  alt: string;
}

export const ImageBox = ({ images }: ImagesBoxProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-1 ">
      <div className="h-auto flex w-full center relative aspect-square">
        <Image
          alt={images[0].alt}
          src={images[0].src}
          fill
          unoptimized={true}
          className="object-contain"
          crossOrigin="anonymous"
          priority
        />
      </div>

      <div className="grid grid-cols-2 gap-4 lg:mt-4">
        {images.map((item, ind) => {
          return (
            <div
              key={`image${ind}`}
              className="aspect-square w-full rounded-xl object-cover relative"
            >
              <Image
                alt={item.alt}
                src={item.src}
                width={160}
                height={90}
                unoptimized={true}
                crossOrigin="anonymous"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
