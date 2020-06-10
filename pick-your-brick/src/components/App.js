//import logo from './logo.svg';
//import './App.css';

import React from "react";
import Header from "./ui/Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./ui/Footer";
import Store from "./Store";
import SpeedBuild from "./SpeedBuild";
import Inventory from "./Inventory";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
import MyCart from "./MyCart";
import Default from "./Default";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div style={{ height: "80vh" }}>Home</div>}
          />
          <Route exact path="/store" component={Store} />
          <Route exact path="/speedBuild" component={SpeedBuild} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/contactUs" component={ContactUs} />
          <Route exact path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
