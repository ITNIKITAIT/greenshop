import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './checkout.module.scss';

type Inputs = {
    firstName: string;
    lastName: string;
    country: string;
    town: string;
    streetAddress: string;
    zip: string;
    email: string;
    notes: string;
};

const CheckoutForm = () => {
    const { handleSubmit, register } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h2 className={styles.title}>Billing Address</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <p>
                        First Name
                        <span>*</span>
                    </p>
                    <input
                        type="text"
                        autoComplete="off"
                        {...register('firstName')}
                    />
                </label>
                <label>
                    <p>
                        Last Name
                        <span>*</span>
                    </p>
                    <input
                        type="text"
                        autoComplete="off"
                        {...register('lastName')}
                    />
                </label>
                <label>
                    <p>
                        Country / Region
                        <span>*</span>
                    </p>
                    <input
                        placeholder="Select a country / region"
                        type="text"
                        autoComplete="off"
                        {...register('country')}
                    />
                </label>
                <label>
                    <p>
                        Town / City
                        <span>*</span>
                    </p>
                    <input
                        type="text"
                        autoComplete="off"
                        {...register('town')}
                    />
                </label>
                <label>
                    <p>
                        Street Address
                        <span>*</span>
                    </p>
                    <input
                        placeholder="House number and street name"
                        type="text"
                        autoComplete="off"
                        {...register('streetAddress')}
                    />
                </label>
                <label>
                    <p>
                        Zip
                        <span>*</span>
                    </p>
                    <input
                        type="text"
                        autoComplete="off"
                        {...register('zip')}
                    />
                </label>
                <label>
                    <p>
                        Email
                        <span>*</span>
                    </p>
                    <input
                        type="email"
                        autoComplete="off"
                        {...register('email')}
                    />
                </label>
                <label>
                    <p style={{ width: '400px' }}>Order notes (optional)</p>
                    <textarea className={styles.notes} {...register('notes')} />
                </label>
                {/* <button type="submit">Submit</button> */}
            </form>
        </div>
    );
};

export default CheckoutForm;
