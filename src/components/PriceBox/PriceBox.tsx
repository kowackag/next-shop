import React from "react";

interface PriceBoxProps {
  price: number;
  newPrice?: number;
  discount?: string;
}

export const PriceBox = ({ price, newPrice, discount }: PriceBoxProps) => {
  return (
    <div className="py-4 my-4">
      {discount && (
        <span className="text-l rounded bg-red-700 text-white p-1">
          {discount}
        </span>
      )}
      <div className="flex justify-start mt-2">
        <p
          className={`text-xl font-bold mr-4 ${
            discount ? "line-through" : ""
          } `}
        >
          {`${price} EUR`}
        </p>
        {newPrice && (
          <p className="text-xl font-bold text-red-700"> {`${newPrice} EUR`}</p>
        )}
      </div>
    </div>
  );
};
