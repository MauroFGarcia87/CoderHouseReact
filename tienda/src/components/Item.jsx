import React from 'react'
import {Card, CardBody, CardSubtitle, CardTitle } from 'react-bootstrap'
import { Link } from 'react-router'


const Item = ({item}) => {
  return (
    <div className='col-md-4 mb-4'>
      <Card>
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <CardSubtitle>{item.price}</CardSubtitle>
        
          <Link to={'/item/'+item.id }>Ver Detalle</Link>
        </CardBody>
      </Card>
        
          
        
    </div>
  )
}

export default Item