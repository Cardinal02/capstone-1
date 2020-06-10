import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./context";

//import itemList from "../products";
//import { currentCart } from "./context";

/*function formatPrice(price) {
  return `$${price}`;
}

function totalPrice(items) {
  return currentCart.reduce(
    (acc, cartitem) => acc + cartItem.quantity * cartItem.price
  );
} */
export default function MyCart({ stripeToken }) {
  const [stripe, setStripe] = useState(null);
  const ctx = useContext(CartContext);

  /*useEffect(() => {
    if (window.stripe) setStripe(window.Stripe(stripeToken));
  }, [stripeToken]);

  function checkout() {
    stripe.redirectToCheckout({
      items: ctx.cartItems.map((item) => ({
        quantity: item.quantity,
      })),
    });
  }*/

  return (
    <React.Fragment>
      Hello from MyCart
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {ctx.cartItems.map((item) => (
            <tr>
              <td> {item.item}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}
