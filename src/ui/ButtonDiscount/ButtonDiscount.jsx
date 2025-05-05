import styles from './ButtonDiscount.module.css';

const ButtonDiscount = ({ isSuccess }) => {
    return (
        <button disabled={isSuccess ? true : false}
            className={isSuccess ? `${styles.discountBtn} ${styles.active}` : `${styles.discountBtn}`}
            type="submit">
            {isSuccess ? "Request Submitted" : "Get a discount"}
        </button>
    )
}

export default ButtonDiscount;