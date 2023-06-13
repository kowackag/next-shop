import React from "react";
import Image from "next/image";
import { useCartState } from "src/components/Cart/CartContext";
import { OrderItem } from "../OrderItem/OrderItem";

export const OrderSummary = () => {
  const cartState = useCartState();
  return (
    <div className="bg-gray-50 py-6">
      <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <h3 className="font-bold text-xl mb-4 text-center text-zinc-800">
            Order summary
          </h3>
        </div>

        <div>
          <p className="text-xl font-medium tracking-tight text-gray-900">
            {`Total price: ${cartState.totalPrice} EUR`}
          </p>

          <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
        </div>

        <div>
          <div className="flow-root">
            {cartState.items.length && (
              <ul className="-my-4 divide-y divide-gray-100">
                {cartState.items.map((item) => (
                  <OrderItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    image={item.image}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
