import CartaProducto from "./components/CartaProducto";
import FormCrud from "./components/FormCrud";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data } = useFetch("https://latiendita-app.herokuapp.com/productos");
  console.log(data);
  return (
    <div>
      <img
        src="https://res.cloudinary.com/gestionarchivos/image/upload/v1637331969/La%20tiendita/portada_pco03i.jpg"
        alt="Poster"
        style={{ width: "100px" }}
      />
      <FormCrud />
      {data === null ? (
        <h3>Cargando...</h3>
      ) : (
        data.map((el) => <CartaProducto key={el.id} props={el} />)
      )}
    </div>
  );
}

export default App;
