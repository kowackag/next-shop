import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <header className="px-4 py-2 bg-red-600">
      <nav>
        <ul>
          <li>
            <Link
              href="/"
              className={router.pathname === "/" ? "selected" : ""}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={router.pathname === "/about" ? "selected" : ""}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
