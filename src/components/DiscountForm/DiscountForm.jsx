import { useForm } from 'react-hook-form';
import { useId, useState } from "react";

import Section from "../../ui/Section/Section";
import FormImage from '/images/form.png';
import TextField from '../../layouts/TextField/TextField';
import { getSale } from "../../api/saleRequest";
import { defaultValues } from './discountFields';
import CustomSpinner from '../../ui/CustomSpinner/CustomSpinner';

import styles from './DiscountForm.module.css'

const DiscountForm = () => {
    const nameId = useId();
    const phoneId = useId();
    const emailId = useId();

    const [sale, setSale] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues,
    });

    const onGetSale = async newSale => {
        try {
            setLoading(true);
            const data = await getSale(newSale);

            if (!data) throw new Error("No data returned from server");

            setSale(data);
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
        <>
            <Section>
                <div className={styles.discountFormBox}>
                    <h2 className={styles.h2}>5% off on the first order</h2>
                    <div className={styles.discountFormBlock}>
                        <div className={styles.imageBox}>
                            <img className={styles.discountImage} src={FormImage} alt="" />
                        </div>
                        {loading || error ? (
                            <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {loading && <CustomSpinner />}
                                {error && <p className={styles.error}>Something went wrong: {error}</p>}
                            </div>
                        ) : (
                            <>
                                <form onSubmit={handleSubmit(onSubmit)} className={styles.discountForm}>
                                    <TextField
                                        register={register}
                                        errors={errors}
                                        name="name"
                                        type="text"
                                        id={nameId}
                                        placeholder="Name"
                                    />
                                    {errors.name && <p className={styles.discontFormError}>{errors.name.message}</p>}

                                    <TextField
                                        register={register}
                                        errors={errors}
                                        name="phone"
                                        type="tel"
                                        id={phoneId}
                                        placeholder="Phone number"
                                    />
                                    {errors.phone && <p className={styles.discontFormError}>{errors.phone.message}</p>}

                                    <TextField
                                        register={register}
                                        errors={errors}
                                        name="email"
                                        type="email"
                                        id={emailId}
                                        placeholder="Email"
                                    />
                                    {errors.email && <p className={styles.discontFormError}>{errors.email.message}</p>}

                                    <button
                                        className={styles.discountBtn}
                                        type="submit">
                                        Get a discount
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </Section>
        </>
    )
}

export default DiscountForm;