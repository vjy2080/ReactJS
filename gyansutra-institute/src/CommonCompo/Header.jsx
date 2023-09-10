import React, { useState } from 'react';
import { MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBNavbarBrand, MDBCollapse } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header() {
    // useState used for menu toggler in responsive
    const [showNavExternal, setShowNavExternal] = useState(false);

    // Create a dynamic menuBar function
    const menuData = { "/": "Home", "/about": "About", "/login": "Login", "/signup": "Signup" }

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
                        onClick={() => setShowNavExternal(!showNavExternal)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavExternal} navbar>
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