import { useDispatch, useSelector } from "react-redux";

import { selectCart } from "../../redux/cart/cart_selectors";

import PriceInfo from "../ProductList/ProductItem/PriceInfo/PriceInfo";
import SaleItemLabel from "../ProductList/ProductItem/SaleItemLabel/SaleItemLabel";
import Button from '../../ui/Button/Button';
import Counter from "./Counter/Counter";
import DescriptionBox from "./DescriptionBox/DescriptionBox";
import Section from "../../ui/Section/Section";

import { addToCart, increaseCountInCart } from "../../redux/cart/cartSlice";
import backendInstance from "../../api/backendInstance";

import styles from './SingleProduct.module.css';
import { useState } from "react";

const SingleProduct = ({ product }) => {
    if (!product) return null;

    const cartItems = useSelector(selectCart);
    const { id, title, image, price, discont_price, description } = product;

    const dispatch = useDispatch();

    const [count, setCount] = useState(1);

    const onPlus = () => setCount(prev => prev + 1);
    const onMinus = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        const itemInCart = cartItems.find(item => item.id === id);
        if (!itemInCart) {
            dispatch(addToCart({ ...product, count }));
        } else {
            dispatch(increaseCountInCart({ id, count }));
        }
    };

    const baseURL = backendInstance.defaults.baseURL;
    return (
        <Section>
            <div className={styles.productBox}>
                <div className={styles.mainImageBox}>
                    <img src={`${baseURL}/${image}`} alt="" />
                </div>
                <div className={styles.productInfo}>
                    <h3>{title}</h3>
                    <div className={styles.priceInfo}>
                        <PriceInfo price={price} discont_price={discont_price} />
                        {discont_price && (
                            <SaleItemLabel
                                price={price}
                                discont_price={discont_price}
                                position="static"
                                height="80%"
                            />
                        )}
                    </div>
                    <div className={styles.productOptions}>
                        <Counter plus={onPlus} minus={onMinus} count={count} />
                        <Button
                            status="true"
                            position="relative"
                            text="Add to cart"
                            width="55%"
                            action={handleAddToCart}
                        />
                    </div>
                    <DescriptionBox description={description} />
                </div>
            </div>
        </Section>
    );
};

export default SingleProduct;
