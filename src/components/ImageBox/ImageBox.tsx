import Image from "next/image";
import React from "react";

interface ImagesBoxProps {
  images: Image[];
}

interface Image {
  src: string;
  alt: string;
}

export const ImageBox = ({ images }: ImagesBoxProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
      <Image
        alt={images[0].alt}
        src={images[0].src}
        className="aspect-square w-full rounded-xl object-cover"
        width={100}
        height={100}
        unoptimized={true}
      />

      <div className="grid grid-cols-2 gap-4 lg:mt-4">
        {images.map((item, ind) => {
          return (
            <Image
              key={`image${ind}`}
              alt={item.alt}
              src={item.src}
              className="aspect-square w-full rounded-xl object-cover"
              width={100}
              height={100}
              unoptimized={true}
            />
          );
        })}
      </div>
    </div>
  );
};
