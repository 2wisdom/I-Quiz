import { deepPurple, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: deepPurple[600],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
