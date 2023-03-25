import Image from "next/image";
import Link from "next/link";

import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";

interface ProductProps {
  id: string;
  title: string;
  price: string;
  newPrice?: string;
  discount?: string;
  image: {
    src: string;
    alt: string;
  }[];
}

export const Product = ({
  id,
  image,
  title,
  price,
  newPrice,
  discount,
}: ProductProps) => {
  return (
    <div className="group block overflow-hidden mx-2 my-4 md:px-8 md:py-8 border-solid border-[1px] border-zinc-50 hover:border-zinc-200 duration-600">
      <div className="relative aspect-square w-full">
        <Image
          src={image[0].src}
          alt={image[0].alt}
          className="absolute aspect-square w-full inset-0 object-cover opacity-100 group-hover:opacity-0"
          width={100}
          height={100}
          unoptimized={true}
        />
        <Image
          src={image.length > 1 ? image[1].src : image[0].src}
          alt={image.length > 1 ? image[1].alt : image[0].alt}
          className="absolute aspect-square w-full inset-0 object-cover opacity-0 group-hover:opacity-100"
          width={100}
          height={100}
          unoptimized={true}
        />
        {discount && (
          <p className="absolute top-4 left-0 bg-zinc-800 text-zinc-50 px-1 text-sm">
            {discount}
          </p>
        )}
        <div className="absolute bottom-3 right-3 text-zinc-400 text-3xl ">
          <AiOutlineHeart className="opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
          <AiOutlineShopping className="opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
        </div>
      </div>
      <a href={`/product/${id}`}>
        <div className="relative pt-3 text-zinc-600">
          <h3 className="text-l decoration-transparent underline underline-offset-4 group-hover:decoration-inherit transition duration-700 text-center">
            {title}
          </h3>
          <div className="flex justify-center">
            <p
              className={`mt-1.5 tracking-wide text-center ${
                discount ? "line-through" : ""
              }`}
            >
              {price}
            </p>
            {newPrice && (
              <p className="mt-1.5 px-1 font-bold text-red-700">{newPrice}</p>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};
