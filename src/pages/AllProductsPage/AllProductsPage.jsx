import useFetch from '../../hooks/useFetch';
import { getAllProducts } from '../../api/products';

import Breadcrumbs from '../../layouts/BreadCrumbs/BreadCrumbs';
import ProductList from '../../components/ProductList/ProductList';
import SimpleTitle from '../../layouts/SimpleTitle/SimpleTitle';

const AllProductsPage = () => {
    const { data, loading, error } = useFetch({
        requestFunction: getAllProducts,
        initialData: [],
    });
    
    return (
        <main>
            <Breadcrumbs custom={[{ name: "All Products", to: "/products" }]} />
            <SimpleTitle to="/products" title="All Products" />
            <ProductList
                pathBuilder={(id) => `/products/${id}`}
                error={error}
                loading={loading}
                data={data}
            />
        </main>
    );
};

export default AllProductsPage;
