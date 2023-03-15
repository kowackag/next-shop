import React from "react";

interface SizeProps {
  text: string;
}

const Size = ({ text }: SizeProps) => {
  return (
    <label htmlFor={`size-${text}`} className="cursor-pointer">
      <input
        type="radio"
        name="size"
        id={`size-${text}`}
        className="peer sr-only"
      />
      <span className="group inline-flex h-9 w-9 items-center justify-center rounded border text-s uppercase font-medium peer-checked:bg-black peer-checked:text-white">
        {text}
      </span>
    </label>
  );
};

export default Size;
