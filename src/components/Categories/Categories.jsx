import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import CustomSpinner from '../../ui/CustomSpinner/CustomSpinner';
import backendInstance from '../../api/backendInstance';
import Section from "../../ui/Section/Section";

import styles from './Categories.module.css';

const Categories = ({ fetchData }) => {
    const { data, loading, error } = useFetch({
        requestFunction: fetchData,
        initialData: [],
    });

    const categories = data;

    const baseURL = backendInstance.defaults.baseURL;
    return (
        <>
            {loading || error ?
                (<div className='loading'>
                    {loading && <CustomSpinner />}
                    {error && <p>Error: {error}</p>}
                </div>) : (
                    <Section>
                        <ul className={styles.categoriesList}>
                            {categories.map(({ id, title, image }) => (
                                <li key={id}>
                                    <Link to={`/categories/${id}`} className={styles.categoryItem}>
                                        <img className={styles.categoryImg} src={`${baseURL}/${image}`} alt={title} />
                                        <h4>{title}</h4>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Section>)}
        </>
    );
};

export default React.memo(Categories);