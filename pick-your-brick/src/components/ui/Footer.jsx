import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.purple,
    width: "100%",
  },

  mainContainer: {
    //position: "absolute",
    height: "4em",
  },

  link: {
    color: "White",
    fontFamily: "Arial",
    fontSize: "0.75 rem",
    fontWeight: "bold",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        justify="space-around"
        alignItems="center"
        className={classes.mainContainer}
      >
        <Grid item className={classes.link}>
          Home
        </Grid>
        <Grid item className={classes.link}>
          Kids Zone
        </Grid>
        <Grid item className={classes.link}>
          Inventory
        </Grid>
        <Grid item className={classes.link}>
          Contact Us
        </Grid>
      </Grid>
    </footer>
  );
}
