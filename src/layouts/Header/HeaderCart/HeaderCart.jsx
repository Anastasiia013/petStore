import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

import CartLogo from '/headerImg/cart.svg';
import { selectUniqueCartItemsCount } from '../../../redux/cart/cart_selectors'

import styles from './HeaderCart.module.css';

const HeaderCart = () => {
    const totalUniqueItems = useSelector(selectUniqueCartItemsCount);

    return (
        <div className={styles.wrapper}>
            <NavLink to='/cart'>
                <img className={styles.cart} src={CartLogo} alt="Cart Logo" />
                {totalUniqueItems > 0 && (
                    <span className={styles.badge}>{totalUniqueItems}</span>
                )}
            </NavLink>
        </div>
    );
};

export default HeaderCart;
