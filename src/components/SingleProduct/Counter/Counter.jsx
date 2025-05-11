import Plus from '/images/plus.svg'
import Minus from '/images/minus.svg'

import styles from './Counter.module.css';

const Counter = ({ plus, minus, count }) => {
    return (
        <div className={styles.counter}>
            <button
                className={styles.quantityBtn}
                onClick={minus}
                type='button'
            >
                <img src={Minus} alt="decrease" />
            </button>

            <div className={styles.quantity}>{count || 1}</div>

            <button
                className={styles.quantityBtn}
                onClick={plus}
                type="button"
            >
                <img src={Plus} alt="increase" />
            </button>
        </div>
    );
};

export default Counter;
