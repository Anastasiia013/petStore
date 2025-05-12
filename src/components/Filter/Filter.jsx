import CustomCheckbox from '../../ui/CustomCheckbox/CustomCheckbox';
import CustomSelect from '../../ui/CustomSelect/CustomSelect';
import { filterOptions } from './filterOptions';

import styles from './Filter.module.css';

const Filter = ({ filters, updateFilters, showDiscount = true }) => {
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        updateFilters(name, type === "checkbox" ? checked : value);
    };

    return (
        <div className={styles.filtersBox}>
            <div className={styles.filter}>
                <p className={styles.filterTitle}>Price</p>
                <input type="text" name="min" value={filters.min} onChange={handleChange} placeholder="from" />
                <input type="text" name="max" value={filters.max} onChange={handleChange} placeholder="to" />
            </div>

            {showDiscount && (
                <div className={styles.filter}>
                    <p className={styles.filterTitle}>Discounted items</p>
                    <CustomCheckbox
                        checked={filters.discountOnly}
                        onChange={(e) => updateFilters('discountOnly', e.target.checked)}
                    />
                </div>
            )}

            <div className={styles.filter}>
                <p className={styles.filterTitle}>Sorted</p>
                <CustomSelect
                    name="sortBy"
                    value={filters.sortBy}
                    onChange={handleChange}
                    options={filterOptions}
                />
            </div>
        </div>
    );
};

export default Filter; 