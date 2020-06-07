//import logo from './logo.svg';
//import './App.css';

import React from "react";
import Header from "./ui/Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello
    </ThemeProvider>
  );
}

export default App;
