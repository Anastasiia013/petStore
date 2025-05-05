import { useForm } from 'react-hook-form';
import { useId, useState } from "react";

import Section from "../../ui/Section/Section";
import FormImage from '/images/form.png'
import ButtonDiscount from '../../ui/ButtonDiscount/ButtonDiscount'

import { getSale } from "../../api/saleRequest";
import { defaultValues } from './discountFields';

import styles from './DiscountForm.module.css'

const DiscountForm = () => {
    const nameId = useId();
    const phoneId = useId();
    const emailId = useId();

    const [sale, setSale] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues,
    });

    const onGetSale = async newSale => {
        try {
            setLoading(true);
            const data = await getSale(newSale);

            if (!data) throw new Error("No data returned from server");

            setSale(data);
            setIsSuccess(true);
        } catch (error) {
            console.error("Form error:", error);
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    const onSubmit = async values => {
        await onGetSale(values);
        reset();
    }

    return (
        <Section>
            <div className={styles.discountFormBox}>
                <h2 className={styles.h2}>5% off on the first order</h2>
                <div className={styles.discountFormBlock}>
                    <div className={styles.imageBox}>
                        <img className={styles.discountImage} src={FormImage} alt="" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.discountForm}>
                        <input {...register("name", { required: "Please, enter your name." })} className={styles.discountFormInput} type="text" id={nameId} placeholder="Name" />
                        {errors.name && <p className={styles.error}>{errors.name.message}</p>}

                        <input {...register("phone", { required: "Please, enter your phone number." })} className={styles.discountFormInput} type="tel" id={phoneId} placeholder="Phone number" />
                        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}

                        <input {...register("email", { required: "Please, enter your Email adress." })} className={styles.discountFormInput} type="email" id={emailId} placeholder="Email" />
                        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

                        {loading && <p>Loading...</p>}
                        {error && <p className={styles.error}>Something went wrong: {error}</p>}

                        <ButtonDiscount isSuccess={isSuccess} />
                    </form>
                </div>
            </div>
        </Section >
    )
}

export default DiscountForm;