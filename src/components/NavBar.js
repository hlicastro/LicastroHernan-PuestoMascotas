import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Puesto Mascotas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Carritos</Nav.Link>
            <NavDropdown title="Secciones" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Articulos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Consejos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
