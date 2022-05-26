import { useState } from "react";

const Formulario = () => {

    const [persona, setPersona] = useState({
        nombre: 'Mario',
        apellidos: 'Girón',
        edad: 31
    });

    const envioFormulario = (event) => {
        event.preventDefault();
        console.log(persona);
    }

    const modificarCampo = (event, campo) => {
        // setPersona({
        //     nombre: event.target.value,
        //     apellidos: persona.apellidos,
        //     edad: persona.edad
        // });

        // Copia del objeto persona
        // const personaCopia = { ...persona };
        // Modificamos la propiedad
        // personaCopia[campo] = event.target.value;
        // Asignamos la copia como nuevo valor persona
        // setPersona(personaCopia);

        setPersona({
            ...persona,
            [campo]: event.target.value
        });
    }

    const cambiarEdad = () => {
        setPersona({
            ...persona,
            edad: 45
        });
    }

    return <div>
        <p>Nombre: {persona.nombre}</p>
        <p>Apellidos: {persona.apellidos}</p>
        <p>Edad: {persona.edad}</p>
        <form onSubmit={envioFormulario}>
            <div>
                <label>Nombre</label>
                <input
                    type="text"
                    value={persona.nombre}
                    onChange={(event) => modificarCampo(event, 'nombre')}
                />
            </div>
            <div>
                <label>Apellidos</label>
                <input
                    type="text"
                    value={persona.apellidos}
                    onChange={(event) => modificarCampo(event, 'apellidos')}
                />
            </div>
            <div>
                <label>Edad</label>
                <input
                    type="text"
                    value={persona.edad}
                    onChange={(event) => modificarCampo(event, 'edad')}
                />
            </div>
            <input type="submit" value="Enviar" />
        </form>
        <button onClick={cambiarEdad}>Cambiar Edad</button>
    </div>

}

export default Formulario;