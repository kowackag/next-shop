import React from "react";

export const Footer = () => {
  return (
    <footer className="px-4 py-4 bg-slate-50 text-3xl text-zinc-800 flex justify-between items-center shadow-[0px_-2px_6px_-1px_rgba(0,0,0,0.1)]">
      <div>
        <p className="tracking-wider align-top">eminent</p>
      </div>
      <nav className="hidden lg:flex lg:w-1/2">
        <ul className="px-4 py-2 bg-slate-50 text-xl text-zinc-500 uppercase flex justify-between w-full">
          <li className=" hover:text-zinc-800 ">contact</li>
          <li className=" hover:text-zinc-800 ">contact</li>
        </ul>
      </nav>
    </footer>
  );
};
