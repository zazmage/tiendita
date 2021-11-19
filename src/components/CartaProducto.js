import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartaProducto = ({ props: { nombre, precio, imgUrl } }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgUrl} />
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
