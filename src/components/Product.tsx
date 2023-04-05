import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineHeart } from "react-icons/ai";

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
  const [isFavouriteList, setIsFavouriteList] = useState(false);

  const addToFavourite = (e) => {
    e.preventDefault();
    // if (e.target)
    setIsFavouriteList(!isFavouriteList);
  };
  console.log(isFavouriteList);
  return (
    <div className=" relative w-full group mx-6 my-4 md:px-8 md:py-8 border-solid border-[1px] border-zinc-50 hover:border-zinc-100 bg-white duration-500 transition-shadow flex flex-col shadow-md hover:shadow-xl">
      <div>
        <div className="h-auto flex w-full center relative aspect-square">
          <Image
            src={image[0].src}
            alt={image[0].alt}
            fill
            unoptimized={true}
            className="object-contain h-auto"
            crossOrigin="anonymous"
          />
        </div>
        {discount && (
          <p className="bg-zinc-800 text-zinc-50 px-1 text-sm">{discount}</p>
        )}
        <div
          className={`absolute top-4 right-4 text-3xl ${
            isFavouriteList ? "text-red-700" : "text-zinc-200"
          }`}
        >
          <AiOutlineHeart
            onClick={addToFavourite}
            className={`${
              isFavouriteList ? "opacity-100" : "opacity-0"
            } group-hover:opacity-100 transition-opacity duration-600 hover:cursor-pointer`}
          />
          {/* <AiOutlineShopping className="opacity-0 group-hover:opacity-30 transition-opacity duration-600" /> */}
        </div>
      </div>
      <Link
        href={`/products/${id}`}
        className="grow hover:underline hover:underline-offset-4 py-4"
      >
        <h3 className="text-l decoration-transparent  group-hover:decoration-inherit transition-opacity duration-500 text-center">
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
      </Link>
      <div className="mx-auto">
        <button className="block rounded bg-sky-700 px-5 py-3 text-sm font-medium text-white opacity-70 hover:opacity-100 transition-opacity duration-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
