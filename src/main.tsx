import "./styles/globals.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import AppContainer from "./components/AppContainer";
import { LoadingContextProvider } from "./contexts/LoadingContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoadingContextProvider>
      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
    </LoadingContextProvider>
  </React.StrictMode>
);
