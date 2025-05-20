import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
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
    <div className="container justify-content-center">
      {loading ? (
        "Cargando lista"
      ) : (
        <>
          <Card  className="d-flex flex-column align-items-center justify-content-center text-center">
            <CardBody>
              <CardTitle>Nombre {detail.name}</CardTitle>
              <CardText> Descripcion {detail.description}</CardText>
            </CardBody>
            <h4> Stock {detail.cantidad}</h4>
            <Counters
              cantidad={detail.cantidad}
              counter={counter}
              setCounter={setCounter}
            />
            <button className="mt-5" onClick={addCart} disabled={counter == 0}>
              Agregar al carrito 🛒
            </button>
          </Card>
          
        </>
      )}
    </div>
  );
};

export default ItemDetailCotainer;
