import React from "react";
import { Route } from "react-router-dom";
import Product_page from "./pages/Products_page.js";
import Home_page from "./pages/home_page.js";
import Contacts_page from "./pages/contacts_page.js";
const App = () => {
  return (
    <div>
      <Route path="/product">
        <Product_page></Product_page>
      </Route>
      <Route path="/">
        <Home_page />
      </Route>
      <Route path="/">
        <Contacts_page />
      </Route>
    </div>
  );
};

export default App;
