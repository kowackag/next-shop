import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";

export type CartItem = {
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly newPrice?: number;
  readonly color?: string;
  readonly size?: string;
  readonly amount: number;
  readonly image: {
    src: string;
    alt: string;
  };
};

interface CartState {
  readonly items: readonly CartItem[];
  readonly addItemToCart: (product: CartItem) => void;
  readonly decreaseItemInCart: (product: CartItem) => void;
  readonly changeAmountItemInCart: (product: CartItem) => void;
  readonly removeItemFromCart: (id: CartItem["id"]) => void;
  readonly totalPrice: number;
}

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getCartItemsFromStorage = () => {
    const itemsFromLocalStorage = localStorage.getItem("SHOPPING_CART");
    if (!itemsFromLocalStorage) {
      return [];
    }
    try {
      return JSON.parse(itemsFromLocalStorage);
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  const setCartItemsInStorage = (cartItems: CartItem[]) => {
    localStorage.setItem("SHOPPING_CART", JSON.stringify(cartItems));
  };

  useEffect(() => {
    setCartItems(getCartItemsFromStorage());
  }, []);

  useEffect(() => {
    if (!cartItems.length) {
      return;
    }

    setCartItemsInStorage(cartItems);
  }, [cartItems]);

  return (
    <CartStateContext.Provider
      value={{
        items: cartItems,
        addItemToCart: (item) => {
          setCartItems((prevState) => {
            const existingItem = prevState.find((el) => el.id === item.id);
            if (!existingItem) {
              return [...prevState, item];
            } else {
              const newItem = {
                ...existingItem,
                amount: existingItem.amount + 1,
              };
              return prevState.map((el) =>
                el.id === existingItem.id ? newItem : el
              );
            }
          });
        },
        decreaseItemInCart: (item) => {
          setCartItems((prevState) => {
            const existingItem = prevState.find((el) => el.id === item.id);
            if (!existingItem) {
              return [...prevState, item];
            } else {
              const newItem = {
                ...existingItem,
                amount: existingItem.amount - 1,
              };
              return prevState.map((el) =>
                el.id === existingItem.id ? newItem : el
              );
            }
          });
        },
        changeAmountItemInCart: (item) => {
          setCartItems((prevState) => {
            const existingItem = prevState.find((el) => el.id === item.id);
            if (!existingItem) {
              return [...prevState, item];
            } else {
              const newItem = {
                ...existingItem,
                amount: item.amount,
              };

              return prevState.map((el) =>
                el.id === existingItem.id ? newItem : el
              );
            }
          });
        },
        removeItemFromCart: (id) => {
          setCartItems((prevState) => prevState.filter((el) => el.id !== id));
        },
        totalPrice: cartItems.reduce((acc, curr) => {
          const price = curr.newPrice
            ? curr.newPrice * curr.amount
            : curr.price * curr.amount;
          return acc + price;
        }, 0),
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
