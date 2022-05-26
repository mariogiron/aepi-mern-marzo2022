import { useState } from "react";

const Condicionales = () => {

    const [mostrar, setMostrar] = useState(true);

    let contenido = null;
    if (mostrar) {
        contenido = <p>Contenido desde condicional exterior</p>;
    }

    return <div>
        {contenido}
        <p>{mostrar.toString()}</p>
        {mostrar ?
            <p>Opción 1</p>
            :
            <p>Opción 2</p>
        }
        {!mostrar &&
            <p>Párrafo con el condicional 3</p>
        }
        <button onClick={() => setMostrar(!mostrar)}>
            {mostrar ? 'Ocultar' : 'Mostrar'}
        </button>
    </div>
}

export default Condicionales;