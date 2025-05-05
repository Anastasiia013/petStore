import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "../../../ui/Button/Button";
import SaleItemLabel from "./SaleItemLabel/SaleItemLabel";
import PriceInfo from "./PriceInfo/PriceInfo";
import { addToCart } from "../../../redux/cart/cartSlice";

import backendInstance from "../../../api/backendInstance";

import styles from './ProductItem.module.css';

const ProductItem = ({ pathBuilder, from, ...product }) => {
    const { id, title, price, discont_price, image } = product;
    const [hovered, setHovered] = useState(false);

    const dispatch = useDispatch();

    const onAdd = useCallback(
        product => dispatch(addToCart(product)),
        [dispatch]
    );

    const baseURL = backendInstance.defaults.baseURL;
    return (
        <div
            key={id}
            className={styles.productItem}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link to={pathBuilder(id)} state={from ? { from } : undefined}>
                <div className={styles.productImgBox}>
                    {discont_price && (
                        <SaleItemLabel
                            position="absolute"
                            top="16px"
                            right="16px"
                            price={price}
                            discont_price={discont_price}
                        />
                    )}
                    <img
                        className={styles.productImg}
                        src={`${baseURL}/${image}`}
                        alt={title}
                    />
                    <Button
                        action={() => {
                            onAdd(product);
                        }}
                        status={hovered}
                        text="Add to cart"
                        position="absolute"
                        left="16px"
                        right="16px"
                        bottom="16px"
                    />
                </div>

                <div className={styles.descriptionBox}>
                    <p className={styles.description}>{title}</p>
                    <PriceInfo price={price} discont_price={discont_price} />
                </div>
            </Link>
        </div>
    );
};

export default ProductItem;