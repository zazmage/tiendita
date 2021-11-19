import React from "react";
import "../style/main.css";
import { Form, Col, Row, Button } from "react-bootstrap";

const FormCrud = ({ form, setForm }) => {
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
    if (form.id === "") {
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
    } else {
      try {
        let options = {
          method: "PUT",
          headers: {
            "content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            nombre: form.nombre,
            categoria: form.categoria,
            precio: form.precio,
            imgUrl: form.imgUrl,
          }),
        };
        const res = await fetch(`${url}/${form.id}`, options);
        
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

  return (
    <div className="cont-formulario">
      <Button className="mainmenubtn" variant="danger" type="button">Agregar producto</Button>
      <Form className="form-cont">
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
          <Form.Label column sm={2}>
            Nombre
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              value={form.nombre}
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
              value={form.categoria}
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
              value={form.precio}
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
              value={form.imgUrl}
              onChange={handleChange}
              type="Text"
              name="imgUrl"
              placeholder="Url de la imágen"
            />
          </Col>
        </Form.Group>

        <Form.Control
          value={form.id}
          onChange={handleChange}
          type="Text"
          name="id"
          hidden
        />

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
