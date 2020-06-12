import React, { useState, createContext } from "react";

export const CartContext = createContext(); //creating a context for the items added to cart

export function CartProvider({ children }) {
  //returns functionality to add items to cart and aggegate the item quantity
  const [cartItems, setCartItems] = useState([]); //set states for the cart items array with an empty initial array
  console.log(cartItems);
  function addToCart(item) {
    //function to add items to the list of cart items when add to cart button is clicked in Items component
    setCartItems((prevState) => [...prevState, item]);
  }

  function itemsWithQuantities(cartItems) {
    //function to aggegate the items quantity
    return cartItems.reduce((acc, item) => {
      const found = acc.find((_item) => _item.item === item.item);
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
      value={{
        cartItems: itemsWithQuantities(cartItems),
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
