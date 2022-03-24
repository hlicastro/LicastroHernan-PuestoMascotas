import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { NavLink,Link  } from "react-router-dom"
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">Puesto Mascotas</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto linkNav">
            <NavLink to="/category/perro">Perros</NavLink>
            <NavLink to="/category/gato">Gatos</NavLink>
            <Link to="/carrito">Carrito</Link>

          </Nav>
          <Nav>
            <Link to="/carrito">
              <CartWidget/>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
