import { Link, NavLink } from "react-router-dom";
import classes from './Menu.module.css';

const Menu = () => {

    const menuElements = [
        { to: '/', title: 'Página de inicio' },
        { to: 'informacion', title: 'Información' },
        { to: 'sobre-mi', title: 'Sobre mí' }
    ];

    // Generar tantos NavLink como elementos tenemos en el array menuElements (map)

    return <nav>
        <ul className={classes.menu}>
            {menuElements.map(element => (
                <li>
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                backgroundColor: isActive ? 'yellowgreen' : ''
                            }
                        }}
                        to={element.to}>
                        {element.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
}

export default Menu;