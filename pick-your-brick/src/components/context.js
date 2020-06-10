import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  function addToCart(item) {
    setCartItems((prevState) => [...prevState, item]);
  }

  function itemsWithQuantities(items) {
    return cartItems.reduce((acc, item) => {
      const found = acc.find((_item) => _item.itemId === item.itemId);
      if (found) {
        found.quantity = found.quantity + 1;
      } else {
        acc.push({
          quantity: 1,
          ...item,
        });
      }
      return acc;
    }, []);
  }

  return (
    <CartContext.Provider
      value={{ cartItems: itemsWithQuantities(cartItems), addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
