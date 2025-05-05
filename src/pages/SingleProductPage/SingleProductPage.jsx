import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import SingleProduct from "../../components/SingleProduct/SingleProduct";
import Breadcrumbs from "../../layouts/BreadCrumbs/BreadCrumbs";
import Section from "../../ui/Section/Section";

import { getSingleProduct } from "../../api/products";
import { getSingleCategory } from "../../api/categories";

const SingleProductPage = () => {
    const location = useLocation();
    const from = location.state?.from;

    const { productId, categoryId } = useParams();
    const [categoryTitle, setCategoryTitle] = useState('');

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getSingleProduct(Number(productId));
                const dataChecked = Array.isArray(data.data) ? data.data[0] : data.data;

                setProduct(dataChecked);

                if (categoryId) {
                    const category = await getSingleCategory(categoryId);
                    setCategoryTitle(category.category?.title);
                }
            } catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [categoryId, productId]);

    if (loading) return <Section><p>Loading...</p></Section>;
    if (error) return <Section><p>Error: {error}</p></Section>;
    if (!product) return <Section><p>No product are found.</p></Section>;

    const breadcrumbs = [];

    if (from === 'sales') {
        breadcrumbs.push({ name: "Sales", to: "/sales" });
    } else if (categoryId && categoryTitle) {
        breadcrumbs.push({ name: "Categories", to: "/categories" });
        breadcrumbs.push({ name: categoryTitle, to: `/categories/${categoryId}` });
    } else {
        breadcrumbs.push({ name: "All Products", to: "/products" });
    }

    breadcrumbs.push({ name: product.title });

    return (
        <main>
            <Breadcrumbs custom={breadcrumbs} />
            <SingleProduct product={product} />
        </main>
    );
};

export default SingleProductPage;
