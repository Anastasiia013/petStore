import { getAllCategories } from "../../api/categories";
import Categories from "../../components/Categories/Categories";
import Breadcrumbs from "../../layouts/BreadCrumbs/BreadCrumbs";
import { SimpleTitle } from "../../layouts/PageTitle/PageTitle";

const CategoriesPage = () => {
    return (
        <main>
            <Breadcrumbs custom={[{ name: "Categories", to: "/categories" }]} />
            <SimpleTitle title="Categories" />
            <Categories fetchData={() => getAllCategories()} />
        </main>
    )
}

export default CategoriesPage;