import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "src/common/components/FormInput/FormInput";
import { schema } from "./validationSchema";

interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  cardNumber: string;
  cardExpiry: string;
  cardCVC: string;
  bilingAdress: string;
  postalCode: string;
  country: string;
}

export const CheckoutForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
  } = useForm<CheckoutForm>({ mode: "all", resolver: yupResolver(schema) });
  const onSubmit = handleSubmit((data) => console.log(data));
  console.log(555, touchedFields.email);
  return (
    <div className="bg-white py-6 my-6 mx-6">
      <h3 className="font-bold text-xl mb-8 text-center text-zinc-800">
        Shiping information
      </h3>
      <div className="mx-auto max-w-lg px-4 lg:px-8 ">
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <FormInput
              type="text"
              id="firstName"
              register={register}
              error={errors.firstName?.message as string}
              label="First Name"
              isValid={!errors.firstName}
              touched={touchedFields.firstName}
            />
          </div>
          <div>
            <FormInput
              type="text"
              id="lastName"
              register={register}
              error={errors.lastName?.message as string}
              label="Last Name"
              isValid={!errors.lastName}
              touched={touchedFields.lastName}
            />
          </div>
          <div className="col-span-2">
            <FormInput
              type="email"
              id="email"
              register={register}
              autoComplete="email"
              error={errors.email?.message as string}
              label="Email"
              isValid={!errors.email}
              touched={touchedFields.email}
            />
          </div>

          <div className="col-span-2">
            <FormInput
              type="tel"
              id="phone"
              register={register}
              error={errors.phone?.message as string}
              label="Phone"
              isValid={!errors.phone}
              touched={touchedFields.phone}
            />
          </div>
          <div className="col-span-2">
            <FormInput
              type="text"
              id="cardNumber"
              placeholder="Card Number"
              autoComplete="cc-number"
              register={register}
              error={errors.cardNumber?.message as string}
              label="Card Number"
              isValid={!errors.cardNumber}
              touched={touchedFields.cardNumber}
            />
          </div>
          <div>
            <FormInput
              type="text"
              id="cardExpiry"
              placeholder="mm/yy"
              register={register}
              error={errors.cardExpiry?.message as string}
              label="Card Expiry"
              isValid={!errors.cardExpiry}
              touched={touchedFields.cardExpiry}
            />
          </div>
          <div>
            <FormInput
              type="text"
              id="cardCVC"
              placeholder="CVC"
              register={register}
              error={errors.cardCVC?.message as string}
              label="Card CVC"
              isValid={!errors.cardCVC}
              touched={touchedFields.cardCVC}
            />
          </div>
          {/* <fieldset className="col-span-2">
            <legend className="block text-sm font-medium text-gray-700">
              Billing Address
            </legend>
            <div className="mt-1 space-y-px rounded-md bg-white shadow-sm">
              <div>
                <label htmlFor="country" className="sr-only">
                  Country
                </label>

                <select
                  id="country"
                  className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                  {...register("country")}
                >
                  <option>England</option>
                  <option>Wales</option>
                  <option>Scotland</option>
                  <option>France</option>
                  <option>Belgium</option>
                  <option>Japan</option>
                </select>
              </div>

              <div>
                <FormInput
                  type="text"
                  id="postalCode"
                  placeholder="ZIP/Post Code"
                  register={register}
                  error={errors.postalCode?.message as string}
                  label="ZIP/Post Code"
                  isValid={!errors.postalCode}
                />
              </div>
            </div>
          </fieldset> */}

          <div className="col-span-2 py-6">
            <button
              className={`block w-full rounded-md ${
                isValid
                  ? "bg-sky-800 hover:opacity-100 transition-opacity duration-500 hover:shadow-lg"
                  : "bg-zinc-400"
              } px-5 py-3 text-sm font-medium text-white opacity-80 `}
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
