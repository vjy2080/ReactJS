import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" >
        <Container fluid>
          <Navbar.Brand href="/">Swift-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link className='text-decoration-none text-dark' to="/">Home </Nav.Link> */}
              {/* <Nav.Link className='text-decoration-none text-dark' to="/about">About </Nav.Link> */}
              {/* <Nav.Link className='text-decoration-none text-dark' to="/contact">Contact </Nav.Link> */}

              <Nav.Link>
                {" "}
                <Link className="text-decoration-none text-light" to="/">
                  Home
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="text-decoration-none text-light" to="/product">
                  Product
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="text-decoration-none text-light" to="/about">
                  About
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="text-decoration-none text-light" to="/contact">
                  Contact
                </Link>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
