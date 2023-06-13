import React from "react";
import Image from "next/image";
import { CartItem } from "../Cart/CartContext";

export const OrderItem = ({
  image,
  title,
  amount,
}: Pick<CartItem, "image" | "title" | "amount">) => {
  return (
    <li className="flex items-center gap-4 py-4">
      <Image
        src={image.src}
        alt={image.alt}
        className="h-16 w-16 rounded object-cover"
        width="100"
        height="100"
      />

      <div>
        <h3 className="text-sm text-gray-900">{title}</h3>

        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <dt className="inline">Quantity: </dt>
            <dd className="inline">{amount}</dd>
          </div>
          <div>
            <dt className="inline">Size: </dt>
            <dd className="inline">XXS</dd>
          </div>

          <div>
            <dt className="inline">Color: </dt>
            <dd className="inline">White</dd>
          </div>
        </dl>
      </div>
    </li>
  );
};
