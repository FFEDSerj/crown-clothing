import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserContextProvider } from "./contexts/user.context";
import "./index.scss";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <UserContextProvider>
      <App tab="home" />
    </UserContextProvider>
  </BrowserRouter>
);
