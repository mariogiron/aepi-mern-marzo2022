import logo from './logo.svg';
import './App.css';
import ListaProductos from './components/ListaProductos/ListaProductos';
import FormProducto from './components/FormProducto/FormProducto';
import ListaUsuarios from './components/ListaUsuarios/ListaUsuarios';

function App() {
  return (
    <div className="App">
      {/* <FormProducto />
      <ListaProductos /> */}
      <ListaUsuarios />
    </div>
  );
}

export default App;
