import React, { useState, useEffect } from "react";
import "../style/main.css"
import { Form, Col, Row, Button } from "react-bootstrap";

const FormCrud = () => {
  const [form, setForm] = useState({});
  const url = "https://latiendita-app.herokuapp.com/productos";
  /* useEffect(() => {
    const postData = async (url, posting) => {
      if (posting !== null) {
        try {
          const options = {
              method: "POST",
              headers: {
                "content-type": "application/json; charset=utf-8",
              },
              body: JSON.stringify(posting),
            },
            res = await fetch(url, options);
          if (!res.ok)
            throw new Error("Algo sucedió", {
              err: true,
              status: res.status,
              statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
            });
        } catch (err) {
          console.log(err);
        }
      }
    };
    postData(url, posting);
  }, [posting]); */

  const handleChange = (e) => {
    //console.log(form);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      form.nombre !== undefined &&
      form.categoria !== undefined &&
      form.precio !== undefined &&
      form.imgUrl !== undefined
    ) {
      try {
        const options = {
            method: "POST",
            headers: {
              "content-type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              nombre: form.nombre,
              categoria: form.categoria,
              precio: form.precio,
              imgUrl: form.imgUrl,
            }),
          },
          res = await fetch(url, options);
        if (!res.ok)
          throw new Error("Algo sucedió", {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          });
        document.location.reload();
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("faltan datos");
    }
  };

  return (
    <div className="cont-formulario">
      <h3>Agregar prooducto</h3>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
          <Form.Label column sm={2}>
            Nombre
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="nombre"
              placeholder="Nombre"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
          <Form.Label column sm={2}>
            Categoría
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              onChange={handleChange}
              type="Text"
              name="categoria"
              placeholder="Categoría"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
          <Form.Label column sm={2}>
            Precio
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              onChange={handleChange}
              type="Text"
              name="precio"
              placeholder="Precio"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
          <Form.Label column sm={2}>
            Url de la imágen
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              onChange={handleChange}
              type="Text"
              name="imgUrl"
              placeholder="Url de la imágen"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button onClick={handleSubmit} type="submit">
              Enviar
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormCrud;
