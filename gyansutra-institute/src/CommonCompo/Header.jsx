import React from 'react';
import { MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBNavbarBrand, MDBCollapse } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header() {

    const menuData = { "/": "Home", "/login": "Login", "/about": "About" }

    let ListData = Object.entries(menuData).map(([key, val], index) => {
        return <MDBNavbarItem key={index} className='active'>
            <MDBNavbarLink aria-current='page' tag={Link} to={key}>{val}
            </MDBNavbarLink>
        </MDBNavbarItem>
    })

    return (
        <>
            <MDBNavbar expand='lg' light style={{ backgroundColor: '#f1afdb' }}>
                <MDBContainer fluid>
                    <MDBNavbarBrand tag={Link} to='/'>GyanSutra</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            {ListData}

                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}

export default Header;