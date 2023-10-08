import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  // MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
// import {Link} from "react-router-dom";
export default function HeaderComponent() {
  const [showBasic, setShowBasic] = useState(false);
  const menuItems = [
    {
      title: 'Services',
      url: '/services',
      submenu: [
        {
          title: 'web design',
          url: 'web-design',
        },
        {
          title: 'web development',
          url: 'web-dev',
        },
        {
          title: 'SEO',
          url: 'seo',
        },
        
      ],
    },
    // ...
  ];
  const MenuData = menuItems.map((data) => {
    // console.log(data);
    let submenudata = data.submenu.map((submenu) => {
      // console.log("called inner loop", submenu);
      return <MDBDropdownItem key={submenu.title} link>{submenu.title}</MDBDropdownItem>
    })
    return <MDBNavbarItem key={data.title}>
      <MDBDropdown>
        <MDBDropdownToggle tag='a' className='nav-link' role='button'>
          {data.title}
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          {submenudata}
        </MDBDropdownMenu>
      </MDBDropdown>

    </MDBNavbarItem>

  })
  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
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
              {MenuData}
              <MDBNavbarItem>
                {/* <MDBNavbarLink href='#'>login</MDBNavbarLink> */}
                <Link to="login" className='nav-link'>Login</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                {/* <MDBNavbarLink href='#'>login</MDBNavbarLink> */}
                <Link to="fetchapi" className='nav-link'>FetchAPI</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                {/* <MDBNavbarLink href='#'>login</MDBNavbarLink> */}
                <Link to="filter" className='nav-link'>Filter</Link>
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