import useFetch from "../../hooks/useFetch";
import { getAllCategories } from "../../api/categories";
import Categories from "../../components/Categories/Categories";
import Breadcrumbs from "../../layouts/BreadCrumbs/BreadCrumbs";
import SimpleTitle from "../../layouts/SimpleTitle/SimpleTitle";

const CategoriesPage = () => {
    return (
        <main>
            <Breadcrumbs custom={[{ name: "Categories", to: "/categories" }]} />
            <SimpleTitle to="/categories" title="Categories" />
            <Categories fetchData={() => getAllCategories()} />
        </main>
    )
}

export default CategoriesPage;