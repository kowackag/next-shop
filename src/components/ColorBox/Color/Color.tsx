import React from "react";

interface ColorProps {
  colorName: string;
  id: number;
}

export const Color = ({ colorName, id }: ColorProps) => {
  return (
    <label htmlFor={`color_${id}`} className="cursor-pointer">
      <input
        type="radio"
        name="color"
        id={`color_${id}`}
        className="peer sr-only"
      />
      <span className="group inline-block rounded border px-3 py-1 text-sm font-medium peer-checked:bg-zinc-800 peer-checked:text-white">
        {colorName}
      </span>
    </label>
  );
};
