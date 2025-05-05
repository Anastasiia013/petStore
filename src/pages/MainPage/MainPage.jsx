import Categories from '../../components/Categories/Categories';
import Sales from '../../components/Sales/Sales';
import Button from '../../ui/Button/Button';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import QuickLink from '../../layouts/QuickLink/QuickLink';

import { getLimitedCategories } from '../../api/categories';

import styles from './MainPage.module.css'

const MainPage = () => {
    const limit = 4;
    
    return (
        <main>
            <section className={styles.heroSection}>
                <h1 className='h1Main'>Amazing Discounts on Pets Products!</h1>
                <Button text="Check out" status="true" width="20%" target="/sales" />
            </section>
            <QuickLink to="/categories" text="All Categories" title="Categories" />
            <Categories fetchData={() => getLimitedCategories(limit)} />
            <DiscountForm />
            <QuickLink to="/sales" text="All Sales" title="Sale" />
            <Sales limit={limit} />
        </main>
    )
}

export default MainPage;