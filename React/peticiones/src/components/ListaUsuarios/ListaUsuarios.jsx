import axios from 'axios';
import React, { useEffect, useState } from 'react';

import classes from './ListaUsuarios.module.css';

const ListaUsuarios = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data: { data } } = await axios.get('https://peticiones.online/api/users');
            setUsers(data);
        }
        fetchData();
    }, []);

    const creaUsuario = async () => {
        const newUser = {
            first_name: 'Laura',
            last_name: 'Robles',
            username: 'laurita',
            email: 'lau@gmail.com',
            password: '12345'
        }
        const { data } = await axios.post('https://peticiones.online/api/users', newUser)
        console.log(data);
    }

    // TODO: Dar estilos a la lista

    return <>
        <button onClick={creaUsuario}>Crear nuevo usuario</button>
        <div className={classes.usuarios}>
            {users.map(user => (
                <div className={classes.usuario}>
                    <h3>{user.first_name} {user.last_name}</h3>
                    <p>{user.username}</p>
                    {/* <p>{user.email}</p> */}
                    <img src={user.image} alt="" />
                </div>
            ))}
        </div>
    </>;
}

export default ListaUsuarios;

