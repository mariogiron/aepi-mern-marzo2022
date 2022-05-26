import { useState } from "react";

const Bucles = () => {

    const [contactos, setContactos] = useState([
        { nombre: 'Pedro', apellidos: 'Rodríguez', email: 'pedro@mail.com' },
        { nombre: 'Rosa', apellidos: 'Gómez', email: 'rosa@mail.com' },
        { nombre: 'Lorenzo', apellidos: 'López', email: 'lorenzo@mail.com' },
        { nombre: 'Lucía', apellidos: 'García', email: 'lucia@mail.com' },
    ]);

    // const arr = [];
    // for (let contacto of contactos) {
    //     arr.push(<p>{contacto.nombre} {contacto.apellidos}</p>);
    // }

    const addContact = () => {
        // NO SE DEBE HACER!!!!
        // contactos.push({ nombre: 'Rosita', apellidos: 'Rodríguez', email: 'rosi@gmail.com' })

        // NO SE DBE HACER!!!!!
        // setContactos([{ nombre: 'Rosita', apellidos: 'Rodríguez', email: 'rosi@gmail.com' }])

        // SÍ SE DEBE HACER
        // const contactosCopia = [...contactos];
        // contactosCopia.push({ nombre: 'Rosita', apellidos: 'Rodríguez', email: 'rosi@gmail.com' });
        // setContactos(contactosCopia);

        // SÍ SE DEBE HACER
        setContactos([
            ...contactos,
            { nombre: 'Rosita', apellidos: 'Rodríguez', email: 'rosi@gmail.com' }
        ]);
    }

    return <div>
        {/* {arr} */}
        <button onClick={addContact}>Inserta nuevo contacto</button>
        {contactos.map((contacto) => {
            return <p key={contacto.email}>{contacto.nombre} {contacto.apellidos}</p>
        })}
    </div>;

}

export default Bucles;