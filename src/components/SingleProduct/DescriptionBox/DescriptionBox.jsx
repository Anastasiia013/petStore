import { useState } from 'react';
import styles from './DescriptionBox.module.css';

const DescriptionBox = ({ description }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(prev => !prev);
    };

    return (
        <div className={styles.descriptionBox}>
            <h4>Description</h4>
            <p className={`${styles.description} ${!expanded ? styles.clamped : ''}`}>
                {description}
            </p>
            <p className={styles.readMore} onClick={toggleExpanded}>
                {expanded ? 'Hide' : 'Read more'}
            </p>
        </div>
    );
};

export default DescriptionBox;