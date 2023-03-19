import Image from "next/image";
import React from "react";
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
  image,
  title,
  price,
  newPrice,
  discount,
}: ProductProps) => {
  return (
    <a
      href="#"
      className="group block overflow-hidden px-6 py-8 mx-2 my-4 w-[350px] border-solid border-[1px] border-zinc-50 hover:border-zinc-200 duration-600"
    >
      <div className="relative h-[350px] sm:h-[450px]">
      
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
  );
};
