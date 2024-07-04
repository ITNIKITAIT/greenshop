import TotalPrice from '../TotalPrice.tsx/TotalPrice';
import styles from './checkout.module.scss';
import CheckoutList from './CheckoutList';

const CheckoutInfo = () => {
    return (
        <div className={styles.info}>
            <h2 className={styles.title}>Your Order</h2>
            <CheckoutList />
            <div className={styles.price__wrapper}>
                <TotalPrice />
                <button
                    type="submit"
                    form="main-form"
                    className={'green-btn ' + styles.orderBtn}>
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default CheckoutInfo;
