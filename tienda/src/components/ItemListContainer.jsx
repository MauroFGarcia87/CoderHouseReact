import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {fetchData} from "../services/fetchData";
import FetchExample from "./FetchExample";
import ItemList from "./ItemList";
import { useParams } from 'react-router'

const ItemListContainer = ({ mensaje }) => {
  const [list, setList] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetchData() // Esta función debería devolver tu array de productos con la propiedad "categoria"
      .then(data => {
        if (category) {
          const filteredItems = data.filter(item => item.categoria.toLowerCase() === category.toLowerCase());
          setList(filteredItems);
        } else {
          setList(data); // Si no hay categoría, muestra todos los productos
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        // Aquí podrías mostrar un mensaje de error al usuario
      });
  }, [category]); // El efecto se re-ejecuta cuando cambia la categoría

  const mapList = list.map((item) => {
    return (
      <div>
        <h3>name: {item.name}</h3>
      </div>
    );
  });

  return (
    <div>
      <section className="container text-center mt-5">
        <h1>{mensaje}</h1>
        <ItemList list={list} /> 
        
      </section>
      
    </div>
  );
};

export default ItemListContainer;
