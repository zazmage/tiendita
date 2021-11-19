import CartaProducto from "./components/CartaProducto";
import "./style/main.css";
import FormCrud from "./components/FormCrud";
import { useFetch } from "./hooks/useFetch";
import React, { useState, useEffect } from "react";

function App() {
  const { data } = useFetch("https://latiendita-app.herokuapp.com/productos");
  const [form, setForm] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    imgUrl: "",
    id: "",
  });

  return (
    <div>
      <img
        className="portada"
        src="https://res.cloudinary.com/gestionarchivos/image/upload/v1637331969/La%20tiendita/portada_pco03i.jpg"
        alt="Poster"
      />
      <FormCrud form={form} setForm={setForm} />
      <div className="contproducto">
        {data === null ? (
          <h3>Cargando...</h3>
        ) : (
          data.map((el) => (
            <CartaProducto
              form={form}
              setForm={setForm}
              key={el.id}
              props={el}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
