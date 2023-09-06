import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="brand" to="/">
          Computing World
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-links" to="/">
              Inicio
            </Link>
            <Link className="nav-links" to="#">
              Nosotros
            </Link>
            <NavDropdown
              className="nav-links"
              title="Productos"
              id="collasible-nav-dropdown"
            >
              <Link className="nav-links" to="/category/60">
                60 Hz
              </Link>
              <hr className="hr" />
              <Link className="nav-links" to="/category/144">
                144 Hz
              </Link>
              <hr className="hr" />
              <Link className="nav-links" to="/category/165">
                165 Hz
              </Link>
              <hr className="hr" />
              <Link className="nav-links" to="/category/240">
                240 Hz
              </Link>
              <hr className="hr" />
              <Link className="nav-links" to="/category/360">
                360 Hz
              </Link>
              <NavDropdown.Divider />
              <Link className="nav-links dropdown-nav" to="/">
                Todos los productos
              </Link>
            </NavDropdown>
          </Nav>
          <Nav className="div-cart">
            <Link className="nav-links" to="/cart">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
