import moment from 'moment';
import { OrderDTO } from '../../api/orderApi';
import { BASE_URL } from '../../utils/consts';
import styles from './modal.module.scss';
import { RxCross2 } from 'react-icons/rx';

interface Props {
    order: OrderDTO;
}

const OrderModal = ({ order }: Props) => {
    const closeModal = () => {
        window.location.href = BASE_URL;
    };

    const currDate = moment(order.createdAt).format('D MMM, YYYY');

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
                        {order.id}
                    </li>
                    <li>
                        <p>Date</p>
                        {currDate}
                    </li>
                    <li>
                        <p>Total</p>${order.totalAmount.toFixed(2)}
                    </li>
                </ul>
                {/* <div className={styles.modal__info}>
                    <h2 className={styles.modal__title}>Order Details</h2>
                    <CheckoutList qty={'Qty'} />
                    <div className={styles.modal__total}>
                        <TotalPrice />
                    </div>
                </div> */}
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

export default OrderModal;
