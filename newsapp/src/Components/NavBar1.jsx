import Logo from "../logo.jpg";
import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';




function NavScrollExample() {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <img src={Logo} alt="logo" className="rounded-5 me-5" />

                <a class="navbar-brand me-5" href="./">Get-Daily-News</a>
                {/* <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="fas fa-bars"></i>
                </button> */}

                <Navbar.Collapse className='mx-5 px-5 ' id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 text-light"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item"> <Link class="nav-link" aria-current="page" to="/business">Business</Link> </li>
                                <li class="nav-item"> <Link class="nav-link" aria-current="page" to="/entertainment">Entertainment</Link> </li>
                                <li class="nav-item"> <Link class="nav-link" aria-current="page" to="/health">Health</Link> </li>
                                <li class="nav-item"> <Link class="nav-link" aria-current="page" to="/science">Science</Link> </li>
                                <li class="nav-item"> <Link class="nav-link" aria-current="page" to="/sports">Sports</Link> </li>
                                <li class="nav-item"> <Link class="nav-link" aria-current="page" to="/technology">Technology</Link> </li>
                            </ul>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </nav>
    );
}

// ---------------------------------
//         <Navbar expand="lg" className="bg-dark">
//             <Container fluid>
//                 <Navbar.Brand to="./">
//                     <img src={Logo} alt="logo" className="rounded-5" />
//                 </Navbar.Brand>
//                 <Link className='fs-1 mx-3 text-light' to="./">Get-Daily-News</Link>
//                 <Navbar.Toggle aria-controls="navbarScroll" />

//                 <Navbar.Collapse className='mx-5 px-5 ' id="navbarScroll">
//                     <Nav
//                         className="me-auto my-2 my-lg-0 text-light"
//                         style={{ maxHeight: '100px' }}
//                         navbarScroll
//                     >

//                         <Link to="/business">Business</Link>
//                         <Link to="/entertainment">Entertainment</Link>
//                         <Link to="/health">Health</Link>
//                         <Link to="#science">Science</Link>
//                         <Link to="/sports">Sports</Link>
//                         <Link to="/technology">Technology</Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

export default NavScrollExample;