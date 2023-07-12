import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';


function NavScrollExample(props) {
  return (

    

    <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
      <Container fluid>
        <Navbar.Brand href="./">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link className='text-decoration-none text-light' to="./">Home</Link></Nav.Link>
            <Nav.Link ><Link className='text-decoration-none text-light' to="./About">About</Link></Nav.Link>
            <Nav.Link ><Link className='text-decoration-none text-light' to="./Contact">Contact</Link></Nav.Link>
            <NavDropdown title="Detail" id="navbarScrollingDropdown">
              <NavDropdown.Item href="./ClassComponent.jsx">Class Component</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Function Component</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};