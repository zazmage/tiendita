import React from "react";
import "../style/main.css";
import { Card, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const CartaProducto = ({
  props: { nombre, precio, imgUrl, categoria, id },
  form,
  setForm,
}) => {
  const handleEditar = () => {
    setForm({
      nombre,
      categoria,
      precio,
      imgUrl,
      id,
    });
  };

  const url = "https://latiendita-app.herokuapp.com/productos";

  const handleDelete = async (e) => {
    e.preventDefault();
    const desicion = window.confirm("Desea eliminar este producto?");
    if (desicion) {
      try {
        let options = {
          method: "DELETE",
          headers: {
            "content-type": "application/json; charset=utf-8",
          },
        };
        console.log(id);
        const res = await fetch(`${url}/${id}`, options);

        if (!res.ok)
          throw new Error("Algo sucedió", {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          });
        document.location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        console.log(`Error ${err.status}: ${message}`);
      }
    }
  };

  const location = useLocation();

  return (
    <div>
      <Card className="cont-card">
        <Card.Img className="img-fruta" variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{precio}</Card.Text>

          <Link to={`/producto/${nombre}`}>
            <Button className="btn-card" variant="primary">Ver producto</Button>
          </Link>
          {location.pathname === "/" ? (
            <Button className="btn-card" onClick={handleEditar} variant="warning">
              Editar
            </Button>
          ) : (
            <></>
          )}

          <Button className="btn-card" onClick={handleDelete} variant="danger">
            Eliminar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartaProducto;
