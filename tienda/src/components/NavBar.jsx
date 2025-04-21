import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logoLimayMedio.webp"; // Asegúrate de colocar tu logo en la carpeta correcta
import CartWidget from "./CartWidget";

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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#historia">Cañas</Nav.Link>
            <Nav.Link href="#contacto">Reeles</Nav.Link>
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

