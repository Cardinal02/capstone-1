import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./context";
//import { getThemeProps } from "@material-ui/styles";

export default function MyCart() {
  const ctx = useContext(CartContext);

  function totalPrice(items) {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
  }

  function formatPrice(price) {
    return `$${price.toFixed(2)}`;
  }
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          {ctx.cartItems.map((item) => (
            <tr>
              <td>{item.item}</td>
              <td>{formatPrice(item.price)}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>Total:</td>
            <td>{formatPrice(totalPrice(ctx.cartItems))}</td>
          </tr>
          <tr>
            <td>
              <button>Checkout with Stripe</button>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}
