import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { useGlobalState } from "../context/Context";
import { getCategory, getProducts } from "../services/firebaseServices";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { loading, setLoading } = useGlobalState();
  const [list, setList] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchLista = () => (category ? getCategory(category) : getProducts());

    fetchLista().then((res) => {
      setList(res);
      setLoading(false);
    }).catch((err) => {
      console.error("Error al cargar productos:", err);
      setLoading(false);
    });
  }, [category, setLoading]);

  return (
    <div>
      <section className="container text-center mt-5">
        {loading ? "Cargando..." : <ItemList list={list} />}
      </section>
    </div>
  );
};

export default ItemListContainer;

