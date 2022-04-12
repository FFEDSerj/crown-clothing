import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserContextProvider } from "./contexts/user.context";
import { CategoriesContextProvider } from "./contexts/products.context";
import { CartContextProvider } from "./contexts/cart.context";

import "./index.scss";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <UserContextProvider>
      <CategoriesContextProvider>
        <CartContextProvider>
          <App tab="home" />
        </CartContextProvider>
      </CategoriesContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
