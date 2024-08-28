import { useState } from 'react';
import CheckoutForm from './CheckoutForm';
import CheckoutInfo from './CheckoutInfo';
import styles from './checkout.module.scss';
import Modal from '../Modal/Modal';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutFormSchema, TSchema } from './checkout-form-schema';

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
    const [modal, setModal] = useState<boolean>(false);
    const form = useForm<TSchema>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {},
    });

    return (
        <FormProvider {...form}>
            <div className="container">
                <section className={styles.checkout}>
                    <CheckoutForm setModal={setModal} />
                    <CheckoutInfo />
                </section>
                {modal && <Modal setModal={setModal} />}
            </div>
        </FormProvider>
    );
};

export default Checkout;
