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
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

//import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
//import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

// The makeStyles (hook generator) allows the creation of multiple style rules per style sheet.
//Each style rule has its own class name. The class names are provided to the component with the classes variable.

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
  const classes = useStyles(); //classes is a variable for style rule
  // state to set active tab
  const [value, setValue] = useState(0);
  //function to set index of active tab
  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    // returns app bar for header and tabs.
    //Appbar is a Material UI component that renders a header, nested within it is a toolbar that renders tabs in a row
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Button component={Link} to="/store">
            <img src={logo} alt="Company Logo" className={classes.logo} />
          </Button>
          <Tabs
            className={classes.tabContainer}
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
          >
            <Tab
              className={classes.tab}
              label=<DashboardIcon color="secondary" style={{ fontSize: 50 }} />
              component={Link}
              to="/"
            />

            <Tab
              className={classes.tab}
              label=<Tooltip title="Shop with us" placement="top">
                <StorefrontIcon color="secondary" style={{ fontSize: 50 }} />
              </Tooltip>
              component={Link}
              to="/store"
            />

            <Tab
              className={classes.tab}
              label=<Tooltip title="Speed Build Videos" placement="top">
                <VideoLibraryIcon color="secondary" style={{ fontSize: 50 }} />
              </Tooltip>
              component={Link}
              to="/speedBuild"
            />

            <Tab
              className={classes.tab}
              label=<Tooltip title="Inventory" placement="top">
                <EnhancedEncryptionIcon
                  color="secondary"
                  style={{ fontSize: 50 }}
                />
              </Tooltip>
              component={Link}
              to="/inventory"
            />
            <Tab
              className={classes.tab}
              label=<Tooltip title="Contact Us" placement="top">
                <InfoIcon color="secondary" style={{ fontSize: 50 }} />
              </Tooltip>
              component={Link}
              to="/contactUs"
            />

            <Tab
              className={classes.tab}
              label=<Tooltip title="Shopping Cart" placement="top">
                <ShoppingCartIcon color="secondary" style={{ fontSize: 50 }} />
              </Tooltip>
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
