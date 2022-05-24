import { useState } from "react";


const Contador = ({ contadorEn10 }) => {

    const [cont, setCont] = useState(0);

    if (cont === 10) {
        contadorEn10(true);
    }

    return <div>
        <p>Contador: {cont}</p>
        <button onClick={() => setCont(cont + 1)}>Incrementar</button>
    </div>

}

export default Contador;