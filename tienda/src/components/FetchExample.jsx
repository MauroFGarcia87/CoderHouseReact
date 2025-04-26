import React, { useState } from "react";
import { useEffect } from "react";

const FetchExample = () => {
  const url = "https://restcountries.com/v3.1/all";
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPaises(data);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Paises</h2>
      {paises.map((pais) => (
        <div key={pais.cca3} style={{ marginBottom: "20px" }}>
          <h3>{pais.name.common}</h3>
          <img
            src={pais.flags.png}
            alt={`Bandera de ${pais.name.common}`}
            width="150"
          />
        </div>
      ))}
    </div>
  );
};

export default FetchExample;
