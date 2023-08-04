import React from "react";
import Logo from "../logo.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <img src={Logo} alt="logo" className="rounded-5" />
          <Link className="navbar-brand text-white mx-3" to="/">
            Get-Daily-News
          </Link>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

}

export default NavBar;
