import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';




function NavBar() {

  const [expanded, setExpanded] = useState(false);

  return (
    <>{[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
    <header>
    <Navbar key={expand} expand={expand} expanded={expanded} className='Navbar' fixed="top" collapseOnSelect bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/index.html">
        <NavLink onClick={() => setExpanded(false)} to="/inicio" className="logoMarca">
        <img
              src="./img/logoNav.png"
              
              className="d-inline-block align-top logo"
              alt=""
            />
        </NavLink>
        
        </Navbar.Brand>                                         
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className='mobileNavBody'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='imgNavMovil' id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img
              src="./img/logoNav.png"
              
              className="d-inline-block align-top logo"
              alt=""
            />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3 hamburguesa">
            <Nav.Link onClick={() => setExpanded(false)}><NavLink to="/inicio" className="a"> Inicio </NavLink></Nav.Link> 
            <Link onClick={() => setExpanded(false)} to="/inicio#sobreNos" className="a1">Sobre Nosotros </Link>
            <Nav.Link onClick={() => setExpanded(false)}> <NavLink to="/productos" className="a"> Productos </NavLink></Nav.Link> 
            <Nav.Link onClick={() => setExpanded(false)}> <NavLink to="/pagos" className="a"> Pagos </NavLink></Nav.Link> 
          </Nav>
          </Offcanvas.Body>
          </Navbar.Offcanvas>
        
      </Container>
    </Navbar>
    </header>
    ))}
    </>
  );
}

export default NavBar;