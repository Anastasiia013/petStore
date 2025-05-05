import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../../redux/cart/cartSlice";
import Counter from "../../SingleProduct/Counter/Counter";
import ClearBtn from '/images/clearBtn.png'

import backendInstance from "../../../api/backendInstance";

import styles from './CartItem.module.css'

const CartItem = ({ ...item }) => {
    const { id, image, title, price, discont_price, count } = item;

    const dispatch = useDispatch();

    const onDeleteFromCart = useCallback((id) => {
        dispatch(deleteFromCart(id));
    }, [dispatch]);

    const baseURL = backendInstance.defaults.baseURL;
    return (
        <li className={styles.cartItem} key={id}>
            <Link to={`/products/${id}`}>
                <img className={styles.cartItemImage} src={`${baseURL}/${image}`} alt={title} />
            </Link>

            <div className={styles.cartDescription}>
                <Link to={`/products/${id}`}>
                    <h4 className={styles.h4}>{title}</h4>
                </Link>

                <div className={styles.itemBox}>
                    <Counter
                        quantity={count}
                        id={id}
                    />

                    <div className={styles.cartItemPrice}>
                        {discont_price ?
                            <>
                                <p className={styles.discont_price}>${discont_price}</p>
                                <p className={styles.price} style={{ textDecoration: "line-through" }}>${price}</p>
                            </>
                            :
                            <p className={styles.discont_price}>${price}</p>
                        }
                    </div>
                </div>
            </div>

            <button className={styles.cartItemBtn} onClick={() => onDeleteFromCart(id)}>
                <img src={ClearBtn} alt="Remove Item" /></button>
        </li>

    )
};

export default CartItem;
