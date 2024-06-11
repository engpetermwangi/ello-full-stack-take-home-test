import "@fontsource-variable/mulish";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const theme = createTheme({
  typography: {
    fontFamily: "Mulish, sans-serif",
  },
  palette: {
    primary: {
      main: "#5ACCCC",
      light: "#CFFAFA",
      dark: "#335C6E",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FABD33",
      light: "#FABD33",
      dark: "#335C6E",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#53C2C2",
    },
    warning: {
      main: "#F76434",
    },
    error: {
      main: "#F76434",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
