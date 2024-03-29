import React from "react";
import Link from "next/link";

export const NewHeader = () => {
  return (
    <header aria-label="Site Header" className="border-b border-zinc-100">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" className="p-2 lg:hidden">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div>
            <p className="tracking-wider align-top">eminent</p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-8">
          <nav
            aria-label="Site Nav"
            className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-zinc-500"
          >
            <Link
              href="/about"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              About
            </Link>
            <Link
              href="/news"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              News
            </Link>

            <Link
              href="/products"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              Products
            </Link>

            <Link
              href="/contact"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center">
            <div className="flex items-center divide-x divide-zinc-100 border-x border-zinc-100">
              <span>
                <Link
                  href="/cart"
                  className="block border-b-4 border-transparent p-6 hover:border-red-700"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>

                  <span className="sr-only">Cart</span>
                </Link>
              </span>

              <span>
                <Link
                  href="/account"
                  className="block border-b-4 border-transparent p-6 hover:border-red-700"
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>

                  <span className="sr-only"> Account </span>
                </Link>
              </span>

              <span className="hidden sm:block">
                <Link
                  href="/search"
                  className="block border-b-4 border-transparent p-6 hover:border-red-700"
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>

                  <span className="sr-only"> Search </span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
