"use client";

import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";

const CartContext = createContext();

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIALIZE_CART":
      return payload;

    case "ADD_ITEM_TO_CART":
      return [...state, payload];

    case "REMOVE_ITEM_FROM_CART":
      return state.filter((item) => item.id !== payload.id);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartInitialized, setCartInitialized] = useState(false);
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Fetch initial cart state from sessionStorage after the component mounts
  useEffect(() => {
    const storedCart = sessionStorage.getItem("cart");

    if (storedCart) {
      dispatch({ type: "INITIALIZE_CART", payload: JSON.parse(storedCart) });
    }

    setCartInitialized(true);
  }, []);

  // Sync the cart state with sessionStorage whenever it changes
  useEffect(() => {
    if (cartInitialized) {
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, cartInitialized]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const MyCartContext = () => {
  return useContext(CartContext);
};
