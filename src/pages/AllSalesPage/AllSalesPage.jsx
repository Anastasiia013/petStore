import useFetch from '../../hooks/useFetch';
import { getAllProducts } from '../../api/products';
import Breadcrumbs from '../../layouts/BreadCrumbs/BreadCrumbs';
import {SimpleTitle} from '../../layouts/PageTitle/PageTitle';
import ProductList from '../../components/ProductList/ProductList';

const AllSalesPage = () => {
    const { data, loading, error } = useFetch({
        requestFunction: getAllProducts,
        initialData: [],
    });

    const discountedProducts = data.filter(product => product.discont_price);

    return (
        <main>
            <Breadcrumbs custom={[{ name: "All sales", to: "/sales" }]} />
            <SimpleTitle title="Discounted products" />
            <ProductList data={discountedProducts} from="sales" loading={loading} error={error} pathBuilder={(id) => `/sales/${id}`} showDiscount={false} />
        </main>
    );
};

export default AllSalesPage;