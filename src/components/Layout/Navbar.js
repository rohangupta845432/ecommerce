import React, { useContext } from "react";
import "./Navbar.css";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom/cjs/react-router-dom";
const Navbar = (props) => {
  const cartContext = useContext(CartContext);
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-dark">
      <ul className="d-flex justify-content-center">
        <li className="nav-item">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/product">STORE</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>
      <button
        className="btn btn-sm btn-danger cart-nav-item"
        onClick={() => {
          props.oncartShowHandler();
        }}
      >
        Cart
        <span class="badge badge-light">{cartContext.totalItem}</span>
      </button>
    </div>
  );
};

export default Navbar;
