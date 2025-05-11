import { useState, useRef, useEffect } from 'react';
import styles from './DescriptionBox.module.css';

const DescriptionBox = ({ description }) => {
    const [expanded, setExpanded] = useState(false);
    const [isClamped, setIsClamped] = useState(false);
    const descRef = useRef(null);

    useEffect(() => {
        const el = descRef.current;
        if (el) {
            setIsClamped(el.scrollHeight > el.clientHeight);
        }
    }, [description]);

    const toggleExpanded = () => {
        setExpanded(prev => !prev);
    };

    return (
        <div className={styles.descriptionBox}>
            <h4>Description</h4>
            <p
                ref={descRef}
                className={`${styles.description} ${!expanded ? styles.clamped : ''}`}
            >
                {description}
            </p>
            {isClamped && (
                <p className={styles.readMore} onClick={toggleExpanded}>
                    {expanded ? 'Hide' : 'Read more'}
                </p>
            )}
        </div>
    );
};

export default DescriptionBox;
