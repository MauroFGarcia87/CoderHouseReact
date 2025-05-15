import React from "react";
import { useState } from "react";
import { createOrder } from "../services/firebaseServices";
import { useGlobalState } from "../context/Context";
import Swal from 'sweetalert2';

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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Telefono</label>
        <input type="text" />
        <label htmlFor="">Domicilio</label>
        <input type="text" />
        <label htmlFor="">Fecha de nacimiento</label>
        <input type="text" />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
