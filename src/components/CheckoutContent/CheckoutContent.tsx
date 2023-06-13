import React from "react";
import Image from "next/image";
import { CheckoutForms } from "../CheckoutForm/CheckoutForm";
import { OrderSummary } from "../OrderSummary/OrderSummary";

interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cardNumber: string;
  cardExpiry: string;
  cardCVC: string;
  bilingAdress: string;
  postalCode: string;
  country: string;
}

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
