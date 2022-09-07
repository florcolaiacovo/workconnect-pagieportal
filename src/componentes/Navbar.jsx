import React from 'react';
import { NavLink} from 'react-router-dom';
// esto es css convencional
import './css/Navbar.css'
// esto es css modules
import styles from './css/Navbar.module.scss'


const Navbar = () => {
    return (
        <div>
        <h2 className={styles.titulo}>Navbar - BrowserRouter</h2>
        <NavLink to="/ej1" className={`${styles.titulo} ${styles.violeta}`} > Ejemplo 1 Props</NavLink>
        <NavLink to="/ej2" className={({ activeClass }) => ( activeClass ? 'activeClass' : 'inactiveClass')}>Ejemplo 2 Props</NavLink>
        <NavLink to="/ej3" className="activeClass">Ejemplo 3 Props</NavLink>
        <NavLink to="/comp">Esto es un componente</NavLink>
        <NavLink to="/figma">Figma</NavLink>
    <NavLink to="/">Figma - Pagie Portal</NavLink>
            
        </div>
    );
}

export default Navbar;
