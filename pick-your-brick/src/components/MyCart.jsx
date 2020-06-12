/*import React from "react";

export default function MyCart() {
  return <React.Fragment>Hello from My cart</React.Fragment>;
}*/
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import { CartProvider } from "./CartContext";
import PayPalCheckout from "./PayPalCheckout";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import ExposureZeroIcon from "@material-ui/icons/ExposureZero";
import { green } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  table: {},
});

export default function MyCart() {
  const ctx = useContext(CartContext);
  const classes = useStyles();
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  function totalPrice(items) {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
  }

  function formatPrice(price) {
    return `$${price.toFixed(2)}`;
  }
  return (
    <React.Fragment>
      <CartProvider>
        <Typography
          component={Paper}
          variant="h5"
          fontWeight="fontWeightBold"
          color="secondary"
          elevation={3}
          padding="100"
        >
          Thank you for shopping with us
        </Typography>

        <Grid
          container
          spacing={10}
          style={{ padding: "10px" }}
          justify="space-around"
        >
          <Grid item>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <Typography variant="h5" fontWeight="fontWeightBold">
                      My Cart
                    </Typography>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Price </TableCell>
                    <TableCell align="right">Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ctx.cartItems.map((item) => (
                    <TableRow key={item.itemID}>
                      <TableCell component="th" scope="row">
                        <img src={item.pic} alt="Thumbnail" height="50px" />
                      </TableCell>
                      <TableCell> {item.item}</TableCell>
                      <TableCell align="right">
                        {formatPrice(item.price)}
                      </TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={increase}
                          variant="contained"
                          color="primary"
                        >
                          <AddCircleIcon
                            style={{ fontSize: 50, color: green[500] }}
                          />
                        </IconButton>
                        <IconButton
                          onClick={decrease}
                          variant="contained"
                          color="primary"
                        >
                          <RemoveCircleIcon
                            style={{ fontSize: 50, color: red[500] }}
                          />
                        </IconButton>
                        <IconButton
                          onClick={reset}
                          variant="contained"
                          color="primary"
                        >
                          <ExposureZeroIcon style={{ fontSize: 50 }} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h5" fontWeight="fontWeightBold">
                        Order Summary
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Subtotal</TableCell>
                    <TableCell>
                      {formatPrice(totalPrice(ctx.cartItems))}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Shipping</TableCell>
                    <TableCell>Free</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h5" fontWeight="fontWeightBold">
                        Total
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {formatPrice(totalPrice(ctx.cartItems))}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell align="center">
                      <Button
                        align="center"
                        variant="contained"
                        color="secondary"
                        size="large"
                      >
                        Checkout
                      </Button>
                    </TableCell>
                    <TableCell>
                      <PayPalCheckout
                        total={formatPrice(totalPrice(ctx.cartItems))}
                      ></PayPalCheckout>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </CartProvider>
    </React.Fragment>
  );
}
