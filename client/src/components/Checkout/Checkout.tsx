import { useEffect } from 'react';
import CheckoutForm from './CheckoutForm';
import CheckoutInfo from './CheckoutInfo';
import styles from './checkout.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutFormSchema, TSchema } from './checkout-form-schema';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/store';
import { amountProducts } from '../../modules/shoppingCart.slice';

export type TInputs = {
    firstName: string;
    lastName: string;
    country: string;
    town: string;
    streetAddress: string;
    zip: string;
    email: string;
    notes: string;
};

const Checkout = () => {
    const navigate = useNavigate();

    const amount = useAppSelector(amountProducts);

    useEffect(() => {
        if (amount === 0) {
            navigate('/');
        }
    }, [amount]);

    const form = useForm<TSchema>({
        resolver: zodResolver(checkoutFormSchema),
    });

    return (
        <FormProvider {...form}>
            <div className="container">
                <section className={styles.checkout}>
                    <CheckoutForm />
                    <CheckoutInfo />
                </section>
            </div>
        </FormProvider>
    );
};

export default Checkout;
