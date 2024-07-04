import CheckoutForm from './CheckoutForm';
import CheckoutInfo from './CheckoutInfo';
import styles from './checkout.module.scss';

const Checkout = () => {
    return (
        <div className="container">
            <section className={styles.checkout}>
                <CheckoutForm />
                <CheckoutInfo />
            </section>
        </div>
    );
};

export default Checkout;
