import React from "react";
import "../style/main.css"
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartaProducto = ({ props: { nombre, precio, imgUrl } }) => {
  return (
    <div >
      <Card className="cont-card">
        <Card.Img className="img-fruta" variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{precio}</Card.Text>

          <Link to={`/producto/${nombre}`}>
            <Button variant="primary">Ver producto</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartaProducto;
