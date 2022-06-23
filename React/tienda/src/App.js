import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lista from './pages/productos/Lista';
import Home from './pages/productos/Home';
import Formulario from './pages/productos/Formulario';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='productos' element={<Home />} >
            <Route path='' element={<Lista />} />
            <Route path='new' element={<Formulario />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/**
 * 
 * /productos
 * /productos/new 
 * 
 */