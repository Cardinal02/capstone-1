import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.purple,
    width: "100%",
  },

  mainContainer: {
    height: "2em",
  },

  link: {
    color: "yellow",
    fontFamily: "Sansita",
    fontSize: "0.75 rem",
    fontWeight: "bold",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="space-around" direction="column">
        <Grid
          container
          justify="space-around"
          className={classes.mainContainer}
        >
          <Grid item className={classes.link}>
            Dashboard
          </Grid>
          <Grid item className={classes.link}>
            Store
          </Grid>
          <Grid item className={classes.link}>
            Speed Build
          </Grid>
          <Grid item className={classes.link}>
            Inventory
          </Grid>
          <Grid item className={classes.link}>
            Contact Us
          </Grid>
          <Grid item className={classes.link}>
            My Cart
          </Grid>
        </Grid>
        <Typography variant="caption" color="primary" fontFamily="Sansita">
          Logo credit : Vibha Radhakrishnan; Design Input : Vidya Radhakrishnan
        </Typography>
        <Typography variant="caption" color="primary" fontFamily="Sansita">
          Sincere thanks to YouTube Tutorials by Dev Ed{" "}
        </Typography>
      </Grid>
    </footer>
  );
}
