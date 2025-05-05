import Check from '/images/check.svg';
import styles from './CustomCheckbox.module.css';

const CustomCheckbox = ({ checked, onChange }) => {
    return (
        <label className={styles.checkboxWrapper}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className={styles.hiddenCheckbox}
            />
            <span className={`${styles.customCheckbox} ${checked ? styles.checked : ''}`}>
                <img src={Check} alt="Discounted Items Check" />
            </span>
        </label>
    );
};

export default CustomCheckbox;