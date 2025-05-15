import React from 'react'
import { Link } from 'react-router';
import { useGlobalState } from '../context/Context'

const Cart = () => {

    const {cart, calcularTotal} = useGlobalState();
    
    
  return (
    <div>
        {cart.map((prod) => <div key={prod.id} className='card'>
            <h3>{prod.name}</h3>
            <h2>{prod.price}</h2>
            <h4>Cantidad: {prod.quantity}</h4>
            <h3>Subtotal: {prod.price * prod.quantity}</h3>
        </div>)}

        <h1>Total: {calcularTotal}</h1>
        <Link to= "/checkout">Finalizar Compra</Link>
        
    </div>
  )
}

export default Cart