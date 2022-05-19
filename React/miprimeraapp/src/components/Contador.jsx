import { useState } from 'react';

const Contador = () => {

    const [cont, setCont] = useState(0);
    const [mensaje, setMensaje] = useState('');
    // La primera posición del array es el valor que estamos almacenando
    // La segunda posición del array es una función para modificar el valor

    const pulsarBoton = () => {
        console.log('Se ha pulsado el botón');
        setCont(cont + 1);
    }

    const cambiaTexto = (event) => {
        console.log(event.target.value);
        setMensaje(event.target.value);
    }

    return <div>
        <p>Contador: {cont}</p>
        <p>Mensaje: {mensaje}</p>
        <button onClick={pulsarBoton}>Pulsa!!</button>
        <input type="text" onChange={cambiaTexto} />
    </div>
}

export default Contador;