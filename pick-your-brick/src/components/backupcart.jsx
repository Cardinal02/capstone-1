import React from "react";

export default function MyCart({ stripeToken }) {
  return (
    <React.Fragment>
      Hello from MyCart Test
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quanity</th>
            <th>Price</th>
          </tr>
        </thead>
        <body>{}</body>
      </table>
    </React.Fragment>
  );
}
