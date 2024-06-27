import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
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
        </button>
      </div>
    </div>
  );
};

export default Navbar;
