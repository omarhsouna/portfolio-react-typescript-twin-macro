import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "twin.macro";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>,
);
