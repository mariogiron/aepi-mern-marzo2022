const persona = {
    nombre: 'Laura',
    apellidos: 'García',
    edad: 39,
    avatar: 'https://randomuser.me/api/portraits/men/27.jpg'
}

// const element = <h1>Hola {persona.nombre} {persona.apellidos}!</h1>;

function nombreCompleto(pPersona) {
    return pPersona.nombre + ' ' + pPersona.apellidos;
}

// Función saludar que recibe como param pPersona
// Si pPersona viene definida, llamamos a la función nombreCompleto
// Si no viene definida, mostramos un mensaje con el error
function saludar(pPersona) {
    if (pPersona) {
        return <h1>Hola {nombreCompleto(pPersona)}</h1>;
    } else {
        return <h1>Hola persona anónima</h1>;
    }
}

// const element = saludar(persona);

const estilos = {
    backgroundColor: 'red',
    color: 'dodgerblue'
}

const imgOptions = {
    src: 'https://randomuser.me/api/portraits/men/27.jpg',
    className: 'imagen',
    width: 500
}

const element = <div>
    <h2>Título de la página</h2>
    <p id="parrafoPrincipal" className="rojo">Esto es un párrafo</p>
    {/* Comentario dentro de JSX */}
    <p style={estilos}>Otro párrafo</p>
    <p style={{
        backgroundColor: 'lightgreen',
        fontSize: '24px'
    }}>Tercer párrafo</p>
    {/* <img src={persona.avatar}></img> */}
    <img {...imgOptions}></img>
</div>;


// const element2 = <div><h1 className="titulo">Hola React</h1></div>;
const element2 = React.createElement('div', {}, React.createElement('h1', { className: 'titulo' }, 'Hola React'));


// ReactDOM.render(element, document.getElementById('root'));
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element);





