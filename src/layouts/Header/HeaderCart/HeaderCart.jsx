import { NavLink } from "react-router-dom";

import CartLogo from '/headerImg/cart.svg'
import styles from './HeaderCart.module.css'

const HeaderCart = () => {
    return (
        <NavLink to='/cart'>
            <img className={styles.cart} src={CartLogo} alt="Cart Logo" />
        </NavLink>
    )
}

export default HeaderCart;