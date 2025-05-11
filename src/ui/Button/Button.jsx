import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Button.module.css';

const Button = ({
    status,
    position,
    text,
    left,
    right,
    bottom,
    width = "inherit",
    minWidth,
    target,
    action,
    type
}) => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setVisible(status);
    }, [status]);

    const handleClick = (e) => {
        if (type !== "submit") {
            e.preventDefault();
        }
        if (target) {
            navigate(target);
        } else if (typeof action === 'function') {
            action();
        }
    }

    if (!visible) return null;

    return (
        <button
            className={styles.cartBtn}
            onClick={handleClick}
            type={type}
            style={{
                position,
                left,
                right,
                bottom,
                width,
                minWidth
            }}
        >
            {text}
        </button>
    );
};

export default Button;