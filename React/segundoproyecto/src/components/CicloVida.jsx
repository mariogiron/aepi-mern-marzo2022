import { useState, useEffect } from "react";

const CicloVida = () => {

    const [mensaje, setMensaje] = useState('');
    const [cont, setCont] = useState(0);

    // La función recibida como parámetro se ejecuta automáticamente después de cada render del componente
    useEffect(() => {
        console.log('Después del renderizado provocado por el mensaje');
    }, [mensaje]);

    useEffect(() => {
        console.log('Después del render provocado por el cont')
    }, [cont]);

    useEffect(() => {
        console.log('Después del render provocado o por el mensaje o por el cont');
    }, [mensaje, cont]);

    useEffect(() => {
        console.log('useEffect inicial');
    }, []);

    return <div>
        <p>{mensaje}</p>
        <p>{cont}</p>
        <input
            type="text"
            onChange={(event) => setMensaje(event.target.value)}
        />
        <button onClick={() => setCont(cont + 1)}>Cambia Texto</button>
    </div>
}

export default CicloVida;