import React from "react";
import { Size } from "./Size/Size";

interface SizeBoxProps {
  sizes: string[];
}

export const SizeBox = ({ sizes }: SizeBoxProps) => {
  return (
    <fieldset className="mt-8 mb-4">
      <legend className="mb-2 font-medium ">Size</legend>
      <div className="flex flex-wrap gap-1">
        {sizes.map((size, ind) => (
          <Size key={`${size}-${ind}`} text={size} />
        ))}
      </div>
    </fieldset>
  );
};
