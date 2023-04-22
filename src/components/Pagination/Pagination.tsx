import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { createLinkArr } from "./helpers";

interface PaginationProps {
  path: string;
  length: number;
}

export const Pagination = ({ path, length }: PaginationProps) => {
  const { query, asPath } = useRouter();
  const linkArr = createLinkArr(Number(query.page), length, path);

  return (
    <nav className="border-t border-gray-200 mt-6 px-4 flex items-center justify-between align-middle sm:px-0">
      <ul className="hidden mx-auto md:-mt-px md:flex">
        {linkArr.map((item) => (
          <li key={item.href} data-page={item.num}>
            <Link
              href={item.href}
              data-page={item.num}
              className={`border-t-4 py-4 px-6 inline-flex items-center text-l font-medium ${
                asPath == item.href
                  ? "border-indigo-700 text-indigo-700 font-bold"
                  : "hover:border-zinc-400 border-transparent text-zinc-400"
              }`}
            >
              {item.num}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
