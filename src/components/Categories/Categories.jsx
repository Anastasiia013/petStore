import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

import Section from "../../ui/Section/Section";
import styles from './Categories.module.css';

const Categories = ({ fetchData }) => {
    const { data, loading, error } = useFetch({
        requestFunction: fetchData,
        initialData: [],
    });

    const categories = data;

    return (
        <Section>
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка: {error}</p>}

            <ul className={styles.categoriesList}>
                {categories.map(({ id, title, image }) => (
                    <li key={id}>
                        <Link to={`/categories/${id}`} className={styles.categoryItem}>
                            <img className={styles.categoryImg} src={`http://localhost:3333${image}`} alt={title} />
                            <h4>{title}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default Categories;