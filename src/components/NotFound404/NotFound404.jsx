import NotFoundImg from '/images/404.png'
import Button from '../../ui/Button/Button';
import Section from '../../ui/Section/Section'

import styles from './NotFound404.module.css';

const NotFound404 = () => {
    return (
        <Section>
            <div className={styles.notFoundBox}>
                <img className={styles.notFoundImg} src={NotFoundImg} alt="Page not Found" />
                <div className={styles.notFoundTextBox}>
                    <h2>Page Not Found</h2>
                    <p className={styles.notFoundText}>We’re sorry, the page you requested could not be found.
                        Please go back to the homepage.</p>
                </div>
                <Button target="/" status="true" position="relative" width="20%" text="Go Home" />
            </div>
        </Section>
    )
}

export default NotFound404;