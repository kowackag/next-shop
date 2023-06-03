import React from "react";
import { CheckoutForms } from "src/components/CheckoutForm/CheckoutForm";

const CheckoutPage = () => {
  return (
    <div>
      <h2 className="text-4xl ont-bold my-12 mb-12 text-center text-zinc-800">Checkout</h2>
      <CheckoutForms />
    </div>
  );
};

export default CheckoutPage;
