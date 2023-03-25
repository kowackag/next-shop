import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface PaginationProps {
  path: string;
  length: number;
  startPage: number;
}

const createLinkArr = (startPage: number, length: number, path: string) => {
  const links = [];
  for (let i = startPage; i < length + 1; i++) {
    links.push({
      href: `/${path}/${i}/`,
      num: i,
    });
  }
  return links;
};

export const Pagination = ({ path, startPage, length }: PaginationProps) => {
  const router = useRouter();
  const linkArr = createLinkArr(startPage, length, path);
  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between align-middle sm:px-0">
      <ul className="hidden mx-auto md:-mt-px md:flex">
        {linkArr.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`border-transparent text-zinc-400 hover:border-zinc-400 border-t-4 py-4 px-6 inline-flex items-center text-l font-medium ${
                router.asPath === item.href
                  ? "border-indigo-700 text-indigo-700 hover:border-indigo-700 font-bold"
                  : ""
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
