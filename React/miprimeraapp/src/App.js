import './App.css';
import Saludo from './components/Saludo';
import Despedida from './components/Despedida';
import Card from './components/Card';
import Card2 from './components/Card2';
import Contador from './components/Contador';

function App() {

  const personas = [
    { nombre: 'Raul', apellidos: 'Gómez', email: 'raulin@gmail.com', telefono: '23123' },
    { nombre: 'Marina', apellidos: 'Romero', email: 'marini@gmail.com', telefono: '099010' }
  ]

  return (
    <div className="App">
      <h1>Hola React!!</h1>
      <Saludo nombre="Lorena"></Saludo>
      <Saludo nombre="Arturo" />
      <Despedida nombre="Ana" />

      <Card nombre="Inés" apellidos="García" email="ines@gmail.com" telefono="89981921" />

      <Card2 contacto={personas[0]} />
      <Card2 contacto={personas[1]} />

      <Contador />
    </div>
  );
}

export default App;



