import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Producto from "./routes/Producto";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/producto">
        <Route path=":nombreProducto" element={<Producto />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
