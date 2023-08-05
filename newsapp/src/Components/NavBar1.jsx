import Logo from "../logo.jpg";
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function NavScrollExample() {

    const active = () => {
        ({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
        })
    }

    return (

        <Navbar expand="lg" className="bg-dark">
            <Container fluid>
                <Navbar.Brand to="./">
                    <img src={Logo} alt="logo" className="rounded-5" />
                </Navbar.Brand>
                <NavLink className='fs-1 mx-3 text-light text-decoration-none' to="./">Get Daily News</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse className='mx-5 px-5 ' id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 text-light text-decoration-none"
                        style={{ maxHeight: '100px' }}
                        navbarScroll

                    >

                        <NavLink style={active} className="text-light nav-link" aria-current="page" to="/business">Business</NavLink>
                        <NavLink style={active} className="text-light nav-link" aria-current="page" to="/entertainment">Entertainment</NavLink>
                        <NavLink style={active} className="text-light nav-link" aria-current="page" to="/health">Health</NavLink>
                        <NavLink style={active} className="text-light nav-link" aria-current="page" to="#science">Science</NavLink>
                        <NavLink style={active} className="text-light nav-link" aria-current="page" to="/sports">Sports</NavLink>
                        <NavLink style={active} className="text-light nav-link" aria-current="page" to="/technology">Technology</NavLink>

                        {/* <li class="nav-item"> <Link class="text-light nav-link" aria-current="page" to="/business">Business</Link></li>
                        <li class="nav-item"> <Link class="text-light nav-link" aria-current="page" to="/entertainment">Entertainment</Link></li>
                        <li class="nav-item"> <Link class="text-light nav-link" aria-current="page" to="/health">Health</Link></li>
                        <li class="nav-item"> <Link class="text-light nav-link" aria-current="page" to="#science">Science</Link></li>
                        <li class="nav-item"> <Link class="text-light nav-link" aria-current="page" to="/sports">Sports</Link></li>
                        <li class="nav-item"> <Link class="text-light nav-link" aria-current="page" to="/technology">Technology</Link></li> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;