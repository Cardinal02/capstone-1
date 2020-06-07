import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const vpurple = "#673ab7";
const vyellow = "#fdd835";

export default createMuiTheme({
  palette: {
    common: {
      purple: `${vpurple}`,
      yellow: `${vyellow}`,
    },

    primary: {
      main: `${vyellow}`,
    },

    secondary: {
      main: `${vpurple}`,
    },
  },
});
