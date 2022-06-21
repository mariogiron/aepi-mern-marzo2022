import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Formulario from './pages/Formulario';
import { mensajeContext } from './contexts/MensajeProvider';
import { contactosContext, newContactoContext } from './contexts/ContactosProvider';
import { useState } from 'react';
import Menu from './components/Menu';

function App() {

  const [contactos, setContactos] = useState([
    { nombre: 'Rosa', apellidos: 'Gómez', email: 'rosi@gmail.com', dni: '8888888Y' }
  ]);

  const agregarContacto = (nuevoContacto) => {
    // const contactosCopia = [...contactos];
    // contactosCopia.push(nuevoContacto);
    // setContactos(contactosCopia);
    console.log('Ejecuta función', nuevoContacto);
    setContactos([...contactos, nuevoContacto]);
  }

  return (
    <contactosContext.Provider value={contactos}>
      <newContactoContext.Provider value={agregarContacto}>
        <div className="App">
          <div className="container">
            <BrowserRouter>
              <Menu />
              <Routes>
                <Route path='' element={<Home />} />
                <Route path='registro' element={<Formulario />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </newContactoContext.Provider>
    </contactosContext.Provider>
  );
}

export default App;
