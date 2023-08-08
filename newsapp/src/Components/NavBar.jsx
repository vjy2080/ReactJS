import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Images/navLogo.png';

function NavigationMenu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-info">
      <Container>
        <img src={Logo} alt="logo" height={30} className="rounded-5" />
        <Navbar.Brand className="fs-5 mx-3">
          <NavLink className="mx-2 nav-link" exact to="/" exact="true">Get Daily News</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-5 px-5">
            <NavLink className="mx-2 nav-link" to="/business"> Business </NavLink>
            <NavLink className="mx-2 nav-link" to="/entertainment"> Entertainment </NavLink>
            <NavLink className="mx-2 nav-link" to="/health"> Health </NavLink>
            <NavLink className="mx-2 nav-link" to="/science"> Science </NavLink>
            <NavLink className="mx-2 nav-link" to="/sports"> Sports </NavLink>
            <NavLink className="mx-2 nav-link" to="/technology"> Technology </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationMenu;
