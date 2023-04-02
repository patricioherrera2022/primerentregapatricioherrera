import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import './App.css';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Ropa Deportiva de alta calidad, comoda y con estilo!" />
    </>
  );
}

export default App;
