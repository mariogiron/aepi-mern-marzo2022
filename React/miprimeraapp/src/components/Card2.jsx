const Card2 = ({ contacto }) => {
    return <div className="card">
        <h3>{contacto.nombre} {contacto.apellidos}</h3>
        <p>Email: {contacto.email}</p>
        <p>Teléfono: {contacto.telefono}</p>
    </div>;
}

export default Card2;
