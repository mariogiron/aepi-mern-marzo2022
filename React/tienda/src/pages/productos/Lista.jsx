import classes from './Lista.module.css';

import { useEffect, useState } from "react";

const Lista = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Petición GET https://aepi.ngrok.io/api/products
        fetch('https://aepi.ngrok.io/api/products')
            // Recibe la respuesta del server
            .then(response => response.json())
            .then(json => setProductos(json));
    }, []);

    const borraProducto = async (idProducto) => {
        // DELETE /api/productos/IDPRODUCTO
        await fetch(`https://aepi.ngrok.io/api/products/${idProducto}`, {
            method: 'DELETE'
        });

        // GET /api/productos
        const response = await fetch('https://aepi.ngrok.io/api/products');
        const json = await response.json();
        setProductos(json);
    }

    return <div>
        <h2>Lista de productos</h2>
        <div className={classes.productos}>
            {productos.map(producto => (
                <div className={classes.producto} key={producto._id}>
                    <h4>{producto.name}</h4>
                    <p>{producto.descripcion}</p>
                    <p>Precio: {producto.price}€</p>
                    <p>Stock: {producto.stock}</p>
                    <button onClick={() => borraProducto(producto._id)}>Borrar</button>
                </div>
            ))}
        </div>
    </div>
}

export default Lista;