import { useState, useRef, useEffect } from 'react';
import styles from './CustomSelect.module.css';

const CustomSelect = ({ name, value, onChange, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    const toggleOpen = () => setIsOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={wrapperRef} className={`${styles.customSelectWrapper} ${isOpen ? styles.open : ''}`}>
            <select
                name={name}
                value={value}
                onChange={(e) => {
                    onChange(e);
                    toggleOpen();
                }}
                onClick={toggleOpen}
                className={styles.customSelect}
            >
                {options.map(opt => (
                    <option onClick={toggleOpen} key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <span className={styles.arrowIcon}></span>
        </div>
    );
};

export default CustomSelect;
