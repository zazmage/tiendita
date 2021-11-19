import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Button, Form } from "react-bootstrap";
import CartaProducto from "../components/CartaProducto";
import '../style/producto.css'

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
      <Link to="/">
        <Button>Atras</Button>
      </Link>
      {prodSelec === null ? (
        <h3>Cargando...</h3>
      ) : (
        <div className="containerFull">
          <img className="imgProducto" src={prodSelec.imgUrl} alt={prodSelec.nombre} />
          <div className="descripContainer">
            <h3 className="textIco">{prodSelec.nombre}</h3>
            <p className="textIco">{prodSelec.precio}</p>
            <br/>
            <br/>
            <Form.Select>
              <option >Por elegir</option>
              <option value="1">Maduro (Para hoy)</option>
              <option value="2">Normal (3-5 días)</option>
              <option value="3">Verde (7 días)</option>
            </Form.Select>
            <Button className="addProducto" onClick={handleAgregar}>Agregar</Button>
          </div>
          <h3 className="relacionadosT">Productos relacionados</h3>
          <div className="relacionadosP">
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