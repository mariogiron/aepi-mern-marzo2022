import { useState } from "react";

const FormProducto = () => {

    const [producto, setProducto] = useState({});

    const cambiaCampo = (event, field) => {
        setProducto({
            ...producto, [field]: event.target.value
        });
    }

    const enviarProducto = (event) => {
        event.preventDefault();

        // Enviar los datos al server
        fetch('https://peticiones.online/api/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(producto)
        })
            .then(response => response.json())
            .then(data => console.log(data));

    }



    return <div>
        <form onSubmit={enviarProducto}>
            <div>
                <label>Nombre</label>
                <input type="text" onChange={(event) => cambiaCampo(event, 'name')} />
            </div>
            <div>
                <label>Descripción</label>
                <input type="text" onChange={(event) => cambiaCampo(event, 'description')} />
            </div>
            <div>
                <label>Precio</label>
                <input type="text" onChange={(event) => cambiaCampo(event, 'price')} />
            </div>
            <div>
                <label>Categoría</label>
                <input type="text" onChange={(event) => cambiaCampo(event, 'category')} />
            </div>
            <div>
                <label>Imagen</label>
                <input type="text" onChange={(event) => cambiaCampo(event, 'image')} />
            </div>
            <div>
                <label>Activo</label>
                <input type="text" onChange={(event) => cambiaCampo(event, 'active')} />
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>

    /**
     * 
     * "name": "Producto de prueba",
    "description": "Uno de los mejores productos del mercado",
    "price": "66",
    "category": "niño",
    "image": "https://peticiones.online/images/products/noexiste.png",
    "active": true
     */
}

export default FormProducto;