import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Formulario from './pages/Formulario';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='registro' element={<Formulario />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
