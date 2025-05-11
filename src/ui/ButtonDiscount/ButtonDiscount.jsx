import styles from './ButtonDiscount.module.css';

const ButtonDiscount = ({ isSuccess }) => {
    return (
        <button
            // className={isSuccess ? `${styles.discountBtn} ${styles.active}` : `${styles.discountBtn}`}
            className={styles.discountBtn}
            type="submit">
            Get a discount
        </button>
    )
}

export default ButtonDiscount;