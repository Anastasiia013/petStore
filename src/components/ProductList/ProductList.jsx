import { useProductsFilters } from '../../hooks/useProductsFilters';
import Filter from '../Filter/Filter';
import ProductItem from './ProductItem/ProductItem';
import Section from '../../ui/Section/Section';
import CustomSpinner from '../../ui/CustomSpinner/CustomSpinner';

import styles from './ProductList.module.css';

const ProductList = ({ pathBuilder, data, error, loading, showDiscount, from }) => {
    const { filters, updateFilters } = useProductsFilters();

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

    if (loading) {
        return (
            <div className="loading">
                <CustomSpinner />
            </div>
        );
    }
    if (error) {
        return (
            <Section>
                <p>Oops! Something went wrong... Try another one.</p>
                <Button target="/" status="true" position="relative" width="20%" text="Go Home" />
            </Section>
        );
    }

    if (!loading && !error && filtered.length === 0) {
        return (
            <Section>
                <Filter
                    filters={filters}
                    updateFilters={updateFilters}
                    showDiscount={showDiscount}
                />
                <p>Oops! We haven`t found anything for you...</p>
            </Section>
        )
    }

    return (
        <Section>
            {filtered.length > 0 && (
                <Filter
                    filters={filters}
                    updateFilters={updateFilters}
                    showDiscount={showDiscount}
                />
            )}

            <ul className={styles.productsList}>
                {filtered.map(item => (
                    <li key={item.id}>
                        <ProductItem
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