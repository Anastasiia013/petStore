import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/modal/modalSlice';

import {
    selectCart,
    selectTotalCartPrice,
    selectTotalCartItems
} from "../../redux/cart/cart_selectors";

import { clearCart } from '../../redux/cart/cartSlice';

import CartItem from "./CartItem/CartItem";
import Button from "../../ui/Button/Button";
import OrderForm from "../OrderForm/OrderForm";
import Section from "../../ui/Section/Section";

import styles from './Cart.module.css';

const Cart = () => {
    const items = useSelector(selectCart);
    const totalPrice = useSelector(selectTotalCartPrice);
    const totalItems = useSelector(selectTotalCartItems);

    const dispatch = useDispatch();

    // const onClearCart = useCallback(() => {
    //     dispatch(clearCart());
    // }, [dispatch]);

    const elements = items.map((item) => (
        <CartItem key={item.id} {...item} />
    ));

    return (
        <Section>
            <div>
                {items.length === 0 ? (
                    <div className={styles.noItemsBox}>
                        <p>Looks like you have no items in your basket currently.</p>
                        <Button text="Continue shopping" target="/products" status={true} width="30%" />
                    </div>
                ) : (
                    <div className={styles.cartBox}>
                        <ul className={styles.ordersList}>{elements}</ul>
                        <div className={styles.orderInfo}>
                            <h3 className={styles.h3}>Order details</h3>
                            <p className={styles.totalItems}>{totalItems} items</p>
                            <div className={styles.totalPrice}>
                                <p className={styles.totalItems}>Total</p>
                                <p className={styles.totalBold}>${totalPrice.toFixed(2)}</p>
                            </div>
                            <OrderForm onSuccess={() => dispatch(toggleModal(true))} />
                        </div>
                    </div>
                )}
            </div>


        </Section>
    );
};

export default Cart;