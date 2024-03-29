import React from "react";
import Link from "next/link";
import { CartBar } from "./Cart/CartBar";

export const IconsBox = () => {
  return (
    <ul className="px-4 py-2 bg-slate-50 text-2xl text-zinc-400 uppercase flex justify-between">
      <li className=" hover:text-zinc-800 mx-3">
        <Link href="/cart" aria-label="Search products">
          <div className="hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </Link>
      </li>
      <li className=" hover:text-zinc-800 mx-3">
        <Link href="/cart" aria-label="See favourite products">
          <div className="hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </Link>{" "}
      </li>{" "}
      <li className="hover:text-zinc-800 mx-3 relative">
        <Link href="/cart" aria-label="Go to cart">
          <CartBar />
        </Link>
      </li>
    </ul>
  );
};
