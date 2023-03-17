import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <header className="px-4 py-2 bg-slate-50 text-2xl text-zinc-800 flex justify-between items-center shadow-md">
      <div>
        <p>Shops</p>
      </div>
      <nav className="w-1/2">
        <ul className="px-4 py-2 bg-slate-50 text-xl text-zinc-500 uppercase flex justify-between">
          <li className=" hover:text-zinc-800 ">
            <Link
              href="/"
              className={router.pathname === "/" ? "selected" : ""}
            >
              Home
            </Link>
          </li>
          <li className=" hover:text-zinc-800 ">
            <Link
              href="/women"
              className={router.pathname === "/women" ? "selected" : ""}
            >
              Women
            </Link>
          </li>
          <li className=" hover:text-zinc-800 ">
            <Link
              href="/men"
              className={router.pathname === "/men" ? "selected" : ""}
            >
              Men
            </Link>
          </li>
          <li className=" hover:text-zinc-800 ">
            <Link
              href="/inspiration"
              className={router.pathname === "/inspiration" ? "selected" : ""}
            >
              Inspiration
            </Link>
          </li>
          <li className=" hover:text-zinc-800 ">
            <Link
              href="/about"
              className={router.pathname === "/about" ? "selected" : ""}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <p>buy</p>
      </div>
    </header>
  );
};
