import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import {fetchDataById} from '../services/fetchData'

const ItemDetailCotainer = () => {

    const [detail, setDetail] = useState({});
    const params = useParams();
    console.log(params);

    useEffect(() =>{
        fetchDataById(params.id).then(res => {
            console.log(res)
            setDetail(res);
    })
    },[]);

    

  return (
    <div>
        <h2>Nombre {detail.name}</h2>
        <p>Descripcion {detail.description}</p>
    </div>
  )
}

export default ItemDetailCotainer