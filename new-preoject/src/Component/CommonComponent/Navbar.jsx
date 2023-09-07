import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);

  let menuData = { "/": "Home", "/about": "About Us", "/contact": "Contact" };
  let ListData = Object.entries(menuData).map(([key, val], index) => {
    return <MDBNavbarItem key={index}>
      <Link className="nav-link" to={key}>{val}</Link>
    </MDBNavbarItem>
  })

  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
              </MDBNavbarItem>
              {ListData}
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                    Account
                    <MDBDropdownMenu>
                      {/* <Link className="nav-link" to={'singin'}>Login</Link> */}
                      {/* <MDBDropdownItem to='/login'>Login</MDBDropdownItem> */}
                      <Link className="nav-link text-dark" to='/login'>Login</Link>

                    </MDBDropdownMenu>
                  </MDBDropdownToggle>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <form className='d-flex input-group w-auto'>
              <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
              <MDBBtn color='primary'>Search</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}