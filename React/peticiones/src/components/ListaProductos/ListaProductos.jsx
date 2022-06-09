import { useState, useEffect } from 'react';
import classes from './ListaProductos.module.css';

const ListaProductos = () => {

    // Quiero recuperar un array con una serie de productos, ¿herramienta? axios, got, fetch
    // Esos productos quiero mostrarlos dentro del componente -> useState
    // La recuperación de los productos la tengo que hacer cuando el componente arranque -> useEffect

    const [productos, setProductos] = useState([]);
    const [pagina, setPagina] = useState(1);








    useEffect(() => {
        fetch('https://peticiones.online/api/products?page=' + pagina)
            .then(result => result.json())
            .then(data => {
                setProductos(data.results);
            })
            .catch(error => console.log(error));
    }, [pagina]);











    return <div className={classes.productos}>
        <div>
            <p>Página {pagina}</p>
            <button onClick={() => setPagina(pagina - 1)}>Anterior</button>
            <button onClick={() => setPagina(pagina + 1)}>Siguiente</button>
        </div>
        {productos.map(producto => (
            <div className={classes.producto}>
                <h3>{producto.name}</h3>
                <img src={producto.image} />
                <p>Precio: {producto.price}</p>
                <p>Categoría: {producto.category}</p>
            </div>
        ))}
    </div>;

}

export default ListaProductos;