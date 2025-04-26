import React from 'react'
import { Link } from 'react-router'

const Item = ({item}) => {
  return (
    <div >
        <div >
          <h3>{item.name}</h3>
          <h4>Precio {item.price}</h4>
          <Link to={'/item/'+item.id }>Ver Detalle</Link>
        </div>
    </div>
  )
}

export default Item