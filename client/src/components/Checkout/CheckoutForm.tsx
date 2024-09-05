import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import styles from './checkout.module.scss';
import CheckoutInput from './CheckoutFormInput';
import { orderApi } from '../../api/orderApi';
import { useAppSelector } from '../../store/store';
import {
    amountProducts,
    priceWithDelivery,
} from '../../modules/shoppingCart.slice';
import { selectUserId } from '../../modules/auth.slice';

const CheckoutForm = () => {
    const { handleSubmit, register } = useFormContext();
    const totalPrice = useAppSelector(priceWithDelivery);
    const deliveryPrice = useAppSelector(amountProducts) * 3;
    const userId = useAppSelector(selectUserId);

    const [createOrder, result] = orderApi.useCreateOrderMutation();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        createOrder({ ...data, totalPrice, deliveryPrice, userId });
    };

    if (result.data) window.location.href = result.data;

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
