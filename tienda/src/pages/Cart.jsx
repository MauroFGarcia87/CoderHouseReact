import React from 'react'
import { Link } from 'react-router';
import { useGlobalState } from '../context/Context'
import { Card, Button, Container } from 'react-bootstrap';


const Cart = () => {

    const {cart, calcularTotal} = useGlobalState();
    
    
  return (
    <div className='container'>
        {cart.map((prod) => 
        <Card style={{ width: '18rem' }} key={prod.id} className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Precio: $ {prod.price}</Card.Subtitle>
          <Card.Text>
            <strong>Cantidad:</strong> {prod.quantity}
            <br />
            <strong>Subtotal:</strong>$ {prod.price * prod.quantity}
          </Card.Text>
        </Card.Body>
      </Card>)}

      <Card className="p-3 text-center mt-4 shadow">
        <h2>Total:$ {calcularTotal}</h2>
        <Link to="/checkout">
          <Button variant="primary" className="mt-3">
            Finalizar Compra
          </Button>
        </Link>
      </Card>
        
    </div>
  )
}

export default Cart