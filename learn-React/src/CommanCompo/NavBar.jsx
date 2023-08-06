import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function App() {
  const [showNav, setShowNav] = useState(false);




  return (
    <MDBNavbar expand="lg" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <Link className="nav-link" to="/">
            Learn-ReactJS
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        ></MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className="nav-link" to="/Examples">
                Topics
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className="nav-link" to="/About">
                About
              </Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
