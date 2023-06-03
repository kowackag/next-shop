import Image from "next/image";
import React from "react";

export const CheckoutForms = () => {
  return (
    <section>
      <h1 className="sr-only">Checkout</h1>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-50 py-6">
          <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
            <div className="flex items-center gap-4">
              <h3 className="font-bold text-xl mb-8 text-center text-zinc-800">
                Order summary
              </h3>
            </div>

            <div>
              <p className="text-2xl font-medium tracking-tight text-gray-900">
                $99.99
              </p>

              <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
            </div>

            <div>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-100">
                  <li className="flex items-center gap-4 py-4">
                    <Image
                      src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                      alt=""
                      className="h-16 w-16 rounded object-cover"
                      width="100"
                      height="100"
                    />

                    <div>
                      <h3 className="text-sm text-gray-900">
                        Basic Tee 6-Pack
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline">Size:</dt>
                          <dd className="inline">XXS</dd>
                        </div>

                        <div>
                          <dt className="inline">Color:</dt>
                          <dd className="inline">White</dd>
                        </div>
                      </dl>
                    </div>
                  </li>

                  <li className="flex items-center gap-4 py-4">
                    <Image
                      src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                      alt=""
                      className="h-16 w-16 rounded object-cover"
                      width="100"
                      height="100"
                    />

                    <div>
                      <h3 className="text-sm text-gray-900">
                        Basic Tee 6-Pack
                      </h3>

                      <dl className="mt-0.5 space-y-px text-xs text-gray-600">
                        <div>
                          <dt className="inline">Size:</dt>
                          <dd className="inline">XXS</dd>
                        </div>

                        <div>
                          <dt className="inline">Color:</dt>
                          <dd className="inline">White</dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-6 mb-6 mx-6">
          <h3 className="font-bold text-xl mb-8 text-center text-zinc-800">
            Shiping information
          </h3>
          <div className="mx-auto max-w-lg px-4 lg:px-8 ">
            <form className="grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  className="mt-1 w-full py-1 rounded-md border-gray-200 outline-sky-700 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  className="mt-1 w-full py-1 rounded-md border-gray-200 outline-sky-700 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  className="mt-1 w-full py-1 rounded-md border-gray-200 outline-sky-700 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>

                <input
                  type="tel"
                  id="Phone"
                  className="mt-1 w-full py-1 rounded-md border-gray-200 outline-sky-700 shadow-sm sm:text-sm"
                />
              </div>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Card Details
                </legend>

                <div className="mt-1 space-y-px rounded-md bg-white shadow-sm">
                  <div>
                    <label htmlFor="CardNumber" className="sr-only">
                      Card Number
                    </label>

                    <input
                      type="text"
                      id="CardNumber"
                      placeholder="Card Number"
                      className="relative mt-1 py-1 w-full rounded-md border-gray-200 outline-sky-700 focus:z-10 sm:text-sm"
                    />
                  </div>

                  <div className="flex">
                    <div className="flex-1">
                      <label htmlFor="CardExpiry" className="sr-only">
                        Card Expiry
                      </label>
                      <input
                        type="text"
                        id="CardExpiry"
                        placeholder="Expiry Date"
                        className="relative w-full py-1 rounded-md border-gray-200 outline-sky-700 focus:z-10 sm:text-sm"
                      />
                    </div>
                    <div className="-ms-px flex-1">
                      <label htmlFor="CardCVC" className="sr-only">
                        Card CVC
                      </label>
                      <input
                        type="text"
                        id="CardCVC"
                        placeholder="CVC"
                        className="relative w-full px-2 py-1 rounded-md outline-sky-800 border-gray-200 focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Billing Address
                </legend>

                <div className="mt-1 space-y-px rounded-md bg-white shadow-sm">
                  <div>
                    <label htmlFor="Country" className="sr-only">
                      Country
                    </label>

                    <select
                      id="Country"
                      className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
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
                    <label className="sr-only" htmlFor="PostalCode">
                      ZIP/Post Code{" "}
                    </label>

                    <input
                      type="text"
                      id="PostalCode"
                      placeholder="ZIP/Post Code"
                      className="relative w-full py-1 rounded-md border-gray-200 outline-sky-700 focus:z-10 sm:text-sm"
                    />
                  </div>
                </div>
              </fieldset>

              <div className="col-span-6 py-6">
                <button className="block w-full rounded-md bg-sky-700 px-5 py-3 text-sm font-medium text-white opacity-80 hover:opacity-100 transition-opacity duration-500 hover:shadow-lg">
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
