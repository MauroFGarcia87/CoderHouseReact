import React, { useState } from "react";
import Swal from "sweetalert2";
import { Form, Button, Container } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    consulta: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "¡Gracias por tu consulta!",
      text: "Pronto te responderemos 😊",
      icon: "success",
      confirmButtonText: "Aceptar"
    });

    // Opcional: resetear formulario
    setFormData({
      nombre: "",
      email: "",
      consulta: ""
    });
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Formulario de Contacto</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Introduce tu nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="ejemplo@correo.com"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Consulta</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="consulta"
            value={formData.consulta}
            onChange={handleChange}
            required
            placeholder="Escribe tu consulta aquí"
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Contact;