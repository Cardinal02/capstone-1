import { createMuiTheme } from "@material-ui/core/styles"; //imports the cpmponent that lets us to customize theme

const vpurple = "#673ab7";
const vyellow = "#fdd835";

export default createMuiTheme({
  //An object that customizes the theme
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
  typography: {},
});

// typography: {
// tab: {
// fontFamily: "Sansita",
// textTransform: "none",
// fontWeight: 900,
// fontSize: "1rem",
// color: "secondary",
// },
// },
