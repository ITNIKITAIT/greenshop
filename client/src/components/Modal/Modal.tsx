import { priceWithDelivery } from '../../modules/shoppingCart.slice';
import { useAppSelector } from '../../store/store';
import CheckoutList from '../Checkout/CheckoutList';
import TotalPrice from '../TotalPrice.tsx/TotalPrice';
import styles from './modal.module.scss';
import { RxCross2 } from 'react-icons/rx';

interface Props {
    setModal: (modal: boolean) => void;
}

const Modal = ({ setModal }: Props) => {
    const total: number = useAppSelector(priceWithDelivery);

    const closeModal = () => {
        setModal(false);
    };

    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modal}>
                <div className={styles.modal__gratitude}>
                    <img src="/svg/thank-you.svg" alt="svg" />
                    <p>Your order has been received</p>
                </div>
                <ul className={styles.modal__list}>
                    <li>
                        <p>Order Number</p>
                        19586687
                    </li>
                    <li>
                        <p>Date</p>
                        15 Sep, 2021
                    </li>
                    <li>
                        <p>Total</p>
                        {total}.00
                    </li>
                </ul>
                <div className={styles.modal__info}>
                    <h2 className={styles.modal__title}>Order Details</h2>
                    <CheckoutList qty={'Qty'} />
                    <div className={styles.modal__total}>
                        <TotalPrice />
                    </div>
                </div>
                <p className={styles.modal__warn}>
                    Your order is currently being processed. You will receive an
                    order confirmation email shortly with the expected delivery
                    date for your items.
                </p>
                <button
                    className={`green-btn ${styles.doneBtn}`}
                    onClick={closeModal}>
                    Done
                </button>

                <RxCross2 className={styles.closeSvg} onClick={closeModal} />
            </div>
        </div>
    );
};

export default Modal;
