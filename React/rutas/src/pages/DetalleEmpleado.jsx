import { useParams } from "react-router-dom";

const DetalleEmpleado = () => {

    const params = useParams();

    return <div>
        <h3>Detalle del empleado</h3>
        <p>Id del empleado: {params.empleadoId}</p>
    </div>
}

export default DetalleEmpleado;