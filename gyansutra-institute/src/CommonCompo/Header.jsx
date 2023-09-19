import React, { useState } from 'react';
import { MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBNavbarBrand, MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';



function Header() {
    // useState used for menu toggler in responsive
    const [showNavExternal, setShowNavExternal] = useState(false);

    const navigate = useNavigate();
    const logoUrl = process.env.PUBLIC_URL + '/logo.webp';
    const capitalizeFirstLetter = (str) => {
        if (!str || str.length === 0) {
            return '';
        }
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    const userName = capitalizeFirstLetter(Cookies.get('Name'));
    const Logout = () => {
        Cookies.remove("Name");
        navigate('/Login')

    };


    // Create a dynamic menuBar function
    const menuData = { "/": "Home", "/about": "About", "/login": "Login" }

    let ListData = Object.entries(menuData).map(([key, val], index) => {
        return <MDBNavbarItem key={index} className='active'>
            <MDBNavbarLink aria-current='page' tag={Link} to={key}>{val}
            </MDBNavbarLink>
        </MDBNavbarItem>
    })


    return (
        <>
            <MDBNavbar expand='sm' dark bgColor='dark' className='py-0 sticky-top'>
                <MDBContainer fluid>
                    <MDBNavbarBrand tag={Link} to='/'>
                        <img src={logoUrl} width={180} height={60} alt="Logo" className="rounded-5 my-0 py-o logo" />
                    </MDBNavbarBrand>
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
                        <MDBNavbarNav className='me-auto mb-2 mb-sm-0'>
                            {ListData}
                        </MDBNavbarNav>
                        {userName ?
                            <>
                                <MDBNavbarNav className=' me-auto mb-2 d-flex justify-content-end  mb-sm-0'>
                                    <div className=" text-warning text-center">
                                        {'Hello,'} <br /> {userName}
                                    </div>
                                    <MDBBtn onClick={Logout} className='mx-2' color='danger'>
                                        Logout
                                    </MDBBtn>
                                </MDBNavbarNav>
                            </>
                            : ""
                        }

                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}

export default Header;