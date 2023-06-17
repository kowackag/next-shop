import React from "react";
import { CheckoutForms } from "src/components/CheckoutForm/CheckoutForm";
import { OrderSummary } from "src/components/OrderSummary/OrderSummary";

export const CheckoutContent = () => {
  return (
    <section>
      <h1 className="sr-only">Checkout</h1>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <OrderSummary />
        <CheckoutForms />
      </div>
    </section>
  );
};
