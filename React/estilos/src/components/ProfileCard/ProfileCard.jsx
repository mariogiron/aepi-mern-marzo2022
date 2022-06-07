import classes from './ProfileCard.module.css';

const ProfileCard = ({ contacto }) => {

    return <div className={classes.contacto}>
        <h3>{contacto.nombre}</h3>
        <p>Email: {contacto.email}</p>
        <p>Departamento: {contacto.departamento}</p>
        <p>Cargo: {contacto.cargo}</p>
    </div>
}

export default ProfileCard;