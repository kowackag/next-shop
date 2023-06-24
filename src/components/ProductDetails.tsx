import React from "react";
import ReactMarkdown from "react-markdown";
import { NextSeo } from "next-seo";
import { PriceBox } from "src/components/PriceBox/PriceBox";
import { ImageBox } from "src/components/ImageBox/ImageBox";
import { SizeBox } from "src/components/SizeBox/SizeBox";
import { ProductDetailsProps } from "src/common/constans/types";
import { MainButton } from "src/common/components/MainButton/MainButton";
import { ColorBox } from "./ColorBox/ColorBox";
import { useCartState } from "./Cart/CartContext";

export const ProductDetails = ({
  id,
  colors,
  sizes,
  title,
  description,
  price,
  newPrice,
  discount,
  images,
  longDescription,
}: ProductDetailsProps) => {
  const cartState = useCartState();

  const addItemToCart = () => {
    cartState.addItemToCart({
      price: price,
      newPrice: newPrice,
      id: id,
      title: title,
      amount: 1,
      color: colors && colors[0],
      size: sizes && sizes[0],
      image: images[0],
    });
  };

  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8 text-zinc-800">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <>
            <NextSeo
              title={title}
              description={description}
              canonical={`https://naszsklep-api.vercel.app/api/products/${id}`}
              openGraph={{
                url: `https://naszsklep-api.vercel.app/api/products/${id}`,
                title: title,
                description: description,
                images: images.map((item) => {
                  return {
                    url: item.src,
                    alt: item.alt,
                    type: "image/jpeg",
                  };
                }),
                siteName: "SiteName",
              }}
            />
          </>
          <ImageBox images={images} />
          <div className="sticky top-0">
            <div className="max-w-[35ch] space-y-2 mt-8">
              <h1 className="text-4xl font-bold">{title}</h1>
            </div>
            <PriceBox price={price} discount={discount} newPrice={newPrice} />
            <div className="mt-4">
              <div className="prose max-w-none">
                <p>{description}</p>
                <article className="prose lg:prose-md">
                  <ReactMarkdown>{longDescription}</ReactMarkdown>
                </article>
              </div>
            </div>

            <div className="mt-8 mb-4 text-zinc-800">
              <ColorBox colors={colors} />
              <SizeBox sizes={sizes} />
              <div className="mt-8 flex gap-4">
                <div>
                  <label htmlFor="quantity" className="sr-only"></label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    className="w-12 rounded border-zinc-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
                <MainButton type="button" onClick={addItemToCart}>
                  Add to Cart
                </MainButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
