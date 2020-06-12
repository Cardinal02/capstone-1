import React, { useContext } from "react";
import { PybContext } from "./PybContext";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
    margin: 25,
  },
});

export default function Inventory() {
  const classes = useStyles();
  const [legoSets, setLegoSets] = useContext(PybContext); //gets lego sets data fromPybcontext
  //renders the data in a table format
  return (
    <Grid
      container
      spacing={10}
      style={{ padding: "60px" }}
      justify="space-around"
    >
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell align="left">Product Name</TableCell>
              <TableCell align="right">In Stock</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Manufacturer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {legoSets.map((item) => (
              <TableRow key={item.itemID}>
                <TableCell component="th" scope="row">
                  {item.itemID}
                </TableCell>
                <TableCell align="left">{item.item}</TableCell>
                <TableCell align="right">{item.openingStock}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">{item.manufacturer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
