import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import theme from "./utils/theme";
import GlobalStyle from "./utils/reset";
ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
