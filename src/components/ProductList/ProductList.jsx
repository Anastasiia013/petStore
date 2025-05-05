import { useState } from 'react';

import Filter from '../Filter/Filter';
import ProductItem from './ProductItem/ProductItem';
import Section from '../../ui/Section/Section';

import styles from './ProductList.module.css';

const ProductList = ({ pathBuilder, data, error, loading, showDiscount, from }) => {
    const [filters, setFilters] = useState({
        min: '',
        max: '',
        discountOnly: false,
        sortBy: 'default',
    });

    const products = data;

    const filtered = products
        .filter(prod => {
            const price = prod.discont_price ?? prod.price;
            const min = Number(filters.min) || 0;
            const max = Number(filters.max) || Infinity;
            return price >= min && price <= max;
        })
        .filter(prod => filters.discountOnly ? !!prod.discont_price : true)
        .sort((a, b) => {
            if (filters.sortBy === 'newest') {
                return (b.updatedAt) - (a.updatedAt);
            }
            if (filters.sortBy === 'high-low') {
                return (b.discont_price ?? b.price) - (a.discont_price ?? a.price);
            }
            if (filters.sortBy === 'low-high') {
                return (a.discont_price ?? a.price) - (b.discont_price ?? b.price);
            }
            return 0;
        });

    return (
        <Section>
            <Filter
                filters={filters}
                setFilters={setFilters}
                showDiscount={showDiscount}
            />

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && filtered.length === 0 && <p>No products</p>}

            <ul className={styles.productsList}>
                {filtered.map(item => (
                    <li key={item.id}>
                        <ProductItem
                            key={item.id}
                            {...item}
                            pathBuilder={pathBuilder}
                            from={from}
                        />
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default ProductList;