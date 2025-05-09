import { Link } from 'react-router-dom';
import styles from './BreadCrumbs.module.css';

const Breadcrumbs = ({ custom }) => {
    const crumbs = custom;

    return (
        <nav className={styles.breadcrumbs}>
            <Link to="/" className={styles.crumb}>Main Page</Link>
            {crumbs.map(({ name, to }, index) => (
                <div key={to || index} className={styles.crumbWrapper}>
                    <span className={styles.separator} />
                    {index === crumbs.length - 1 ? (
                        <span className={`${styles.crumb} ${styles.current}`}>{name}</span>
                    ) : name ? (
                        <Link to={to} className={styles.crumb}>{name}</Link>
                    ) : null}
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumbs;