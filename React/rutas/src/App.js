import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import About from './pages/About';
import DetalleEmpleado from './pages/DetalleEmpleado';
import Empleados from './pages/Empleados';
import Home from './pages/Home';
import Info from './pages/Info';
import Tareas from './pages/Tareas';

function App() {
  return (
    <div className="App">
      <h1>Título de la página</h1>
      <BrowserRouter>
        <Menu />
        <Routes>
          {/* aasdda */}
          <Route path="" element={<Home />} />
          <Route path="informacion" element={<Info />} />
          <Route path="sobre-mi" element={<About />} />
          <Route path="empleados" element={<Empleados />}>
            <Route index element={<h4>Cosas de los empleados</h4>} />
            <Route path="tareas" element={<Tareas />} />
            <Route path=":empleadoId" element={<DetalleEmpleado />} />
          </Route>
          {/* <Route path="empleados/:empleadoId" element={<DetalleEmpleado />} /> */}
          <Route path="*"
            element={<div>
              <h2>404 - No se encuentra la página</h2>
            </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Home, Info, About
// localhost:3000/sobre-mi -> About
// localhost:3000/empleados/3 -> Empleado3Component
// localhost:3000/empleados/4 -> Empleado4Component

// localhost:3000/empleados -> Empleados
// localhost:3000/empleados/tareas -> Tareas
// localhost:3000/empleados/3 -> DetalleEmpleado

export default App;

