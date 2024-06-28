import React, { useContext } from "react";
import "./Navbar.css";
import CartContext from "../store/cart-context";
const Navbar = (props) => {
  const cartContext = useContext(CartContext);
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="d-flex justify-content-center">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <button className="nav-link">
              Home <span className="sr-only">(current)</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Link</button>
          </li>
        </ul>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            props.oncartShowHandler();
          }}
        >
          Cart
          <span class="badge badge-light">{cartContext.totalItem}</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
