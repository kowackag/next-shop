import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineHeart,
} from "react-icons/ai";

export const IconsBox = () => {
  const router = useRouter();

  return (
    <ul className="px-4 py-2 bg-slate-50 text-2xl text-zinc-400 uppercase flex justify-between">
      <li className=" hover:text-zinc-800 mx-3">
        <div className="hover:cursor-pointer">
          <AiOutlineSearch />
        </div>
      </li>
      <li className=" hover:text-zinc-800 mx-3">
        <div
          // href="wishlist"
          className="hover:cursor-pointer"
        >
          <AiOutlineHeart />
        </div>
      </li>
      <li className=" hover:text-zinc-800 mx-3">
        <div
          //href="basket"
          className="hover:cursor-pointer"
        >
          <AiOutlineShopping />
        </div>
      </li>
    </ul>
  );
};
