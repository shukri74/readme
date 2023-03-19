import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "./style.css";
import logo from '../../assets/ReadMe-logo.png';

const NavBar = () => {
  return (
    <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-brand" to="/">
          <img className='readMe-logo' src={logo} width="100"  alt="ReadMe Logo" />
        </Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <NavLink
            to="/"
            end
            className="navbar-item">
            Quotes
          </NavLink>

          <NavLink
            to="/search"
            end
            className="navbar-item">
            Find a book
          </NavLink>

          <NavLink
            to="/reading-list"
            end
            className="navbar-item">
            Reading list
          </NavLink>

          <NavLink
            to="/contact"
            end
            className="navbar-item">
            Contact
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;

