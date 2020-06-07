import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
//import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import logo from "../../assets/pyb.png";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
  },
  logo: {
    height: "5em",
  },
}));
export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar disableGutters>
          <img src={logo} alt="Company Logo" className={classes.logo} />
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
