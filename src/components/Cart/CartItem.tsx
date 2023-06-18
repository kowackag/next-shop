import React, { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartItem as CartItemTypes, useCartState } from "./CartContext";

interface CartItemProps {
  prod: CartItemTypes;
}

export const CartItem = ({ prod }: CartItemProps) => {
  const cartState = useCartState();
  const [amount, setAmount] = useState(prod.amount);

  useEffect(() => {
    setAmount(prod.amount);
  }, [prod.amount]);

  const decreaseAmount = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (prod.amount > 1) cartState.decreaseItemInCart(prod);
  };

  const increaseAmount = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    cartState.addItemToCart(prod);
  };

  const changeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    cartState.changeAmountItemInCart({
      ...prod,
      amount: Number(e.currentTarget.value),
    });
  };

  return (
    <li className="flex items-center gap-4 responsive">
      <Image
        src={prod.image.src}
        alt={prod.image.alt}
        width={70}
        height={70}
        unoptimized={true}
        className="object-contain h-auto hidden sm:inline-block"
        crossOrigin="anonymous"
      />
      <div>
        <Link href={`/products/${prod.id}`}>
          <h3 className="text-lg text-zinc-900">{prod.title}</h3>
        </Link>
        <div className="mt-0.5 space-y-px text-md text-zinc-600">
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
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <form className="flex justify-center items-center text-lg">
          <div className="inline-flex items-center justify-center mr-2 overflow-hidden rounded-xs border bg-zinc-50 shadow-sm">
            <button
              type="button"
              aria-label="minus"
              onClick={decreaseAmount}
              className={`block px-2 h-8 border-e ${
                amount === 1 ? " opacity-50" : "hover:bg-zinc-100"
              } `}
              disabled={amount === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </button>
            <label htmlFor="quantity" className="sr-only">
              quantity
            </label>
            <input
              type="number"
              value={amount}
              id="quantity"
              onChange={changeAmount}
              className="w-8 order-zinc-200 bg-zinc-50 p-0 text-center text-base text-zinc-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            />

            <button
              type="button"
              onClick={increaseAmount}
              aria-label="plus"
              className="block px-2 h-8 leading-none border-e hover:bg-zinc-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
          <p className="w-24 text-lg text-zinc-700 text-end">{`${
            prod.newPrice ? prod.newPrice * amount : prod.price * amount
          } EUR`}</p>
        </form>

        <button
          type="button"
          onClick={() => cartState.removeItemFromCart(prod.id)}
          className="text-zinc-600 transition pl-4 hover:text-red-700"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};
