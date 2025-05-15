import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Counters from "../components/Counters";
import { useGlobalState } from "../context/Context";
import { fetchDataById } from "../services/fetchData";
import { getProducById } from "../services/firebaseServices";

const ItemDetailCotainer = () => {
  const [detail, setDetail] = useState({});
  const [counter, setCounter] = useState(0);
  const { cart, setCart, loading, setLoading } = useGlobalState();

  const params = useParams();

  useEffect(() => {
    setLoading(true);
    getProducById(params.id).then((res) => {     
      
      setDetail(res);
      setLoading(false);
    });
  }, []);

  const addCart = () => {
    setCart([...cart, { ...detail, quantity: counter }]);
  };

  return (
    <div>
      {loading ? (
        "Cargando lista"
      ) : (
        <>
          <h2>Nombre {detail.name}</h2>
          <p>Descripcion {detail.description}</p>
          <h3>{detail.cantidad}</h3>
          <Counters
            cantidad={detail.cantidad}
            counter={counter}
            setCounter={setCounter}
          />
          <button onClick={addCart} disabled={counter == 0}>
            Agregar al carrito 🛒
          </button>
        </>
      )}
    </div>
  );
};

export default ItemDetailCotainer;
