import React from "react";

interface SizeProps {
  text: string;
}

const Size = ({ text }: SizeProps) => {
  return (
    <label htmlFor="size-xs" className="cursor-pointer">
      <input type="radio" name="size" id="size" className="peer sr-only" />
      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
        {text}
      </span>
    </label>
  );
};

export default Size;
