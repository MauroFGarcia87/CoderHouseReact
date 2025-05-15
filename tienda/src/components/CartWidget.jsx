import React from 'react'
import logo1 from "../assets/carrito-de-compras.png";
import { Link } from 'react-router';
import { useGlobalState } from '../context/Context';

const CartWidget = () => {
  const {calcularItems} = useGlobalState();
  return (
      <>
        <Link to='/cart'>
          <img
                  src={logo1}
                  alt="Carrito de Compra"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />{" "}
          <span>{calcularItems}</span>
        </Link>
        
      
        
      </>
    
  )
}

export default CartWidget