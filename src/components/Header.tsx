import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { IconsBox } from "./IconBox/IconsBox";

export const Header = () => {
  const router = useRouter();

  const links = [
    { title: "Home", href: "/home" },
    { title: "Women", href: "/women" },
    { title: "Men", href: "/men" },
    { title: "Inspiration", href: "/inspiration" },
    { title: "Shops", href: "/shops" },
  ];

  return (
    <header className="px-4 py-4 bg-slate-50 text-3xl text-zinc-800 flex justify-between items-center shadow-md">
      <div>
        <p className="tracking-wider align-top">eminent</p>
      </div>
      <nav className="hidden lg:flex lg:w-1/2">
        <ul className="px-4 py-2 bg-slate-50 text-xl text-zinc-400 uppercase flex justify-between w-full">
          {links.map(({ href, title }) => (
            <li className=" hover:text-zinc-800 " key={href}>
              <Link
                href={href}
                className={
                  router.pathname.startsWith(href) ? "text-zinc-800" : ""
                }
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex">
        <IconsBox />

        <button type="button" className="p-2 lg:hidden">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
