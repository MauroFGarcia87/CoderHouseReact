import React from "react";

const ItemListContainer = (props) => {
  return (
    <>
        <section className="container text-center mt-5">
            <h1>{props.mensaje}</h1>
        </section>
      
    </>
  );
};

export default ItemListContainer;
