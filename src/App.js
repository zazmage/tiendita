import CartaProducto from "./components/CartaProducto";
import "./style/main.css";
import FormCrud from "./components/FormCrud";
import { useFetch } from "./hooks/useFetch";
import React, { useState } from "react";

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
  <div className="main">
    <h1 className="title">Tiendita uwu</h1>  
    <div className="contportada">
      <img
        className="portada"
        src="https://res.cloudinary.com/gestionarchivos/image/upload/v1637343094/La%20tiendita/Banner_ap7xdy.png"
        alt="Poster"
      />
     </div>
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
