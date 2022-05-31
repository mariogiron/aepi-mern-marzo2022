import './App.css';
import { useState } from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

function App() {

  const [arrTareas, setArrTareas] = useState([]);

  const onCreaTarea = (nuevaTarea) => {
    // const arrTareasCopia = [...arrTareas];
    // arrTareasCopia.push(nuevaTarea);
    // setArrTareas(arrTareasCopia);

    setArrTareas([...arrTareas, nuevaTarea]);
  }

  const onBorraTarea = (index) => {
    console.log('Borramos la tarea ' + index);
  }

  return (
    <div className="App">
      <Formulario creaTarea={onCreaTarea} />
      <Lista tareas={arrTareas} borraTarea={onBorraTarea} />
    </div>
  );
}

export default App;


