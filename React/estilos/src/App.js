import logo from './logo.svg';
import './App.css';
import EstilosSimples from './components/EstilosSimples';
import ComponentesEstilizados from './components/ComponentesEstilizados';

import contactos from './contactos.json';
import ProfileCard from './components/ProfileCard/ProfileCard';
import FlexSection from './components/ui/FlexSection';

function App() {
  return (
    <div className="App">
      {/* <EstilosSimples /> */}
      {/* <ComponentesEstilizados /> */}
      <FlexSection gap="20" direction="row">
        {contactos.map(con => (
          <ProfileCard contacto={con} />
        ))}
      </FlexSection>
    </div>
  );
}

export default App;
