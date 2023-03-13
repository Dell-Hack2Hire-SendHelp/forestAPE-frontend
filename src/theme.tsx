import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3D5D0A",
    },
    secondary: {
      main: "#5DC269",
    },
  },
});

export default theme;
