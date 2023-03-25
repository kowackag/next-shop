import React from "react";
import { PriceBox } from "src/components/PriceBox/PriceBox";
import { ImageBox } from "src/components/ImageBox/ImageBox";
import { SizeBox } from "src/components/SizeBox/SizeBox";
import { ColorBox } from "./ColorBox/ColorBox";

interface ProductDetailsProps {
  colors: string[];
  sizes: string[];
  description: string;
  title: string;
  price: string;
  newPrice?: string;
  discount?: string;
  images: {
    src: string;
    alt: string;
  }[];
}

export interface ApiDataType {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export const ProductDetails = ({
  colors,
  sizes,
  title,
  description,
  price,
  newPrice,
  discount,
  images,
}: ProductDetailsProps) => {
  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8 text-zinc-800">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <ImageBox images={images} />
          <div className="sticky top-0">
            <div className="max-w-[35ch] space-y-2 mt-8">
              <h1 className="text-4xl font-bold">{title}</h1>
            </div>
            <PriceBox price={price} discount={discount} newPrice={newPrice} />
            <div className="mt-4">
              <div className="prose max-w-none">
                <p>{description}</p>
              </div>
            </div>

            <form className="mt-8 mb-4 text-zinc-800">
              <ColorBox colors={colors} />
              <SizeBox sizes={sizes} />
              <div className="mt-8 flex gap-4">
                <div>
                  <label htmlFor="quantity" className="sr-only"></label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value="1"
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
                <button
                  type="submit"
                  className="block rounded bg-sky-700 px-5 py-3 text-sm font-medium text-white"
                >
                  Add to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
