//import logo from './logo.svg';
//import './App.css';

import React from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import { Grid, Paper } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "./ui/Footer";
import Store from "./Store";
import SpeedBuild from "./SpeedBuild";
import Inventory from "./Inventory";
import ContactUs from "./ContactUs";
import MyCart from "./MyCart";
import Default from "./Default";
import { PybProvider } from "./PybContext";
import { CartProvider } from "./CartContext";
import Dashboard from "./Dashboard";

function App() {
  return (
    // Passes down legosets data down the component tree
    <PybProvider>
      {/* Passes down shopping cart data down the component tree */}

      <CartProvider>
        {/* Passes down the theme object to be accessed by style function */}
        <ThemeProvider theme={theme}>
          {/* Lets us navigate tabs/path back and forth through back button in the browser */}
          <BrowserRouter>
            {/* Material-UI component that provides a base where my components can sit on-will be helpful to include dark mode */}
            <Paper>
              <Grid container direction="column">
                {/* Componet where the tabs and header lives */}
                <Header />
                {/* React-Router-DOM component that offers nav */}
                <Switch>
                  {/* Routes that hold path to Components that I want to be able to navigate into */}
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/store" component={Store} />
                  <Route exact path="/speedBuild" component={SpeedBuild} />
                  <Route exact path="/inventory" component={Inventory} />
                  <Route exact path="/contactUs" component={ContactUs} />
                  <Route exact path="/cart" component={MyCart} />
                  <Route component={Default} />
                </Switch>
                {/* Component that hold my footer content */}
                <Footer />
              </Grid>
            </Paper>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </PybProvider>
  );
}

export default App;
