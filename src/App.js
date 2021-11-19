import CartaProducto from "./components/CartaProducto";
import "./style/main.css"
import FormCrud from "./components/FormCrud";
import { useFetch } from "./hooks/useFetch";


function App() {
  const { data } = useFetch("https://latiendita-app.herokuapp.com/productos");

  return (
  <div>
    <h1 className="title">Tiendita uwu</h1>  
    <div className="contportada">
      <img
        className="portada"
        src="https://res.cloudinary.com/gestionarchivos/image/upload/v1637343094/La%20tiendita/Banner_ap7xdy.png"
        alt="Poster"
      />
     </div>  
      <FormCrud />
      <div className="contproducto">
      {data === null ? (
        <h3>Cargando...</h3>
      ) : (
        data.map((el) => <CartaProducto key={el.id} props={el}/>)
      )}
    </div>
  </div>
  );
}

export default App;
