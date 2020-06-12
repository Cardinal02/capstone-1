import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

export default function DirectPayment() {
  return (
    <TableContainer component={Paper}>
      <TableHead>
        <TableRow>
          <TableCell>Payment Details</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Name on Card</TableCell>
          <TableCell>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Card Number</TableCell>
          <TableCell>
            <TextField
              id="outlined-basic"
              label="Card Number"
              variant="outlined"
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>CVV </TableCell>
          <TableCell>
            <TextField id="outlined-basic" label="cvv" variant="outlined" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Expiry Date </TableCell>
          <TableCell>
            <TextField
              id="outlined-basic"
              label="Expiry Date"
              variant="outlined"
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </TableContainer>
  );
}
