import { useState } from "react";

const Formulario = ({ creaTarea }) => {

    const [nuevaTarea, setNuevaTarea] = useState({});

    const cambiaTexto = (event, campo) => {
        // const nuevaTareaCopia = { ...nuevaTarea };
        // nuevaTareaCopia[campo] = event.target.value;
        // setNuevaTarea(nuevaTareaCopia);

        setNuevaTarea({
            ...nuevaTarea,
            [campo]: event.target.value
        });
    }

    const envioFormulario = (event) => {
        event.preventDefault();

        creaTarea(nuevaTarea);
    }

    return <div className="formulario">
        <form onSubmit={envioFormulario}>
            <div>
                <label>Título</label>
                <input type="text" onChange={(event) => {
                    cambiaTexto(event, 'titulo')
                }} />
            </div>
            <div>
                <label>Descripción</label>
                <input type="text" onChange={(event) => {
                    cambiaTexto(event, 'descripcion');
                }} />
            </div>
            <div>
                <label>Prioridad</label>
                <input type="text" onChange={(event) => {
                    cambiaTexto(event, 'prioridad');
                }} />
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>

}

export default Formulario;