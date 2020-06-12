import React, { useState, createContext, useContext } from "react";
import myProducts from "../products";
import { CartContext } from "./CartContext";

export const PybContext = createContext(); //creating a context for the legoset products data

export const PybProvider = (props) => {
  const [legoSets, setLegoSets] = useState(myProducts); //sets state for my legoset data, imposts data from my products.js file
  const [quantity, setquantity] = useState(0); //state for quantity for future use
  const cartItemQuantity = useContext(CartContext);
  console.log(cartItemQuantity);

  console.log(legoSets);

  return (
    // returns context for my products data, passing down data down the component tree,
    // passes down 'legosets'-my data and the function 'setLegoSets' in order to be able to add data in future
    <PybContext.Provider value={[legoSets, setLegoSets]}>
      {props.children}
    </PybContext.Provider>
  );
};
