import { Fragment } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
};

export default Layout;
