
import styles from './SaleItemLabel.module.css'

const SaleItemLabel = ({ price, discont_price, position, right, top, height }) => {
    const saleInPercents = Math.round(((price - discont_price) / price) * 100);
    return (
        <div className={styles.saleBox} style={{position, right, top, height}}>
            <span className={styles.saleNumber}>-{saleInPercents}%</span>
        </div>
    )
}
export default SaleItemLabel;