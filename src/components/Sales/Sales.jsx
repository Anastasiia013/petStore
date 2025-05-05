import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from '../../api/products';
import useFetch from '../../hooks/useFetch';

import ProductItem from '../ProductList/ProductItem/ProductItem';
import Section from '../../ui/Section/Section';

import styles from './Sales.module.css';

const Sales = ({ limit }) => {
    const { data, loading, error } = useFetch({
        requestFunction: getAllProducts,
        initialData: [],
    });

    const discountedProducts = data
        .filter(product => product.discont_price)
        .slice(0, limit);

    return (
        <Section>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul className={styles.productList}>
                {discountedProducts.map(product => (
                    <li key={product.id}>
                        <ProductItem {...product} pathBuilder={(id) => `/sales/${id}`} />
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default Sales;
