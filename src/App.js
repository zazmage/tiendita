import CartaProducto from "./components/CartaProducto";
import "./style/main.css"
import FormCrud from "./components/FormCrud";
import { useFetch } from "./hooks/useFetch";


function App() {
  const { data } = useFetch("https://latiendita-app.herokuapp.com/productos");

  return (
    <div>
      <img
        className="portada"
        src="https://res.cloudinary.com/gestionarchivos/image/upload/v1637331969/La%20tiendita/portada_pco03i.jpg"
        alt="Poster"
        
      />
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
