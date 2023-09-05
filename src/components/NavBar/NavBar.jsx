import { Navbar, Container, Nav } from "react-bootstrap";
import { CartWidget } from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary w-100">
      <Container>
        <Link to="/">Computing Word</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Productos</Link>
            <Link to="/category/60">60 Hz</Link>
            <Link to="/category/75">75 Hz</Link>
            <Link to="/category/144">144 Hz</Link>
            <Link to="/category/165">165 Hz</Link>
            <Link to="/category/240">240 Hz</Link>
            <Link to="/category/360">360 Hz</Link>
          </Nav>
          <Nav>
            <Link to="/cart">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
