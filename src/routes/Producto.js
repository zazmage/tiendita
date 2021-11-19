import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Button } from "react-bootstrap";
import CartaProducto from "../components/CartaProducto";

const Producto = () => {
  const { data } = useFetch("https://latiendita-app.herokuapp.com/productos");
  const [prodSelec, setProdSelec] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (data !== null) {
      setProdSelec(data.filter((el) => el.nombre === params.nombreProducto)[0]);
    }
  }, [data, params.nombreProducto]);

  const handleAgregar = () => {
    if (localStorage.getItem("carrito")) {
      const previousStorage = JSON.parse(localStorage.getItem("carrito"));
      previousStorage.push(prodSelec);
      localStorage.setItem("carrito", JSON.stringify(previousStorage));
    } else {
      localStorage.setItem("carrito", JSON.stringify([prodSelec]));
    }
  };

  return (
    <div>
      <h2>Soy un producto</h2>
      <Link to="/">
        <Button>Atras</Button>
      </Link>
      {prodSelec === null ? (
        <h3>Cargando...</h3>
      ) : (
        <div>
          <img src={prodSelec.imgUrl} alt={prodSelec.nombre} />
          <div>
            <h3>{prodSelec.nombre}</h3>
            <p>{prodSelec.precio}</p>
            <Button onClick={handleAgregar}>Agregar</Button>
          </div>
          <div>
            <h3>Productos relacionados</h3>
            {data
              .filter((el) => el.categoria === prodSelec.categoria)
              .map((el) => (
                <CartaProducto key={el.id} props={el} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Producto;
