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
    case "ADD_ITEM_TO_CART":
      return [...state, payload];

    case "REMOVE_ITEM_FROM_CART":
      return state.filter((item) => item.id !== payload.id);

    default:
      return state;
  }
};

// get initial cart state from sessionStorage
const getInitialCart = () => {
  if (typeof window !== "undefined") {
    const storedCart = sessionStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  }

  return [];
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], getInitialCart);

  // Sync the cart state with sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const MyCartContext = () => {
  return useContext(CartContext);
};
