import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logoLimayMedio.webp"; // Asegúrate de colocar tu logo en la carpeta correcta
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Logo a la izquierda */}
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Limay Medio"
            width="150"
            height="150"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Botón toggle para móviles */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menú centrado */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products/cañas">
              Cañas
            </Nav.Link>
            <Nav.Link as={Link} to="/products/reel">
              Reeles
            </Nav.Link>
            <Nav.Link as={Link} to="contacto">
              Contacto
            </Nav.Link>
          </Nav>

          {/* Carrito de compras alineado a la derecha */}
          <Nav className="ms-auto">
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
