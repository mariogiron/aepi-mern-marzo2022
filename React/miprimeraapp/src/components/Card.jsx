const Card = ({ nombre, apellidos, email, telefono }) => {
    return <div className="card">
        <h3>{nombre} {apellidos}</h3>
        <p>Email: {email}</p>
        <p>Teléfono: {telefono}</p>
    </div>;
}

export default Card;