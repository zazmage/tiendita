import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Producto = () => {
  const { data } = useFetch("https://latiendita-app.herokuapp.com/productos");
  const [prodSelec, setProdSelec] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (data !== null) {
      setProdSelec(data.filter((el) => el.nombre === params.nombreProducto)[0]);
    }
  }, [data]);

  console.log(prodSelec);
  console.log(params.nombreProducto);
  return (
    <div>
      <h2>Soy un producto</h2>
      {prodSelec === null ? (
        <h3>Cargando...</h3>
      ) : (
        <div>
          <img src={prodSelec.imgUrl} alt={prodSelec.nombre} />
          <div>
            <h3>{prodSelec.nombre}</h3>
            <p>{prodSelec.precio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Producto;
