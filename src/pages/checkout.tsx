import React from "react";
import { CheckoutContent } from "src/components/CheckoutContent/CheckoutContent";

const CheckoutPage = () => {
  return (
    <div>
      <h2 className="text-4xl ont-bold my-12 mb-12 text-center text-zinc-800">
        Checkout
      </h2>
      <CheckoutContent />
    </div>
  );
};

export default CheckoutPage;
