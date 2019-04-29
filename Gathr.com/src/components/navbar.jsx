import React from "react";

const NavBar = props => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a
        className="navbar-brand"
        href="#"
        style={{ color: "#316b5e", fontWeight: "bold" }}
      >
        Gathr{" "}
      </a>
      <ul className="form-inline my-2 my-lg-0">
        <li className="nav-link" href="#">
          About Us
        </li>
        <li className="nav-link" href="#">
          Partners
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
