import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MouseContextProvider from "./context/mouse-context";
import { LangProvider } from "./context/LangContext";

ReactDOM.render(
  <React.StrictMode>
    <MouseContextProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </MouseContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
