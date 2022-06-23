import { useForm } from "react-hook-form";

const Formulario = () => {

    const { register, handleSubmit } = useForm();

    const creaProducto = (data) => {
        fetch('https://aepi.ngrok.io/api/products', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(json => console.log(json));
    }

    return <div>
        <h2>Nuevo producto</h2>
        <form onSubmit={handleSubmit(creaProducto)}>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('name')} />
            </div>
            <div>
                <label>Descripción</label>
                <input type="text" {...register('description')} />
            </div>
            <div>
                <label>Precio</label>
                <input type="text" {...register('price')} />
            </div>
            <div>
                <label>Stock</label>
                <input type="text" {...register('stock')} />
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
}

export default Formulario;