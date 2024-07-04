import { useState } from 'react';
import CheckoutForm from './CheckoutForm';
import CheckoutInfo from './CheckoutInfo';
import styles from './checkout.module.scss';
import Modal from '../Modal/Modal';

const Checkout = () => {
    const [modal, setModal] = useState<boolean>(false);

    return (
        <div className="container">
            <section className={styles.checkout}>
                <CheckoutForm setModal={setModal} />
                <CheckoutInfo />
            </section>
            {modal && <Modal setModal={setModal} />}
        </div>
    );
};

export default Checkout;
