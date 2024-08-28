import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import styles from './checkout.module.scss';
import CheckoutInput from './CheckoutFormInput';

interface Props {
    setModal: (modal: boolean) => void;
}

const CheckoutForm = ({ setModal }: Props) => {
    const { handleSubmit, register } = useFormContext();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        setModal(true);
    };

    return (
        <div>
            <h2 className={styles.title}>Billing Address</h2>
            <form id="order-form" onSubmit={handleSubmit(onSubmit)}>
                <CheckoutInput label="First name" value="firstName" />
                <CheckoutInput label="Last name" value="lastName" />
                <CheckoutInput
                    label="Country / Region"
                    value="country"
                    placeholder="Select a country / region"
                />
                <CheckoutInput label="Town / City" value="town" />
                <CheckoutInput
                    label="Street Address"
                    value="streetAddress"
                    placeholder="House number and street name"
                />
                <CheckoutInput label="Zip" value="zip" />
                <CheckoutInput label="Email" value="email" />
                <label>
                    <p style={{ width: '400px' }}>Order notes (optional)</p>
                    <textarea className={styles.notes} {...register('notes')} />
                </label>
            </form>
        </div>
    );
};

export default CheckoutForm;
