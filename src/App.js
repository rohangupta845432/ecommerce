import React, { useContext } from "react";
import { Route } from "react-router-dom";
import Products_page from "./pages/products_page.js";
import Home_page from "./pages/home_page.js";
import Contacts_page from "./pages/contacts_page.js";
import Layout from "./components/Layout/Layout.js";
import Login_page from "./pages/login_page.js";
import About_page from "./pages/about_page.js";
import AuthContext from "./store/auth-context.js";
const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <Layout>
        <Route path="/">
          <Home_page />
        </Route>
        {authCtx.isLoggedIn && (
          <Route path="/product">
            <Products_page />
          </Route>
        )}
        <Route path="/about">
          <About_page />
        </Route>
        <Route path="/contacts">
          <Contacts_page />
        </Route>
        <Route path="/login">
          <Login_page />
        </Route>
      </Layout>
    </div>
  );
};

export default App;
