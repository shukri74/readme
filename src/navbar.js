import React from "react";
import logo from './assets/ReadMe-logo.png';
const NavBar = () => {
  return (
    <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          {/*Insert your logo image here*/}
          <img src={logo} width="300" height="300" alt="ReadMe Logo" />
        </a>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item">
            Quotes
          </a>

          <a className="navbar-item">
            Find a book
          </a>

          <a className="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
