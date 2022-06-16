import { Outlet, useNavigate } from "react-router-dom";

const Empleados = () => {

    const navigate = useNavigate();

    const cambiaRuta = (ruta) => {
        navigate(ruta);
    }

    return <div>
        <h3>Página para los empleados</h3>
        <div>

            <button onClick={() => cambiaRuta('/empleados/tareas')}>
                Tareas
            </button>

            <button onClick={() => {
                cambiaRuta('/empleados/3');
            }}>Empleado 3</button>

        </div>
        <Outlet />
    </div>;
}

export default Empleados;