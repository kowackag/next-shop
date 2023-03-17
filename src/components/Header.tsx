import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  const links = [
    { title: "Home", href: "/" },
    { title: "Women", href: "/women" },
    { title: "Men", href: "/men" },
    { title: "Inspiration", href: "/inspiration" },
    { title: "Shops", href: "/shops" },
  ];

  return (
    <header className="px-4 py-2 bg-slate-50 text-2xl text-zinc-800 flex justify-between items-center shadow-md">
      <div>
        <p>Shops</p>
      </div>
      <nav className="w-1/2">
        <ul className="px-4 py-2 bg-slate-50 text-xl text-zinc-400 uppercase flex justify-between">
          {links.map(({ href, title }) => (
            <li className=" hover:text-zinc-800 " key={href}>
              <Link
                href={href}
                className={router.pathname === href ? "text-zinc-800" : ""}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <p>buy</p>
      </div>
    </header>
  );
};
