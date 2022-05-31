const Lista = ({ tareas, borraTarea }) => {

    return <div className="lista">
        {tareas.map((tarea, index) => (
            <div key={index}>
                <h3>{tarea.titulo}</h3>
                <p>{tarea.descripcion}</p>
                <p>{tarea.prioridad}</p>
                <button onClick={() => borraTarea(index)}>Borrar</button>
            </div>
        ))}
    </div>;
}

export default Lista;