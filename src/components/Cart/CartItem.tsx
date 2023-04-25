import React from "react";
import Image from "next/image";
import { CartItem as CartItemTypes, useCartState } from "./CartContext";

interface CartItemProps {
  prod: CartItemTypes;
}

export const CartItem = ({ prod }: CartItemProps) => {
  const cartState = useCartState();

  return (
    <li className="flex items-center gap-4 responsive">
      <Image
        src={prod.image.src}
        alt={prod.image.alt}
        width={70}
        height={70}
        unoptimized={true}
        className="object-contain h-auto"
        crossOrigin="anonymous"
      />
      <div>
        <h3 className="text-lg text-gray-900">{prod.title}</h3>
        <p className="mt-0.5 space-y-px text-md text-gray-600">
          {prod?.size && (
            <div>
              <p className="inline">Size: </p>
              <p className="inline">{prod.size}</p>
            </div>
          )}

          {prod?.color && (
            <div>
              <p className="inline">Color: </p>
              <p className="inline">{prod.color}</p>
            </div>
          )}
        </p>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <form className="flex text-lg">
          <label htmlFor="Line1Qty" className="sr-only">
            {" "}
            Quantity{" "}
          </label>

          <input
            type="number"
            min="1"
            value={prod.amount}
            id="Line1Qty"
            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          />
          <p className="text-lg font-bold text-zinc-700 flex justify-between items-center">{`${
            prod.newPrice
              ? prod.newPrice * prod.amount
              : prod.price * prod.amount
          } EUR`}</p>
        </form>

        <button
          onClick={() => cartState.removeItemFromCart(prod.id)}
          className="text-gray-600 transition pl-4 hover:text-red-700"
        >
          <span className="sr-only">Remove item</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};
