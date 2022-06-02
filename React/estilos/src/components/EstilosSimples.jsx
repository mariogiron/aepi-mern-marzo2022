import { useState } from "react";

const EstilosSimples = () => {

    const [estilos, setEstilos] = useState({
        backgroundColor: 'dodgerblue',
        color: 'white'
    });

    const cambiaColor = (bgColor) => {
        // const estilosCopia = { ...estilos };
        // estilosCopia.backgroundColor = bgColor;
        // setEstilos(estilosCopia);

        setEstilos({ ...estilos, backgroundColor: bgColor });
    }

    const cambiaColorTexto = (event) => {
        setEstilos({ ...estilos, color: event.target.value });
    }

    const cambiaFuente = (event) => {
        setEstilos({ ...estilos, fontSize: `${event.target.value}px` });
    }

    return <div>
        <p style={estilos}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, repellat!
        </p>
        <div>
            <button onClick={() => cambiaColor('indigo')}>
                Indigo
            </button>
            <button onClick={() => cambiaColor('tomato')}>
                Tomato
            </button>
            <button onClick={() => cambiaColor('lightgreen')}>
                Lightgreen
            </button>
        </div>
        <div>
            <input type="text" onChange={cambiaColorTexto} />
        </div>
        <div>
            <input type="range" min="12" max="100" onChange={cambiaFuente} />
        </div>
    </div>;
}

export default EstilosSimples;