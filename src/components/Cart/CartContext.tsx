import { createContext, ReactNode, useState, useContext } from "react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  color?: string;
  sizes?: string;
  amount: number;
}

interface CartState {
  items: CartItem[];
 // addItemtoCart():  
}

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      title: "testowy produkt",
      price: 23,
      amount: 1,
    },
  ]);
  return (
    <CartStateContext.Provider
      value={{
        items: cartItems,
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};

export const useCartState = () => {
  const cartState = useContext(CartStateContext);
  if (!cartState) {
    throw new Error("Error with CartStateContext");
  }
  return cartState;
};
