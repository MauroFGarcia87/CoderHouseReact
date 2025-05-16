import React from "react";
import { useState } from "react";
import { createOrder } from "../services/firebaseServices";
import { useGlobalState } from "../context/Context";
import Swal from 'sweetalert2';
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    const {calcularTotal, cart, vaciarCarrito, calcularItems} = useGlobalState();
    const navigate = useNavigate(); // Hook para redirección
   
    console.log(calcularTotal);
  const [user, setUser] = useState({
    name: "",
    email: "",
    telefono: ""
    
  });
  console.log(user)
  function handleChange(e){
    
    setUser({...user,[e.target.name]: e.target.value});
    console.log(e.target.value)
  }

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
        }).then(() =>{
            vaciarCarrito;
            calcularItems;
            console.log(calcularItems);
            navigate("/"); 
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
          <Form.Control type="text" name="name" onChange={handleChange} placeholder="Ingrese su nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name="email" onChange={handleChange} placeholder="Ingrese su email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" name="telefono" onChange={handleChange} placeholder="Ingrese su teléfono" />
        </Form.Group>

        

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Checkout;
