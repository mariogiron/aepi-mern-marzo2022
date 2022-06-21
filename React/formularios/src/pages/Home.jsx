import { mensajeContext } from '../contexts/MensajeProvider';
import { contactosContext } from '../contexts/ContactosProvider';
import { useContext } from 'react';

const Home = () => {

    const contactos = useContext(contactosContext);

    const pulsaBoton = () => {
        return (event) => {

        }
    }

    return <div>
        <h2>Home</h2>
        <button onClick={pulsaBoton()}>CLICK</button>
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Email</th>
                    <th>DNI</th>
                </tr>
            </thead>
            <tbody>
                {contactos.map((contacto, index) => (
                    <tr key={index}>
                        <td>{contacto.nombre}</td>
                        <td>{contacto.apellidos}</td>
                        <td>{contacto.email}</td>
                        <td>{contacto.dni}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default Home;