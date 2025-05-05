import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getSingleCategory } from "../../api/categories";

import ProductList from "../../components/ProductList/ProductList";
import Breadcrumbs from "../../layouts/BreadCrumbs/BreadCrumbs";
import SimpleTitle from "../../layouts/SimpleTitle/SimpleTitle";

const ProductsByCategoryPage = () => {
    const { categoryId } = useParams();

    const [products, setProducts] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getSingleCategory(Number(categoryId));
                const items = Array.isArray(data.data) ? data.data : data.data.products;
                setProducts(items);
                setCategoryTitle(data.category.title);
            } catch (err) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [categoryId]);

    return (
        <main>
            <Breadcrumbs
                custom={[
                    { name: "Categories", to: "/categories" },
                    { name: categoryTitle, to: `/categories/${categoryId}` }
                ]}
            />
            <SimpleTitle to={`/categories/${categoryId}`} title={categoryTitle} />
            <ProductList data={products} loading={loading} error={error} pathBuilder={(id) => `/categories/${categoryId}/products/${id}`} />
        </main>
    );
};

export default ProductsByCategoryPage;
