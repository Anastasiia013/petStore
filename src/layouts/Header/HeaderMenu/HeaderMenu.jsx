import { NavLink } from "react-router-dom";
import styles from './HeaderMenu.module.css'

const HeaderMenu = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${styles.active} ${styles.navLink}` : `${styles.navLink}`}
                        to='/'>Main Page</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${styles.active} ${styles.navLink}` : `${styles.navLink}`}
                        to='/categories'>Categories</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${styles.active} ${styles.navLink}` : `${styles.navLink}`}
                        to='/products'>All products</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${styles.active} ${styles.navLink}` : `${styles.navLink}`}
                        to='/sales'>All sales</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderMenu;