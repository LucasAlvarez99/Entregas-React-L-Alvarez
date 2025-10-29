import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a impío a las puertas del Olimpo!" />
    </>
  );
}

export default App;
