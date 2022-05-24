import './App.css';
import Botones from './components/Botones';
import Contador from './components/Contador';
import Formulario from './components/Formulario';

function App() {

  const onContadorEn10 = (pBool) => {
    console.log(pBool)
    console.log('El contador ha llegado a 10');
  }

  return (
    <div className="App">
      {/* <Botones /> */}
      {/* <Contador contadorEn10={onContadorEn10} /> */}
      <Formulario />
    </div>
  );
}

export default App;
