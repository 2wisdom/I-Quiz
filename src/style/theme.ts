import { deepPurple, green, red } from "@mui/material/colors";
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

// 정답
const correct = createTheme({
  palette: {
    primary: {
      main: green[700],
    },
    secondary: {
      main: green[500],
    },
  },
});

// 오답
const wrong = createTheme({
  palette: {
    primary: {
      main: red[700],
    },
    secondary: {
      main: red[500],
    },
  },
});

export default theme;
