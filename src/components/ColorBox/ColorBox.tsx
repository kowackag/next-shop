import React from "react";
import { Color } from "src/components/Color/Color";

interface ColorBoxProps {
  colors: string[];
}

export const ColorBox = ({ colors }: ColorBoxProps) => {
  return (
    <fieldset>
      <legend className="mb-2 font-medium">Color</legend>
      <div className="flex flex-wrap gap-1">
        {colors.map((item, ind) => (
          <Color key={`${item}_${ind}`} colorName={item} id={ind} />
        ))}
      </div>
    </fieldset>
  );
};
