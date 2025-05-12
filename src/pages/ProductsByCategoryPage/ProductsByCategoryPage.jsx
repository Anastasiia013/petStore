import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getSingleCategory } from "../../api/categories";
import ProductList from "../../components/ProductList/ProductList";
import Breadcrumbs from "../../layouts/BreadCrumbs/BreadCrumbs";
import {SimpleTitle} from "../../layouts/PageTitle/PageTitle";
import Section from "../../ui/Section/Section";
import CustomSpinner from "../../ui/CustomSpinner/CustomSpinner";

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
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [categoryId]);

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
            </Section>
        );
    }

    return (
        <main>
            <Breadcrumbs
                custom={[
                    { name: "Categories", to: "/categories" },
                    { name: categoryTitle, to: `/categories/${categoryId}` }
                ]}
            />
            <SimpleTitle title={categoryTitle} />
            <ProductList data={products} loading={loading} error={error} pathBuilder={(id) => `/categories/${categoryId}/products/${id}`} />
        </main>
    );
};

export default ProductsByCategoryPage;
