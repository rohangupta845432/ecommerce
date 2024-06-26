import React from "react";
import "./Navbar.css";

const Navbar = () => {
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
      </div>
    </div>
  );
};

export default Navbar;
