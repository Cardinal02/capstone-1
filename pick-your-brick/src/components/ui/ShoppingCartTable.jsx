import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { CartContext } from "./context";
import CartProvider from "./context";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function Table2() {
  const ctx = useContext(CartContext);
  const classes = useStyles();

  function totalPrice(items) {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
  }

  function formatPrice(price) {
    return `$${price.toFixed(2)}`;
  }
  return (
    <React.Fragment>
      <CartProvider>
        {" "}
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="right">Name </TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ctx.cartItems.map((item) => (
                <TableRow key={item.itemID}>
                  <TableCell component="th" scope="row">
                    {item.item}
                  </TableCell>
                  <TableCell align="right">{formatPrice(item.price)}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CartProvider>
    </React.Fragment>
  );
}
