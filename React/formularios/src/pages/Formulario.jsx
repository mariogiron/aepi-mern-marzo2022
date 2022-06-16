import { useForm } from "react-hook-form";

const Formulario = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const enviaFormulario = (data) => {
        console.log(data);
    }

    return <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(enviaFormulario)}>




            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text"
                    className="form-control"
                    {...register('nombre', {
                        required: { value: true, message: 'El campo nombre es obligatorio' },
                        minLength: { value: 4, message: 'El campo nombre debe tener 4 caracteres como mínimo' }
                    })}
                />
                {errors.nombre && <p className="text-danger">{errors.nombre.message}</p>}
            </div>





            <div className="mb-3">
                <label className="form-label">Apellidos</label>
                <input type="text"
                    className="form-control"
                    {...register('apellidos', {
                        required: true,
                        maxLength: 10
                    })}
                />
                {errors.apellidos && <p>El campo apellidos tiene errores</p>}
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="text"
                    className="form-control"
                    {...register('email', {
                        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    })}
                />
                {errors.email && <p>El campo email tiene errores</p>}
            </div>
            <div className="mb-3">
                <label className="form-label">DNI</label>
                <input type="text"
                    className="form-control"
                    {...register('dni')}
                />
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
}

export default Formulario;