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
  addItemToCart: (product: CartItem) => void;
}

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <CartStateContext.Provider
      value={{
        items: cartItems,
        addItemToCart: (item) => {
          setCartItems((prevState) => [...prevState, item]);
        },
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
