import styles from './TextField.module.css'

const TextField = ({ register, name, type, id, placeholder }) => {
    return (
        <input
            {...register(name, { required: `Please, enter your ${placeholder.toLowerCase()}.` })}
            className={type === 'discount' ? styles.discountFormInput : styles.orderFormInput}
            type={type}
            id={id}
            placeholder={placeholder}
        />
    );
};

export default TextField;
