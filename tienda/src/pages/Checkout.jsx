import React from "react";
import { useState } from "react";
import { createOrder } from "../services/firebaseServices";
import { useGlobalState } from "../context/Context";
import Swal from 'sweetalert2';
import { Form, Button, Container } from 'react-bootstrap'

const Checkout = () => {

    const {calcularTotal, cart} = useGlobalState();
   

  const [user, setUser] = useState({
    name: "Mauro",
    email: "mauro@gmail.com",
    telefono: "222233354"
    
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let newOrder = {
        buyer: user,
        total: calcularTotal,
        items: cart,
        date: new Date()
    }

    //llamar al servicio de crear orden

    // mando la info de user + card

    createOrder(newOrder).then((res) => {
        console.log(res);
        Swal.fire({
          title: "Compra finalizada!",
          text: `Tu orden de compra es: ${res.id}`,
          icon: "success"
        });
    }).catch((err) => {
        console.log(err)
        
    })
  }; 
  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="nombre" placeholder="Ingrese su nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Ingrese su email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" name="telefono" placeholder="Ingrese su teléfono" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDomicilio">
          <Form.Label>Domicilio</Form.Label>
          <Form.Control type="text" name="domicilio" placeholder="Ingrese su domicilio" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFechaNacimiento">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control type="date" name="fechaNacimiento" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Checkout;
