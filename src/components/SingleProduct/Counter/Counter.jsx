import styles from './Counter.module.css';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { decreaseCountinCart, increaseCountInCart, addToCart } from '../../../redux/cart/cartSlice';
import { selectCart } from '../../../redux/cart/cart_selectors';

const Counter = ({ id, product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCart);
    const cartItem = cartItems.find(item => item.id === id);
    const quantity = cartItem?.count || 0;

    const onIncreaseCart = useCallback((id) => {
        if (!cartItems.find(item => item.id === id)) {
            dispatch(addToCart(product))
        }
        dispatch(increaseCountInCart(id));
    }, [dispatch]);

    const onDecreaseCart = useCallback((id) => {
        dispatch(decreaseCountinCart(id));
    }, [dispatch, cartItems, product]);

    return (
        <div className={styles.counter}>
            <button
                className={styles.quantityBtn}
                onClick={() => onDecreaseCart(id)}
                type='button'
            >
                <img src="/images/minus.svg" alt="decrease" />
            </button>

            <span className={styles.quantity}>{quantity || 0}</span>

            <button
                className={styles.quantityBtn}
                onClick={() => onIncreaseCart(id)}
                type="button"
            >
                <img src="/images/plus.svg" alt="increase" />
            </button>
        </div>
    );
};

export default Counter;