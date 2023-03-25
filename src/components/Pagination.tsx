import React from "react";
interface PaginationProps {
  path: string;
}
export const Pagination = ({ path}: PaginationProps) => {
  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="hidden md:-mt-px md:flex">
        <a
          href={`/${path}/1`}
          data-page={1}
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          //onClick={onClick}
        >
          1
        </a>
        <a
          href={`/${path}/2`}
          data-page={2}
          className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          aria-current="page"
          //onClick={onClick}
        >
          2
        </a>
        <a
          href={`/${path}/3`}
          // href="3"
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          //onClick={onClick}
          data-page={3}
        >
          3
        </a>
        <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
          ...
        </span>
        <a
          href={`/${path}/8`}
          data-page={8}
          className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          //onClick={onClick}
        >
          8
        </a>
        <a
          href={`/${path}/9`}
          data-page={9}
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          //onClick={onClick}
        >
          9
        </a>
        <a
          href={`/${path}/9`}
          className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >
          10
        </a>
      </div>
    </nav>
  );
};
