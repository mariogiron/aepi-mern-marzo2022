import { Outlet } from "react-router-dom";

const Empleados = () => {

    return <div>
        <h3>Página para los empleados</h3>
        <Outlet />
    </div>;
}

export default Empleados;