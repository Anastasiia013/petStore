import styles from './Counter.module.css';

const Counter = ({ plus, minus, count }) => {
    return (
        <div className={styles.counter}>
            <button
                className={styles.quantityBtn}
                onClick={minus}
                type='button'
            >
                <img src="/images/minus.svg" alt="decrease" />
            </button>

            <div className={styles.quantity}>{count || 1}</div>

            <button
                className={styles.quantityBtn}
                onClick={plus}
                type="button"
            >
                <img src="/images/plus.svg" alt="increase" />
            </button>
        </div>
    );
};

export default Counter;
