import React from "react";

interface ColorProps {
  colorName: string;
  id: number;
}

const Color = ({ colorName, id }: ColorProps) => {
  return (
    <label htmlFor={`color_${id}`} className="cursor-pointer">
      <input
        type="radio"
        name="color"
        id={`color_${id}`}
        className="peer sr-only"
      />
      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
        {colorName}
      </span>
    </label>
  );
};

export default Color;
