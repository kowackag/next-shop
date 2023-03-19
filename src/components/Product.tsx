import React from "react";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";

export const Product = () => {
  return (
    <a
      href="#"
      className="group block overflow-hidden px-6 py-8 mx-2 my-4 w-[350px] border-solid border-[1px] border-zinc-50 hover:border-zinc-200 duration-700"
    >
      <div className="relative h-[350px] sm:h-[450px]">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
        />

        <img
          src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
        />
        <div className="absolute bottom-4 right-4 text-zinc-400 text-3xl ">
          <AiOutlineHeart className="fill-zinc-400" />
          <AiOutlineShopping />
        </div>
      </div>

      <div className="relative pt-3 text-zinc-700">
        <h3 className="text-l group-hover:underline group-hover:underline-offset-4 text-center">
          Limited Edition Sports Trainer
        </h3>
        <p className="mt-1.5 tracking-wide text-center">189.99</p>
      </div>
    </a>
  );
};
