import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import fetchData from "../services/fetchData";

const ItemListContainer = ({ mensaje }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData().then((res) => {
      console.log(res);
      setList(res);
    });
  }, []);
  const mapList = list.map((item) => {
    return (
      <div>
        <h3>{item.name}</h3>
      </div>
    );
  });
  return (
    <>
      <section className="container text-center mt-5">
        <h1>{mensaje}</h1>
        
        {list.map((item) => {
          return (
            <div key={item.id}>
              <h3 >{item.name}</h3>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ItemListContainer;
