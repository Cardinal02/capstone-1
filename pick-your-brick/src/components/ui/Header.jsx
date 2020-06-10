import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import FeaturedVideoIcon from "@material-ui/icons/FeaturedVideo";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import InfoIcon from "@material-ui/icons/Info";
//import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
//import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
  },
  logo: {
    height: "4em",
    marginLeft: "5px",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    fontColor: "secondary",
  },
}));
export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar disableGutters>
          <img src={logo} alt="Company Logo" className={classes.logo} />
          <Tabs className={classes.tabContainer}>
            <Tab
              className={classes.tab}
              label=<DashboardIcon color="secondary" style={{ fontSize: 60 }} />
              component={Link}
              to="/"
            />

            <Tab
              className={classes.tab}
              label=<StorefrontIcon
                color="secondary"
                style={{ fontSize: 60 }}
              />
              component={Link}
              to="/store"
            />

            <Tab
              className={classes.tab}
              label=<FeaturedVideoIcon
                color="secondary"
                style={{ fontSize: 60 }}
              />
              component={Link}
              to="/speedBuild"
            />

            <Tab
              className={classes.tab}
              label=<EnhancedEncryptionIcon
                color="secondary"
                style={{ fontSize: 60 }}
              />
              component={Link}
              to="/inventory"
            />
            <Tab
              className={classes.tab}
              label=<InfoIcon color="secondary" style={{ fontSize: 60 }} />
              component={Link}
              to="/contactUs"
            />
            <Tab
              className={classes.tab}
              label=<ShoppingCartIcon
                color="secondary"
                style={{ fontSize: 60 }}
              />
              component={Link}
              to="/cart"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
