import { useState, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'

import CustomSpinner from '../../ui/CustomSpinner/CustomSpinner';

import OrderButtonWrapper from '../../ui/OrderButtonWrapper/OrderButtonWrapper';
import TextField from '../../layouts/TextField/TextField';
import { defaultValues } from './orderFields';
import { setOrder } from '../../api/order';
import { clearCart } from '../../redux/cart/cartSlice';
import { selectCart, selectTotalCartItems, selectTotalCartPrice } from '../../redux/cart/cart_selectors';

import styles from './OrderForm.module.css'

const OrderForm = ({ onSuccess }) => {
    const items = useSelector(selectCart);
    const totalItems = useSelector(selectTotalCartItems);
    const totalPrice = useSelector(selectTotalCartPrice);

    const dispatch = useDispatch();

    const nameId = useId();
    const phoneId = useId();
    const emailId = useId();

    const [order, setNewOrder] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues,
    });

    const onSetOrder = async (newOrder) => {
        try {
            setLoading(true);
            setError(null);
            const fullOrder = { ...newOrder, items, totalItems, totalPrice };
            const data = await setOrder(fullOrder);

            if (!data) throw new Error("No data returned from server");

            setNewOrder(data);
            dispatch(clearCart());
            return true;
        } catch (error) {
            setError(error.message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = async (values) => {
        const result = await onSetOrder(values);
        if (result) {
            onSuccess();
            reset();
        }
    };

    return (
        <>
            {loading || error ? (
                <>
                    {loading && <CustomSpinner />}
                    {error && <p className={styles.error}>Something went wrong: {error}</p>}
                </>
            ) : (
                <>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.orderForm}>
                        <TextField
                            register={register}
                            errors={errors}
                            name="name"
                            type="text"
                            id={nameId}
                            placeholder="Name"
                        />
                        {errors.name && <p className={styles.orderFormError}>{errors.name.message}</p>}

                        <TextField
                            register={register}
                            errors={errors}
                            name="phone"
                            type="tel"
                            id={phoneId}
                            placeholder="Phone number"
                        />
                        {errors.phone && <p className={styles.orderFormError}>{errors.phone.message}</p>}

                        <TextField
                            register={register}
                            errors={errors}
                            name="email"
                            type="email"
                            id={emailId}
                            placeholder="Email"
                        />
                        {errors.email && <p className={styles.orderFormError}>{errors.email.message}</p>}

                        <OrderButtonWrapper />
                    </form>
                </>
            )}
        </>
    )

}

export default OrderForm;