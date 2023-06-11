import React, { useState, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartState } from "./Cart/CartContext";

interface ProductProps {
  id: string;
  title: string;
  price: number;
  newPrice?: number;
  sizes?: string[];
  colors?: string[];
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
  colors,
  sizes,
}: ProductProps) => {
  const [isFavouriteList, setIsFavouriteList] = useState(false);

  const cartState = useCartState();

  const addToFavourite = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsFavouriteList(!isFavouriteList);
  };

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
          onClick={addToFavourite}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-8 h-8 ${
              isFavouriteList ? "opacity-100" : "opacity-0"
            } group-hover:opacity-100 transition-opacity duration-600 hover:cursor-pointer`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
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
        <button
          onClick={() =>
            cartState.addItemToCart({
              price: price,
              newPrice: newPrice,
              id: id,
              title: title,
              amount: 1,
              color: colors && colors[0],
              size: sizes && sizes[0],
              image: image[0],
            })
          }
          className="block rounded bg-sky-700 px-5 py-3 text-sm font-medium text-white opacity-80 hover:opacity-100 transition-opacity duration-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
