import React, { useState, createContext, useContext } from "react";
import itemList from "../products";
import Item from "./Item";
import CartProvider from "./context";
import { CartContext } from "./context";
import MyCart from "./MyCart";
import { Grid } from "@material-ui/core";

function displayItem(singleItem, addToCart) {
  return (
    <Item
      key={singleItem.itemID}
      item={singleItem.item}
      itemID={singleItem.itemID}
      price={singleItem.price}
      quantity={1}
      pic={singleItem.pic}
      addToCart={addToCart}
    />
  );
}

export default function Store() {
  console.log({ itemList });
  const cartctxt = useContext(CartContext);

  return (
    <React.Fragment>
      <CartProvider>
        <Grid container spacing={10} style={{ padding: "24px" }}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            {itemList.map(displayItem)}
          </Grid>
        </Grid>
        <MyCart />
      </CartProvider>
    </React.Fragment>
  );
}
