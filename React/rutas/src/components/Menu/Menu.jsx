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
            <li>
                <NavLink
                    style={({ isActive }) => {
                        return {
                            backgroundColor: isActive ? 'yellowgreen' : ''
                        }
                    }}
                    to="/">
                    Página de inicio
                </NavLink>
            </li>
            <li>
                <Link to="/informacion">Información</Link>
            </li>
            <li>
                <Link to="sobre-mi">Sobre mi</Link>
            </li>
        </ul>
    </nav>
}

export default Menu;