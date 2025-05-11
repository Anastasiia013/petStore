import { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import styles from './HeaderMenu.module.css';

const HeaderMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={styles.nav} ref={navRef}>
            <button className={styles.burger} onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
                <li onClick={toggleMenu}>
                    <NavLink className={({ isActive }) => isActive ? `${styles.active} ${styles.navLink}` : styles.navLink}
                        to='/'>Main Page</NavLink>
                </li>
                <li onClick={toggleMenu}>
                    <NavLink className={({ isActive }) => isActive ? `${styles.active} ${styles.navLink}` : styles.navLink}
                        to='/categories'>Categories</NavLink>
                </li>
                <li onClick={toggleMenu}>
                    <NavLink className={({ isActive }) => isActive ? `${styles.active} ${styles.navLink}` : styles.navLink}
                        to='/products'>All products</NavLink>
                </li>
                <li onClick={toggleMenu}>
                    <NavLink className={({ isActive }) => isActive ? `${styles.active} ${styles.navLink}` : styles.navLink}
                        to='/sales'>All sales</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderMenu;