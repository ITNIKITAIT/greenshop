import { useState } from 'react';
import { OrderDTO } from '../../api/orderApi';
import OrderModal from '../Modal/OrderModal';
import styles from './profile.module.scss';

const OrderItem = (order: OrderDTO) => {
    const [open, setOpen] = useState<boolean>(false);

    const getColor = (status: string) => {
        switch (status) {
            case 'SUCCEEDED': {
                return 'green';
            }
            case 'CANCELLED': {
                return 'red';
            }
            case 'PENDING': {
                return 'rgb(217, 190, 39)';
            }
            default: {
                return 'black';
            }
        }
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <>
            <h2 className={styles.orderSection__id}>#{order.id}</h2>
            <p className={styles.orderSection__price}>
                {order.totalAmount.toFixed(2)}$
            </p>
            <span
                className={styles.orderSection__status}
                style={{ color: getColor(order.status) }}>
                {order.status}
            </span>
            <div className={styles.orderSection__details}>
                <button onClick={() => setOpen(true)} className="green-btn">
                    See details
                </button>
            </div>
            {open && <OrderModal close={closeModal} order={order} />}
        </>
    );
};

export default OrderItem;
