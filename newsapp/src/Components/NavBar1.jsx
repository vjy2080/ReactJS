import Logo from "../logo.jpg";
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import Nav from 'react-bootstrap/Nav';



function NavScrollExample() {


    return (

        <Navbar sticky="top" expand="lg" className="bg-dark">
            <Container fluid>
                <Navbar.Brand to="./">
                    <img src={Logo} alt="logo" height={30} className="rounded-5" />
                </Navbar.Brand>
                <NavLink className='fs-5 mx-3 text-light text-decoration-none' to="./">Get Daily News</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" className="d-flex" />
                <Navbar.Collapse className=' text-center justify-content-end' id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="text-light mx-2 nav-link" to="/business">Business</NavLink>
                        <NavLink className="text-light mx-2 nav-link" to="/entertainment">Entertainment</NavLink>
                        <NavLink className="text-light mx-2 nav-link" to="/health">Health</NavLink>
                        <NavLink className="text-light mx-2 nav-link" to="#science">Science</NavLink>
                        <NavLink className="text-light mx-2 nav-link" to="/sports">Sports</NavLink>
                        <NavLink className="text-light mx-2 nav-link" to="/technology">Technology</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;