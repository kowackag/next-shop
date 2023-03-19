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
        <Link
          href="wishlist"
          className={router.pathname === "/wishlist" ? "text-zinc-800" : ""}
        >
          <AiOutlineHeart />
        </Link>
      </li>
      <li className=" hover:text-zinc-800 mx-3">
        <Link
          href="basket"
          className={router.pathname === "/basket" ? "text-zinc-800" : ""}
        >
          <AiOutlineShopping />
        </Link>
      </li>
    </ul>
  );
};
