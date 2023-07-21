import React, { Component } from "react";
import Logo from "../logo.jpg";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark ">
          <div className="container-fluid">
            <img src={Logo} alt="logo" className="rounded-5" />
            <a className="navbar-brand text-white mx-3" href="#">
              Get-Daily-News
            </a>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link text-white active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="business">
                        Business
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="entertainment">
                        Entertainment
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="general">
                        General
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="health">
                        Health
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="science">
                        Science
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="sports">
                        Sports
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="technology">
                        Technology
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    About-Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
